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

          .hero-headline-primary {
            display: inline-block;
            margin-bottom: 6px;
            font-weight: 600;
            letter-spacing: -0.035em;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(226, 232, 240, 0.65));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-headline-accent {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 6px 18px;
            border-radius: 12px;
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.28), rgba(20, 184, 166, 0.18));
            border: 1px solid rgba(45, 212, 191, 0.3);
            box-shadow: 0 14px 28px rgba(13, 148, 136, 0.25);
            color: #f0fdfa;
            letter-spacing: -0.02em;
            text-shadow: none;
          }

      @keyframes ctaPulse {
        0% {
          transform: translateX(-120%);
          opacity: 0;
        }
        35% {
          transform: translateX(20%);
          opacity: 0.45;
        }
        50% {
          transform: translateX(60%);
          opacity: 0.25;
        }
        100% {
          transform: translateX(140%);
          opacity: 0;
        }
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

          .ping-wrapper {
            position: relative;
            width: 10px;
            height: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
          }

          .ping-wrapper::before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            background: rgba(45, 212, 191, 0.45);
            animation: heroPing 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .ping-wrapper::after {
            content: '';
            position: relative;
            width: 6px;
            height: 6px;
            border-radius: 9999px;
            background: #5eead4;
            box-shadow: 0 0 12px rgba(94, 234, 212, 0.5);
          }

          @keyframes heroPing {
            0% {
              transform: scale(0.6);
              opacity: 0.8;
            }
            70% {
              transform: scale(2.1);
              opacity: 0;
            }
            100% {
              transform: scale(2.1);
              opacity: 0;
            }
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
            padding: '80px 32px 64px',
            minHeight: '88vh',
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
                gap: '12px',
                background: 'rgba(18, 24, 36, 0.55)',
                border: '1px solid rgba(94, 234, 212, 0.25)',
                borderRadius: '999px',
                padding: '10px 22px',
                marginBottom: '36px',
                fontSize: '13px',
                fontFamily: "'SF Mono', Monaco, Consolas, monospace",
                color: '#A5F3FC',
                boxShadow: '0 12px 30px rgba(14, 116, 144, 0.15)'
              }}
            >
              <span className="ping-wrapper" aria-hidden="true"></span>
              <span style={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Limited spots left for Q4
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="hero-element relative text-center font-montserrat"
              style={{
                fontSize: 'clamp(40px, 5vw, 56px)',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                margin: '0 auto 26px',
                fontWeight: '500',
                position: 'relative',
                maxWidth: '920px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                alignItems: 'center'
              }}
            >
              <div 
                className="absolute -z-10"
                style={{
                  content: '',
                  position: 'absolute',
                  inset: '-12px -28px',
                  background: 'radial-gradient(ellipse 115% 45% at center, rgba(255, 255, 255, 0.05) 0%, rgba(229, 231, 235, 0.02) 45%, transparent 75%)',
                  borderRadius: '22px',
                  filter: 'blur(0.5px)'
                }}
              />
              <span className="hero-headline-primary">
                Systematic outreach to every qualified lead in your TAM
              </span>
              <span className="hero-headline-accent" style={{ fontSize: 'clamp(22px, 2.7vw, 30px)', fontWeight: 500 }}>
                with 1:1 researched, relevant cold emails.
              </span>
            </h1>

            {/* Elegant Subheadline */}
            <div 
              className="hero-element"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: 'rgba(229, 231, 235, 0.9)',
                textAlign: 'center',
                margin: '0 auto 30px',
                letterSpacing: '-0.02em',
                maxWidth: '520px',
                position: 'relative'
              }}
            >
              Pay only for the qualified meetings you get out of it.
              <span
                style={{
                  display: 'block',
                  margin: '12px auto 0',
                  width: '160px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(236, 254, 255, 0.6), transparent)',
                  opacity: 0.9
                }}
              />
            </div>

            {/* CTA */}
            <div className="hero-element" style={{ margin: '0 auto 44px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => {
                  trackCalendlyClick('hero-free-pilot');
                  window.open('https://calendly.com/veogrowth', '_blank');
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '32px',
                  padding: '22px 56px 22px 52px',
                  minWidth: 'min(95vw, 560px)',
                  borderRadius: '26px',
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: '-0.016em',
                  color: '#073429',
                  background: 'linear-gradient(135deg, #34d399 0%, #4ade80 40%, #5eead4 75%, #a5f3fc 100%)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <span style={{ flex: 1, textAlign: 'left', position: 'relative', zIndex: 1 }}>Apply For Your 2 Free Sales Meetings Pilot</span>
                <span
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '54px',
                    height: '54px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.85))',
                    color: '#0b8c7a',
                    fontSize: '26px',
                    boxShadow: '0 6px 14px rgba(13, 148, 136, 0.22)'
                  }}
                >
                  ➜
                </span>
              </button>
              <div className="hero-element" style={{ marginTop: '-4px', width: '100%' }}>
                <p
                  style={{
                    margin: '0 auto',
                    maxWidth: 'min(95vw, 640px)',
                    fontSize: '15px',
                    color: '#f8fafc',
                    lineHeight: '1.55',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      color: '#0f766e',
                      fontWeight: 700,
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      marginRight: '8px'
                    }}
                  >
                    New
                  </span>
                  <strong style={{ letterSpacing: '-0.01em', marginRight: '6px', color: '#ffffff' }}>Free Trial Offer:</strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.92)', fontWeight: 500 }}>
                    We’ll book your first 2 meetings for free to prove outbound works for your business <span style={{ position: 'relative', display: 'inline-block', padding: '0 2px' }}><span style={{ position: 'absolute', inset: '60% 0 0', background: 'rgba(16, 185, 129, 0.25)', borderRadius: '999px' }}></span><span style={{ position: 'relative', zIndex: 1, fontWeight: 600 }}>before you pay a dime</span></span>. <span style={{ opacity: 0.9 }}>(No obligations, no commitment)</span>
                  </span>
                </p>
              </div>
            </div>
            {/* Trust Section */}
            <div style={{ marginTop: 'auto', paddingTop: '60px', paddingBottom: '0px', textAlign: 'center' }}>
              <p style={{ 
                fontSize: '16px', 
                color: '#E5E7EB', 
                marginBottom: '32px', 
                letterSpacing: '0.02em',
                fontWeight: 500,
                opacity: '0.9' 
              }}>
                Companies we booked meetings for our clients with
              </p>
              
              {/* Logo Grid */}
              <div style={{ 
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '88vw', 
                maxWidth: '1280px', 
                margin: '0'
              }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', 
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
                        height: '62px'
                      }}
                    >
                      <img 
                        src={company.src}
                        alt={`${company.name} logo`}
                        style={{ 
                          height: '48px',
                          width: 'auto',
                          objectFit: 'contain',
                          opacity: '0.7',
                          transition: 'opacity 0.3s ease, transform 0.3s ease',
                          filter: 'brightness(0) saturate(100%) invert(1)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '1';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '0.7';
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="/case-studies" 
                className="inline-flex items-center gap-3 mt-8 text-sm font-medium text-gray-200 hover:text-white transition-colors group"
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                See case studies 
                <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
