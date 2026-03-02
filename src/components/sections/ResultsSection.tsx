
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResultsSection: React.FC = () => {
  return (
    <section 
      id="results" 
      style={{
        background: 'linear-gradient(180deg, #010409 0%, #020b12 50%, #04111a 100%)',
        padding: 'clamp(60px, 9vw, 88px) 0 clamp(72px, 10vw, 96px)',
        borderBottom: '1px solid rgba(45, 212, 191, 0.08)'
      }}
    >

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto clamp(48px, 10vw, 84px)' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid rgba(45, 212, 191, 0.28)',
              borderRadius: '999px',
              padding: '10px 22px',
              marginBottom: '42px',
              fontSize: '12px',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              color: 'rgba(209, 250, 229, 0.85)',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase'
            }}
          >
            Proof
          </div>
          <h2 
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '500',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '0',
              color: 'rgba(239, 246, 255, 0.96)',
              textAlign: 'center'
            }}
          >
            "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients"
          </h2>
        </div>
        
        {/* Video Testimonial - David Hughes */}
        <div style={{ marginBottom: '0', maxWidth: '1000px', margin: '0 auto' }}>
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(12, 26, 34, 0.92) 0%, rgba(7, 18, 25, 0.9) 100%)',
              borderRadius: '20px',
              padding: 'clamp(28px, 6vw, 48px)',
              border: '1px solid rgba(45, 212, 191, 0.14)',
              boxShadow: '0 28px 56px rgba(2, 8, 12, 0.52)'
            }}
          >
            <div 
              className="results-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(24px, 6vw, 48px)',
                alignItems: 'center'
              }}
            >
              {/* Video on the left */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(45, 212, 191, 0.18)',
                  boxShadow: '0 24px 48px rgba(2, 8, 12, 0.48)'
                }}
              >
                <AspectRatio ratio={16 / 9} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div style={{height: "100%", width: "100%"}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                      title="David Hughes Testimonial"
                    ></iframe>
                  </div>
                </AspectRatio>
              </div>
              
              {/* Text content on the right */}
              <div>
                <div style={{ marginBottom: '32px' }}>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      color: 'rgba(204, 228, 241, 0.78)',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: 'rgba(237, 244, 255, 0.94)', fontWeight: '600' }}>The Challenge:</strong> Podcast Whales needed consistent pipeline of executives interested in starting podcasts, but generic "you should start a podcast" emails weren't working.
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      color: 'rgba(204, 228, 241, 0.78)',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: 'rgba(237, 244, 255, 0.94)', fontWeight: '600' }}>Our Solution:</strong> Instead of pitching podcasting services, we pitched <em style={{ color: '#ecfdf5', fontStyle: 'normal', fontWeight: '600' }}>specific podcast concepts</em> tailored to each prospect's business situation.
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      color: 'rgba(204, 228, 241, 0.78)',
                      lineHeight: '1.6',
                      marginBottom: '0',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: 'rgba(237, 244, 255, 0.94)', fontWeight: '600' }}>Example:</strong> To a CEO competing with Loom: <em style={{ color: '#ecfdf5', fontStyle: 'normal', fontWeight: '600' }}>"What if you launched 'The Async CEO' - interviewing remote leaders about killing meetings? Position yourself as the anti-Loom."</em>
                  </p>
                </div>
                <div>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      fontWeight: '500',
                      color: 'rgba(237, 244, 255, 0.94)',
                      marginBottom: '4px'
                    }}
                  >
                    David Hughes
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(148, 197, 255, 0.72)',
                      margin: '0'
                    }}
                  >
                    Founder & CEO, <a 
                      href="https://podcastwhales.co/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: '#ecfdf5', 
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(236, 253, 245, 0.4)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.borderBottomColor = '#ecfdf5'}
                      onMouseLeave={(e) => e.target.style.borderBottomColor = 'rgba(236, 253, 245, 0.4)'}
                    >
                      Podcast Whales
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ResultsSection;
