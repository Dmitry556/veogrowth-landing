
import React from 'react';

// Define the properties for a single logo
interface Logo {
  id: string;
  src: string;
  alt: string;
}

// Top companies we've helped clients book meetings with - using reliable SVG sources
const companyLogos: Logo[] = [
  { id: "google", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg", alt: "Google company logo - client meeting booked through Veogrowth" },
  { id: "microsoft", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg", alt: "Microsoft company logo - client meeting booked through Veogrowth" },
  { id: "apple", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg", alt: "Apple company logo - client meeting booked through Veogrowth" },
  { id: "amazon", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg", alt: "Amazon company logo - client meeting booked through Veogrowth" },
  { id: "meta", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg", alt: "Meta company logo - client meeting booked through Veogrowth" },
  { id: "netflix", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg", alt: "Netflix company logo - client meeting booked through Veogrowth" },
  { id: "tesla", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg", alt: "Tesla company logo - client meeting booked through Veogrowth" },
  { id: "nike", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg", alt: "Nike company logo - client meeting booked through Veogrowth" },
  { id: "adobe", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg", alt: "Adobe company logo - client meeting booked through Veogrowth" },
  { id: "fedex", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fedex.svg", alt: "FedEx company logo - client meeting booked through Veogrowth" },
  { id: "ibm", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ibm.svg", alt: "IBM company logo - client meeting booked through Veogrowth" },
  { id: "salesforce", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg", alt: "Salesforce company logo - client meeting booked through Veogrowth" },
];

const LogoSlider = () => {

  return (
    <section 
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0f0f0f 100%)',
        overflow: 'hidden',
        padding: '80px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 
          style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: '48px',
            color: '#B0B0B0',
            opacity: '0.8',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
          }}
        >
          Companies we booked meetings for our clients with
        </h2>
        
        <div style={{ position: 'relative' }}>
          {/* Fade edges */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '80px',
            zIndex: '10',
            background: 'linear-gradient(to right, #0f0f0f, transparent)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '0',
            bottom: '0',
            width: '80px',
            zIndex: '10',
            background: 'linear-gradient(to left, #0f0f0f, transparent)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ overflow: 'hidden' }}>
            <div 
              className="animate-scroll"
              style={{
                display: 'flex',
                gap: '64px',
                alignItems: 'center'
              }}
            >
              {/* First set of logos */}
              {companyLogos.map((logo) => (
                <div 
                  key={logo.id}
                  style={{
                    flexShrink: '0',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '100px'
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{
                      height: '32px',
                      width: 'auto',
                      objectFit: 'contain',
                      opacity: '0.25',
                      transition: 'all 0.3s ease',
                      filter: 'brightness(0) saturate(100%) invert(1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '0.6';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.25';
                      e.target.style.transform = 'scale(1)';
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo) => (
                <div 
                  key={`${logo.id}-duplicate`}
                  style={{
                    flexShrink: '0',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '100px'
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{
                      height: '32px',
                      width: 'auto',
                      objectFit: 'contain',
                      opacity: '0.25',
                      transition: 'all 0.3s ease',
                      filter: 'brightness(0) saturate(100%) invert(1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '0.6';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.25';
                      e.target.style.transform = 'scale(1)';
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;
