import React from 'react';
import CustomCard from '../ui/CustomCard';
import { LineChart, ArrowUpRight, Zap, DollarSign, Database } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <Database className="text-primary" />,
      title: "Layer 1: We Build Custom Intelligence",
      description: [
        "<strong>Everyone else</strong> pulls \"VPs at SaaS companies\" from Apollo.",
        "<strong>We</strong> build <strong>custom intelligence</strong> that doesn't exist in any database:",
        "<strong>Which companies just expanded?</strong>",
        "<strong>Who hired 10+ salespeople last quarter?</strong>",
        "<strong>Who's implementing new tools and struggling with integration?</strong>"
      ],
      gradient: "from-blue-600/20 to-blue-400/5"
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Layer 2: Our AI Actually Thinks",
      description: [
        "<strong>Most \"AI\"</strong> just fills in templates.",
        "<strong>Ours</strong> analyzes each prospect and <strong>infers:</strong>",
        "• Who's actively struggling with <strong>problems you solve</strong>",
        "• Who's <strong>NOT ready</strong> (we skip them, protecting your reputation)",
        "• What <strong>specific challenge</strong> they're facing this week"
      ],
      gradient: "from-amber-500/20 to-amber-300/5"
    },
    {
      icon: <ArrowUpRight className="text-green-600" />,
      title: "Layer 3: We Write About Problems, Not Features",
      description: [
        "Instead of <em>\"I noticed you're growing fast,\"</em>",
        "<strong>Our AI writes:</strong>",
        "<em>\"With your team doubling since January, I imagine your onboarding playbook from 20 employees doesn't scale to 50.\"</em>"
      ],
      gradient: "from-green-600/20 to-green-400/5"
    }
  ];

  return (
    <section id="solutions" style={{
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
            Our Innovation
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
            How We Get 10x Better Results Than Everyone Else
          </h2>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '22px',
            color: '#B0B0B0',
            lineHeight: '1.5',
            fontWeight: '500',
            marginBottom: '64px',
            letterSpacing: '-0.01em'
          }}>
            We didn't just improve cold email. We rebuilt every single step from scratch.
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
              }}>The Old Way (Broken)</h3>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '18px',
                color: '#B0B0B0',
                lineHeight: '1.6',
                letterSpacing: '-0.01em'
              }}>
                Traditional cold email follows the same broken process: <strong style={{ color: '#FFFFFF' }}>Buy list</strong> → <strong style={{ color: '#FFFFFF' }}>Add basic personalization</strong> → <strong style={{ color: '#FFFFFF' }}>Blast everyone</strong> → <strong style={{ color: '#FFFFFF' }}>Hope for replies</strong>.
              </p>
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
              }}>Our Way (Rebuilt From Scratch)</h3>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '18px',
                color: '#B0B0B0',
                lineHeight: '1.6',
                marginBottom: '32px',
                letterSpacing: '-0.01em'
              }}>
                We threw that out and reimagined everything:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    marginTop: '2px'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}>•</span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    color: '#B0B0B0',
                    lineHeight: '1.6',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>How lists are built (<strong style={{ color: '#FFFFFF' }}>custom intelligence</strong>, not database filters)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    marginTop: '2px'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}>•</span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    color: '#B0B0B0',
                    lineHeight: '1.6',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>How prospects are qualified (<strong style={{ color: '#FFFFFF' }}>AI inference</strong>, not spray and pray)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    marginTop: '2px'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}>•</span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    color: '#B0B0B0',
                    lineHeight: '1.6',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>How messages are written (<strong style={{ color: '#FFFFFF' }}>problem-first</strong>, not feature-first)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    marginTop: '2px'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}>•</span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    color: '#B0B0B0',
                    lineHeight: '1.6',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>How campaigns are structured (<strong style={{ color: '#FFFFFF' }}>20+ micro-campaigns</strong>, not one blast)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: '0',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    marginTop: '2px'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}>•</span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    color: '#B0B0B0',
                    lineHeight: '1.6',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>How infrastructure is managed (<strong style={{ color: '#FFFFFF' }}>protected domains</strong>, not burned reputation)</p>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '24px',
                color: '#EAEAEA',
                lineHeight: '1.5',
                fontWeight: '500',
                letterSpacing: '-0.02em'
              }}>
                Here's our three-layer system that makes it all work:
              </p>
            </div>
          </div>
        </div>
        
        {/* Three-Layer System */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '48px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0'
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
                  }}>{solution.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {solution.description.map((line, lineIndex) => (
                      <p 
                        key={lineIndex} 
                        style={{
                          fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                          color: '#B0B0B0',
                          lineHeight: '1.6',
                          fontSize: '16px',
                          margin: '0',
                          letterSpacing: '-0.01em'
                        }}
                        dangerouslySetInnerHTML={{ 
                          __html: line.replace(/<strong>/g, '<strong style="color: #FFFFFF; font-weight: 600;">').replace(/<em>/g, '<em style="color: #EAEAEA; font-style: italic;">') 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Formula */}
        <div style={{ marginTop: '80px', maxWidth: '1000px', margin: '80px auto 0' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '48px 40px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: '500',
              marginBottom: '24px',
              color: '#EAEAEA',
              letterSpacing: '-0.02em'
            }}>The math is simple:</p>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '20px',
              color: '#B0B0B0',
              lineHeight: '1.5',
              letterSpacing: '-0.01em'
            }}>
              <strong style={{ color: '#FFFFFF' }}>Better Data</strong> × <strong style={{ color: '#FFFFFF' }}>Smarter AI</strong> × <strong style={{ color: '#FFFFFF' }}>Real Problems</strong> = <span style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '24px' }}>30+ meetings per month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;