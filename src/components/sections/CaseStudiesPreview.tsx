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

  // Add subtle scrollbar styles
  React.useEffect(() => {
    const styleElement = document.createElement('style');
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
    
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            Client Success Stories
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            marginBottom: '0',
            color: '#EAEAEA'
          }}>
            Real Results from Real Clients
          </h2>
        </div>

        {/* Case Studies - Single Row */}
        <div 
          className="case-studies-scroll"
          style={{ 
            display: 'flex', 
            gap: '32px', 
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
            width: '100%'
          }}
        >
          {featuredCaseStudies.map((study, index) => (
            <Link
              to={`/case-studies/${study.id}`}
              key={study.id}
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: 'max-content',
                maxWidth: '400px'
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
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#B0B0B0',
                  fontSize: '12px',
                  fontWeight: '400',
                  padding: '6px 12px',
                  borderRadius: '100px',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  fontFamily: "'SF Mono', Monaco, Consolas, monospace"
                }}>
                  {study.industry}
                </div>
                
                <h3 style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#EAEAEA',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {study.title}
                </h3>
                
                <p style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  color: '#B0B0B0',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em'
                }}>
                  {study.preview}
                </p>
              </div>
              
              {/* Results Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '4px'
                  }}>
                    {study.results.meetings}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: '#7A7A7A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Meetings
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '4px'
                  }}>
                    {study.results.pipeline}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: '#7A7A7A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Pipeline
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '4px'
                  }}>
                    {study.results.responseRate}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '11px',
                    color: '#7A7A7A',
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
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: '#7A7A7A',
                      fontSize: '11px',
                      fontWeight: '400',
                      padding: '4px 8px',
                      borderRadius: '100px',
                      letterSpacing: '0.02em',
                      fontFamily: "'SF Mono', Monaco, Consolas, monospace"
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
                  color: '#EAEAEA',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Read Full Case Study
                </span>
                <ArrowRight style={{ width: '16px', height: '16px', color: '#B0B0B0' }} />
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CaseStudiesPreview;