
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Define the properties for a single logo
interface Logo {
  id: string;
  src: string;
  alt: string;
}

// Group logos into rows
const logoRow1: Logo[] = [
  { id: "fedex", src: "/lovable-uploads/b956d7bf-aa57-4a3b-85fa-2b4a3fb66c4a.png", alt: "FedEx" },
  { id: "lenovo", src: "/lovable-uploads/d2ec3b3e-8162-4575-8182-c8dca896b5bd.png", alt: "Lenovo" },
  { id: "adobe", src: "/lovable-uploads/fc4b705f-259f-403d-a9f3-556f72aacabd.png", alt: "Adobe" },
  { id: "jpmorgan", src: "/lovable-uploads/e04c5fec-b578-4cdc-b69a-2b366eda700c.png", alt: "JP Morgan" },
  { id: "pfizer", src: "/lovable-uploads/56c08955-6b23-4b79-8725-5077f367ffa8.png", alt: "Pfizer" },
];

const logoRow2: Logo[] = [
  { id: "tesla", src: "/lovable-uploads/fe1efdae-080c-47ed-a417-00204b30441d.png", alt: "Tesla" },
  { id: "netflix", src: "/lovable-uploads/97625b41-8034-4dbc-8d88-9c47c8adae3f.png", alt: "Netflix" },
  { id: "mcdonalds", src: "/lovable-uploads/2771ee5f-991c-4a9b-af49-78fe1cdd91e1.png", alt: "McDonald's" },
  { id: "nike", src: "/lovable-uploads/ffe10382-8570-4ac2-b70f-1a8d991db7d5.png", alt: "Nike" },
  { id: "google", src: "/lovable-uploads/09bd0777-a594-40c1-90d0-6e1497d520e3.png", alt: "Google" },
];

const logoRow3: Logo[] = [
  { id: "microsoft", src: "/lovable-uploads/156a613a-167e-4fcb-b995-ee2ced872a99.png", alt: "Microsoft" },
  { id: "johndeere", src: "/lovable-uploads/c64763e8-da2b-49c1-875a-19ad0ae7aafc.png", alt: "John Deere" },
  { id: "prudential", src: "/lovable-uploads/9ee7acf9-65e8-4410-85fb-1f732db3e28d.png", alt: "Prudential" },
  { id: "marriott", src: "/lovable-uploads/e3f4ca8c-ad0c-4b14-afa4-803e274110a2.png", alt: "Marriott" },
  { id: "lockheed", src: "/lovable-uploads/60be9ff7-02bd-4509-b917-f07b87314ce2.png", alt: "Lockheed Martin" },
];

const logoRow4: Logo[] = [
  { id: "deloitte", src: "/lovable-uploads/0b67d5a9-5d22-4d5a-a7f8-0deb13543826.png", alt: "Deloitte" },
  { id: "qualcomm", src: "/lovable-uploads/b13b33e6-6e29-4468-86ae-f6fb2bc32ddf.png", alt: "Qualcomm" },
  { id: "cisco", src: "/lovable-uploads/1d792fe2-dd88-41d3-87ac-7341459d6e73.png", alt: "Cisco" },
  { id: "salesforce", src: "/lovable-uploads/8c48407c-02db-4f20-a839-6795c9cc6dc1.png", alt: "Salesforce" },
  { id: "target", src: "/lovable-uploads/9cb01e1d-10c8-4082-ad8f-04e169726d82.png", alt: "Target" },
];

// Duplicate logos to create smooth looping effect
const duplicateLogos = (logos: Logo[]): Logo[] => {
  return [...logos, ...logos.map(logo => ({ ...logo, id: `${logo.id}-dup` }))];
};

const LogoSlider = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (element: HTMLDivElement | null, speed: number) => {
      if (!element) return;
      
      // Reset animation when it's not in view
      if (!inView) {
        element.style.animationPlayState = 'paused';
        return;
      }
      
      element.style.animationDuration = `${speed}s`;
      element.style.animationPlayState = 'running';
    };

    // Set different speeds for each row to create staggered effect
    animate(row1Ref.current, 40);
    animate(row2Ref.current, 35);
    animate(row3Ref.current, 45);

    const handleRowHover = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLDivElement;
      if (target) {
        target.style.animationPlayState = 'paused';
      }
    };

    const handleRowLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLDivElement;
      if (target && inView) {
        target.style.animationPlayState = 'running';
      }
    };

    // Add event listeners for hover pause
    const rows = [row1Ref.current, row2Ref.current, row3Ref.current];
    rows.forEach(row => {
      if (row) {
        row.addEventListener('mouseenter', handleRowHover);
        row.addEventListener('mouseleave', handleRowLeave);
      }
    });

    // Clean up event listeners
    return () => {
      rows.forEach(row => {
        if (row) {
          row.removeEventListener('mouseenter', handleRowHover);
          row.removeEventListener('mouseleave', handleRowLeave);
        }
      });
    };
  }, [inView]);

  // Function to render a row of logos
  const renderLogoRow = (
    logos: Logo[], 
    ref: React.RefObject<HTMLDivElement>, 
    direction: 'normal' | 'reverse' = 'normal'
  ) => {
    const duplicatedLogos = duplicateLogos(logos);
    return (
      <div 
        ref={ref}
        className={`logo-row flex items-center animate-scroll`}
        style={{ animationDirection: direction }}
      >
        {duplicatedLogos.map((logo) => (
          <div 
            key={logo.id} 
            className="logo-container flex-shrink-0 mx-4 my-2 p-3 bg-white rounded-md shadow-sm border border-gray-100"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-[60px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="py-20 bg-gray-50/50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-h2 font-bold tracking-tight text-center mb-12">
          COMPANIES WE'VE BOOKED MEETINGS FOR OUR CLIENTS WITH
        </h2>
        
        <div className="logo-slider space-y-5">
          {renderLogoRow(logoRow1, row1Ref)}
          {renderLogoRow(logoRow2, row2Ref, 'reverse')}
          {renderLogoRow(logoRow3, row3Ref)}
          {/* Add a conditionally rendered 4th row for larger screens */}
          <div className="hidden lg:block">
            {renderLogoRow(logoRow4, useRef(null), 'reverse')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
