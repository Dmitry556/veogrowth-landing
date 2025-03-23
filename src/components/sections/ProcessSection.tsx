
import React, { useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
      title: "Connect Your Data",
      description: "Integrate all your marketing, sales, and customer data sources with our one-click connectors. No code required."
    },
    {
      number: "02",
      title: "Map Your Customer Journey",
      description: "Use our visual builder to map your customer journey from first touch to revenue, with automatic tracking."
    },
    {
      number: "03",
      title: "Activate AI Insights",
      description: "Our AI analyzes your data to identify patterns and opportunities, then generates actionable recommendations."
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description: "Implement the insights to optimize your channels, reallocate budget, and scale what's working."
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-caption font-medium mb-6">
            The Process
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Getting started is simple
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Our streamlined onboarding process gets you from data chaos to growth clarity in just four steps.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-[31px] md:left-[50%] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-24 opacity-0"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 z-10 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow relative">
                  <span className="text-body font-bold text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>
                )}
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-h3 font-bold mb-3">{step.title}</h3>
                <p className="text-body text-white/70 mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: Math.min(4, index + 2) }).map((_, featureIndex) => (
                    <div key={featureIndex} className="flex items-center bg-white/5 rounded-full px-3 py-1 text-caption">
                      <CircleCheck className="mr-1 text-green-400" size={14} />
                      <span>Feature {featureIndex + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
