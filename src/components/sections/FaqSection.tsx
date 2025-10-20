
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{
      background: 'linear-gradient(180deg, #04080d 0%, #050b11 48%, #061015 100%)',
      padding: '60px 0 120px',
      borderTop: '1px solid rgba(45, 212, 191, 0.06)',
      borderBottom: '1px solid rgba(45, 212, 191, 0.08)'
    }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 72px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.52)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            borderRadius: '999px',
            padding: '10px 22px',
            marginBottom: '44px',
            fontSize: '12px',
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: 'rgba(209, 250, 229, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            Common Questions
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '36px',
            color: 'rgba(239, 246, 255, 0.96)'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '22px',
            color: 'rgba(207, 227, 241, 0.72)',
            fontWeight: '500',
            lineHeight: '1.5',
            letterSpacing: '-0.01em'
          }}>
            Everything you need to know about our inference engine and how it delivers qualified meetings.
          </p>
        </div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(11, 21, 28, 0.88) 0%, rgba(6, 18, 24, 0.86) 100%)',
                border: '1px solid rgba(45, 212, 191, 0.12)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: openIndex === index ? '0 24px 48px rgba(2, 8, 12, 0.55)' : '0 18px 36px rgba(2, 8, 12, 0.4)',
                transition: 'all 0.32s ease'
              }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '32px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement as HTMLElement;
                    if (parent) {
                      parent.style.borderColor = 'rgba(94, 234, 212, 0.22)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement as HTMLElement;
                    if (parent) {
                      parent.style.borderColor = openIndex === index ? 'rgba(94, 234, 212, 0.18)' : 'rgba(45, 212, 191, 0.12)';
                    }
                  }}
                >
                  <span style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '20px',
                    fontWeight: '500',
                    color: 'rgba(237, 244, 255, 0.92)',
                    letterSpacing: '-0.01em',
                    flex: '1',
                    marginRight: '24px'
                  }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(94, 234, 212, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 16px rgba(2, 40, 36, 0.35)'
                  }}>
                    {openIndex === index ? 
                      <Minus style={{ width: '12px', height: '12px', color: 'rgba(237, 244, 255, 0.92)' }} /> :
                      <Plus style={{ width: '12px', height: '12px', color: 'rgba(237, 244, 255, 0.92)' }} />
                    }
                  </div>
                </button>
                {openIndex === index && (
                  <div style={{
                    padding: '0 40px 34px',
                    borderTop: '1px solid rgba(45, 212, 191, 0.12)',
                    marginTop: '-1px'
                  }}>
                    <div style={{
                      paddingTop: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}>
                      {faq.answer.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          style={{
                            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            fontSize: '18px',
                            color: 'rgba(204, 228, 241, 0.78)',
                            lineHeight: '1.6',
                            margin: '0',
                            letterSpacing: '-0.01em'
                          }}
                          dangerouslySetInnerHTML={{ 
                            __html: line.replace(/<strong>/g, '<strong style="color: #ecfdf5; font-weight: 600;">') 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FaqSection;
