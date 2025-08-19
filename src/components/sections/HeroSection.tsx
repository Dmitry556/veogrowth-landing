import React, { useEffect, useState } from 'react';
import { trackCalendlyClick } from '@/utils/analytics';

const HeroSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Next-gen Linear-style blur-in animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Small delay for dramatic effect
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Linear-style hero animations & navbar CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Next-gen Linear-style hero blur-in animation */
          .hero-container {
            opacity: 0;
            filter: blur(20px);
            transform: translateY(30px) scale(1.02);
            transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, filter, transform;
          }
          
          .hero-container.loaded {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0) scale(1);
          }
          
          /* Staggered blur-in for child elements */
          .hero-element {
            opacity: 0;
            filter: blur(15px);
            transform: translateY(20px);
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .loaded .hero-element:nth-child(1) { 
            transition-delay: 0.1s; 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0); 
          }
          .loaded .hero-element:nth-child(2) { 
            transition-delay: 0.2s; 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0); 
          }
          .loaded .hero-element:nth-child(3) { 
            transition-delay: 0.3s; 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0); 
          }
          .loaded .hero-element:nth-child(4) { 
            transition-delay: 0.4s; 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0); 
          }
          .loaded .hero-element:nth-child(5) { 
            transition-delay: 0.5s; 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0); 
          }
          
          .full-width-navbar {
            position: fixed !important;
            top: 0 !important;
            left: 50% !important;
            right: auto !important;
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            margin: 0 !important;
            margin-left: -50vw !important;
            transform: none !important;
            box-sizing: border-box !important;
          }
          
          /* Override any parent container constraints */
          .full-width-navbar * {
            box-sizing: border-box !important;
          }
          
          /* Force body and html to allow full width */
          body, html {
            overflow-x: auto !important;
            width: 100% !important;
          }
        `
      }} />
      
      {/* Elegant Navigation */}
      <nav 
        className="full-width-navbar fixed top-0 z-50"
        style={{
          padding: '12px 32px',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled ? 'rgba(17, 18, 19, 0.8)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          boxShadow: scrolled ? '0 1px 10px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'background 0.2s ease, backdrop-filter 0.2s ease, box-shadow 0.2s ease',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a 
            href="#" 
            style={{
              fontFamily: "'SF Mono', Monaco, Consolas, monospace",
              fontSize: '16px',
              fontWeight: '500',
              color: '#EAEAEA',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              opacity: '0.95'
            }}
          >
            Veogrowth
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden md:flex">
            <a 
              href="/case-studies" 
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.target.style.color = '#B0B0B0'}
            >
              Case Studies
            </a>
            <a 
              href="/blog" 
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.target.style.color = '#B0B0B0'}
            >
              Blog
            </a>
            <a 
              href="/tools" 
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.target.style.color = '#B0B0B0'}
            >
              Free Tools
            </a>
            <a 
              href="#pricing" 
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#EAEAEA'}
              onMouseLeave={(e) => e.target.style.color = '#B0B0B0'}
            >
              Pricing
            </a>
            <button 
              style={{
                padding: '8px 20px',
                background: '#FAFAFA',
                color: '#111213',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '400',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.92';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Request the pilot
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: '#0a0a0a',
          color: '#EAEAEA',
          fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.4), transparent),
                radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.3), transparent),
                radial-gradient(1.5px 1.5px at 45% 85%, rgba(255,255,255,0.35), transparent)
              `,
              backgroundSize: '400px 300px, 300px 400px, 200px 200px'
            }}
          />
        </div>

        <div 
          className={`hero-container ${loaded ? 'loaded' : ''}`}
          style={{
            position: 'relative',
            zIndex: '10',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '100px 40px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Status Pill */}
            <div 
              className="hero-element"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '100px',
                padding: '8px 20px',
                marginBottom: '40px',
                fontSize: '13px',
                fontFamily: "'SF Mono', Monaco, Consolas, monospace"
              }}
            >
              <span 
                style={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#B0B0B0',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Proof-of-Concept Pilot
              </span>
              <span style={{ color: '#7A7A7A', marginLeft: '4px', opacity: '0.6' }}>→</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="hero-element relative text-center font-montserrat"
              style={{
                fontSize: 'clamp(42px, 5.4vw, 56px)',
                lineHeight: '1.05',
                letterSpacing: '-0.04em',
                marginBottom: '40px',
                fontWeight: '400',
                background: 'linear-gradient(135deg, #9ca3af 0%, #d1d5db 25%, #e5e7eb 50%, #f9fafb 75%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}
            >
              <div 
                className="absolute -z-10"
                style={{
                  content: '',
                  position: 'absolute',
                  inset: '-20px -40px',
                  background: 'radial-gradient(ellipse 120% 50% at center, rgba(255, 255, 255, 0.06) 0%, rgba(229, 231, 235, 0.03) 40%, transparent 70%)',
                  borderRadius: '24px',
                  filter: 'blur(1px)'
                }}
              />
              We'll run your cold email campaign<br />
              until we book 2 meetings - free.
            </h1>

            {/* Elegant Subheadline */}
            <div 
              className="hero-element"
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: '#B0B0B0',
                textAlign: 'center',
                marginBottom: '40px',
                opacity: '0.9',
                fontStyle: 'italic'
              }}
            >
              Then only pay for{' '}
              <span 
                style={{
                  color: '#ffffff',
                  fontWeight: '500',
                  fontStyle: 'normal',
                  position: 'relative'
                }}
              >
                qualified calls
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    right: '0',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                    opacity: '0.8'
                  }}
                />
              </span>
              {' '}that show up.
            </div>

            {/* Description */}
            <div className="hero-element" style={{ maxWidth: '520px', margin: '0 auto 48px', textAlign: 'center' }}>
              <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.5', 
                marginBottom: '24px', 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontWeight: '500', 
                letterSpacing: '-0.02em' 
              }}>
                We bet our revenue on results.
              </p>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6', 
                marginBottom: '20px', 
                color: 'rgba(255, 255, 255, 0.8)', 
                letterSpacing: '-0.015em' 
              }}>
                Tell us what you sell and who you want to reach. Our AI finds, researches, and sends the email of the year to your prospects.
              </p>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6', 
                color: 'rgba(255, 255, 255, 0.8)', 
                letterSpacing: '-0.015em' 
              }}>
                You approve the copy & targeting. We launch in less than 24 hours.
              </p>
            </div>

            {/* Form */}
            <div className="hero-element" style={{ maxWidth: '520px', margin: '0 auto 60px' }}>
              <div 
                style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <input 
                  type="email"
                  placeholder="What's your work email?"
                  style={{
                    flex: '2',
                    height: '48px',
                    padding: '0 20px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#EAEAEA',
                    fontSize: '15px',
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  }}
                />
                <button 
                  onClick={() => {
                    trackCalendlyClick('hero-elegant');
                    window.open('https://calendly.com/veogrowth', '_blank');
                  }}
                  style={{
                    flexShrink: '0',
                    height: '48px',
                    padding: '0 26px',
                    background: '#FAFAFA',
                    color: '#111213',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.95';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Request the pilot
                </button>
              </div>
            </div>

            {/* Elegant Video Placeholder */}
            <div className="max-w-2xl mx-auto mb-15">
              <div 
                className="w-full aspect-video bg-gray-800/50 border-2 border-white/20 rounded-lg cursor-pointer hover:border-white/30 hover:-translate-y-0.5 transition-all min-h-48"
                onClick={() => {
                  // Keep existing video functionality if any
                  console.log('Video clicked - integrate existing video player');
                }}
              />
            </div>

            {/* Trust Section */}
            <div style={{ marginTop: 'auto', paddingTop: '60px', paddingBottom: '0px', textAlign: 'center' }}>
              <p style={{ 
                fontSize: '14px', 
                color: '#6B7280', 
                marginBottom: '36px', 
                opacity: '0.8' 
              }}>
                Companies we booked meetings for our clients with
              </p>
              
              {/* Logo Grid */}
              <div style={{ 
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80vw', 
                maxWidth: '1200px', 
                margin: '0'
              }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(8, 1fr)', 
                  gap: '32px', 
                  alignItems: 'center', 
                  justifyItems: 'center' 
                }}>
                  {[
                    { name: 'Apple', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg' },
                    { name: 'Amazon', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg' },
                    { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
                    { name: 'Microsoft', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg' },
                    { name: 'PayPal', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg' },
                    { name: 'Nike', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg' },
                    { name: 'Tesla', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg' },
                    { name: 'Meta', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg' },
                    { name: 'HubSpot', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg' },
                    { name: 'Netflix', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg' },
                    { name: 'Adobe', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg' },
                    { name: 'IBM', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ibm.svg' },
                    { name: 'Salesforce', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg' },
                    { name: 'FedEx', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fedex.svg' },
                    { name: 'Samsung', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/samsung.svg' },
                    { name: 'Intel', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg' }
                  ].map((company, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '48px'
                      }}
                    >
                      <img 
                        src={company.src}
                        alt={`${company.name} logo`}
                        style={{ 
                          height: '32px',
                          width: 'auto',
                          objectFit: 'contain',
                          opacity: '0.3',
                          transition: 'opacity 0.3s ease',
                          filter: 'brightness(0) saturate(100%) invert(1)'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '0.6'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.3'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 mt-7 text-gray-600 text-sm hover:text-gray-400 transition-colors group"
              >
                See case studies 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;