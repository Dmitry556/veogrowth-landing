
import React from 'react';
import CustomCard from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { Check, ChevronRight, Calendar } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-white border-b border-gray-200">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-sm font-medium mb-8">
            Investment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-gray-900">
            You Only Pay For Meetings That Happen
          </h2>
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Problem with Traditional Agencies</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Most agencies charge <strong className="text-gray-900">$10-30K per month</strong> whether they deliver or not.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't believe in that model.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 mb-12 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Performance-Based Approach</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our inference engine is so effective, <strong className="text-purple-600">we bet our revenue on it</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You shouldn't pay for emails sent or hours worked.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You should pay for <strong className="text-purple-600">qualified conversations with potential customers</strong>.
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-900 font-bold text-center">
              Here's how simple it is:
            </p>
          </div>
        </div>
        
        {/* How it works steps */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 mb-16">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Start with <strong className="text-gray-900">2 free meetings</strong> to see the quality
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you like what you see, <strong className="text-gray-900">purchase meeting packages</strong>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Scale up or down</strong> based on your needs
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pay only for <strong className="text-gray-900">meetings that show up</strong>
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-purple-50 rounded-xl p-8 border border-purple-200">
            <p className="text-2xl text-gray-900 font-bold">
              No retainers. No long contracts. No risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
