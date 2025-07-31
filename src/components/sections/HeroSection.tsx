import React, { useEffect, useRef } from 'react';
import CustomButton from '../ui/CustomButton';
import { ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Play } from 'lucide-react';
import { trackCalendlyClick } from '@/utils/analytics';
import VideoPlayer from '../VideoPlayer';

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
      className="hero-section relative flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ pointerEvents: 'none' }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Qualification Badge */}
          <div className="inline-flex items-center bg-purple-900/30 text-purple-300 rounded-full px-6 py-3 mb-8 border border-purple-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">For B2B companies doing $100K+ monthly with TAM &gt;50,000 prospects</span>
          </div>
          
          {/* Main Headline */}
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            id="main-heading"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              30+ Qualified Meetings
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Per Month on Autopilot
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-2 max-w-3xl mx-auto font-normal">
            We generate qualified pipeline that turns into <span className="text-gray-100">actual revenue</span><br />using AI-powered cold email campaigns.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
            No retainers. No contracts. Pay only for <span className="text-white">qualified</span> meetings that show up.
          </p>

          {/* Video Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                <VideoPlayer
                  videoUrl="https://f63404c49a518cf4ff1d01c8890354c2.r2.cloudflarestorage.com/myvideo"
                  className="aspect-video rounded-xl overflow-hidden"
                />
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">See How We Generate Pipeline</h3>
                  <p className="text-gray-300 text-xs">Watch our proven process in action</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => {
                trackCalendlyClick('hero-main');
                window.open('https://calendly.com/veogrowth', '_blank');
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center">
                Get 2 Free Qualified Meetings
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No contracts</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zero risk</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Setup in 48 hours</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
