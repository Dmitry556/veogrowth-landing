import React, { useEffect, useState } from 'react';
import { trackCalendlyClick } from '@/utils/analytics';
import { ChevronRight } from 'lucide-react';

const NewElegantHero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-3 transition-all duration-200 ${
          scrolled 
            ? 'backdrop-blur-2xl bg-black/80 border-b border-white/8 shadow-lg' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="text-white/95 font-medium text-base tracking-tight font-mono">
            ◈ pipeline
          </a>
          <div className="hidden md:flex items-center gap-7">
            <a href="#" className="text-gray-400 text-sm hover:text-white/90 transition-colors">
              Product
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white/90 transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white/90 transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white/90 transition-colors">
              Pricing
            </a>
            <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-md hover:bg-white/95 hover:transform hover:-translate-y-0.5 transition-all">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.4), transparent),
                radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.3), transparent),
                radial-gradient(1.5px 1.5px at 45% 85%, rgba(255,255,255,0.35), transparent)
              `,
              backgroundSize: '400px 300px, 300px 400px, 200px 200px'
            }}
          />
        </div>

        <div className="container mx-auto px-10 py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-5 py-2 mb-10 hover:bg-white/12 hover:border-white/18 transition-all">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider font-mono">
                Proof-of-Concept Pilot
              </span>
              <span className="text-gray-500 ml-1 opacity-60">→</span>
            </div>

            {/* Main Headline */}
            <div className="relative mb-10">
              <div className="absolute -inset-5 bg-white/3 blur-sm rounded-3xl -z-10" />
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-normal tracking-tight mb-0"
                style={{
                  background: 'linear-gradient(135deg, #9ca3af 0%, #d1d5db 25%, #e5e7eb 50%, #f9fafb 75%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  letterSpacing: '-0.04em'
                }}
              >
                We'll run your cold email campaign<br />
                until we book 2 meetings - free.
              </h1>
            </div>

            {/* Elegant Subheadline */}
            <div className="text-xl text-gray-400 text-center mb-10 italic">
              Then only pay for{' '}
              <span className="text-white font-medium not-italic relative">
                qualified calls
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </span>
              {' '}that show up.
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-12 text-center space-y-6">
              <p className="text-lg leading-relaxed text-white/90 font-medium tracking-tight">
                We bet our revenue on results.
              </p>
              <p className="text-base leading-relaxed text-white/80 tracking-tight">
                Tell us what you sell and who you want to reach. Our AI finds, researches, and sends the email of the year to your prospects.
              </p>
              <p className="text-base leading-relaxed text-white/80 tracking-tight">
                You approve the copy & targeting. We launch in less than 24 hours.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto mb-15">
              <div className="flex gap-2.5 p-2 bg-white/2 border border-white/4 rounded-xl">
                <input 
                  type="email"
                  placeholder="What's your work email?"
                  className="flex-1 h-12 px-5 bg-transparent border-none text-white/90 text-base placeholder:text-gray-500 placeholder:opacity-80 focus:outline-none focus:bg-white/2 rounded-md"
                />
                <button 
                  onClick={() => {
                    trackCalendlyClick('hero-elegant');
                    // Form handling logic
                  }}
                  className="flex-shrink-0 h-12 px-7 bg-white text-black text-sm font-medium rounded-md hover:bg-white/95 hover:transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  Request the pilot
                </button>
              </div>
            </div>

            {/* Elegant Video Placeholder */}
            <div className="max-w-2xl mx-auto mb-15">
              <div 
                className="w-full aspect-video bg-gray-800/50 border-2 border-white/20 rounded-lg cursor-pointer hover:border-white/30 hover:-translate-y-0.5 transition-all min-h-48"
                onClick={() => {
                  // Video modal logic
                  alert('Video player would open here');
                }}
              />
            </div>

            {/* Trust Section */}
            <div className="mt-auto pt-10">
              <p className="text-sm text-gray-500 mb-9 opacity-80">
                Companies we booked meetings for our clients with
              </p>
              
              {/* Logo Grid */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-8 gap-5 items-center justify-items-center">
                  {[
                    'Apple', 'AWS', 'Google', 'Goldman Sachs', 
                    'PayPal', 'Nike', 'Disney', 'Pfizer',
                    'HubSpot', 'Microsoft', 'Jeep', 'Puma', 
                    'Red Bull', 'Vercel', 'Perplexity', 'Samsung'
                  ].map((company, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-center text-white/30 text-xs font-light text-center w-full h-10 hover:text-white/70 transition-all"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 mt-7 text-gray-600 text-sm hover:text-gray-400 transition-colors group"
              >
                See case studies 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NewElegantHero;