import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" style={{
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
            marginBottom: '40px',
            fontSize: '13px',
            fontFamily: "'SF Mono', Monaco, Consolas, monospace",
            color: '#B0B0B0',
            fontWeight: '400',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}>
            The Story
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '80px',
            color: '#EAEAEA'
          }}>
            The Day Cold Email Died (And What Replaced It)
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
                marginBottom: '32px',
                letterSpacing: '-0.02em'
              }}>The Problem</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  You know why cold email stopped working?
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Everyone bought the same Apollo list.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Everyone uses the same AI tools.
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Everyone sends "Hi Sarah, I saw you're VP of Marketing at..."
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  Prospects can smell it instantly. <span style={{ fontWeight: '600', color: '#FFFFFF' }}>Delete.</span>
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '48px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: '500',
                color: '#EAEAEA',
                marginBottom: '32px',
                letterSpacing: '-0.02em'
              }}>The Breakthrough</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  But here's what changed everything:
                </p>
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '20px',
                  color: '#B0B0B0',
                  lineHeight: '1.6',
                  margin: '0',
                  letterSpacing: '-0.01em'
                }}>
                  AI can now do something that was <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>impossible before</strong>—make <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>intelligent inferences</strong> about thousands of prospects simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '60px 48px',
          marginBottom: '120px',
          maxWidth: '1000px',
          margin: '0 auto 120px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            <div>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '24px',
                fontWeight: '500',
                color: '#FF6B6B',
                marginBottom: '20px',
                letterSpacing: '-0.02em'
              }}>❌ Everyone Else</h3>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: '#B0B0B0',
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: '1.6',
                margin: '0',
                letterSpacing: '-0.01em'
              }}>"I see you use Salesforce."</p>
            </div>
            <div>
              <h3 style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '24px',
                fontWeight: '500',
                color: '#4ADE80',
                marginBottom: '20px',
                letterSpacing: '-0.02em'
              }}>✅ Our AI</h3>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: '#EAEAEA',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '1.6',
                margin: '0',
                letterSpacing: '-0.01em'
              }}>
                "Based on your 3 new enterprise clients and that RevOps hire last month, you're probably dealing with data silos between your CRM and billing system."
              </p>
            </div>
          </div>
        </div>
        
        {/* The Why Now */}
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '500',
            color: '#EAEAEA',
            marginBottom: '40px',
            letterSpacing: '-0.03em'
          }}>
            Why wasn't this possible 2 years ago?
          </h3>
          
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '22px',
            color: '#B0B0B0',
            marginBottom: '60px',
            lineHeight: '1.6',
            letterSpacing: '-0.01em'
          }}>
            Three things had to converge:
          </p>
          
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>1</span>
              </div>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '20px',
                color: '#B0B0B0',
                lineHeight: '1.6',
                margin: '0',
                letterSpacing: '-0.01em'
              }}>
                AI models that can actually reason, not just match patterns
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>2</span>
              </div>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '20px',
                color: '#B0B0B0',
                lineHeight: '1.6',
                margin: '0',
                letterSpacing: '-0.01em'
              }}>
                APIs that let us pull real-time intelligence at scale
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: '0',
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                marginTop: '2px'
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>3</span>
              </div>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '20px',
                color: '#B0B0B0',
                lineHeight: '1.6',
                margin: '0',
                letterSpacing: '-0.01em'
              }}>
                Infrastructure costs dropping 90% for this kind of processing
              </p>
            </div>
          </div>
          
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '24px',
            color: '#EAEAEA',
            lineHeight: '1.5',
            fontWeight: '500',
            margin: '0',
            letterSpacing: '-0.02em'
          }}>
            We built a system that does this inference work across your entire market. And just as important—it knows who to skip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;