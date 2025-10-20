// Archived on request: legacy Investment/Pricing section as of 2025-10-20

import React from 'react';
import CustomCard from '../../src/components/ui/CustomCard';
import CustomButton from '../../src/components/ui/CustomButton';
import { Check, ChevronRight, Calendar } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" style={{
      background: 'linear-gradient(180deg, #03070c 0%, #040b11 45%, #051018 100%)',
      padding: '98px 0 110px',
      borderTop: '1px solid rgba(45, 212, 191, 0.05)',
      borderBottom: '1px solid rgba(45, 212, 191, 0.08)'
    }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 112px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            borderRadius: '999px',
            padding: '10px 24px',
            marginBottom: '44px',
            fontSize: '12px',
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: 'rgba(209, 250, 229, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            Investment
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '54px',
            color: 'rgba(239, 246, 255, 0.96)'
          }}>
            You Only Pay For Meetings That Happen
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(11, 22, 30, 0.88) 0%, rgba(7, 18, 25, 0.86) 100%)',
              border: '1px solid rgba(45, 212, 191, 0.12)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '40px',
              boxShadow: '0 24px 48px rgba(2, 8, 12, 0.48)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: 'rgba(237, 244, 255, 0.94)',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>The Problem with Traditional Agencies</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: 'rgba(204, 228, 241, 0.78)',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Most agencies charge <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>$10-30K per month</strong> whether they deliver or not.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  We don't believe in that model.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(14, 28, 36, 0.92) 0%, rgba(8, 22, 29, 0.9) 100%)',
              border: '1px solid rgba(45, 212, 191, 0.16)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '50px',
              boxShadow: '0 24px 48px rgba(2, 8, 12, 0.5)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: 'rgba(237, 244, 255, 0.94)',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>Our Performance-Based Approach</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: 'rgba(204, 228, 241, 0.78)',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Our inference engine is so effective, <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>we bet our revenue on it</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: 'rgba(204, 228, 241, 0.78)',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  You shouldn't pay for emails sent or hours worked.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: 'rgba(204, 228, 241, 0.78)',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  You should pay for <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>qualified conversations with potential customers</strong>.
                </p>
              </div>
            </div>
            
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '22px',
              color: 'rgba(237, 244, 255, 0.94)',
              fontWeight: '500',
              textAlign: 'center',
              marginBottom: '68px',
              letterSpacing: '-0.01em'
            }}>
              Here's how simple it is:
            </p>
          </div>
        </div>
        
        {/* How it works steps */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            {[1, 2, 3, 4].map((num, index) => (
              <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  flexShrink: '0',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.28), rgba(8, 145, 90, 0.3))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                  boxShadow: '0 12px 24px rgba(5, 54, 43, 0.35)'
                }}>
                  <span style={{
                    color: '#ecfdf5',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  }}>{num}</span>
                </div>
                <div style={{ flex: '1' }}>
                  {index === 0 && (
                    <p style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '20px',
                      color: 'rgba(209, 227, 240, 0.78)',
                      lineHeight: '1.6',
                      margin: '0',
                      letterSpacing: '-0.01em'
                    }}>
                      Start with <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>2 free meetings</strong> to see the quality
                    </p>
                  )}
                  {index === 1 && (
                    <p style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '20px',
                      color: 'rgba(209, 227, 240, 0.78)',
                      lineHeight: '1.6',
                      margin: '0',
                      letterSpacing: '-0.01em'
                    }}>
                      If you like what you see, <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>purchase meeting packages</strong>
                    </p>
                  )}
                  {index === 2 && (
                    <p style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '20px',
                      color: 'rgba(209, 227, 240, 0.78)',
                      lineHeight: '1.6',
                      margin: '0',
                      letterSpacing: '-0.01em'
                    }}>
                      <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>Scale up or down</strong> based on your needs
                    </p>
                  )}
                  {index === 3 && (
                    <p style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '20px',
                      color: 'rgba(209, 227, 240, 0.78)',
                      lineHeight: '1.6',
                      margin: '0',
                      letterSpacing: '-0.01em'
                    }}>
                      Pay only for <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>meetings that show up</strong>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(14, 28, 36, 0.92) 0%, rgba(8, 22, 29, 0.9) 100%)',
            border: '1px solid rgba(45, 212, 191, 0.16)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 28px 56px rgba(2, 8, 12, 0.52)'
          }}>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '28px',
              color: 'rgba(237, 244, 255, 0.96)',
              fontWeight: '500',
              letterSpacing: '-0.02em'
            }}>
              No retainers. No long contracts. No risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
