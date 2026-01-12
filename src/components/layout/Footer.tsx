import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCalendlyClick } from '@/utils/analytics';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#05090f',
        borderTop: '1px solid rgba(45, 212, 191, 0.08)',
        boxShadow: '0 -32px 60px rgba(2, 6, 12, 0.6)'
      }}
    >
      {/* CTA Section */}
      <div
        style={{
          background:
            'radial-gradient(circle at top, rgba(16, 185, 129, 0.12) 0%, transparent 58%), linear-gradient(180deg, rgba(10, 20, 24, 0.95) 0%, rgba(5, 10, 15, 0.88) 100%)',
          borderBottom: '1px solid rgba(45, 212, 191, 0.12)',
          padding: 'clamp(56px, 10vw, 84px) 0'
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              color: 'rgba(239, 246, 255, 0.96)',
              marginBottom: '26px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}
          >
            Ready to Generate 30+ Meetings Per Month?
          </h2>
          <p
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '18px',
              color: 'rgba(214, 234, 248, 0.72)',
              marginBottom: '36px',
              letterSpacing: '-0.01em'
            }}
          >
            Start with 2 free meetings. No contracts. No risk.
          </p>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              padding: 'clamp(16px, 4.8vw, 20px) clamp(22px, 6vw, 26px)',
              width: 'min(100%, 420px)',
              borderRadius: '24px',
              background:
                'linear-gradient(145deg, rgba(13, 110, 90, 0.9) 0%, rgba(12, 90, 78, 0.92) 55%, rgba(9, 71, 63, 0.94) 100%)',
              color: '#e9faf4',
              fontSize: 'clamp(18px, 2.4vw, 21px)',
              fontWeight: 600,
              letterSpacing: '-0.016em',
              border: '1px solid rgba(45, 212, 191, 0.28)',
              boxShadow: '0 24px 44px rgba(6, 60, 50, 0.32)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => {
              trackCalendlyClick('footer-cta');
              window.open('https://calendly.com/veogrowth/discovery', '_blank');
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'translateY(-3px) scale(1.01)';
              target.style.boxShadow = '0 30px 56px rgba(6, 60, 50, 0.38)';
              target.style.background =
                'linear-gradient(145deg, rgba(12, 90, 78, 0.95) 0%, rgba(10, 78, 69, 0.96) 55%, rgba(7, 64, 55, 0.97) 100%)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'translateY(0) scale(1)';
              target.style.boxShadow = '0 24px 44px rgba(6, 60, 50, 0.32)';
              target.style.background =
                'linear-gradient(145deg, rgba(13, 110, 90, 0.9) 0%, rgba(12, 90, 78, 0.92) 55%, rgba(9, 71, 63, 0.94) 100%)';
            }}
          >
            <span style={{ flex: 1, textAlign: 'left' }}>Apply For Your 2 Free Sales Meetings Pilot</span>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background:
                  'linear-gradient(135deg, rgba(226, 252, 239, 0.85) 0%, rgba(209, 250, 229, 0.8) 100%)',
                color: '#064e3b',
                fontSize: '24px',
                fontWeight: 600,
                boxShadow: '0 12px 22px rgba(5, 46, 39, 0.24)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease'
              }}
            >
              ➜
            </span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(36px, 8vw, 48px) clamp(20px, 6vw, 32px) clamp(24px, 6vw, 32px)' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(28px, 7vw, 48px)',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ flex: '1 1 320px', minWidth: '260px' }}>
            <Link
              to="/"
              aria-label="Veogrowth homepage"
              style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '24px',
                fontWeight: 600,
                color: '#f1f5f9',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              Veogrowth
            </Link>
            <p
              style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '14px',
                color: 'rgba(148, 163, 184, 0.78)',
                lineHeight: 1.6,
                marginBottom: '20px',
                letterSpacing: '-0.01em'
              }}
            >
              AI-powered B2B lead generation that delivers 30+ qualified meetings per month. Pay only for results.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="mailto:dmitry@veogrowth.com"
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '13px',
                  color: 'rgba(148, 163, 184, 0.75)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
              >
                <Mail size={16} />
                dmitry@veogrowth.com
              </a>
              <a
                href="https://linkedin.com/company/veogrowth"
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '13px',
                  color: 'rgba(148, 163, 184, 0.75)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
              >
                <Linkedin size={16} />
                Follow us on LinkedIn
              </a>
            </div>
          </div>

          <div
            style={{
              flex: '1 1 320px',
              minWidth: '260px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '48px'
            }}
          >
            <div style={{ minWidth: '160px' }}>
              <h3
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'rgba(203, 213, 225, 0.7)',
                  marginBottom: '12px'
                }}
              >
                Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link
                  to="/case-studies"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Case Studies
                </Link>
                <Link
                  to="/blog"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Blog
                </Link>
                <Link
                  to="/tools"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Free Tools
                </Link>
              </div>
            </div>
            <div style={{ minWidth: '160px' }}>
              <h3
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'rgba(203, 213, 225, 0.7)',
                  marginBottom: '12px'
                }}
              >
                Legal
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link
                  to="/privacy-policy"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/security"
                  style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(148, 163, 184, 0.75)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2f7f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148, 163, 184, 0.75)')}
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '40px',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '12px',
              color: 'rgba(107, 114, 128, 0.8)',
              margin: 0
            }}
          >
            © {new Date().getFullYear()} Veogrowth. All rights reserved.
          </p>
          <span
            style={{
              fontFamily: "'SF Mono', Monaco, Consolas, monospace",
              fontSize: '11px',
              color: 'rgba(148, 163, 184, 0.7)',
              letterSpacing: '0.1em'
            }}
          >
            Performance-Based Lead Generation
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
