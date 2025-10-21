import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPreview: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 'podcast-whales-25-meetings-6-clients',
      title: 'Podcast Whales: 25 Meetings, 6 Clients in 30 Days',
      company: 'Podcast Whales',
      companyUrl: 'https://podcastwhales.co/',
      industry: 'B2B Podcast Production Agency',
      results: {
        meetings: '25',
        pipeline: '$48K/mo',
        responseRate: '90%'
      },
      challenge: 'Needed consistent pipeline of executives interested in starting podcasts',
      preview: 'Creative, personalized pitches that proposed specific podcast concepts for each prospect, not generic service pitches.',
      tags: ['Creative Services', 'Podcast Production', 'Custom Concepts']
    },
    {
      id: 'employee-training-platform-42-meetings',
      title: 'Employee Training Platform: 42 Meetings in 30 Days',
      industry: 'B2B SaaS - Employee Training',
      results: {
        meetings: '42',
        pipeline: '$840K',
        responseRate: '3.8%'
      },
      challenge: 'Stuck at 10 demos/month from inbound, needed predictable pipeline to scale past $7M ARR',
      preview: 'Using our three-layer intelligence approach, we identified companies with active training challenges and generated 42 meetings in just 30 days.',
      tags: ['Employee Training', 'AI Intelligence', 'Custom Data']
    },
    {
      id: 'zero-fee-payment-processor-52-meetings',
      title: 'Zero-Fee Payment Processor: 52 Meetings',
      industry: 'B2B Payment Processing',
      results: {
        meetings: '52',
        pipeline: '$605K',
        responseRate: '3.5%'
      },
      challenge: 'Standing out in the most commoditized industry with 500,000+ SMB retailers and restaurants as TAM',
      preview: 'Massive TAM qualification at scale using clear differentiation (zero monthly fees) and simple math that resonates with small business owners.',
      tags: ['Payment Processing', 'SMB', 'Scale Approach']
    }
  ];

  // Add subtle scrollbar styles once
  React.useEffect(() => {
    const styleId = 'case-studies-scrollbar';
    if (document.getElementById(styleId)) return;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
      .case-studies-scroll::-webkit-scrollbar {
        height: 4px;
      }
      
      .case-studies-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .case-studies-scroll::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
      }
      
      .case-studies-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    `;
    document.head.appendChild(styleElement);
  }, []);

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #02060b 0%, #031018 50%, #041621 100%)',
      padding: 'clamp(60px, 9vw, 92px) 0',
      borderTop: '1px solid rgba(45, 212, 191, 0.05)',
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
          top: '-140px',
          left: 0,
          right: 0,
          height: '220px',
          background: 'linear-gradient(180deg, rgba(2, 6, 11, 0) 0%, rgba(2, 6, 11, 0.7) 60%, rgba(2, 6, 11, 1) 100%)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-160px',
          left: 0,
          right: 0,
          height: '240px',
          background: 'linear-gradient(180deg, rgba(3, 17, 24, 1) 0%, rgba(3, 17, 24, 0.68) 45%, rgba(3, 17, 24, 0) 100%)'
        }} />
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 9vw, 72px)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.52)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            borderRadius: '999px',
            padding: '10px 24px',
            marginBottom: '44px',
            fontSize: '12px',
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: 'rgba(209, 250, 229, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            Client Success Stories
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            marginBottom: '0',
            color: 'rgba(239, 246, 255, 0.96)'
          }}>
            Real Results from Real Clients
          </h2>
        </div>

        {/* Case Studies - Single Row */}
        <div 
          className="case-studies-scroll"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 5vw, 32px)',
            width: '100%',
            paddingBottom: '24px'
          }}
        >
          {featuredCaseStudies.map((study, index) => (
            <Link
              to={`/case-studies/${study.id}`}
              key={study.id}
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, rgba(11, 22, 30, 0.88) 0%, rgba(6, 18, 24, 0.86) 100%)',
                border: '1px solid rgba(45, 212, 191, 0.12)',
                borderRadius: '20px',
                padding: 'clamp(24px, 5vw, 32px)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                width: '100%',
                maxWidth: '100%',
                boxShadow: '0 24px 48px rgba(2, 8, 12, 0.48)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(94, 234, 212, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.12)';
              }}
            >
              <div style={{ marginBottom: '24px' }}>
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
                  marginBottom: '16px',
                  border: '1px solid rgba(99, 179, 237, 0.2)',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}>
                  {study.industry}
                </div>
                
                <h3 style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(237, 244, 255, 0.94)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {study.title}
                </h3>
                
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  color: 'rgba(204, 228, 241, 0.78)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em'
                }}>
                  {study.preview}
                </p>
              </div>
              
              {/* Results Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: 'clamp(12px, 3vw, 16px)', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center',
                  border: '1px solid rgba(99, 179, 237, 0.18)'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(237, 244, 255, 0.96)',
                    marginBottom: '4px'
                  }}>
                    {study.results.meetings}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: 'rgba(148, 197, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Meetings
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center',
                  border: '1px solid rgba(99, 179, 237, 0.18)'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(237, 244, 255, 0.96)',
                    marginBottom: '4px'
                  }}>
                    {study.results.pipeline}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: 'rgba(148, 197, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Pipeline
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center',
                  border: '1px solid rgba(99, 179, 237, 0.18)'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(237, 244, 255, 0.96)',
                    marginBottom: '4px'
                  }}>
                    {study.results.responseRate}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: 'rgba(148, 197, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Response
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {study.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      background: 'rgba(15, 23, 42, 0.65)',
                      color: 'rgba(148, 197, 255, 0.72)',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(99, 179, 237, 0.2)',
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Read More Link */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  color: 'rgba(237, 244, 255, 0.92)',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Read Full Case Study
                </span>
                <ArrowRight style={{ width: '16px', height: '16px', color: 'rgba(94, 234, 212, 0.65)' }} />
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
