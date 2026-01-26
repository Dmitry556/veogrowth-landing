import React, { useState, useEffect, useRef } from 'react';

const GrowthProcessSection: React.FC = () => {
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>([false, false, false]);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const phases = [
    {
      number: '01',
      title: 'Market Mapping & Qualification',
      accentColor: 'rgba(59, 130, 246, 0.12)', // Blue
      accentBorder: 'rgba(59, 130, 246, 0.3)',
      body: [
        'We start by mapping your entire Total Addressable Market. Not 500 prospects. Not "top accounts." Every reachable company that fits your ICP.',
        'We combine data from Apollo, public directories, industry databases, and niche scrapers, then deduplicate and qualify at scale. Our AI analyzes each company to confirm they match your ICP before contact.',
        'In 2-3 weeks, you get a complete, segmented list of your entire addressable market — not a sample, the whole thing.'
      ],
      differentiator: 'Most agencies cherry-pick a few hundred "good fit" accounts and call it a day. We map the full market so you are not leaving pipeline on the table.'
    },
    {
      number: '02',
      title: 'AI-Powered Email Campaigns at Scale',
      accentColor: 'rgba(168, 85, 247, 0.12)', // Purple
      accentBorder: 'rgba(168, 85, 247, 0.3)',
      body: [
        'Most agencies either spray templated garbage or cap out at 50 manual emails per day. We do neither.',
        'Our AI researches every company — business model, public signals, recent activity — and writes contextualized cold emails that demonstrate real understanding.',
        'Emails that are researched and relevant, delivered to thousands of prospects per month without sacrificing quality.'
      ],
      differentiator: 'We handle inbox infrastructure, deliverability, and monitoring. You get high-quality outreach at scale, without the risk.'
    },
    {
      number: '03',
      title: 'Reply Handling & Meetings Booked',
      accentColor: 'rgba(16, 185, 129, 0.12)', // Green
      accentBorder: 'rgba(94, 234, 212, 0.3)',
      body: [
        'Most agencies quit after the reply and dump it in your inbox. We stay in the loop.',
        'We manage the back-and-forth, answer questions, address objections, and secure time on your calendar.',
        'Every positive reply becomes a confirmed meeting with context on who they are and why they said yes.'
      ],
      differentiator: 'All your team has to do is show up to the meeting. First conversations typically land within 2–4 weeks of launch.'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = phaseRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisiblePhases(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const fitLists = [
    {
      label: 'This works best for',
      items: [
        'B2B products with $5K–$100K ACV/LTV',
        'Horizontal markets with 30,000+ reachable accounts',
        'SMB to mid-market targets (not enterprise)'
      ]
    },
    {
      label: 'This is not a fit for',
      items: [
        'Enterprise / Fortune 500 targeting (TAM too small)',
        'Highly niche verticals (<10,000 addressable accounts)'
      ]
    }
  ];

  return (
    <section
      className="growth-process-section"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #020910 0%, #041520 65%, #050e18 100%)',
        padding: 'clamp(64px, 9vw, 90px) 0 0',
        borderTop: '1px solid rgba(45, 212, 191, 0.06)',
        borderBottom: '1px solid rgba(45, 212, 191, 0.08)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-160px',
            left: 0,
            right: 0,
            height: '240px',
            background: 'linear-gradient(180deg, rgba(3, 14, 20, 0) 0%, rgba(3, 14, 20, 0.7) 60%, rgba(3, 14, 20, 1) 100%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: 0,
            right: 0,
            height: '240px',
            background: 'linear-gradient(180deg, rgba(5, 14, 21, 1) 0%, rgba(5, 14, 21, 0.72) 45%, rgba(5, 14, 21, 0) 100%)'
          }}
        />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 8vw, 56px)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(15, 23, 42, 0.52)',
              border: '1px solid rgba(45, 212, 191, 0.28)',
              borderRadius: '999px',
              padding: '8px 18px',
              marginBottom: '28px',
              fontSize: '11px',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              color: 'rgba(209, 250, 229, 0.82)',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase'
            }}
          >
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 500,
              lineHeight: '1.15',
              color: 'rgba(239, 246, 255, 0.96)',
              margin: '0 auto',
              maxWidth: '780px'
            }}
          >
            Our 3-Phase Process to Book Meetings
          </h2>
        </div>

        {/* Phase Timeline with Connected Cards */}
        <div className="growth-phases-wrapper" style={{ position: 'relative', maxWidth: '680px', margin: '0 auto clamp(32px, 7vw, 48px)' }}>
          {/* Vertical connecting line */}
          <div
            className="growth-phases-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: '40px',
              bottom: '40px',
              width: '2px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(180deg, rgba(45, 212, 191, 0.0) 0%, rgba(45, 212, 191, 0.25) 15%, rgba(45, 212, 191, 0.25) 85%, rgba(45, 212, 191, 0.0) 100%)',
              zIndex: 0
            }}
          />

          {phases.map((phase, index) => {
            const isVisible = visiblePhases[index];

            return (
              <div
                className="growth-phase"
                key={index}
                ref={el => phaseRefs.current[index] = el}
                style={{
                  position: 'relative',
                  marginBottom: index < phases.length - 1 ? 'clamp(20px, 5vw, 28px)' : '0',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  zIndex: 1
                }}
              >
                {/* Phase Card */}
                <div
                  className="growth-phase-card"
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, rgba(6, 12, 18, 0.65) 0%, rgba(3, 8, 14, 0.7) 100%)',
                    border: `2px solid ${phase.accentBorder}`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 22px rgba(0, 0, 0, 0.32)',
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
                  }}
                >
                  {/* Accent gradient overlay on top edge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${phase.accentBorder}, transparent)`,
                      opacity: 0.6
                    }}
                  />

                  <div style={{ padding: 'clamp(20px, 4vw, 28px) clamp(20px, 4.8vw, 32px)', position: 'relative' }}>
                    {/* Phase Number Badge - clean and minimal */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px'
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: `linear-gradient(135deg, ${phase.accentColor}, ${phase.accentColor})`,
                          border: `1.5px solid ${phase.accentBorder}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          boxShadow: `0 2px 8px ${phase.accentColor}`
                        }}
                      >
                        {phase.number}
                      </div>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'rgba(148, 163, 184, 0.8)',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        Phase {phase.number}
                      </span>
                    </div>

                    {/* Phase Title */}
                    <h3
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2'
                      }}
                    >
                      {phase.title}
                    </h3>

                    {/* Body paragraphs - always visible */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                      {phase.body.map((paragraph, idx) => (
                        <p
                          key={idx}
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            fontSize: '15.5px',
                            lineHeight: '1.6',
                            color: '#E2E8F0',
                            margin: 0,
                            letterSpacing: '-0.006em',
                            fontWeight: 500
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Differentiator - cleaner style */}
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${phase.accentColor}, rgba(15, 23, 42, 0.4))`,
                        border: `1.5px solid ${phase.accentBorder}`,
                        borderRadius: '12px',
                        padding: '16px 18px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: phase.accentBorder
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                          fontSize: '14px',
                          lineHeight: '1.6',
                          color: 'rgba(241, 245, 249, 0.95)',
                          margin: 0,
                          letterSpacing: '-0.011em',
                          fontWeight: 500,
                          paddingLeft: '8px'
                        }}
                      >
                        <strong style={{ fontWeight: 600, color: '#FFFFFF' }}>Why this matters:</strong> {phase.differentiator}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="growth-pricing" style={{ maxWidth: '600px', margin: '0 auto 56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1.5px solid rgba(94, 234, 212, 0.25)',
                marginBottom: '14px'
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'rgba(167, 243, 208, 0.95)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Pricing
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '32px',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 10px 0',
                letterSpacing: '-0.03em',
                lineHeight: '1.15'
              }}
            >
              Pay Per Qualified Meeting. Not Per Month.
            </h3>
            <p
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '16px',
                color: 'rgba(226, 232, 240, 0.9)',
                margin: 0,
                lineHeight: '1.4',
                fontWeight: 500
              }}
            >
              This is the part where we're completely different from every other agency.
            </p>
          </div>

          {/* Pricing Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(6, 12, 18, 0.65) 0%, rgba(3, 8, 14, 0.7) 100%)',
              border: '2px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '16px',
              padding: 'clamp(20px, 5vw, 28px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.32)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), transparent)'
              }}
            />
            {/* Main explanation */}
            {/* Main explanation */}
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  color: '#FFFFFF',
                  margin: '0',
                  lineHeight: '1.4',
                  fontWeight: 600
                }}
              >
                You only pay when we book a qualified meeting.
              </p>
            </div>

            {/* Phases Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>

              {/* Phase 1 - Highlighted Green Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 95, 70, 0.15))',
                border: '1.5px solid rgba(94, 234, 212, 0.25)',
                borderRadius: '14px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Accent Sidebar */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'rgba(94, 234, 212, 0.5)' }} />

                <div style={{ paddingLeft: '8px' }}>
                  <h4 style={{
                    color: '#6ee7b7',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    marginTop: 0,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}>
                    Phase 1: Channel-Fit Validation
                  </h4>
                  <p style={{
                    color: '#f0fdf4',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    margin: 0,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    We book your first 2 meetings to prove the channel works. <strong style={{ color: '#fff', fontWeight: 700 }}>Zero cost. Zero commitment.</strong>
                  </p>
                </div>
              </div>

              {/* Phase 2 - Same style as Phase 1, blue accent */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(14, 116, 144, 0.12))',
                border: '1.5px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '14px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'rgba(56, 189, 248, 0.5)' }} />

                <div style={{ paddingLeft: '8px' }}>
                  <h4 style={{
                    color: '#7dd3fc',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    marginTop: 0,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}>
                    Phase 2: Infrastructure Build
                  </h4>
                  <p style={{
                    color: '#f0fdf4',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    margin: 0,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Only if the pilot succeeds and you decide to scale: a one-time setup fee ($3-5k) to build the full outreach infrastructure.
                  </p>
                </div>
              </div>

              {/* Phase 3 - Same style as Phase 1, purple accent */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(126, 34, 206, 0.12))',
                border: '1.5px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '14px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'rgba(168, 85, 247, 0.5)' }} />

                <div style={{ paddingLeft: '8px' }}>
                  <h4 style={{
                    color: '#c4b5fd',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    marginTop: 0,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}>
                    Phase 3: Scale (Credit Model)
                  </h4>
                  <p style={{
                    color: '#f0fdf4',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    margin: 0,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    You buy meeting credits in batches (e.g., 5 or 10). A credit is only used when a qualified meeting is held. Credits never expire.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider with subtle gradient */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.4), transparent)', margin: '0 0 32px 0' }} />

            {/* Alignment Section - Improved Visuals */}
            <div style={{ padding: '0 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f472b6', boxShadow: '0 0 8px rgba(244, 114, 182, 0.6)' }} />
                <h4 style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: "'Montserrat', sans-serif",
                  margin: 0,
                  letterSpacing: '-0.01em'
                }}>
                  Our Incentives Are Aligned
                </h4>
              </div>

              <div style={{
                borderLeft: '2px solid rgba(244, 114, 182, 0.2)',
                paddingLeft: '16px',
                marginLeft: '3px'
              }}>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '12px',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  We aren't looking for a quick retainer; we want a multi-year partnership. That only happens if the <strong style={{ color: '#e2e8f0' }}>unit economics</strong> actually work for you.
                </p>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  We work backwards from your LTV and close rates to ensure the cost per meeting fits your CAC targets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For Section */}
        <div style={{ maxWidth: '680px', margin: '0 auto 56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 10px 0',
                letterSpacing: '-0.025em',
                lineHeight: '1.2'
              }}
            >
              Who This Is For (and Who It Isn't)
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 3.5vw, 16px)', marginBottom: 'clamp(16px, 4vw, 24px)' }}>
            {fitLists.map((list, idx) => (
              <div
                className="growth-fit-card"
                key={list.label}
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 12, 18, 0.65) 0%, rgba(3, 8, 14, 0.7) 100%)',
                  border: idx === 0 ? '2px solid rgba(16, 185, 129, 0.25)' : '2px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '14px',
                  padding: 'clamp(16px, 4.5vw, 24px) clamp(18px, 5vw, 28px)',
                  boxShadow: idx === 0
                    ? '0 8px 22px rgba(0, 0, 0, 0.32)'
                    : '0 8px 22px rgba(0, 0, 0, 0.28)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: idx === 0
                      ? 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.5), transparent)'
                  }}
                />

                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '5px 10px',
                      borderRadius: '6px',
                      background: idx === 0
                        ? 'rgba(16, 185, 129, 0.12)'
                        : 'rgba(239, 68, 68, 0.12)',
                      border: idx === 0
                        ? '1.5px solid rgba(94, 234, 212, 0.25)'
                        : '1.5px solid rgba(239, 68, 68, 0.25)',
                      marginBottom: '14px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontSize: '12px',
                        fontWeight: 600,
                        color: idx === 0
                          ? 'rgba(167, 243, 208, 0.95)'
                          : 'rgba(254, 202, 202, 0.95)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {list.label}
                    </span>
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      listStyle: 'none'
                    }}
                  >
                    {list.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '4px',
                            background: idx === 0
                              ? 'rgba(16, 185, 129, 0.15)'
                              : 'rgba(239, 68, 68, 0.15)',
                            border: idx === 0
                              ? '1.5px solid rgba(94, 234, 212, 0.35)'
                              : '1.5px solid rgba(239, 68, 68, 0.35)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          {idx === 0 ? (
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                              <path d="M7.5 2L3.25 6.25L1.5 4.5" stroke="rgba(167, 243, 208, 1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 2L8 8M8 2L2 8" stroke="rgba(254, 202, 202, 1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            fontSize: '15px',
                            fontWeight: 500,
                            color: '#E2E8F0',
                            letterSpacing: '-0.006em',
                            lineHeight: '1.5'
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div
          style={{
            margin: '36px calc(50% - 50vw) 0',
            width: '100vw'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '0',
              padding: '36px clamp(18px, 4.8vw, 48px)',
              background: 'linear-gradient(180deg, rgba(5, 18, 22, 0.9) 0%, rgba(5, 18, 22, 0.95) 50%, rgba(4, 14, 18, 0.97) 100%)',
              borderTop: '1px solid rgba(45, 212, 191, 0.24)',
              borderBottom: '1px solid rgba(45, 212, 191, 0.24)',
              overflow: 'hidden',
              boxShadow: '0 28px 60px rgba(1, 10, 14, 0.45)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at top left, rgba(94, 234, 212, 0.14), transparent 60%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-120px',
                right: '-20px',
                width: '260px',
                height: '260px',
                background: 'radial-gradient(circle, rgba(45, 212, 191, 0.22) 0%, transparent 68%)',
                pointerEvents: 'none'
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background: 'rgba(15, 118, 110, 0.25)',
                    border: '1px solid rgba(94, 234, 212, 0.35)',
                    color: 'rgba(236, 253, 245, 0.92)',
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    boxShadow: '0 16px 32px rgba(6, 95, 70, 0.28)'
                  }}
                >
                  Pilot Program
                </span>
              </div>
              <div style={{ textAlign: 'center', display: 'grid', gap: '18px', justifyItems: 'center' }}>
                <div style={{ maxWidth: '600px' }}>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: 'clamp(30px, 3vw, 40px)',
                      fontWeight: 600,
                      color: 'rgba(239, 246, 255, 0.98)',
                      marginBottom: '8px',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    Ready to Get Your First 2 Meetings?
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '18px',
                      lineHeight: '1.55',
                      color: 'rgba(224, 240, 238, 0.92)',
                      margin: '0 auto',
                      maxWidth: '560px'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Book a time to scope out your free pilot.</span> We’ll discuss your market, build the outreach plan, and show you how we reach your entire TAM.
                  </p>
                </div>
                <div style={{ display: 'grid', gap: '10px', justifyItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      padding: '14px 28px',
                      borderRadius: '999px',
                      border: '1px solid rgba(94, 234, 212, 0.32)',
                      background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 48%, #10b981 100%)',
                      color: '#ecfdf5',
                      fontSize: '18px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      cursor: 'pointer',
                      boxShadow: '0 20px 40px rgba(6, 95, 70, 0.32)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Book Pilot Scoping Call</span>
                    <span
                      data-arrow="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(236, 253, 245, 0.18)',
                        color: '#ecfdf5',
                        fontSize: '18px',
                        fontWeight: 600
                      }}
                    >
                      →
                    </span>
                  </button>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 16px',
                      borderRadius: '999px',
                      background: 'rgba(12, 40, 36, 0.65)',
                      border: '1px solid rgba(94, 234, 212, 0.28)',
                      boxShadow: '0 14px 30px rgba(3, 26, 24, 0.42)'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        background: '#5eead4',
                        boxShadow: '0 0 12px rgba(94, 234, 212, 0.6)'
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'rgba(236, 253, 245, 0.9)'
                      }}
                    >
                      Limited availability for Q4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthProcessSection;
