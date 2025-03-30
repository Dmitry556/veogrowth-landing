
import React, { useEffect, useRef } from 'react';
import CustomButton from '../ui/CustomButton';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle settings
    const particleCount = 50;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }[] = [];
    
    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? '#3B82F6' : '#8B5CF6',
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-stagger">
            <h1 className="text-display font-bold leading-display tracking-tight mb-6">
              Your SDRs Are Missing <span className="gradient-text">68%</span> of Potential Pipeline
            </h1>
            
            <p className="text-body-large text-white/80 leading-body tracking-slight mb-8 max-w-lg">
              We help B2B companies generate 4.2M+ in pipeline without hiring more sales reps. Most outbound agencies claim they can get you leads. We've actually done it for dozens of companies in diverse industries - and we have the data to prove it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton 
                size="lg" 
                className="flex items-center"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
              >
                Launch my free campaign <ChevronRight className="ml-2" size={18} />
              </CustomButton>
              <CustomButton 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
              >
                Let's Talk Pipeline
              </CustomButton>
            </div>
            
            {/* "Trusted by innovative companies" section has been removed */}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="glass-card rounded-3xl p-1 bg-black/40 relative h-[500px]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-primary blur-3xl opacity-30 animate-pulse"></div>
                  </div>
                  <div className="relative h-full w-full p-8 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow animate-float">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-h3 font-bold mb-2">Pipeline Growth</h3>
                    <p className="text-center text-white/70 mb-6">Real-time insights to drive your business forward</p>
                    <div className="w-full bg-black/20 rounded-lg p-4 mb-4">
                      <div className="h-2 w-3/4 bg-gradient-primary rounded-full"></div>
                      <div className="mt-2 h-2 w-1/2 bg-gradient-secondary rounded-full"></div>
                    </div>
                    <div className="flex justify-between w-full px-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold gradient-text">87%</p>
                        <p className="text-caption text-white/60">Conversion</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold gradient-text">$4.2M</p>
                        <p className="text-caption text-white/60">Pipeline</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold gradient-text">12.8x</p>
                        <p className="text-caption text-white/60">ROI</p>
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
