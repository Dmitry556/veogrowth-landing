
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { Quote, Play } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResultsSection: React.FC = () => {
  const emailResponses = [
    "Interesting timing with this email. We're actually dealing with this exact problem right now...",
    "How did you know we're having issues with our reengagement sequence?",
    "Your email caught my attention. We've been looking for a solution exactly like this..."
  ];


  return (
    <section 
      id="results" 
      style={{
        background: '#0a0a0a',
        padding: '40px 0 80px'
      }}
    >
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
          <div 
            style={{
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
            }}
          >
            Proof
          </div>
          <h2 
            style={{
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '400',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '0',
              color: '#EAEAEA',
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
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '16px',
              padding: '48px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'center'
              }}
            >
              {/* Video on the left */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <AspectRatio ratio={16 / 9} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div style={{height: "100%", width: "100%"}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
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
                      color: '#B0B0B0',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: '#EAEAEA', fontWeight: '500' }}>The Challenge:</strong> Podcast Whales needed consistent pipeline of executives interested in starting podcasts, but generic "you should start a podcast" emails weren't working.
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      color: '#B0B0B0',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: '#EAEAEA', fontWeight: '500' }}>Our Solution:</strong> Instead of pitching podcasting services, we pitched <em style={{ color: '#FFFFFF', fontStyle: 'normal', fontWeight: '500' }}>specific podcast concepts</em> tailored to each prospect's business situation.
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      color: '#B0B0B0',
                      lineHeight: '1.6',
                      marginBottom: '0',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <strong style={{ color: '#EAEAEA', fontWeight: '500' }}>Example:</strong> To a CEO competing with Loom: <em style={{ color: '#FFFFFF', fontStyle: 'normal', fontWeight: '500' }}>"What if you launched 'The Async CEO' - interviewing remote leaders about killing meetings? Position yourself as the anti-Loom."</em>
                  </p>
                </div>
                <div>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#EAEAEA',
                      marginBottom: '4px'
                    }}
                  >
                    David Hughes
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: '14px',
                      color: '#7A7A7A',
                      margin: '0'
                    }}
                  >
                    Founder & CEO, <a 
                      href="https://podcastwhales.co/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: '#FFFFFF', 
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.borderBottomColor = '#FFFFFF'}
                      onMouseLeave={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)'}
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
