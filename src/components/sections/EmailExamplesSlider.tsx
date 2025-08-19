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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(scrollToEmailGrid, 100); // Small delay to let animation start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(scrollToEmailGrid, 100); // Small delay to let animation start
  };

  const getCurrentEmails = () => {
    const startIndex = currentSlide * 4;
    return emailExamples.slice(startIndex, startIndex + 4);
  };

  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 0 100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
            <Mail style={{ width: '16px', height: '16px' }} />
            <span>AI-Generated Cold Emails</span>
          </div>
          
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            color: '#EAEAEA'
          }}>
            Cold Email Examples Our AI Writes
          </h2>
          
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '22px',
            color: '#B0B0B0',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.5',
            letterSpacing: '-0.01em'
          }}>
            These aren't templates. Our AI analyzes each company's situation and writes emails that show real understanding of their specific challenges.
          </p>
        </div>

        {/* Email Grid - 2 rows, 2 columns */}
        <div ref={emailGridRef} style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.12)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <ChevronLeft style={{ width: '20px', height: '20px', color: '#EAEAEA' }} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.12)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <ChevronRight style={{ width: '20px', height: '20px', color: '#EAEAEA' }} />
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
            {getCurrentEmails().map((email, index) => (
              <div 
                key={`${currentSlide}-${email.id}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both',
                  minHeight: '450px'
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
                {/* Email Header */}
                <div style={{ padding: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#B0B0B0',
                      fontSize: '12px',
                      fontWeight: '400',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      letterSpacing: '0.02em',
                      fontFamily: "'SF Mono', Monaco, Consolas, monospace"
                    }}>
                      {email.category}
                    </div>
                    <Target style={{ width: '18px', height: '18px', color: '#7A7A7A' }} />
                  </div>
                  
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '14px',
                    color: '#B0B0B0',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em'
                  }}>
                    <span style={{ fontWeight: '500' }}>To:</span> {email.to}
                  </div>
                  
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '14px',
                    color: '#B0B0B0',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                  }}>
                    <span style={{ fontWeight: '500' }}>Subject:</span> {email.subject}
                  </div>
                  
                  <p style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    color: '#EAEAEA',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    margin: '0',
                    letterSpacing: '-0.01em'
                  }}>
                    {email.preview}
                  </p>
                </div>

                {/* Email Body Preview */}
                <div style={{ padding: '32px', paddingTop: '0' }}>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <pre style={{
                      fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
                      color: '#B0B0B0',
                      fontSize: '14px',
                      whiteSpace: 'pre-wrap',
                      lineHeight: '1.6',
                      margin: '0',
                      letterSpacing: '0'
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
                    setTimeout(scrollToEmailGrid, 100);
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

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <button 
            onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FAFAFA',
              color: '#111213',
              border: 'none',
              borderRadius: '8px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.95';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            See What Our AI Writes for You →
          </button>
          <p style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: '#7A7A7A',
            fontSize: '14px',
            marginTop: '16px',
            letterSpacing: '-0.01em'
          }}>
            Free strategy call • See real examples for your industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailExamplesSlider;