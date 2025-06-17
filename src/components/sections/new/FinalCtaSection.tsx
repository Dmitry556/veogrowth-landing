import React from 'react';
import CustomButton from '@/components/ui/CustomButton';
import { ChevronRight } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Your Next <span className="text-yellow-300">30 Meetings</span> Are Waiting
          </h2>
          
          <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Every month you wait is 30+ meetings your competitors are taking. Our inference engine could be identifying 
            your best prospects right now—the ones dealing with problems today, not someday.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <p className="text-lg mb-4">
              We only work with <strong>5 new companies per month.</strong>
            </p>
            <p className="text-blue-100">
              Each requires custom data building, AI training, and infrastructure setup.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl font-semibold">
              See if you qualify for our pilot program.
            </p>
            
            <CustomButton 
              size="lg" 
              className="inline-flex items-center font-semibold px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
            >
              Get Your First 2 Meetings Free <ChevronRight className="ml-2" size={20} />
            </CustomButton>
            
            <p className="text-blue-100">
              48-hour campaign setup • First meetings within 14 days
            </p>
            
            <div className="pt-8 border-t border-white/20">
              <p className="text-blue-100">
                <strong>Questions?</strong> Email{' '}
                <a href="mailto:hello@veogrowth.com" className="text-yellow-300 hover:text-yellow-200 transition-colors">
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

export default FinalCtaSection;