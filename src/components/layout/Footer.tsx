import React from 'react';
import CustomButton from '../ui/CustomButton';
import { Linkedin, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      
      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '500',
            color: '#EAEAEA',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Ready to Generate 30+ Meetings Per Month?
          </h2>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '20px',
            color: '#B0B0B0',
            marginBottom: '40px',
            letterSpacing: '-0.01em'
          }}>
            Start with 2 free meetings. No contracts. No risk.
          </p>
          <CustomButton 
            href="https://calendly.com/veogrowth"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E5E5E5 100%)',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              letterSpacing: '-0.01em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Calendar size={20} />
            Book Strategy Call
          </CustomButton>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          
          {/* Company Info */}
          <div>
            <Link to="/" style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '28px',
              fontWeight: '600',
              color: '#EAEAEA',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '20px',
              letterSpacing: '-0.02em'
            }} aria-label="Veogrowth homepage">
              Veogrowth
            </Link>
            <p style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '16px',
              color: '#B0B0B0',
              lineHeight: '1.6',
              marginBottom: '24px',
              letterSpacing: '-0.01em'
            }}>
              AI-powered B2B lead generation that delivers 30+ qualified meetings per month. Pay only for results.
            </p>
            
            {/* Contact Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="mailto:hello@veogrowth.com" 
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '14px',
                  color: '#B0B0B0',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s ease',
                  letterSpacing: '-0.01em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}
              >
                <Mail size={16} />
                hello@veogrowth.com
              </a>
              <a 
                href="https://linkedin.com/company/veogrowth" 
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '14px',
                  color: '#B0B0B0',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s ease',
                  letterSpacing: '-0.01em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}
              >
                <Linkedin size={16} />
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h3 style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '18px',
              fontWeight: '500',
              color: '#EAEAEA',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>Resources</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/case-studies" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Case Studies</Link>
              
              <Link to="/blog" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Blog</Link>
              
              <Link to="/tools" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Free Tools</Link>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '18px',
              fontWeight: '500',
              color: '#EAEAEA',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>Legal</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/privacy-policy" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Privacy Policy</Link>
              
              <Link to="/terms-of-service" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Terms of Service</Link>
              
              <Link to="/security" style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: '#B0B0B0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Security</Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '14px',
            color: '#7A7A7A',
            letterSpacing: '-0.01em',
            margin: '0'
          }}>
            © {new Date().getFullYear()} Veogrowth. All rights reserved.
          </p>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '12px',
            fontFamily: "'SF Mono', Monaco, Consolas, monospace",
            color: '#B0B0B0',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}>
            Performance-Based Lead Generation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;