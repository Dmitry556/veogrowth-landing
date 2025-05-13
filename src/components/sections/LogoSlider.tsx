
import React from 'react';

// Define the properties for a single logo
interface Logo {
  id: string;
  src: string;
  alt: string;
}

// All available logos organized by recognition level
const allLogos: Logo[] = [
  // Highly recognizable tech brands
  { id: "google", src: "/lovable-uploads/09bd0777-a594-40c1-90d0-6e1497d520e3.png", alt: "Google" },
  { id: "microsoft", src: "/lovable-uploads/156a613a-167e-4fcb-b995-ee2ced872a99.png", alt: "Microsoft" },
  { id: "netflix", src: "/lovable-uploads/97625b41-8034-4dbc-8d88-9c47c8adae3f.png", alt: "Netflix" },
  { id: "tesla", src: "/lovable-uploads/fe1efdae-080c-47ed-a417-00204b30441d.png", alt: "Tesla" },
  { id: "nike", src: "/lovable-uploads/ffe10382-8570-4ac2-b70f-1a8d991db7d5.png", alt: "Nike" },
  { id: "adobe", src: "/lovable-uploads/fc4b705f-259f-403d-a9f3-556f72aacabd.png", alt: "Adobe" },
  { id: "jpmorgan", src: "/lovable-uploads/e04c5fec-b578-4cdc-b69a-2b366eda700c.png", alt: "JP Morgan" },
  { id: "lenovo", src: "/lovable-uploads/d2ec3b3e-8162-4575-8182-c8dca896b5bd.png", alt: "Lenovo" },
  { id: "fedex", src: "/lovable-uploads/b956d7bf-aa57-4a3b-85fa-2b4a3fb66c4a.png", alt: "FedEx" },
  { id: "pfizer", src: "/lovable-uploads/56c08955-6b23-4b79-8725-5077f367ffa8.png", alt: "Pfizer" },
  
  // Additional brands to complete the set
  { id: "mcdonalds", src: "/lovable-uploads/2771ee5f-991c-4a9b-af49-78fe1cdd91e1.png", alt: "McDonald's" },
  { id: "johndeere", src: "/lovable-uploads/c64763e8-da2b-49c1-875a-19ad0ae7aafc.png", alt: "John Deere" },
  { id: "prudential", src: "/lovable-uploads/9ee7acf9-65e8-4410-85fb-1f732db3e28d.png", alt: "Prudential" },
  { id: "marriott", src: "/lovable-uploads/e3f4ca8c-ad0c-4b14-afa4-803e274110a2.png", alt: "Marriott" },
  { id: "vimeo", src: "/lovable-uploads/0b67d5a9-5d22-4d5a-a7f8-0deb13543826.png", alt: "Vimeo" },
  { id: "apple", src: "/lovable-uploads/1d792fe2-dd88-41d3-87ac-7341459d6e73.png", alt: "Apple" },
  { id: "amazon", src: "/lovable-uploads/8c48407c-02db-4f20-a839-6795c9cc6dc1.png", alt: "Amazon" },
  { id: "meta", src: "/lovable-uploads/9cb01e1d-10c8-4082-ad8f-04e169726d82.png", alt: "Meta" },
  { id: "ford", src: "/lovable-uploads/b13b33e6-6e29-4468-86ae-f6fb2bc32ddf.png", alt: "Ford" },
  { id: "airbnb", src: "/lovable-uploads/60be9ff7-02bd-4509-b917-f07b87314ce2.png", alt: "Airbnb" },
];

// Create two rows of logos with balanced distribution - no duplicates
const logoRows = [
  // Top row (right-to-left): Most recognizable brands first - 10 logos
  allLogos.slice(0, 10),
  // Bottom row (left-to-right): Remaining brands - 10 logos
  allLogos.slice(10, 20)
];

const LogoSlider = () => {
  // Custom height adjustment for specific logos
  const getLogoHeight = (logoId: string) => {
    // Logos that need to be larger
    if (["jpmorgan", "marriott", "meta", "vimeo"].includes(logoId)) {
      return "h-[40px]";
    }
    // Default height for all other logos
    return "h-[30px]";
  };

  return (
    <section className="py-8 bg-background overflow-hidden border-t border-b border-white/5" id="clients">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-medium tracking-normal text-center mb-6">
          COMPANIES WE'VE BOOKED MEETINGS FOR OUR CLIENTS WITH
        </h2>
        
        <div className="relative">
          {/* Enhanced fade edges for premium look - broader gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"></div>
          
          <div className="logo-slider space-y-10 max-w-full overflow-hidden">
            {/* First row - Right to Left */}
            <div 
              className="flex space-x-16 py-1"
              style={{
                animation: 'scrollLogo 40s linear infinite reverse',
                width: 'max-content'
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
                    className={`${getLogoHeight(logo.id)} w-auto object-contain opacity-80 hover:opacity-100`}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Clone of the first few logos to ensure smooth looping */}
              {logoRows[0].slice(0, 3).map((logo) => (
                <div 
                  key={`${logo.id}-clone`} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${getLogoHeight(logo.id)} w-auto object-contain opacity-80 hover:opacity-100`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - Left to Right */}
            <div 
              className="flex space-x-16 py-1"
              style={{
                animation: 'scrollLogo 35s linear infinite',
                width: 'max-content'
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
                    className={`${getLogoHeight(logo.id)} w-auto object-contain opacity-80 hover:opacity-100`}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Clone of the first few logos to ensure smooth looping */}
              {logoRows[1].slice(0, 3).map((logo) => (
                <div 
                  key={`${logo.id}-clone`} 
                  className="shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${getLogoHeight(logo.id)} w-auto object-contain opacity-80 hover:opacity-100`}
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
