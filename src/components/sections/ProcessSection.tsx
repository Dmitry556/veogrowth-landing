
import React, { useEffect, useRef } from 'react';

const ProcessSection: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement[]>([]);
  
  // Reset refs array when component mounts
  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );
    
    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const steps = [
    {
      number: "01",
      title: "TWO FREE Meetings",
      description: "Experience our AI-Powered Email Outbound firsthand. We'll deliver your first 2 qualified sales meetings completely free. No setup fees, no commitments - just real prospects that match your exact ICP criteria."
    },
    {
      number: "02",
      title: "Target Identification",
      description: "Our data team builds your custom list with 10+ verification points to ensure perfect prospect matching within 48 hours."
    },
    {
      number: "03",
      title: "Messaging Strategy",
      description: "Our team creates and tests strong email plans, using AI smarts and proven ways that fit your field. You okay all copy before emails go out."
    },
    {
      number: "04",
      title: "Scale With Predictable ROI",
      description: "Once you've experienced the quality of our meetings, purchase meeting packages at a fixed per-meeting price that's typically lower than your cost-per-meeting from paid ads."
    },
    {
      number: "05",
      title: "Ongoing Support & Optimization",
      description: "You'll receive comprehensive weekly reports every Friday, along with campaign review calls to analyze data and refine strategy."
    }
  ];

  // Define the keyframe animation as a style object
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <style>{fadeInKeyframes}</style>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-caption font-medium mb-6">
            The Process
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Our Process: Get More Leads From Email (Starts with 2 Free Meetings)
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Our streamlined process gets you from initial setup to generating qualified meetings in just five steps.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-[31px] md:left-[50%] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => el && (stepsRef.current[index] = el)}
              className="flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-24 transition-opacity duration-500 ease-in-out"
              style={{ opacity: 0, transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 z-10 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg relative">
                  <span className="text-body font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-h3 font-bold mb-3">{step.title}</h3>
                <p className="text-body text-white/70 mb-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
