
import React from 'react';

// Define the properties for a single logo
interface Logo {
  id: string;
  src: string;
  alt: string;
}

// Create two rows of logos with top row featuring most recognizable brands
const logoRows = [
  // Top row (right-to-left): Most recognizable brands first
  [
    { id: "google", src: "/lovable-uploads/09bd0777-a594-40c1-90d0-6e1497d520e3.png", alt: "Google" },
    { id: "microsoft", src: "/lovable-uploads/156a613a-167e-4fcb-b995-ee2ced872a99.png", alt: "Microsoft" },
    { id: "netflix", src: "/lovable-uploads/97625b41-8034-4dbc-8d88-9c47c8adae3f.png", alt: "Netflix" },
    { id: "tesla", src: "/lovable-uploads/fe1efdae-080c-47ed-a417-00204b30441d.png", alt: "Tesla" },
    { id: "nike", src: "/lovable-uploads/ffe10382-8570-4ac2-b70f-1a8d991db7d5.png", alt: "Nike" },
    { id: "adobe", src: "/lovable-uploads/fc4b705f-259f-403d-a9f3-556f72aacabd.png", alt: "Adobe" },
    { id: "jpmorgan", src: "/lovable-uploads/e04c5fec-b578-4cdc-b69a-2b366eda700c.png", alt: "JP Morgan" },
  ],
  // Bottom row (left-to-right)
  [
    { id: "lenovo", src: "/lovable-uploads/d2ec3b3e-8162-4575-8182-c8dca896b5bd.png", alt: "Lenovo" },
    { id: "fedex", src: "/lovable-uploads/b956d7bf-aa57-4a3b-85fa-2b4a3fb66c4a.png", alt: "FedEx" },
    { id: "pfizer", src: "/lovable-uploads/56c08955-6b23-4b79-8725-5077f367ffa8.png", alt: "Pfizer" },
    { id: "mcdonalds", src: "/lovable-uploads/2771ee5f-991c-4a9b-af49-78fe1cdd91e1.png", alt: "McDonald's" },
    { id: "johndeere", src: "/lovable-uploads/c64763e8-da2b-49c1-875a-19ad0ae7aafc.png", alt: "John Deere" },
    { id: "prudential", src: "/lovable-uploads/9ee7acf9-65e8-4410-85fb-1f732db3e28d.png", alt: "Prudential" },
    { id: "marriott", src: "/lovable-uploads/e3f4ca8c-ad0c-4b14-afa4-803e274110a2.png", alt: "Marriott" },
  ]
];

const LogoSlider = () => {
  return (
    <section className="py-12 bg-background overflow-hidden border-t border-b border-white/5" id="clients">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 font-bold tracking-tight text-center mb-8">
          COMPANIES WE'VE BOOKED MEETINGS FOR OUR CLIENTS WITH
        </h2>
        
        <div className="relative">
          {/* Fade edges for premium look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent"></div>
          
          <div className="logo-slider space-y-10">
            {/* First row - Right to Left */}
            <div 
              className="flex space-x-16"
              style={{
                animation: 'scrollLogo 40s linear infinite reverse',
                width: 'max-content',
                display: 'flex'
              }}
            >
              {/* Original logos */}
              {logoRows[0].map((logo) => (
                <div 
                  key={logo.id} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-[38px] w-auto object-contain filter invert"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless looping */}
              {logoRows[0].map((logo) => (
                <div 
                  key={`${logo.id}-dup`} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-[38px] w-auto object-contain filter invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - Left to Right */}
            <div 
              className="flex space-x-16"
              style={{
                animation: 'scrollLogo 35s linear infinite',
                width: 'max-content',
                display: 'flex'
              }}
            >
              {/* Original logos */}
              {logoRows[1].map((logo) => (
                <div 
                  key={logo.id} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-[38px] w-auto object-contain filter invert"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless looping */}
              {logoRows[1].map((logo) => (
                <div 
                  key={`${logo.id}-dup`} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-[38px] w-auto object-contain filter invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes scrollLogo {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default LogoSlider;
