
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How is this different from other outbound agencies?",
      answer: "We're a B2B data company first. Our differentiator is our custom data pipeline that finds signals other agencies miss. Plus, we start with free qualified meetings so you can validate our approach before paying anything."
    },
    {
      question: "What qualifies as a \"qualified meeting\"?",
      answer: "A qualified meeting is a scheduled and attended video call with a decision-maker who matches your exact ICP criteria. We agree on these criteria during our initial consultation to ensure we're targeting the right prospects for your business."
    },
    {
      question: "How does your performance-based pricing work?",
      answer: "After your 2 free meetings, you can purchase meeting packages at a fixed per-meeting price. You only pay for meetings that actually happen - no retainers or long-term contracts required. Meeting packages start at 5 meetings and can scale to fit your growth needs."
    },
    {
      question: "Is there any minimum commitment?",
      answer: "Your only commitment is the one-time setup fee after your 2 free meetings. This covers our costs for creating your custom data pipeline and email infrastructure. After that, you can purchase meeting packages as needed."
    },
    {
      question: "What if my company doesn't have a large enough target market?",
      answer: "Our approach works best for B2B companies with a total addressable market (TAM) of at least 5,000 prospects. This ensures we have enough data to build effective targeting. If you're unsure about your TAM, we can help you evaluate your market potential."
    },
    {
      question: "Do I need to change my domain or email setup?",
      answer: "No. We handle everything, including domain setup, warming, and deliverability. For ongoing clients, we purchase new domains branded similar to your main domain and warm them for 2 weeks before launching campaigns."
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
            Everything you need to know about our meeting generation service and how it can transform your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="py-6 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex justify-between items-center text-left">
                  <span className="text-body font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-6 px-6">
                  <p className="text-body text-white/70">{faq.answer}</p>
                </AccordionContent>
                
                {index < faqs.length - 1 && (
                  <div className="h-px bg-white/5"></div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-body text-white/70 mb-6">
            Ready to get qualified meetings without risk? Schedule your free consultation today.
          </p>
          <CustomButton onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>
            Get 2 Free Meetings →
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
