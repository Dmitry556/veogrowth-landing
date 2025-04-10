
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
  
  // Mark the heading as the LCP element for browsers that support it
  useEffect(() => {
    if (headingRef.current && 'elementTiming' in headingRef.current) {
      headingRef.current.setAttribute('elementtiming', 'hero-heading');
      headingRef.current.setAttribute('fetchpriority', 'high');
    }
  }, []);
  
  // Optimized canvas animation
  useEffect(() => {
    if (!canvasRef.current || !isIntersecting) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Set canvas dimensions with device pixel ratio for better rendering
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
    
    // Use ResizeObserver instead of resize event for better performance
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(setCanvasDimensions);
    });
    
    resizeObserver.observe(canvas);
    
    // Further optimized particle settings - even fewer particles
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
    
    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.1, // Slower movement
        speedY: (Math.random() - 0.5) * 0.1, // Slower movement
        color: i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)',
      });
    }
    
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 15; // Even lower fps for better performance
    const interval = 1000 / fps;
    
    // Animation loop with throttling
    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      const delta = currentTime - lastTime;
      if (delta < interval) return;
      
      lastTime = currentTime - (delta % interval);
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / window.devicePixelRatio;
        if (particle.x > canvas.width / window.devicePixelRatio) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / window.devicePixelRatio;
        if (particle.y > canvas.height / window.devicePixelRatio) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Skip drawing connections on mobile
      if (!isMobile) {
        // Draw connections with minimal calculations (only between adjacent particles)
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
    
    // Start the animation after a short delay to prioritize content rendering
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
    <section ref={setRef} className="hero-section relative min-h-screen flex items-center pt-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content">
            <h1 
              ref={headingRef}
              className="hero-heading"
              id="main-heading"
            >
              Build Pipeline With Cold Email That Finally Works
            </h1>
            
            <p className="text-body-large text-white leading-body tracking-slight mb-8 max-w-lg">
              We help B2B companies generate 4.2M+ in pipeline without hiring more sales reps. Most outbound agencies claim they can get you leads. We've actually done it for dozens of companies in diverse industries - and we have the data to prove it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton 
                size="lg" 
                className="flex items-center"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                aria-label="Launch my free campaign"
              >
                Launch my free campaign <ChevronRight className="ml-2" size={18} />
              </CustomButton>
              <CustomButton 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                aria-label="Let's Talk Pipeline"
              >
                Let's Talk Pipeline
              </CustomButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-20"></div>
            <div className="glass-card rounded-3xl p-1 bg-black/40 relative h-[500px]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"></div>
                  </div>
                  <div className="relative h-full w-full p-8 flex flex-col items-center justify-center">
                    {/* Optimized video placeholder */}
                    <LazyVideo
                      videoId="101"
                      title="Pipeline Growth"
                      width={560}
                      height={315}
                      className="mb-6"
                    />
                    <h3 className="text-h3 font-bold mb-2">Pipeline Growth</h3>
                    <p className="text-center text-white mb-6">Real-time insights to drive your business forward</p>
                    <div className="w-full bg-black/20 rounded-lg p-4 mb-4">
                      <div className="h-2 w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="mt-2 h-2 w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between w-full px-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">87%</p>
                        <p className="text-caption text-white">Conversion</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">$4.2M</p>
                        <p className="text-caption text-white">Pipeline</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">12.8x</p>
                        <p className="text-caption text-white">ROI</p>
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
