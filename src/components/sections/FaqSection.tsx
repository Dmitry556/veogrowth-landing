
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How is this different from other outbound agencies?",
      answer: [
        "We're <strong>not just another agency</strong>—we built an <strong>inference engine</strong>.",
        "While others send generic 'Hi {FirstName}' emails, our AI analyzes each prospect to infer what <strong>specific problems they're facing right now</strong>.",
        "Plus, we only charge for <strong>meetings that actually happen</strong>."
      ]
    },
    {
      question: "What qualifies as a \"qualified meeting\"?",
      answer: [
        "A <strong>scheduled and attended video call</strong> with a decision-maker who matches your exact ICP criteria.",
        "We agree on these criteria during our initial consultation to ensure we're targeting the <strong>right prospects for your business</strong>."
      ]
    },
    {
      question: "How many emails do you send?",
      answer: [
        "Typically <strong>20,000-50,000 per month</strong>, split across 20+ targeted campaigns.",
        "The exact volume depends on your TAM size and segmentation.",
        "Our inference engine ensures each email is <strong>relevant to the recipient's current situation</strong>."
      ]
    },
    {
      question: "Do you guarantee 30 meetings?",
      answer: [
        "We show <strong>typical results</strong>. Actual meetings depend on your offer strength and market fit.",
        "Our pilot lets you <strong>test quality before committing to volume</strong>.",
        "Most clients see <strong>15-30+ meetings per month</strong> once fully scaled."
      ]
    },
    {
      question: "How does your performance-based pricing work?",
      answer: [
        "After your <strong>2 free meetings</strong>, you can purchase meeting packages at a fixed per-meeting price.",
        "You only pay for <strong>meetings that actually happen</strong>—no retainers or long-term contracts required."
      ]
    },
    {
      question: "Is there any minimum commitment?",
      answer: [
        "<strong>No minimum commitment</strong>. Start with 2 free meetings to test our quality.",
        "After that, purchase meeting packages as needed.",
        "We earn your business with <strong>results, not contracts</strong>."
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-gray-900">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            Everything you need to know about our inference engine and how it delivers qualified meetings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="py-6 px-8 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors flex justify-between items-center text-left border border-gray-700">
                  <span className="text-lg font-medium pr-4 text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-6 px-8 bg-gray-800/30 rounded-b-xl border-x border-b border-gray-700 border-t-0">
                  <div className="space-y-3">
                    {faq.answer.map((line, lineIndex) => (
                      <p 
                        key={lineIndex} 
                        className="text-lg text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FaqSection;
