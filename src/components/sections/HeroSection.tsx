import React, { useEffect, useRef } from 'react';
import CustomButton from '../ui/CustomButton';
import { ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import LazyVideo from '../ui/LazyVideo';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { setRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (headingRef.current && 'elementTiming' in headingRef.current) {
      headingRef.current.setAttribute('elementtiming', 'hero-heading');
      headingRef.current.setAttribute('fetchpriority', 'high');
    }
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || !isIntersecting) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    setCanvasDimensions();
    
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(setCanvasDimensions);
    });
    
    resizeObserver.observe(canvas);
    
    const isMobile = window.innerWidth < 768;
    const particleCount = Math.min(isMobile ? 5 : 10, 10);
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        color: i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)',
      });
    }
    
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 15;
    const interval = 1000 / fps;
    
    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      const delta = currentTime - lastTime;
      if (delta < interval) return;
      
      lastTime = currentTime - (delta % interval);
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0) particle.x = canvas.width / window.devicePixelRatio;
        if (particle.x > canvas.width / window.devicePixelRatio) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / window.devicePixelRatio;
        if (particle.y > canvas.height / window.devicePixelRatio) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      if (!isMobile) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length - 1; i++) {
          const dx = particles[i].x - particles[i+1].x;
          const dy = particles[i].y - particles[i+1].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i+1].x, particles[i+1].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animationDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 500);
    
    return () => {
      clearTimeout(animationDelay);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [isIntersecting]);

  return (
    <section 
      ref={setRef} 
      className="hero-section relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="hero-content max-w-2xl">
            <h1 
              ref={headingRef}
              className="hero-heading text-h1 font-bold leading-tight tracking-tight mb-8 max-w-xl"
              id="main-heading"
            >
              Build Pipeline With Cold Email That Finally Works
            </h1>
            
            <p className="text-body-large text-white/90 leading-relaxed tracking-slight mb-10 max-w-lg">
              We've helped 25+ B2B companies generate nearly a billion dollars in pipeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <CustomButton 
                size="lg" 
                className="flex items-center justify-center font-medium"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                aria-label="Get 2 Free Meetings"
              >
                Get 2 Free Meetings <ChevronRight className="ml-2" size={18} />
              </CustomButton>
              <CustomButton 
                size="lg" 
                variant="outline"
                className="font-medium"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                aria-label="Let's Talk Pipeline"
              >
                Let's Talk Pipeline
              </CustomButton>
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-20 blur-sm"></div>
            <div className="glass-card rounded-3xl p-2 bg-black/40 relative h-auto md:h-[500px] shadow-xl">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"></div>
                  </div>
                  <div className="relative h-full w-full p-6 md:p-8 flex flex-col items-center justify-center">
                    <LazyVideo
                      videoId="101"
                      title="Pipeline Growth"
                      width={560}
                      height={315}
                      className="mb-8 rounded-xl shadow-lg"
                    />
                    <h3 className="text-h3 font-bold mb-3 text-center">Add Pipeline, Not Headcount</h3>
                    <p className="text-center text-white/90 text-lg mb-8">Pay Only For Qualified Meetings</p>
                    <div className="w-full bg-black/30 rounded-lg p-5 mb-6 shadow-inner">
                      <div className="h-3 w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="mt-3 h-3 w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between w-full px-4 md:px-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-white">$4.2M</p>
                        <p className="text-caption text-white/90">Pipeline</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-white">980M+</p>
                        <p className="text-caption text-white/90">Total Pipeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
