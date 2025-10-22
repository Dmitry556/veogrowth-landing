import React, { useEffect, useState } from 'react';
import { trackCalendlyClick } from '@/utils/analytics';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

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

          .hero-headline-line {
            display: block;
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

          .hero-logo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: clamp(16px, 3vw, 32px);
            align-items: center;
            justify-items: center;
          }

          @media (max-width: 768px) {
            .hero-logo-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
              max-width: 480px;
              margin: 0 auto;
            }

            .hero-logo-grid > div:nth-child(n+7) {
              display: none;
            }
          }

          .hero-cta {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 24px;
            min-width: min(90vw, 420px);
            border-radius: 24px;
            background: linear-gradient(145deg, rgba(13, 110, 90, 0.88) 0%, rgba(12, 90, 78, 0.9) 55%, rgba(9, 71, 63, 0.92) 100%);
            color: #e9faf4;
            font-size: clamp(18px, 2.4vw, 21px);
            font-weight: 600;
            letter-spacing: -0.016em;
            border: 1px solid rgba(45, 212, 191, 0.28);
            box-shadow: 0 24px 44px rgba(6, 60, 50, 0.32);
            transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .hero-cta::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .hero-cta:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 30px 56px rgba(6, 60, 50, 0.36);
            background: linear-gradient(145deg, rgba(12, 90, 78, 0.96) 0%, rgba(10, 78, 69, 0.97) 55%, rgba(7, 64, 55, 0.97) 100%);
          }

          .hero-cta:hover::after {
            opacity: 0.28;
          }

          .hero-cta:focus-visible {
            outline: 3px solid rgba(45, 212, 191, 0.45);
            outline-offset: 4px;
          }

          .hero-cta__label {
            flex: 1;
            text-align: left;
            display: inline-block;
            font-size: clamp(24px, 3.2vw, 30px);
            line-height: 0.9;
            letter-spacing: -0.025em;
            transform: translateY(1px);
          }

          .hero-cta__arrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: linear-gradient(135deg, rgba(226, 252, 239, 0.85) 0%, rgba(209, 250, 229, 0.8) 100%);
            color: #064e3b;
            font-size: 24px;
            font-weight: 600;
            box-shadow: 0 12px 22px rgba(5, 46, 39, 0.24);
            transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          }

          .hero-cta:hover .hero-cta__arrow {
            transform: translateX(3px);
            box-shadow: 0 16px 30px rgba(5, 46, 39, 0.3);
            background: linear-gradient(135deg, rgba(226, 252, 239, 0.95), rgba(209, 250, 229, 0.9));
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

          @media (max-width: 1024px) {
            .hero-container {
              padding: 72px 24px 48px;
              min-height: auto;
              gap: 32px;
            }

            .hero-cta {
              padding: 18px 22px;
              min-width: min(96vw, 380px);
            }
          }

          @media (max-width: 768px) {
            .hero-container {
              padding: 60px 20px 40px;
            }

            .hero-cta {
              gap: 12px;
              min-width: 100%;
              flex-direction: column;
              align-items: stretch;
              border-radius: 20px;
            }

            .hero-cta__label {
              text-align: center;
              font-size: clamp(20px, 6vw, 28px);
            }

            .hero-cta__arrow {
              margin: 8px auto 0;
            }

            .hero-headline-accent {
              padding: 8px 16px;
            }

            .hero-logo-grid {
              width: 100%;
              gap: 20px;
            }
          }

          @media (max-width: 480px) {
            .hero-container {
              padding: 48px 16px 32px;
            }

            .hero-headline-accent {
              font-size: clamp(18px, 5.8vw, 24px);
              border-radius: 10px;
            }

            .hero-cta {
              padding: 16px 18px;
            }

            .hero-logo-grid img {
              height: 34px;
            }
          }
        `
      }} />
      
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
            padding: 'clamp(64px, 8vw, 92px) clamp(20px, 5vw, 32px) clamp(40px, 7vw, 52px)',
            minHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div className="max-w-5xl mx-auto text-center">

            {/* Spacer to preserve original top rhythm */}
            <div
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 22px',
                marginBottom: '24px',
                visibility: 'hidden',
                pointerEvents: 'none'
              }}
            >
              <span className="ping-wrapper" />
              <span>Limited spots left for Q4</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="hero-element relative text-center font-montserrat"
              style={{
                fontSize: 'clamp(40px, 5vw, 56px)',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                margin: '0 auto 30px',
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
                <span className="hero-headline-line">Systematic outreach to every</span>
                <span className="hero-headline-line">qualified lead in your TAM</span>
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
                margin: '0 auto 28px',
                letterSpacing: '-0.02em',
                maxWidth: '520px',
                position: 'relative'
              }}
            >
              Pay only for the qualified meetings/signups you get out of it.
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
            <div className="hero-element" style={{ margin: 'clamp(20px, 5vw, 32px) auto clamp(32px, 6vw, 44px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(14px, 4vw, 18px)' }}>
              <button
                type="button"
                className="hero-cta"
                onClick={() => {
                  trackCalendlyClick('hero-free-pilot');
                  window.open('https://calendly.com/veogrowth/discovery', '_blank');
                }}
              >
                <span className="hero-cta__label">Start Your 2 Free Sales Meetings Pilot</span>
                <span className="hero-cta__arrow" aria-hidden="true">➜</span>
              </button>
              <div className="hero-element" style={{ marginTop: '-4px', width: '100%' }}>
                <p
                  style={{
                    margin: '0 auto',
                    maxWidth: 'min(95vw, 560px)',
                    fontSize: '12px',
                    color: '#f8fafc',
                    lineHeight: '1.5',
                    textAlign: 'left',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    columnGap: '8px',
                    rowGap: '5px',
                    alignItems: 'start'
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
                      border: '1px solid rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    New
                  </span>
                  <span style={{ display: 'inline', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600 }}>
                    <strong style={{ letterSpacing: '-0.01em', color: '#ffffff', fontWeight: 700 }}>Free Trial Offer:</strong>{' '}
                    We'll book your first 2 meetings for free to prove outbound works for your business <span style={{ position: 'relative', display: 'inline-block', padding: '0 2px' }}><span style={{ position: 'absolute', inset: '60% 0 0', background: 'rgba(16, 185, 129, 0.25)', borderRadius: '999px' }}></span><span style={{ position: 'relative', zIndex: 1, fontWeight: 700 }}>before you pay a dime</span></span>. <span style={{ opacity: 0.9 }}>(No obligations, no commitment)</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Status Pill */}
            <div 
              className="hero-element"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(15, 23, 42, 0.52)',
                border: '1px solid rgba(45, 212, 191, 0.35)',
                borderRadius: '999px',
                padding: '10px clamp(18px, 6vw, 24px)',
                margin: '0 auto clamp(32px, 7vw, 48px)',
                fontSize: '12px',
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(209, 250, 229, 0.9)',
                boxShadow: '0 12px 30px rgba(13, 148, 136, 0.18)'
              }}
            >
              <span className="ping-wrapper" aria-hidden="true"></span>
              <span style={{ letterSpacing: '0.16em', textTransform: 'uppercase', color: 'inherit', fontWeight: 600 }}>
                Limited spots left for Q4
              </span>
            </div>

            {/* Trust Section */}
            <div style={{ marginTop: 'auto', paddingTop: '26px', paddingBottom: '0px', textAlign: 'center' }}>
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
                <div className="hero-logo-grid">
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
