
import React from 'react';
import CustomCard from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { Check, ChevronRight, Calendar } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" style={{
      background: '#0a0a0a',
      padding: '80px 0 100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 120px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '48px',
            fontSize: '13px',
            fontFamily: "'SF Mono', Monaco, Consolas, monospace",
            color: '#B0B0B0',
            fontWeight: '400',
            letterSpacing: '0.04em',
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
            marginBottom: '60px',
            color: '#EAEAEA'
          }}>
            You Only Pay For Meetings That Happen
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: '#EAEAEA',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>The Problem with Traditional Agencies</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
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
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '48px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: '#EAEAEA',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>Our Performance-Based Approach</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Our inference engine is so effective, <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>we bet our revenue on it</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  You shouldn't pay for emails sent or hours worked.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
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
              color: '#EAEAEA',
              fontWeight: '500',
              textAlign: 'center',
              marginBottom: '64px',
              letterSpacing: '-0.01em'
            }}>
              Here's how simple it is:
            </p>
          </div>
        </div>
        
        {/* How it works steps */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>1</span>
              </div>
              <div style={{ flex: '1' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Start with <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>2 free meetings</strong> to see the quality
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>2</span>
              </div>
              <div style={{ flex: '1' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  If you like what you see, <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>purchase meeting packages</strong>
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>3</span>
              </div>
              <div style={{ flex: '1' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>Scale up or down</strong> based on your needs
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>4</span>
              </div>
              <div style={{ flex: '1' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Pay only for <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>meetings that show up</strong>
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '48px',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                color: '#EAEAEA',
                fontWeight: '500',
                letterSpacing: '-0.02em'
              }}>
                No retainers. No long contracts. No risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
