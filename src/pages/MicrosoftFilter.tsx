
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import CustomButton from "@/components/ui/CustomButton";
import CustomCard from "@/components/ui/CustomCard";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Upload, Download, AlertCircle, CheckCircle, FileText, Check, Bug } from "lucide-react";
import Papa from 'papaparse';

const MicrosoftFilterPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'upload' | 'column-select' | 'processing' | 'results'>('upload');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    total: number;
    problematic: number;
    safe: number;
    processedRows: any[];
  } | null>(null);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progressText, setProgressText] = useState('Processing 0 of 0 emails...');
  const [csvData, setCsvData] = useState<any[]>([]);
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const [previewRows, setPreviewRows] = useState<any[]>([]);
  const [selectedEmailColumn, setSelectedEmailColumn] = useState<string>('');
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [isTestingDns, setIsTestingDns] = useState(false);
  const [testDnsResult, setTestDnsResult] = useState<string | null>(null);

  useEffect(() => {
    // Check for saved email
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }

    // Request notification permission
    if ('Notification' in window) {
      if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
      }
    }
  }, []);

  // Helper function to validate email
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Helper function to find email column
  const findEmailColumn = (row: any) => {
    if (selectedEmailColumn) return selectedEmailColumn;
    
    const possibleHeaders = ['email', 'email address', 'e-mail', 'mail', 'emailaddress'];
    
    // If this is a header row, look for email column
    for (const key in row) {
      const value = String(row[key]).toLowerCase();
      if (possibleHeaders.includes(value)) {
        return key;
      }
    }
    
    // Otherwise, scan for values that look like emails
    for (const key in row) {
      const value = String(row[key]);
      if (value.includes('@') && value.includes('.')) {
        return key;
      }
    }
    
    // Default to first column if nothing found
    return Object.keys(row)[0];
  };

  // Update progress bar function
  const updateProgressBar = (current: number, total: number) => {
    const percentage = Math.round((current / total) * 100);
    setProgress(percentage);
    setProgressText(`Processing ${current} of ${total} emails...`);
  };

  // Perform DNS lookup with retry mechanism
  const performDnsLookup = async (domain: string, maxRetries = 3): Promise<any> => {
    let retries = 0;
    
    while (retries < maxRetries) {
      try {
        console.log(`Attempting DNS lookup for ${domain} (attempt ${retries + 1}/${maxRetries})`);
        
        // Construct properly encoded URL for DNS lookup
        const apiUrl = `https://corsproxy.io/?${encodeURIComponent(`https://dns.google/resolve?name=${domain}&type=MX`)}`;
        console.log(`API URL: ${apiUrl}`);
        
        const response = await fetch(apiUrl);
        
        // Check if response is ok
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`DNS lookup failed with status ${response.status}: ${errorText}`);
          throw new Error(`DNS lookup failed: ${response.status} ${response.statusText}`);
        }
        
        const dnsData = await response.json();
        console.log(`DNS lookup successful for ${domain}:`, dnsData);
        
        return { success: true, data: dnsData };
      } catch (error) {
        console.error(`Error during DNS lookup for ${domain} (attempt ${retries + 1}/${maxRetries}):`, error);
        retries++;
        
        // If we're not at max retries yet, wait before trying again
        if (retries < maxRetries) {
          console.log(`Waiting before retry ${retries + 1}...`);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between retries
        }
      }
    }
    
    // If we get here, all retries failed
    console.error(`All ${maxRetries} DNS lookup attempts failed for ${domain}`);
    return { success: false, error: "Failed after multiple attempts" };
  };

  // Test a single DNS lookup
  const testDnsLookup = async () => {
    setIsTestingDns(true);
    setTestDnsResult(null);
    
    try {
      const testDomain = "gmail.com";
      console.log(`Testing DNS lookup with domain: ${testDomain}`);
      
      const result = await performDnsLookup(testDomain);
      
      if (result.success) {
        console.log("Test DNS lookup successful. Full response:", result.data);
        
        // Check if we can identify MX records
        let mxRecords: string[] = [];
        
        if (result.data && result.data.Answer) {
          mxRecords = result.data.Answer.map((record: any) => record.data.toLowerCase());
        }
        
        console.log("Extracted MX records:", mxRecords);
        
        // Check for problematic providers in the test result
        const problematicProviders = [
          "outlook", "microsoft", "office365", "protection.outlook", "mail.protection.outlook"
        ];
        
        let isProblematic = false;
        let detectedProvider = "none";
        
        for (const record of mxRecords) {
          for (const provider of problematicProviders) {
            if (record.includes(provider)) {
              isProblematic = true;
              detectedProvider = provider;
              break;
            }
          }
          if (isProblematic) break;
        }
        
        const resultMessage = `
          Test lookup successful for gmail.com
          MX Records found: ${mxRecords.length}
          First record: ${mxRecords[0] || 'None'}
          Provider detection: ${detectedProvider}
          Problematic: ${isProblematic ? 'YES' : 'NO'}
        `;
        
        setTestDnsResult(resultMessage);
        toast({
          title: "DNS Test Successful",
          description: "Check the console and result panel for details.",
        });
      } else {
        setTestDnsResult(`Test failed: ${result.error}`);
        toast({
          title: "DNS Test Failed",
          description: "See console for error details.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during test DNS lookup:", error);
      setTestDnsResult(`Test error: ${error instanceof Error ? error.message : String(error)}`);
      toast({
        title: "DNS Test Error",
        description: "An unexpected error occurred. See console for details.",
        variant: "destructive",
      });
    } finally {
      setIsTestingDns(false);
    }
  };

  // Process CSV data function
  const processCsvData = async (data: any[]) => {
    setProcessingError(null);
    console.log("Starting CSV processing...");
    
    try {
      const emailColumnToUse = selectedEmailColumn || findEmailColumn(data[0]);
      console.log(`Using email column: ${emailColumnToUse}`);
      
      const emails = data.map(row => {
        return row[emailColumnToUse];
      }).filter(email => email && typeof email === 'string' && email.includes('@'));
      
      console.log(`Found ${emails.length} valid email addresses to process`);
      
      const results = {
        total: emails.length,
        problematic: 0,
        safe: 0,
        processedRows: [...data]
      };
      
      // Process in chunks to avoid overwhelming the browser
      const CHUNK_SIZE = 5; // Smaller chunk size for better feedback
      const chunks = [];
      for (let i = 0; i < emails.length; i += CHUNK_SIZE) {
        chunks.push(emails.slice(i, i + CHUNK_SIZE));
      }
      
      console.log(`Split processing into ${chunks.length} chunks of up to ${CHUNK_SIZE} emails each`);
      
      let processedCount = 0;
      
      // Define problematic providers list
      const problematicProviders = [
        "outlook", "microsoft", "office365", "protection.outlook", "mail.protection.outlook", 
        "zoho", "barracuda", "ironport", "cisco", "fortinet", "fortimail", 
        "hornetsecurity", "libraesva", "forcepoint", "mailguard", "mailroute", 
        "symantec", "broadcom", "messagelabs", "mimecast", "mcafee", "mxlogic", 
        "proofpoint", "retarus", "securence", "skyeye", "sonicwall", "sophos", 
        "spambrella", "spamtitan", "titanhq", "trendmicro", "trustwave", 
        "watchguard", "webroot", "opentext", "zerospam", "zix"
      ];
      
      // Process each chunk
      for (const chunk of chunks) {
        try {
          await Promise.all(chunk.map(async (email) => {
            // Extract domain from email
            const domain = email.split('@')[1]?.trim().toLowerCase();
            if (!domain) {
              console.log(`Skipping invalid email: ${email}`);
              return;
            }
            
            console.log(`Processing email domain: ${domain}`);
            
            try {
              // Perform DNS lookup with retry mechanism
              const dnsResult = await performDnsLookup(domain);
              
              let isProblematic = false;
              let mxProvider = "unknown";
              let mxRecords: string[] = [];
              
              if (dnsResult.success && dnsResult.data && dnsResult.data.Answer) {
                mxRecords = dnsResult.data.Answer.map((record: any) => record.data.toLowerCase());
                console.log(`Found ${mxRecords.length} MX records for ${domain}:`, mxRecords);
                
                // Check for problematic providers
                for (const record of mxRecords) {
                  for (const provider of problematicProviders) {
                    if (record.includes(provider)) {
                      isProblematic = true;
                      mxProvider = provider;
                      console.log(`Found problematic provider '${provider}' in record: ${record}`);
                      break;
                    }
                  }
                  if (isProblematic) break;
                }
                
                if (!isProblematic) {
                  console.log(`No problematic providers found for ${domain}`);
                  // Try to extract the actual provider name from the MX record
                  if (mxRecords.length > 0) {
                    const firstMx = mxRecords[0];
                    const parts = firstMx.split(' ');
                    // The last part should be the hostname
                    const hostname = parts[parts.length - 1];
                    // Extract domain part from hostname
                    const hostParts = hostname.split('.');
                    if (hostParts.length >= 2) {
                      mxProvider = hostParts[hostParts.length - 2];
                    }
                  }
                }
              } else {
                console.warn(`DNS lookup failed for ${domain}`, dnsResult.error);
                mxProvider = "unknown";
              }
              
              // Update the original data with MX info
              const rowIndex = data.findIndex(row => {
                return row[emailColumnToUse] === email;
              });
              
              if (rowIndex !== -1) {
                results.processedRows[rowIndex].mxProvider = mxProvider;
                results.processedRows[rowIndex].isProblematic = isProblematic;
                console.log(`Updated row ${rowIndex} with mxProvider: ${mxProvider}, isProblematic: ${isProblematic}`);
              }
              
              // Update counts
              if (isProblematic) {
                results.problematic++;
              } else {
                results.safe++;
              }
            } catch (error) {
              console.error(`Error processing ${domain}:`, error);
              // Still mark the row but with error info
              const rowIndex = data.findIndex(row => {
                return row[emailColumnToUse] === email;
              });
              
              if (rowIndex !== -1) {
                results.processedRows[rowIndex].mxProvider = "error";
                results.processedRows[rowIndex].isProblematic = false;
                console.log(`Marked row ${rowIndex} as error due to exception`);
              }
            }
            
            // Update progress
            processedCount++;
            updateProgressBar(processedCount, emails.length);
          }));
          
        } catch (error) {
          console.error("Chunk processing error:", error);
          setProcessingError("Error processing some emails. Please try again or with a smaller file.");
        }
        
        // Small delay between chunks to prevent browser from becoming unresponsive
        console.log("Waiting between chunks to prevent browser freezing...");
        await new Promise(resolve => setTimeout(resolve, 500)); // Increased delay for stability
      }
      
      return results;
    } catch (error) {
      console.error("Error processing CSV data:", error);
      setProcessingError("Error processing your file. Please check the format and try again.");
      throw error;
    }
  };

  // Column selection handler
  const handleColumnSelect = (columnName: string) => {
    setSelectedEmailColumn(columnName);
  };

  // Continue with processing after column selection
  const handleContinueProcessing = () => {
    if (!selectedEmailColumn) {
      toast({
        title: "Column Required",
        description: "Please select which column contains email addresses.",
        variant: "destructive",
      });
      return;
    }

    setStep('processing');
    setProgress(0);
    
    processCsvData(csvData)
      .then((processedData) => {
        // Show results
        setResults(processedData);
        setStep('results');
        
        // Show notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Processing Complete', {
            body: 'Your email list has been processed and is ready for download.'
          });
        }

        toast({
          title: "Processing Complete",
          description: `Your list of ${processedData.total} emails has been analyzed successfully.`,
        });
      })
      .catch((error) => {
        console.error('Error processing data:', error);
        toast({
          title: "Processing Error",
          description: "There was an error processing your file. Please try again.",
          variant: "destructive",
        });
        setStep('upload');
      });
  };

  // Handle file upload
  const handleFileUpload = (file: File) => {
    // Check if file is CSV
    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      toast({
        title: "Invalid File Format",
        description: "Please upload a CSV file.",
        variant: "destructive",
      });
      return;
    }
    
    // Parse CSV
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        try {
          // Store the full data
          setCsvData(results.data);
          
          // Get headers
          if (results.data.length > 0) {
            setCsvHeaders(Object.keys(results.data[0]));
            
            // Auto-detect email column
            const detectedEmailColumn = findEmailColumn(results.data[0]);
            setSelectedEmailColumn(detectedEmailColumn);
            
            // Get preview rows (up to 5)
            setPreviewRows(results.data.slice(0, 5));
            
            // Move to column selection step
            setStep('column-select');
          } else {
            toast({
              title: "Empty File",
              description: "The CSV file appears to be empty.",
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error("Error processing CSV:", error);
          toast({
            title: "File Processing Error",
            description: "There was an error processing your file. Please check the format and try again.",
            variant: "destructive",
          });
        }
      },
      error: function(error) {
        console.error('Error parsing CSV:', error);
        toast({
          title: "File Parsing Error",
          description: "Could not parse the CSV file. Please check the format and try again.",
          variant: "destructive",
        });
      }
    });
  };

  // Download processed CSV
  const downloadProcessedCsv = (filteredOnly: boolean) => {
    if (!results) return;
    
    // Check if email is provided and valid
    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address to download your results.",
        variant: "destructive",
      });
      return;
    }
    
    setIsEmailValid(true);
    
    // Store email in localStorage for convenience
    localStorage.setItem('userEmail', email);
    
    // Filter rows if needed
    const dataToDownload = filteredOnly 
      ? results.processedRows.filter(row => !row.isProblematic)
      : results.processedRows;
    
    // Convert to CSV
    const csv = Papa.unparse(dataToDownload);
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filteredOnly ? 'microsoft_excluded_list.csv' : 'full_analyzed_list.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: filteredOnly 
        ? "Your Microsoft-excluded list is downloading." 
        : "Your full analyzed list is downloading.",
    });
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const resetTool = () => {
    setStep('upload');
    setResults(null);
    setProgress(0);
    setSelectedEmailColumn('');
    setCsvData([]);
    setCsvHeaders([]);
    setPreviewRows([]);
    setProcessingError(null);
    setTestDnsResult(null);
  };

  return (
    <div className="min-h-screen bg-background relative pt-20 pb-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 font-bold leading-heading tracking-tight mb-6">
            Microsoft Email Filter
          </h1>
          <p className="text-body-large mb-12 text-white/80">
            Filter out Microsoft and other problematic email providers from your cold email campaigns to improve deliverability and protect your sender reputation.
          </p>

          {/* Upload Section */}
          {step === 'upload' && (
            <CustomCard variant="glass" className="mb-8">
              <h2 className="text-h3 font-semibold mb-4">Upload Your CSV File</h2>
              <p className="mb-6 text-white/70">
                Your data never leaves your browser. All processing happens locally on your device for maximum privacy.
              </p>
              <div 
                className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${dragActive ? 'border-blue-500 bg-blue-500/10' : 'border-white/20 hover:border-white/40'}`}
                onClick={triggerFileInput}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  ref={fileInputRef}
                  type="file" 
                  className="hidden" 
                  accept=".csv" 
                  onChange={handleFileInputChange}
                />
                <div className="flex flex-col items-center">
                  <Upload size={48} className="text-blue-400 mb-4" />
                  <p className="text-body font-medium mb-2">Drag and drop your CSV file here</p>
                  <p className="text-white/60">or click to browse</p>
                </div>
              </div>
              
              {/* Test DNS Button */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <h3 className="text-lg font-medium mb-2">Debug Tools</h3>
                <CustomButton 
                  onClick={testDnsLookup} 
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center gap-2"
                  disabled={isTestingDns}
                >
                  <Bug size={16} />
                  {isTestingDns ? 'Testing...' : 'Test DNS Lookup'}
                </CustomButton>
                
                {testDnsResult && (
                  <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg text-sm font-mono whitespace-pre-wrap">
                    {testDnsResult}
                  </div>
                )}
              </div>
            </CustomCard>
          )}

          {/* Column Selection Section */}
          {step === 'column-select' && (
            <CustomCard variant="glass" className="mb-8">
              <h2 className="text-h3 font-semibold mb-4">Select Email Column</h2>
              <p className="mb-6 text-white/70">
                Please confirm which column contains email addresses. We've auto-detected it, but please verify.
              </p>
              
              {/* Column selector */}
              <div className="mb-6">
                <Label className="mb-2 block">Email Column</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {csvHeaders.map((header) => (
                    <button
                      key={header}
                      onClick={() => handleColumnSelect(header)}
                      className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${
                        selectedEmailColumn === header 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {selectedEmailColumn === header && <Check size={14} />}
                      {header}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* CSV Preview */}
              <div className="mb-6 overflow-auto max-h-64">
                <h3 className="text-lg font-medium mb-2">Preview</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      {csvHeaders.map((header) => (
                        <TableHead 
                          key={header} 
                          className={selectedEmailColumn === header ? 'bg-blue-500/30' : ''}
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previewRows.map((row, idx) => (
                      <TableRow key={idx}>
                        {csvHeaders.map((header) => (
                          <TableCell 
                            key={`${idx}-${header}`}
                            className={selectedEmailColumn === header ? 'bg-blue-500/10' : ''}
                          >
                            {row[header]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex flex-row gap-4">
                <CustomButton 
                  onClick={handleContinueProcessing} 
                  className="flex items-center justify-center gap-2"
                >
                  Continue Processing
                </CustomButton>
                <CustomButton 
                  onClick={resetTool} 
                  variant="outline"
                >
                  Cancel
                </CustomButton>
              </div>
            </CustomCard>
          )}
          
          {/* Processing Section */}
          {step === 'processing' && (
            <CustomCard variant="glass" className="mb-8">
              <h2 className="text-h3 font-semibold mb-4">Processing Your Data</h2>
              <p className="mb-6 text-white/70">
                This may take a few moments depending on the size of your list. Please wait...
              </p>
              <div className="mb-4">
                <Progress value={progress} className="h-3" />
              </div>
              <p className="text-white/60 text-center">{progressText}</p>

              {processingError && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-white">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-red-400 shrink-0 mt-1" size={18} />
                    <p>{processingError}</p>
                  </div>
                </div>
              )}
            </CustomCard>
          )}

          {/* Results Section */}
          {step === 'results' && results && (
            <>
              <CustomCard variant="glass" className="mb-8">
                <h2 className="text-h3 font-semibold mb-4">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center">
                    <FileText className="mx-auto mb-2 text-white/60" />
                    <p className="text-white/60 mb-1">Total Emails</p>
                    <p className="text-h3 font-bold gradient-text">{results.total.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center">
                    <AlertCircle className="mx-auto mb-2 text-red-400" />
                    <p className="text-white/60 mb-1">Problematic</p>
                    <p className="text-h3 font-bold text-red-400">{results.problematic.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center">
                    <CheckCircle className="mx-auto mb-2 text-green-400" />
                    <p className="text-white/60 mb-1">Safe to Use</p>
                    <p className="text-h3 font-bold text-green-400">{results.safe.toLocaleString()}</p>
                  </div>
                </div>
              
                <div className="mb-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Enter your email to download results</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="space-y-2 flex-grow">
                        <Label htmlFor="user-email">Email Address</Label>
                        <Input 
                          type="email" 
                          id="user-email" 
                          placeholder="youremail@example.com" 
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setIsEmailValid(true);
                          }}
                          className={`glass-input ${!isEmailValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        />
                        {!isEmailValid && (
                          <p className="text-red-500 text-sm">Please enter a valid email address</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CustomButton 
                      onClick={() => downloadProcessedCsv(true)} 
                      className="flex items-center justify-center gap-2"
                      size="default"
                    >
                      <Download size={18} />
                      Download Microsoft-Excluded List ({results.safe.toLocaleString()})
                    </CustomButton>
                    <CustomButton 
                      onClick={() => downloadProcessedCsv(false)} 
                      variant="outline"
                      className="flex items-center justify-center gap-2"
                      size="default"
                    >
                      <Download size={18} />
                      Download Full List with Labels
                    </CustomButton>
                  </div>
                </div>
              </CustomCard>

              <CustomCard variant="glass" className="mb-8">
                <h2 className="text-h3 font-semibold mb-4">Want to try again?</h2>
                <p className="mb-6 text-white/70">
                  Upload a different CSV file to analyze a new list of email addresses.
                </p>
                <CustomButton 
                  onClick={resetTool}
                  variant="outline" 
                  className="w-full sm:w-auto"
                >
                  Process Another File
                </CustomButton>
              </CustomCard>
            </>
          )}

          {/* FAQ Section */}
          <CustomCard variant="glass">
            <h2 className="text-h3 font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Why filter out Microsoft domains?</h3>
                <p className="text-white/70">
                  Microsoft's email systems (Outlook, Office 365) have extremely strict spam filters that often place cold emails in spam folders, hurting your domain reputation. Filtering these providers can significantly improve your deliverability rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What providers does this filter identify?</h3>
                <p className="text-white/70">
                  This tool identifies Microsoft, Outlook, Office 365, Zoho, Barracuda, and many other email security providers known to be challenging for cold email campaigns. It checks MX records to determine the actual email provider being used.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Is my data secure?</h3>
                <p className="text-white/70">
                  Yes! All processing happens in your browser. Your CSV data never leaves your computer or gets uploaded to any server. We use a CORS proxy only for the DNS lookups, but your actual email data remains local to your device.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How accurate is the detection?</h3>
                <p className="text-white/70">
                  The tool uses DNS MX record lookups which are very accurate for determining the actual email provider. However, some companies may use custom configurations that don't clearly identify their provider in the MX records.
                </p>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftFilterPage;
