
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How is this different from other outbound agencies?",
      answer: "We're a B2B data company first. Our differentiator is our custom data pipeline that finds signals other agencies miss. Plus, we start with a free test that validates your offer works before you pay us anything."
    },
    {
      question: "How many leads can I expect?",
      answer: "On average, our clients get 1 positive response per 350 contacts. Our top performers get 8-20 leads per day consistently. We'll set realistic expectations during our call based on your industry and offer."
    },
    {
      question: "Do I need to change my domain or email setup?",
      answer: "No. We handle everything, including domain setup, warming, and deliverability. For ongoing clients ($2,500/month), we purchase new domains branded similar to your main domain and warm them for 2 weeks before launching campaigns."
    },
    {
      question: "What if it doesn't work for my business?",
      answer: "Then you don't pay us. We start with a free test campaign that validates your offer works with cold email. If it doesn't, we'll tell you outbound might not be your best channel."
    },
    {
      question: "What's included in the monthly service?",
      answer: "Our $2,500 monthly service includes custom domain setup and warming, ongoing list building, campaign management, copy creation (with your approval), weekly reporting every Friday, and regular campaign review calls. We operate on a month-to-month basis with no long-term contracts."
    },
    {
      question: "How much visibility do I have into campaigns?",
      answer: "Complete transparency. You approve all copy before campaigns launch, receive detailed weekly reports, and have access to all campaign data. We hold regular review calls to discuss performance and strategy adjustments."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
            Common Questions
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Everything you need to know about our pipeline generation service and how it can transform your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left py-6 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-body font-medium pr-4">{faq.question}</span>
                <span className="text-white/60">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-6 px-6' : 'max-h-0 py-0 px-6'}`}>
                <p className="text-body text-white/70">{faq.answer}</p>
              </div>
              
              {index < faqs.length - 1 && (
                <div className="h-px bg-white/5"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-body text-white/70 mb-6">
            Ready to build real pipeline? Schedule your free 15-minute setup call today.
          </p>
          <CustomButton onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>
            Let's Talk Pipeline →
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
