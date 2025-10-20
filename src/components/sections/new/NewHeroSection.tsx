import React from 'react';
import CustomButton from '@/components/ui/CustomButton';
import { ChevronRight } from 'lucide-react';

const NewHeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Qualifier */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            For Productized B2B Agencies
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-gray-900">30+ Qualified Sales Meetings</span>
            <br />
            <span className="text-blue-600">Per Month on Autopilot</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto font-light">
            We generate qualified pipeline that turns into <span className="text-gray-800">actual revenue</span><br />using AI-powered cold email campaigns.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            No retainers. No contracts. Pay only for <span className="text-gray-900">qualified</span> meetings that show up.
          </p>
          
          {/* Proof Points */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              2,500+ meetings booked in 2024
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              $8M pipeline generated
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              6 clients closed in 30 days
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <CustomButton 
              size="lg" 
              className="inline-flex items-center font-semibold px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
            >
              Get Your First 2 Meetings Free <ChevronRight className="ml-2" size={20} />
            </CustomButton>
            
            <p className="text-sm text-gray-500">
              See if you qualify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;