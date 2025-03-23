
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
      question: "How long does it take to set up Growth Engine X?",
      answer: "Most customers are fully set up within 1-2 weeks. Our one-click data connectors make integration with your existing tools fast and easy, and our onboarding team provides white-glove support throughout the process."
    },
    {
      question: "Which marketing and sales tools do you integrate with?",
      answer: "We integrate with over 50 popular tools including Google Analytics, Facebook Ads, Google Ads, LinkedIn Ads, HubSpot, Salesforce, Marketo, Shopify, Stripe, and many more. If you use a tool that's not on our list, our API allows for custom integrations."
    },
    {
      question: "How does Growth Engine X attribute revenue to marketing efforts?",
      answer: "We use a multi-touch attribution model that tracks every customer interaction across channels and assigns appropriate credit to each touchpoint. Unlike simple last-click models, our approach reveals the true value of each marketing channel throughout the entire customer journey."
    },
    {
      question: "Is Growth Engine X suitable for my industry?",
      answer: "Growth Engine X is designed to work for B2B and B2C companies across industries. We have customers in SaaS, e-commerce, financial services, healthcare, education, and more. The platform is flexible enough to adapt to your specific business model and sales cycle."
    },
    {
      question: "How much does Growth Engine X cost?",
      answer: "Our pricing is based on the size of your business and the specific features you need. Plans start at $2,000/month for growing businesses and scale up for larger enterprises. We offer a 14-day free trial so you can see the value before you commit."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
            FAQs
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Common questions
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Everything you need to know about Growth Engine X and how it can transform your business.
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
            Still have questions? We're here to help.
          </p>
          <CustomButton>Contact Sales</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
