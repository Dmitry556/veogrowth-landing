
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { Quote } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResultsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Their team helped us build $4.2M in pipeline this year alone.",
      author: "VP of Marketing",
      role: "SaaS Company",
      image: "https://placehold.co/60x60/2A2A2A/CCCCCC?text=VP"
    },
    {
      quote: "We've been using this system for 7 months and have closed 4 major accounts directly from cold email.",
      author: "Head of Growth",
      role: "B2B Tech Company",
      image: "https://placehold.co/60x60/2A2A2A/CCCCCC?text=HG"
    }
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-caption font-medium mb-6">
            Proven Results
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Proven Results for Our Clients
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            We've generated 10,000+ positive responses for 40+ clients in 2024 alone.
          </p>
        </div>
        
        {/* New Case Study Card with Video */}
        <div className="mb-8">
          <CustomCard variant="glass" className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
                    Featured Case Study
                  </div>
                  <Quote className="text-blue-400 opacity-20 mb-2" size={36} />
                  <p className="text-xl italic mb-6">
                    "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients."
                  </p>
                  <div className="flex items-center mb-8">
                    <img src="https://placehold.co/60x60/2A2A2A/CCCCCC?text=DH" alt="David Hughes" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="text-body font-medium">David Hughes</p>
                      <p className="text-caption text-white/60">Founder & CEO</p>
                      <p className="text-caption text-white/60">Podcast Whales</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Before</p>
                    <p className="text-h3 font-bold">0</p>
                    <p className="text-caption text-white/60">Monthly growth</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">After</p>
                    <p className="text-h3 font-bold text-gradient">6</p>
                    <p className="text-caption text-white/60">Clients closed in 30 days</p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={16 / 9} className="bg-black/20">
                  <div style={{height: "100%", width: "100%"}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                      style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                      title="David Hughes"
                    ></iframe>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </CustomCard>
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
                How we helped build $8M in pipeline for Teleforce360.com
              </h3>
              <p className="text-body text-white/70 mb-6">
                Their data-first approach found leads our internal team missed completely.
              </p>
              <div className="flex items-center">
                <img src="https://placehold.co/60x60/2A2A2A/CCCCCC?text=CEO" alt="CEO" className="w-10 h-10 rounded mr-3" />
                <div>
                  <p className="text-body font-medium">Asaf Oz, CEO & Owner</p>
                  <p className="text-caption text-white/60">Teleforce360.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 md:p-12">
              <div className="h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Before</p>
                    <p className="text-h3 font-bold">$850K</p>
                    <p className="text-caption text-white/60">Quarterly pipeline</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">After</p>
                    <p className="text-h3 font-bold text-gradient">$3M</p>
                    <p className="text-caption text-white/60">Quarterly pipeline</p>
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
    </section>
  );
};

export default ResultsSection;
