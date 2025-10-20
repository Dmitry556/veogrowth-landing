import React from 'react';
import CustomCard from '../ui/CustomCard';

const ProcessSection: React.FC = () => {
  
  // Content will be handled in the main layout

  // Define the keyframe animation as a style object
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <section id="process" style={{
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
            How It Works
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '48px',
            color: '#EAEAEA'
          }}>
            From 50,000 Prospects to 30+ Meetings
          </h2>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '22px',
            color: '#B0B0B0',
            fontWeight: '500',
            lineHeight: '1.5',
            marginBottom: '64px',
            letterSpacing: '-0.01em'
          }}>
            Here's what happens when you work with us.
          </p>
          
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
              }}>Step 1: Intelligent Segmentation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  We take your addressable market—let's say <strong style={{ color: '#FFFFFF' }}>50,000 potential customers</strong>—and break them into <strong style={{ color: '#FFFFFF' }}>20+ intelligent segments</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  <strong style={{ color: '#FFFFFF' }}>Not</strong> by industry or size.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  But by the <strong style={{ color: '#FFFFFF' }}>problems they're likely facing right now</strong>.
                </p>
              </div>
            </div>
            
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
              }}>Step 2: Custom Intelligence</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  For each segment, we <strong style={{ color: '#FFFFFF' }}>build custom intelligence</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  When a company expands to a new city, we find out <strong style={{ color: '#FFFFFF' }}>who's managing that chaos</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  When they launch a product, we identify <strong style={{ color: '#FFFFFF' }}>who's scrambling for customer feedback</strong>.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '64px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: '#EAEAEA',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>Step 3: AI Analysis</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  Then our AI <strong style={{ color: '#FFFFFF' }}>analyzes each prospect individually</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  It connects dots between what we found and what <strong style={{ color: '#FFFFFF' }}>problems that creates for them</strong>.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}>
                  <strong style={{ color: '#FFFFFF' }}>Real inference</strong>, not templates.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Unified Results Card */}
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '48px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}>
              
              {/* Comparison */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0.03) 100%)',
                  border: '1px solid rgba(255, 107, 107, 0.2)',
                  borderRadius: '16px',
                  padding: '32px'
                }}>
                  <h4 style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#FF6B6B',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                  }}>❌ Everyone Else</h4>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    color: '#B0B0B0',
                    fontStyle: 'italic',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    letterSpacing: '-0.01em',
                    margin: '0'
                  }}>
                    "I noticed you're growing fast"
                  </p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.03) 100%)',
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                  borderRadius: '16px',
                  padding: '32px'
                }}>
                  <h4 style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#4ADE80',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                  }}>✅ Our AI</h4>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    color: '#EAEAEA',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    letterSpacing: '-0.01em',
                    margin: '0'
                  }}>
                    "With your Phoenix expansion, I imagine your dispatch team is juggling calls between time zones while drivers sit idle."
                  </p>
                </div>
              </div>
              
              {/* Flowing content without headers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em',
                  margin: '0'
                }}>
                  We run <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>20+ of these campaigns simultaneously</strong>. Different segments, different inferred problems, different angles. All backed by infrastructure that <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>actually delivers to the inbox</strong>.
                </p>
                
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em',
                  margin: '0'
                }}>
                  <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>You don't need SDRs. You don't need to manage tools.</strong>
                </p>
                
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '22px',
                  color: '#EAEAEA',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  margin: '0'
                }}>
                  You just get meetings with people who weren't even looking for your solution—because we identified their problem before they posted about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;