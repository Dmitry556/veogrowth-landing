
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
    <section className="py-16 bg-white overflow-hidden border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-center mb-8 text-gray-700">
          Companies We've Booked Meetings For Our Clients With
        </h2>
        
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent"></div>
          
          <div className="overflow-hidden">
            <div 
              className="flex space-x-12 animate-scroll"
            >
              {/* First set of logos */}
              {companyLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="flex-shrink-0 h-10 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 w-auto object-contain opacity-40 hover:opacity-60 transition-opacity duration-300 filter grayscale"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo) => (
                <div 
                  key={`${logo.id}-duplicate`} 
                  className="flex-shrink-0 h-10 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 w-auto object-contain opacity-40 hover:opacity-60 transition-opacity duration-300 filter grayscale"
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
