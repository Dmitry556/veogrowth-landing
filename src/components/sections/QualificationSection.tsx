import React from 'react';

const QualificationSection: React.FC = () => {
  const requirements = [
    {
      title: "A large market.",
      description: [
        "We need <strong>50,000+ potential customers</strong>.",
        "Our approach requires scale to build proper intelligence and segments.",
        "Small TAMs can't support this."
      ]
    },
    {
      title: "Proven traction.",
      description: [
        "You should be doing <strong>$100K+ monthly</strong>.",
        "This proves you can handle meeting volume and actually close deals.",
        "We're here to <strong>scale what's working</strong>, not validate your model."
      ]
    },
    {
      title: "A real solution.",
      description: [
        "Your product needs to solve <strong>actual business problems</strong>.",
        "We can identify prospects struggling with those exact problems.",
        "But you need something worth talking about."
      ]
    }
  ];

  return (
    <section id="qualification" style={{
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
            Who This Is For
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
            This Only Works If You Have Three Things
          </h2>
        </div>
        
        {/* Three Requirements */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 120px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {requirements.map((req, index) => (
              <div key={index} style={{
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '18px',
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}>{index + 1}</span>
                  </div>
                  <div style={{ flex: '1' }}>
                    <h3 style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '28px',
                      fontWeight: '500',
                      marginBottom: '24px',
                      color: '#EAEAEA',
                      letterSpacing: '-0.02em'
                    }}>
                      {req.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {req.description.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          style={{
                            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            color: '#B0B0B0',
                            lineHeight: '1.6',
                            fontSize: '18px',
                            margin: '0',
                            letterSpacing: '-0.01em'
                          }}
                          dangerouslySetInnerHTML={{ 
                            __html: line.replace(/<strong>/g, '<strong style="color: #FFFFFF; font-weight: 600;">') 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Message */}
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '48px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '20px',
              color: '#B0B0B0',
              lineHeight: '1.5',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>
              <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>If that's you</strong>, we should talk.
            </p>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '20px',
              color: '#B0B0B0',
              lineHeight: '1.5',
              marginBottom: '24px',
              letterSpacing: '-0.01em'
            }}>
              <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>If not</strong>, we're probably not a fit—and that's okay.
            </p>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '18px',
              color: '#B0B0B0',
              lineHeight: '1.5',
              fontWeight: '500',
              letterSpacing: '-0.01em'
            }}>
              We only work with <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>5 companies per month</strong> because each requires custom intelligence building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;