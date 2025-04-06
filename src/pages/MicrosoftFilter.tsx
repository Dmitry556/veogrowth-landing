import React, { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import CustomButton from "@/components/ui/CustomButton";
import CustomCard from "@/components/ui/CustomCard";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, AlertCircle, CheckCircle, FileText } from "lucide-react";
import Papa from 'papaparse';

const MicrosoftFilterPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'upload' | 'processing' | 'results'>('upload');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    total: number;
    problematic: number;
    safe: number;
    processedRows: any[];
  } | null>(null);
  const [email, setEmail] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progressText, setProgressText] = useState('Processing 0 of 0 emails...');

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

  // Helper function to find email column
  const findEmailColumn = (row: any) => {
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

  // Process CSV data function
  const processCsvData = async (data: any[]) => {
    const emails = data.map(row => {
      // Find email column by checking common headers or by guessing based on content
      const emailColName = findEmailColumn(row);
      return row[emailColName];
    }).filter(email => email && email.includes('@'));
    
    const results = {
      total: emails.length,
      problematic: 0,
      safe: 0,
      processedRows: [...data]
    };
    
    // Process in chunks to avoid overwhelming the browser
    const CHUNK_SIZE = 50;
    const chunks = [];
    for (let i = 0; i < emails.length; i += CHUNK_SIZE) {
      chunks.push(emails.slice(i, i + CHUNK_SIZE));
    }
    
    let processedCount = 0;
    
    // Process each chunk
    for (const chunk of chunks) {
      await Promise.all(chunk.map(async (email) => {
        // Extract domain from email
        const domain = email.split('@')[1]?.trim().toLowerCase();
        if (!domain) return;
        
        try {
          // Use CORS proxy to avoid CORS issues
          const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(`https://dns.google/resolve?name=${domain}&type=MX`)}`);
          const dnsData = await response.json();
          
          // Check if MX record contains any problematic providers
          const problematicProviders = [
            "outlook", "microsoft", "office365", "protection.outlook", "mail.protection.outlook", 
            "zoho", "barracuda", "ironport", "cisco", "fortinet", "fortimail", 
            "hornetsecurity", "libraesva", "forcepoint", "mailguard", "mailroute", 
            "symantec", "broadcom", "messagelabs", "mimecast", "mcafee", "mxlogic", 
            "proofpoint", "retarus", "securence", "skyeye", "sonicwall", "sophos", 
            "spambrella", "spamtitan", "titanhq", "trendmicro", "trustwave", 
            "watchguard", "webroot", "opentext", "zerospam", "zix"
          ];
          
          let isProblematic = false;
          let mxProvider = "unknown";
          
          if (dnsData && dnsData.Answer) {
            for (const record of dnsData.Answer) {
              const mxValue = record.data.toLowerCase();
              for (const provider of problematicProviders) {
                if (mxValue.includes(provider)) {
                  isProblematic = true;
                  mxProvider = provider;
                  break;
                }
              }
              if (isProblematic) break;
            }
          }
          
          // Update the original data with MX info
          const rowIndex = data.findIndex(row => {
            const emailColName = findEmailColumn(row);
            return row[emailColName] === email;
          });
          
          if (rowIndex !== -1) {
            results.processedRows[rowIndex].mxProvider = mxProvider;
            results.processedRows[rowIndex].isProblematic = isProblematic;
          }
          
          // Update counts
          if (isProblematic) {
            results.problematic++;
          } else {
            results.safe++;
          }
        } catch (error) {
          console.error(`Error processing ${domain}:`, error);
        }
        
        // Update progress
        processedCount++;
        updateProgressBar(processedCount, emails.length);
      }));
      
      // Small delay between chunks to prevent browser from becoming unresponsive
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return results;
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

    // Set processing state
    setStep('processing');
    setProgress(0);
    
    // Parse CSV
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function(results) {
        try {
          // Process the data
          const processedData = await processCsvData(results.data);
          
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
        } catch (error) {
          console.error('Error processing data:', error);
          toast({
            title: "Processing Error",
            description: "There was an error processing your file. Please try again.",
            variant: "destructive",
          });
          setStep('upload');
        }
      },
      error: function(error) {
        console.error('Error parsing CSV:', error);
        toast({
          title: "File Parsing Error",
          description: "Could not parse the CSV file. Please check the format and try again.",
          variant: "destructive",
        });
        setStep('upload');
      }
    });
  };

  // Download processed CSV
  const downloadProcessedCsv = (filteredOnly: boolean) => {
    if (!results) return;
    
    // Check if email is provided
    if (!email || !email.includes('@')) {
      toast({
        title: "Email Required",
        description: "Please enter a valid email address to download your results.",
        variant: "destructive",
      });
      return;
    }
    
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
                          onChange={(e) => setEmail(e.target.value)}
                          className="glass-input"
                        />
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
                      Download Microsoft-Excluded List
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
                  onClick={() => setStep('upload')}
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
