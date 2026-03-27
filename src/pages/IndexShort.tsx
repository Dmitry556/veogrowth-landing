
import React, { useEffect, useState, useRef } from 'react';
import HeaderShort from '@/components/layout/HeaderShort';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import MeetingHandoffSection from '@/components/sections/MeetingHandoffSection';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { generateHomePageSchema, schemaToString } from '@/utils/schema';
import { initTimeOnPageTracking } from '@/utils/analytics';
import { trackCalendlyClick } from '@/utils/analytics';

/* ── Font stacks ── */
const serif = "'Instrument Serif', Georgia, 'Times New Roman', serif";
const sans = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const mono = "'DM Mono', 'SF Mono', Monaco, Consolas, monospace";

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return /Headless/i.test(window.navigator.userAgent);
  });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !isVisible) setIsVisible(true); },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
const HeroShort: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-container {
          opacity: 0; filter: blur(20px); transform: translateY(30px) scale(1.02);
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, filter, transform;
        }
        .hero-container.loaded { opacity: 1; filter: blur(0px); transform: translateY(0) scale(1); }
        .hero-el { opacity: 0; filter: blur(15px); transform: translateY(20px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .loaded .hero-el:nth-child(1) { transition-delay: 0.1s; opacity: 1; filter: blur(0); transform: translateY(0); }
        .loaded .hero-el:nth-child(2) { transition-delay: 0.25s; opacity: 1; filter: blur(0); transform: translateY(0); }
        .loaded .hero-el:nth-child(3) { transition-delay: 0.4s; opacity: 1; filter: blur(0); transform: translateY(0); }
        .loaded .hero-el:nth-child(4) { transition-delay: 0.55s; opacity: 1; filter: blur(0); transform: translateY(0); }
        .loaded .hero-el:nth-child(5) { transition-delay: 0.7s; opacity: 1; filter: blur(0); transform: translateY(0); }

        .hero-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 16px;
          padding: 18px 36px; border-radius: 24px;
          background: linear-gradient(145deg, rgba(13,110,90,0.88) 0%, rgba(12,90,78,0.9) 55%, rgba(9,71,63,0.92) 100%);
          color: #e9faf4; font-family: ${sans}; font-size: 18px; font-weight: 500;
          letter-spacing: -0.01em;
          border: 1px solid rgba(45,212,191,0.28);
          box-shadow: 0 24px 44px rgba(6,60,50,0.32);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          cursor: pointer; position: relative; overflow: hidden;
        }
        .hero-cta::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .hero-cta:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 30px 56px rgba(6,60,50,0.36);
          background: linear-gradient(145deg, rgba(12,90,78,0.96) 0%, rgba(10,78,69,0.97) 55%, rgba(7,64,55,0.97) 100%);
        }
        .hero-cta:hover::after { opacity: 0.28; }
        .hero-cta:focus-visible { outline: 3px solid rgba(45,212,191,0.45); outline-offset: 4px; }

        .hero-cta__arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(226,252,239,0.85) 0%, rgba(209,250,229,0.8) 100%);
          color: #064e3b; font-size: 20px; font-weight: 600;
          box-shadow: 0 12px 22px rgba(5,46,39,0.24);
          transition: transform 0.25s ease;
        }
        .hero-cta:hover .hero-cta__arrow { transform: translateX(3px); }

        @media (max-width: 768px) {
          .hero-cta { gap: 12px; width: 100%; flex-direction: column; align-items: stretch; border-radius: 20px; padding: 18px 24px; }
          .hero-cta__arrow { margin: 8px auto 0; }
        }
      `}} />

      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: '#0a0a0a', color: '#EAEAEA' }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.3), transparent)`,
            backgroundSize: '400px 300px, 300px 400px'
          }} />
        </div>

        <div
          className={`hero-container ${loaded ? 'loaded' : ''}`}
          style={{
            position: 'relative', zIndex: 10, maxWidth: '960px', margin: '0 auto',
            padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 32px) clamp(48px, 8vw, 64px)',
            minHeight: '82vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'
          }}
        >
          {/* Headline — original gradient treatment */}
          <h1
            className="hero-el"
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(226, 232, 240, 0.65))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 auto 36px',
              maxWidth: '920px'
            }}
          >
            Your next 10 customers are ignoring everyone else's emails.
          </h1>

          {/* Subheadline — three voices */}
          <div className="hero-el" style={{ margin: '0 auto 40px', maxWidth: '480px' }}>
            {/* Value prop — Inter, regular, readable */}
            <p style={{
              fontFamily: sans,
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(229, 231, 235, 0.65)',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              margin: '0 0 14px'
            }}>
              Every prospect gets an email that reads like someone actually studied the account.
            </p>
            {/* Punchline — serif italic, stands alone */}
            <p style={{
              fontFamily: serif,
              fontSize: '20px',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.3,
              margin: '0 0 16px'
            }}>
              Because something did.
            </p>
            {/* Terms — mono, small, different register */}
            <p style={{
              fontFamily: mono,
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(94, 234, 212, 0.55)',
              letterSpacing: '0.02em',
              margin: 0
            }}>
              Pay per meeting. First two are free.
            </p>
          </div>

          {/* CTA */}
          <div className="hero-el" style={{ margin: '0 auto 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              type="button"
              className="hero-cta"
              onClick={() => { trackCalendlyClick('hero-free-pilot'); window.open('https://calendly.com/veogrowth/discovery', '_blank'); }}
            >
              <span>Book a Scoping Call</span>
              <span className="hero-cta__arrow" aria-hidden="true">&#10140;</span>
            </button>
          </div>

          {/* Spiff line — DM Mono, small, muted */}
          <p
            className="hero-el"
            style={{
              fontFamily: mono,
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(229, 231, 235, 0.38)',
              textAlign: 'center',
              margin: '0 auto',
              maxWidth: '480px',
              letterSpacing: '0.01em'
            }}
          >
            Plus: we pay your reps $500 for every deal they close from our leads.
          </p>
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════════
   PROOF — Podcast Whales (rebuilt with new typography)
   ═══════════════════════════════════════════ */
const ProofSection: React.FC = () => {
  return (
    <section
      id="results"
      style={{
        background: 'linear-gradient(180deg, #010409 0%, #020b12 50%, #04111a 100%)',
        padding: 'clamp(60px, 9vw, 88px) 0 clamp(72px, 10vw, 96px)',
        borderBottom: '1px solid rgba(45, 212, 191, 0.08)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)' }}>

        {/* Section label — mono, uppercase, tracked */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            fontFamily: mono,
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(94, 234, 212, 0.6)',
          }}>
            Proof
          </span>
        </div>

        {/* Quote — Instrument Serif, large italic */}
        <blockquote style={{ textAlign: 'center', margin: '0 auto 56px', maxWidth: '720px' }}>
          <p style={{
            fontFamily: serif,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            color: 'rgba(239, 246, 255, 0.9)',
            margin: 0
          }}>
            "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients"
          </p>
        </blockquote>

        {/* Video + details card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(12, 26, 34, 0.92) 0%, rgba(7, 18, 25, 0.9) 100%)',
          borderRadius: '20px',
          padding: 'clamp(28px, 6vw, 48px)',
          border: '1px solid rgba(45, 212, 191, 0.14)',
          boxShadow: '0 28px 56px rgba(2, 8, 12, 0.52)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 6vw, 48px)',
            alignItems: 'center'
          }}>
            {/* Video */}
            <div style={{
              position: 'relative', borderRadius: '12px', overflow: 'hidden',
              border: '1px solid rgba(45, 212, 191, 0.18)',
              boxShadow: '0 24px 48px rgba(2, 8, 12, 0.48)'
            }}>
              <AspectRatio ratio={16 / 9} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <div style={{ height: "100%", width: "100%" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    title="David Hughes Testimonial"
                  />
                </div>
              </AspectRatio>
            </div>

            {/* Text — Inter body, clear hierarchy */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: sans, fontSize: '15px', color: 'rgba(204, 228, 241, 0.75)', lineHeight: 1.65, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                  <span style={{ fontFamily: mono, fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(94, 234, 212, 0.5)', display: 'block', marginBottom: '8px' }}>Challenge</span>
                  Podcast Whales needed consistent pipeline of executives interested in starting podcasts, but generic "you should start a podcast" emails weren't working.
                </p>
                <p style={{ fontFamily: sans, fontSize: '15px', color: 'rgba(204, 228, 241, 0.75)', lineHeight: 1.65, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                  <span style={{ fontFamily: mono, fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(94, 234, 212, 0.5)', display: 'block', marginBottom: '8px' }}>Solution</span>
                  Instead of pitching podcasting services, we pitched <em style={{ color: '#ecfdf5', fontStyle: 'normal', fontWeight: 600 }}>specific podcast concepts</em> tailored to each prospect's business situation.
                </p>
                <p style={{ fontFamily: sans, fontSize: '15px', color: 'rgba(204, 228, 241, 0.75)', lineHeight: 1.65, marginBottom: '0', letterSpacing: '-0.01em' }}>
                  <span style={{ fontFamily: mono, fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(94, 234, 212, 0.5)', display: 'block', marginBottom: '8px' }}>Example</span>
                  To a CEO competing with Loom: <em style={{ fontFamily: serif, fontStyle: 'italic', color: '#ecfdf5', fontSize: '16px' }}>"What if you launched 'The Async CEO' — interviewing remote leaders about killing meetings? Position yourself as the anti-Loom."</em>
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(45, 212, 191, 0.1)', paddingTop: '16px' }}>
                <p style={{ fontFamily: sans, fontSize: '15px', fontWeight: 500, color: 'rgba(237, 244, 255, 0.94)', marginBottom: '2px' }}>
                  David Hughes
                </p>
                <p style={{ fontFamily: mono, fontSize: '12px', color: 'rgba(148, 197, 255, 0.55)', margin: 0, letterSpacing: '0.02em' }}>
                  Founder & CEO, <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(94, 234, 212, 0.7)', textDecoration: 'none', borderBottom: '1px solid rgba(94, 234, 212, 0.25)' }}>Podcast Whales</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PROCESS — one editorial line
   ═══════════════════════════════════════════ */
const ProcessLine: React.FC = () => (
  <section style={{ background: '#010409', padding: 'clamp(48px, 7vw, 64px) 0' }}>
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', textAlign: 'center' }}>
      <div style={{ width: '32px', height: '1px', background: 'rgba(94, 234, 212, 0.25)', margin: '0 auto 24px' }} />
      <p style={{
        fontFamily: serif,
        fontSize: 'clamp(22px, 3vw, 30px)',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'rgba(239, 246, 255, 0.65)',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        margin: 0
      }}>
        We handle everything. You show up to meetings.
      </p>
      <div style={{ width: '32px', height: '1px', background: 'rgba(94, 234, 212, 0.25)', margin: '24px auto 0' }} />
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   PRICING — compressed, 3 items
   ═══════════════════════════════════════════ */
const PricingShort: React.FC = () => {
  const items = [
    { num: '01', label: 'Free pilot.', detail: 'We book your first 2 meetings at zero cost. Zero commitment.' },
    { num: '02', label: 'Pay per meeting.', detail: 'After the pilot, you pay a fixed price per qualified meeting held. Price based on your deal economics.' },
    { num: '03', label: 'Setup fee.', detail: 'One-time $3–5K to build the infrastructure. You keep everything we build regardless.' }
  ];

  return (
    <section
      id="pricing"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #010409 0%, #020b12 40%, #04111a 70%, #010409 100%)',
        padding: 'clamp(60px, 9vw, 88px) 0',
        borderTop: '1px solid rgba(45, 212, 191, 0.08)',
        borderBottom: '1px solid rgba(45, 212, 191, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(45,212,191,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            fontFamily: mono,
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(94, 234, 212, 0.6)',
          }}>
            Pricing
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, rgba(12, 26, 34, 0.92) 0%, rgba(7, 18, 25, 0.9) 100%)',
                border: '1px solid rgba(45, 212, 191, 0.12)',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: '0 20px 40px rgba(2, 8, 12, 0.45)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.12)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                <span style={{ fontFamily: mono, fontSize: '12px', fontWeight: 500, color: 'rgba(94, 234, 212, 0.6)', letterSpacing: '0.05em', flexShrink: 0 }}>
                  {item.num}
                </span>
                <div>
                  <p style={{ fontFamily: sans, fontSize: '16px', fontWeight: 600, color: 'rgba(237, 244, 255, 0.92)', marginBottom: '6px', letterSpacing: '-0.015em' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '14px', fontWeight: 400, color: 'rgba(204, 228, 241, 0.58)', lineHeight: 1.55, margin: 0, letterSpacing: '-0.005em' }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   FIT — two sentences
   ═══════════════════════════════════════════ */
const FitLine: React.FC = () => (
  <section style={{ background: 'linear-gradient(180deg, #010409 0%, #05090f 100%)', padding: 'clamp(48px, 7vw, 64px) 0', borderBottom: '1px solid rgba(45, 212, 191, 0.08)' }}>
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', textAlign: 'center' }}>
      <span style={{
        fontFamily: mono,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(94, 234, 212, 0.6)',
        display: 'block',
        marginBottom: '20px'
      }}>
        Who this is for
      </span>
      <p style={{
        fontFamily: sans,
        fontSize: '16px',
        fontWeight: 400,
        color: 'rgba(229, 231, 235, 0.75)',
        lineHeight: 1.7,
        letterSpacing: '-0.01em',
        margin: 0
      }}>
        Works best if you already have closers and pipeline but no serious outbound engine. Doesn't work for TAMs under 10,000 accounts or products that look identical to 15 competitors on G2.
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const IndexShort = () => {
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .fade-in { opacity: 0; transition: opacity 1s ease-in-out; }
      .fade-in.visible { opacity: 1; }
      html { scroll-behavior: smooth; overflow-x: hidden; }
      body { overflow-x: hidden; }
      * { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }
    `;
    document.head.appendChild(style);
    initTimeOnPageTracking();
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    document.title = 'Veogrowth - Your Next 10 Customers Are Ignoring Everyone Else\'s Emails';
    const injectSchema = () => {
      const existing = document.getElementById('schema-script-home');
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.id = 'schema-script-home';
      script.type = 'application/ld+json';
      script.innerHTML = schemaToString(generateHomePageSchema());
      document.head.appendChild(script);
      ['https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://i.vimeocdn.com'].forEach(url => {
        if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preconnect'; link.href = url; link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };
    if (isFirstRender.current) { injectSchema(); isFirstRender.current = false; }
    else if ('requestIdleCallback' in window) { requestIdleCallback(() => injectSchema(), { timeout: 1000 }); }
    else { setTimeout(injectSchema, 500); }
    return () => { const s = document.getElementById('schema-script-home'); if (s) s.remove(); };
  }, []);

  const divider = <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(94, 234, 212, 0.1) 50%, transparent 95%)' }} />;

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflowX: 'hidden' }}>
      <CanonicalUrl path="/" />
      <HeaderShort />
      <main>
        <div className="fade-in visible"><HeroShort /></div>
        <div className="fade-in visible"><MeetingHandoffSection /></div>
        {divider}
        <AnimatedSection><ProofSection /></AnimatedSection>
        {divider}
        <AnimatedSection><ProcessLine /></AnimatedSection>
        {divider}
        <AnimatedSection><PricingShort /></AnimatedSection>
        <AnimatedSection><FitLine /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default IndexShort;
