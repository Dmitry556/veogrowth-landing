import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, Target } from 'lucide-react';

const EmailExamplesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const emailGridRef = useRef<HTMLDivElement>(null);

  const emailExamples = [
    {
      id: 1,
      category: 'SaaS Post-Acquisition',
      to: 'VP Sales at a SaaS company just acquired',
      subject: 'Zendesk integration + Freshworks merger',
      preview: 'Targeting specific integration challenges after acquisition',
      body: `Hi Daniel,

With Freshworks acquisition closing last month and Zendesk as your support backbone, I imagine your team is juggling two customer databases while trying to hit Q1 targets.

Clearbit faced the same mess during their HubSpot integration - lost 20% of leads in the chaos.

They fixed it with unified lead routing that didn't require ripping out either system.

Worth a quick chat on keeping revenue flowing during integration?`
    },
    {
      id: 2,
      category: 'Growing Marketing Agency',
      to: 'Founder of agency that went from 12 to 35 employees',
      subject: 'Project management chaos at 35 people?',
      preview: 'Identifying scaling pain points from hiring data',
      body: `Sarah,

Saw you've hired 23 people since September. I'm guessing your Notion setup from 12 employees is now complete chaos with 35.

When Sandwich Video hit this size, project handoffs were taking longer than the actual work.

Curious - are you seeing the same thing?`
    },
    {
      id: 3,
      category: 'Manufacturing Expansion',
      to: 'COO of manufacturer opening new facility',
      subject: 'Phoenix facility + inventory tracking',
      preview: 'Spotting operational challenges before they mention them',
      body: `Hi Marcus,

With your Phoenix facility opening next month and still running NetSuite 2019, are your ops team manually syncing inventory between locations?

Tesla supplier Acme Parts had the same problem - their team was doing Excel reconciliation until 2am.

Fixed it without upgrading NetSuite. Happy to share how if useful.`
    },
    {
      id: 4,
      category: 'Series B Hiring Spree',
      to: 'Head of People at startup that raised Series B',
      subject: '40 offers out = onboarding nightmare?',
      preview: 'Inferring onboarding challenges from hiring volume',
      body: `Jennifer,

LinkedIn shows 40 open roles at Datawise. With January start dates approaching, I imagine you're scrambling to build onboarding that doesn't suck.

Brex had 50 people starting one Monday. Total disaster - half quit within 90 days.

They rebuilt everything async. New hires now productive by day 3.

Want to hear what worked?`
    },
    {
      id: 5,
      category: 'E-commerce Returns',
      to: 'Director of CX at e-commerce brand',
      subject: 'Post-holiday returns hitting hard?',
      preview: 'Timing outreach based on seasonal business cycles',
      body: `Hey Alex,

January returns are brutal. Guessing your team is drowning in "where's my refund" tickets while trying to help actual customers.

Allbirds automated 80% of return status questions without adding headcount.

Customers happier, team stopped burning out.

Open to ideas before it gets worse?`
    },
    {
      id: 6,
      category: 'Healthcare Tech Compliance',
      to: 'VP Engineering at healthtech startup',
      subject: 'HIPAA audit prep with 50 engineers',
      preview: 'Connecting promotions to compliance challenges',
      body: `Michael,

Saw you promoted 3 engineers to team leads last month. With HIPAA audits coming, betting they're freaking out about compliance docs they've never dealt with.

Oscar Health's new leads spent months on audit prep. Killed their roadmap.

There's a faster way. Worth 15 minutes to discuss?`
    },
    {
      id: 7,
      category: 'Creative Agency Pitch',
      to: 'CMO at DTC brand doing $50M+',
      subject: 'Liquid Death\'s $700M valuation secret',
      preview: 'Proposing bold creative concepts, not services',
      body: `Hey Amanda,

Liquid Death just hit $700M valuation selling water. Their secret? They made boring products controversial.

What if your sustainable shoes had a "carbon criminal" campaign? Where customers get "arrested" for their old shoes and "released" with yours?

We'd create fake wanted posters, arrest videos, even a bail bond website.

Want to explore making sustainability rebellious instead of preachy?`
    },
    {
      id: 8,
      category: 'Financial Services Scale',
      to: 'COO at payment processor',
      subject: '2M transactions/day on old infrastructure',
      preview: 'Understanding infrastructure stress from growth metrics',
      body: `Hi Patricia,

Processing 2M transactions daily on infrastructure built for 500K - your engineers must be playing Jenga with servers at 3am.

Stripe's competitor hit the same wall. System crashed during Black Friday.

They scaled to 10M/day without rebuilding. The approach was clever.

Want the playbook?`
    },
    {
      id: 9,
      category: 'Real Estate Tech Growth',
      to: 'CEO of proptech startup in new markets',
      subject: 'Miami + Austin expansion coordination',
      preview: 'Multi-market expansion coordination challenges',
      body: `Tom,

Launching Miami and Austin simultaneously while your ops team sits in NYC - betting there's a lot of 6am calls and confused contractors.

Opendoor's expansion team was living on planes until they figured out remote coordination.

Cut launch time by 60%. Worth exploring their model?`
    },
    {
      id: 10,
      category: 'B2B Marketing Agency Pitch',
      to: 'VP Marketing at cybersecurity company',
      subject: 'Make security sexy (yes, really)',
      preview: 'Creative positioning in a boring industry',
      body: `Hi Marcus,

Every security company shows hackers in hoodies. What if you did the opposite?

Picture this: "The World's Most Boring Security Company" campaign. Khaki-wearing, suburban dad engineers keeping hackers out while mowing lawns.

Make it so boring it's fascinating. Like how Farmers Insurance made insurance interesting with weird claims.

Ready to be the security company people actually remember?`
    }
  ];

  const totalSlides = Math.ceil(emailExamples.length / 4);

  useEffect(() => {
    const styleId = 'email-examples-slider-styles';
    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes emailCardReveal {
        0% {
          opacity: 0;
          transform: translateY(26px) scale(0.98);
        }
        60% {
          opacity: 1;
          transform: translateY(-4px) scale(1.01);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .email-slider__nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 48px;
        height: 48px;
        background: rgba(15, 23, 42, 0.5);
        border: 1px solid rgba(45, 212, 191, 0.18);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 16px 32px rgba(2, 8, 12, 0.48);
        backdrop-filter: blur(6px);
      }

      .email-slider__nav:hover {
        background: rgba(16, 185, 129, 0.22);
        border-color: rgba(94, 234, 212, 0.32);
      }

      .email-slider__nav--prev { left: clamp(-28px, -4vw, -52px); }
      .email-slider__nav--next { right: clamp(-28px, -4vw, -52px); }

      @media (max-width: 1280px) {
        .email-slider__nav {
          width: 44px;
          height: 44px;
        }
        .email-slider__nav--prev { left: clamp(-6px, -1.5vw, -18px); }
        .email-slider__nav--next { right: clamp(-6px, -1.5vw, -18px); }
      }

      @media (max-width: 900px) {
        .email-slider__nav {
          display: none;
        }
      }

      .email-card {
        opacity: 0;
        animation: emailCardReveal 0.85s forwards;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }

      .email-card:hover {
        transform: translateY(-6px);
        border-color: rgba(94, 234, 212, 0.22);
        box-shadow: 0 26px 52px rgba(2, 8, 12, 0.5);
      }
    `;

    document.head.appendChild(style);
  }, []);

  const scrollToEmailGrid = () => {
    if (emailGridRef.current) {
      const yOffset = -120; // Offset for header
      const element = emailGridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const scheduleScroll = () => {
    if (typeof window === 'undefined') return;
    if ('requestAnimationFrame' in window) {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToEmailGrid);
      });
    } else {
      setTimeout(scrollToEmailGrid, 16);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    scheduleScroll();
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    scheduleScroll();
  };

  const getCurrentEmails = () => {
    const startIndex = currentSlide * 4;
    return emailExamples.slice(startIndex, startIndex + 4);
  };

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #02060b 0%, #040a11 45%, #051116 100%)',
      padding: 'clamp(56px, 9vw, 72px) 0 clamp(72px, 11vw, 96px)',
      borderTop: '1px solid rgba(45, 212, 191, 0.06)',
      borderBottom: '1px solid rgba(45, 212, 191, 0.08)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '-160px',
          left: 0,
          right: 0,
          height: '240px',
          background: 'linear-gradient(180deg, rgba(3, 17, 24, 1) 0%, rgba(3, 17, 24, 0.68) 45%, rgba(3, 17, 24, 0) 100%)'
        }} />
      </div>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 7vw, 48px)', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            borderRadius: '999px',
            padding: 'clamp(4px, 1.2vw, 6px) clamp(12px, 3vw, 16px)',
            marginBottom: '22px',
            fontSize: '10px',
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: 'rgba(209, 250, 229, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            <Mail style={{ width: '16px', height: '16px', color: 'rgba(94, 234, 212, 0.8)' }} />
            <span>AI-Generated Cold Emails</span>
          </div>

          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '400',
            lineHeight: '1.08',
            letterSpacing: '-0.025em',
            marginBottom: '18px',
            color: 'rgba(239, 246, 255, 0.96)'
          }}>
            We use AI to help us write the emails you dream your SDRs would send. But to your entire market.
          </h2>

          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '16px',
            color: 'rgba(207, 227, 241, 0.72)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: '1.4',
            letterSpacing: '-0.01em'
          }}>
            These aren't templates. We analyze each company's situation and write cold emails that show real understanding of their specific challenges and the solution we have.
          </p>
        </div>

        {/* Email Grid - 2 rows, 2 columns */}
        <div ref={emailGridRef} style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="email-slider__nav email-slider__nav--prev"
          >
            <ChevronLeft style={{ width: '20px', height: '20px', color: 'rgba(237, 244, 255, 0.9)' }} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="email-slider__nav email-slider__nav--next"
          >
            <ChevronRight style={{ width: '20px', height: '20px', color: 'rgba(237, 244, 255, 0.9)' }} />
          </button>

          <div
            className="email-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gridAutoRows: '1fr',
              gap: 'clamp(18px, 4vw, 26px)',
              marginBottom: 'clamp(32px, 8vw, 48px)'
            }}
          >
            {getCurrentEmails().map((email, index) => (
              <div 
                key={`${currentSlide}-${email.id}`}
                className="email-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(11, 22, 30, 0.88) 0%, rgba(6, 18, 24, 0.86) 100%)',
                  border: '1px solid rgba(45, 212, 191, 0.12)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both',
                  minHeight: '320px',
                  width: '100%',
                  boxShadow: '0 24px 48px rgba(2, 8, 12, 0.44)',
                  willChange: 'transform'
                }}
              >
                {/* Email Header */}
                <div style={{ padding: 'clamp(18px, 4.5vw, 26px)', borderBottom: '1px solid rgba(45, 212, 191, 0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(15, 23, 42, 0.65)',
                      color: 'rgba(148, 197, 255, 0.72)',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '6px 14px',
                      borderRadius: '999px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(99, 179, 237, 0.2)',
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}>
                      {email.category}
                    </div>
                    <Target style={{ width: '18px', height: '18px', color: 'rgba(148, 197, 255, 0.58)' }} />
                  </div>

                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(204, 228, 241, 0.78)',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em'
                  }}>
                    <span style={{ fontWeight: '500' }}>To:</span> {email.to}
                  </div>

                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(204, 228, 241, 0.78)',
                    marginBottom: '14px',
                    letterSpacing: '-0.01em'
                  }}>
                    <span style={{ fontWeight: '500' }}>Subject:</span> {email.subject}
                  </div>
                  
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    color: 'rgba(237, 244, 255, 0.92)',
                    fontSize: '14px',
                    lineHeight: '1.45',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>
                    {email.preview}
                  </p>
                </div>

                {/* Email Body Preview */}
                <div style={{ padding: 'clamp(18px, 4.5vw, 26px)', paddingTop: '0' }}>
                  <div style={{
                    background: 'rgba(8, 15, 24, 0.78)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(45, 212, 191, 0.12)'
                  }}>
                    <pre style={{
                      fontFamily: "'Roboto', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                      color: 'rgba(204, 228, 241, 0.84)',
                      fontSize: '13px',
                      whiteSpace: 'pre-wrap',
                      lineHeight: '1.58',
                      margin: '0',
                      letterSpacing: '0.01em'
                    }}>
                      {email.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            {/* Slide Indicators */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    scheduleScroll();
                  }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: index === currentSlide 
                      ? '#FFFFFF' 
                      : 'rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmailExamplesSlider;
