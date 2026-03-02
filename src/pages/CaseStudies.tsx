import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Veogrowth Case Studies | B2B Outbound That Works";
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: 'podcast-whales-25-meetings-6-clients',
      title: 'Podcast Whales',
      subtitle: '25 Meetings, 6 Clients in 30 Days',
      industry: 'Creative Services',
      results: {
        meetings: '25',
        clients: '6',
        revenue: '$48K/mo'
      },
      challenge: 'Needed consistent pipeline of executives interested in starting podcasts.',
      approach: 'Creative, personalized pitches that proposed specific podcast concepts for each prospect, not generic service pitches.',
      companyUrl: 'https://podcastwhales.co/'
    },
    {
      id: 'employee-training-platform-42-meetings',
      title: 'Employee Training Platform',
      subtitle: '42 Meetings in 30 Days',
      industry: 'B2B SaaS',
      results: {
        meetings: '42',
        clients: '3',
        revenue: '$840K'
      },
      challenge: 'Stuck at 10 demos/month from inbound, needed predictable pipeline to scale past $7M ARR.',
      approach: 'We identified companies with active training challenges and generated 42 meetings in just 30 days using deep research and problem-first messaging.'
    },
    {
      id: 'zero-fee-payment-processor-52-meetings',
      title: 'Zero-Fee Payment Processor',
      subtitle: '52 Meetings, 22 Clients',
      industry: 'Payment Processing',
      results: {
        meetings: '52',
        clients: '22',
        revenue: '$605K'
      },
      challenge: 'Standing out in the most commoditized industry with 500,000+ SMB retailers as TAM.',
      approach: 'Massive TAM qualification at scale using clear differentiation (zero monthly fees) and simple math that resonates with small business owners.'
    },
    {
      id: 'api-monitoring-platform-56-meetings',
      title: 'API Monitoring Platform',
      subtitle: '56 Meetings in 90 Days',
      industry: 'Developer Tools',
      results: {
        meetings: '56',
        clients: '22',
        revenue: '$554K'
      },
      challenge: 'Developers hate sales emails and ignore vendor outreach — reaching 300,000+ companies with production APIs.',
      approach: 'Technical credibility and developer empathy helped reach engineering teams at scale with architecture-specific messaging.'
    }
  ];

  const font = "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#EAEAEA', fontFamily: font }}>
      <CanonicalUrl path="/case-studies" />
      <Helmet>
        <title>Veogrowth Case Studies | B2B Lead Generation Success Stories</title>
        <meta name="description" content="Real B2B outbound case studies: 175+ meetings booked, 53 clients won across 4 industries. See the campaigns and results." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: 'clamp(120px, 14vw, 160px) 0 clamp(48px, 8vw, 72px)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.1) 0%, transparent 70%)'
          }} />
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            borderRadius: '999px',
            padding: '10px 22px',
            marginBottom: '32px',
            fontSize: '12px',
            fontFamily: font,
            color: 'rgba(209, 250, 229, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            Case Studies
          </div>

          <h1 style={{
            fontFamily: font,
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'rgba(239, 246, 255, 0.96)',
            margin: '0 0 20px'
          }}>
            Real Campaigns, Real Results
          </h1>

        </div>
      </section>

      {/* Breadcrumbs */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)' }}>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', current: true }
          ]}
          className="text-gray-300"
        />
      </div>

      {/* Case Studies */}
      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(32px, 6vw, 48px) clamp(20px, 6vw, 40px) clamp(64px, 10vw, 96px)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 'clamp(20px, 4vw, 28px)'
        }}>
          {caseStudies.map((study) => (
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
              {/* Industry tag */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(15, 23, 42, 0.65)',
                color: 'rgba(209, 250, 229, 0.75)',
                fontSize: '11px',
                fontWeight: 600,
                padding: '5px 12px',
                borderRadius: '999px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                border: '1px solid rgba(45, 212, 191, 0.18)',
                fontFamily: font
              }}>
                {study.industry}
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: font,
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 600,
                color: 'rgba(237, 244, 255, 0.94)',
                margin: '0 0 4px',
                letterSpacing: '-0.02em'
              }}>
                {study.companyUrl ? (
                  <span style={{ color: 'rgba(94, 234, 212, 0.85)' }}>{study.title}</span>
                ) : (
                  study.title
                )}
              </h2>
              <p style={{
                fontFamily: font,
                fontSize: '15px',
                fontWeight: 500,
                color: 'rgba(148, 163, 184, 0.8)',
                margin: '0 0 16px',
                letterSpacing: '-0.01em'
              }}>
                {study.subtitle}
              </p>

              {/* Challenge + Approach */}
              <p style={{
                fontFamily: font,
                fontSize: '14px',
                color: 'rgba(204, 228, 241, 0.7)',
                lineHeight: 1.6,
                margin: '0 0 8px',
                letterSpacing: '-0.01em'
              }}>
                <strong style={{ color: 'rgba(237, 244, 255, 0.9)', fontWeight: 600 }}>Challenge:</strong> {study.challenge}
              </p>
              <p style={{
                fontFamily: font,
                fontSize: '14px',
                color: 'rgba(204, 228, 241, 0.7)',
                lineHeight: 1.6,
                margin: '0 0 24px',
                letterSpacing: '-0.01em'
              }}>
                <strong style={{ color: 'rgba(237, 244, 255, 0.9)', fontWeight: 600 }}>Approach:</strong> {study.approach}
              </p>

              {/* Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '20px'
              }}>
                {[
                  { value: study.results.meetings, label: 'Meetings' },
                  { value: study.results.clients, label: 'Clients' },
                  { value: study.results.revenue, label: 'Revenue' }
                ].map((metric) => (
                  <div key={metric.label} style={{
                    background: 'rgba(15, 23, 42, 0.5)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    textAlign: 'center',
                    border: '1px solid rgba(45, 212, 191, 0.1)'
                  }}>
                    <div style={{
                      fontFamily: font,
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'rgba(237, 244, 255, 0.96)',
                      marginBottom: '2px'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{
                      fontFamily: font,
                      fontSize: '11px',
                      color: 'rgba(148, 163, 184, 0.6)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Read more */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontFamily: font,
                  color: 'rgba(237, 244, 255, 0.9)',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Read Full Case Study
                </span>
                <span style={{
                  color: 'rgba(94, 234, 212, 0.65)',
                  fontSize: '18px'
                }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
