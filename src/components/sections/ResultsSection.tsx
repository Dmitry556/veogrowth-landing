
import React, { useEffect, useRef } from 'react';
import CustomCard from '../ui/CustomCard';
import { Quote } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('counting');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const metrics = [
    { value: 287, label: "Average revenue increase", suffix: "%" },
    { value: 12, label: "Average ROI multiplier", suffix: "x" },
    { value: 63, label: "Time saved on reporting", suffix: "%" },
  ];
  
  const testimonials = [
    {
      quote: "Growth Engine X completely transformed how we track and optimize our marketing efforts. We can now see exactly which channels drive revenue.",
      author: "Sarah Johnson",
      role: "CMO at TechStream",
      image: "https://placehold.co/60x60/2A2A2A/CCCCCC?text=SJ"
    },
    {
      quote: "Our marketing and sales teams finally speak the same language. The ROI insights helped us double our growth while cutting spend by 30%.",
      author: "Michael Chen",
      role: "VP of Growth at ScaleUp",
      image: "https://placehold.co/60x60/2A2A2A/CCCCCC?text=MC"
    }
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-caption font-medium mb-6">
            The Results
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Real companies, real growth
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Our customers see unprecedented growth after connecting their data and teams with Growth Engine X.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-black rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
                  <span
                    ref={el => counterRefs.current[index] = el}
                    className="counting-value"
                    data-value={metric.value}
                  >
                    0
                  </span>
                  <span>{metric.suffix}</span>
                </div>
              </div>
              <p className="text-body text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <CustomCard key={index} variant="glass" className="relative">
              <Quote className="absolute top-4 right-4 text-blue-400 opacity-20" size={48} />
              <p className="text-body italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-body font-medium">{testimonial.author}</p>
                  <p className="text-caption text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </CustomCard>
          ))}
        </div>
        
        <div className="rounded-3xl border border-white/10 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-8 md:p-12 bg-black/20">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
                Case Study
              </div>
              <h3 className="text-h3 font-bold mb-4">
                How TechNova increased revenue by 347% in 6 months
              </h3>
              <p className="text-body text-white/70 mb-6">
                Learn how this B2B SaaS company used Growth Engine X to align their marketing and sales efforts, optimize their channel mix, and drive unprecedented growth.
              </p>
              <div className="flex items-center">
                <img src="https://placehold.co/60x60/2A2A2A/CCCCCC?text=TN" alt="TechNova logo" className="w-10 h-10 rounded mr-3" />
                <div>
                  <p className="text-body font-medium">TechNova</p>
                  <p className="text-caption text-white/60">B2B SaaS • 120 employees</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 md:p-12">
              <div className="h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Before</p>
                    <p className="text-h3 font-bold">$850K</p>
                    <p className="text-caption text-white/60">Quarterly revenue</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">After</p>
                    <p className="text-h3 font-bold text-gradient">$2.95M</p>
                    <p className="text-caption text-white/60">Quarterly revenue</p>
                  </div>
                </div>
                <div className="h-32 relative mb-8">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
                  <div className="absolute bottom-0 left-0 h-[30%] w-[16.6%] border-r border-white/10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/30 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-[16.6%] h-[40%] w-[16.6%] border-r border-white/10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/40 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-[33.2%] h-[35%] w-[16.6%] border-r border-white/10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/50 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-[49.8%] h-[60%] w-[16.6%] border-r border-white/10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/60 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-[66.4%] h-[75%] w-[16.6%] border-r border-white/10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/80 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-[83%] h-[100%] w-[16.6%]">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between text-caption text-white/60">
                  <span>Month 1</span>
                  <span>Month 2</span>
                  <span>Month 3</span>
                  <span>Month 4</span>
                  <span>Month 5</span>
                  <span>Month 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .counting-value {
          counter-reset: count 0;
          animation: none;
        }
        
        .counting.counting-value {
          animation: count 2s forwards ease-out;
        }
        
        .counting.counting-value::after {
          content: counter(count);
        }
        
        @keyframes count {
          from { counter-increment: count 0; }
          to { counter-increment: count attr(data-value); }
        }
      `}</style>
    </section>
  );
};

export default ResultsSection;
