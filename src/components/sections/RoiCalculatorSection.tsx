
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, DollarSign, LineChart } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const RoiCalculatorSection: React.FC = () => {
  const [dealSize, setDealSize] = useState<number>(10000);
  const [meetings, setMeetings] = useState<number>(10);
  const [monthlyPipeline, setMonthlyPipeline] = useState<number>(0);
  const [annualPipeline, setAnnualPipeline] = useState<number>(0);
  
  const prevMonthlyRef = useRef<number>(0);
  const prevAnnualRef = useRef<number>(0);
  
  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };
  
  // Animate counting up
  const animateValue = (
    elementId: string,
    start: number,
    end: number,
    duration: number
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startTime = performance.now();
    
    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (x: number): number => {
        return 1 - Math.pow(1 - x, 3);
      };
      
      const currentValue = Math.floor(start + easeOutCubic(progress) * (end - start));
      element.textContent = formatNumber(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  };
  
  const calculateROI = () => {
    const monthly = dealSize * meetings;
    const annual = monthly * 12;
    
    // Store previous values for animation
    prevMonthlyRef.current = monthlyPipeline;
    prevAnnualRef.current = annualPipeline;
    
    // Update state
    setMonthlyPipeline(monthly);
    setAnnualPipeline(annual);
    
    // Animate the counting
    animateValue('monthly-result', prevMonthlyRef.current, monthly, 800);
    animateValue('annual-result', prevAnnualRef.current, annual, 800);
  };
  
  // Handle deal size input change
  const handleDealSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value.replace(/,/g, ''), 10);
    
    if (isNaN(value)) {
      value = 0;
    } else if (value < 1000) {
      // Minimum value
      value = 1000;
    } else if (value > 1000000) {
      // Maximum value
      value = 1000000;
    }
    
    setDealSize(value);
  };
  
  // Handle meetings dropdown change
  const handleMeetingsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMeetings(parseInt(e.target.value, 10));
  };
  
  // Format deal size with commas as user types
  const formatDealSize = () => {
    return dealSize ? dealSize.toLocaleString('en-US') : '';
  };
  
  // Calculate ROI when inputs change
  useEffect(() => {
    calculateROI();
  }, [dealSize, meetings]);
  
  return (
    <section id="roi-calculator" className="py-20 md:py-24 px-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 font-bold tracking-tight mb-4">
            What's Your Potential Upside?
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            See your potential pipeline impact in seconds
          </p>
        </div>
        
        <div className="calculator-container bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Deal Size Input */}
            <div className="form-group">
              <label htmlFor="dealSize" className="block text-body font-medium mb-2 text-white/90">
                Average Deal Size
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-white/60" />
                </div>
                <Input
                  id="dealSize"
                  type="text"
                  className="pl-10 glass-input text-body w-full"
                  value={formatDealSize()}
                  onChange={handleDealSizeChange}
                  min={1000}
                  max={1000000}
                />
              </div>
              {dealSize < 1000 && dealSize !== 0 && (
                <p className="text-caption text-red-400 mt-1">Minimum value is $1,000</p>
              )}
              {dealSize > 1000000 && (
                <p className="text-caption text-amber-400 mt-1">Maximum value is $1,000,000</p>
              )}
            </div>
            
            {/* Meetings Dropdown */}
            <div className="form-group">
              <label htmlFor="meetings" className="block text-body font-medium mb-2 text-white/90">
                Monthly Qualified Meetings Goal
              </label>
              <select
                id="meetings"
                className="glass-input text-body w-full"
                value={meetings}
                onChange={handleMeetingsChange}
              >
                <option value="5">5 meetings</option>
                <option value="10">10 meetings</option>
                <option value="15">15 meetings</option>
                <option value="20">20 meetings</option>
                <option value="25">25+ meetings</option>
              </select>
            </div>
          </div>
          
          {/* ROI Visualization */}
          <div className="roi-visualization flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Investment Box */}
            <div className="bg-black/30 rounded-xl p-6 text-center w-full md:w-2/5">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-body font-semibold mb-2">Your Investment</h3>
              <p className="text-h3 font-bold mb-1">15 minutes</p>
              <p className="text-caption text-white/70">$0 risk</p>
            </div>
            
            {/* Arrow */}
            <div className="flex-none hidden md:block">
              <ArrowRight className="h-12 w-12 text-blue-400" />
            </div>
            
            {/* Arrow (mobile) */}
            <div className="flex-none md:hidden">
              <ArrowRight className="h-8 w-8 text-blue-400 rotate-90" />
            </div>
            
            {/* Return Box */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 text-center w-full md:w-2/5">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <LineChart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-body font-semibold mb-2">Potential Return</h3>
              <p className="text-h3 font-bold mb-1 text-gradient">
                ${formatNumber(monthlyPipeline)}
              </p>
              <p className="text-caption text-white/70">monthly pipeline</p>
            </div>
          </div>
          
          {/* Results Display */}
          <div className="roi-results text-center mb-12">
            <p className="text-body-large mb-4">
              Potential Monthly Pipeline: <span className="text-gradient font-bold" id="monthly-result">{formatNumber(monthlyPipeline)}</span>
            </p>
            <p className="text-body-large mb-4">
              Potential Annual Impact: <span className="text-gradient font-bold" id="annual-result">{formatNumber(annualPipeline)}</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <CustomButton variant="primary" size="lg" className="animate-pulse mb-4">
              Launch My Free Campaign
            </CustomButton>
            <p className="text-caption text-white/60">No commitment. No complexity. Just results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculatorSection;
