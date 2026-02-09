import React from 'react';
import CustomCard from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { ChevronRight } from 'lucide-react';

const SimpleFinalCta: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 md:py-24 bg-white border-b border-gray-200">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
              Ready to Start?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-white">
              Your Next 30 Meetings Are Waiting
            </h2>
            
            <div className="max-w-3xl mx-auto text-left mb-12">
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every month you wait is <strong className="text-white">pipeline your competitors are taking</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our inference engine could be identifying your best prospects <strong className="text-white">right now</strong>—the ones dealing with problems today, not someday.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We only work with <strong className="text-purple-400">5 new companies per month</strong>. Each requires custom data building, AI training, and infrastructure setup.
                </p>
              </div>
            </div>
            
            <p className="text-xl text-white font-bold mb-8">
              See if you qualify for our pilot program.
            </p>
            
            <CustomButton 
              size="lg" 
              className="inline-flex items-center font-semibold px-8 py-4 text-lg mb-6"
              onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
            >
              Get Your First 2 Meetings Free <ChevronRight className="ml-2" size={20} />
            </CustomButton>
            
            <p className="text-sm text-gray-400 mb-8">
              48-hour campaign setup • First meetings within 14 days
            </p>
            
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400">
                <strong className="text-white">Questions?</strong> Email{' '}
                <a href="mailto:hello@veogrowth.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  hello@veogrowth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFinalCta;