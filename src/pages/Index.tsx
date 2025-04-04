
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ResultsSection from '@/components/sections/ResultsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import DashboardSection from '@/components/sections/DashboardSection';
import FaqSection from '@/components/sections/FaqSection';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';

const Index = () => {
  useEffect(() => {
    // Add smooth fade-in for page load
    document.body.classList.add('noise-overlay');
    
    // Animation for scroll-triggered elements
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      
      document.querySelectorAll('.fade-in-element').forEach((el) => {
        observer.observe(el);
      });
    };
    
    observeElements();
    
    // Update document title
    document.title = "Veogrowth - Generate Pipeline Without Hiring More Sales Reps";
    
    // Add JSON-LD schema markup to head
    const injectSchema = () => {
      const existingScript = document.getElementById('schema-script-home');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'schema-script-home';
      script.type = 'application/ld+json';
      script.innerHTML = schemaToString(generateHomePageSchema());
      document.head.appendChild(script);
    };
    
    // Add Vimeo Player script
    const loadVimeoScript = () => {
      if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
        const vimeoScript = document.createElement('script');
        vimeoScript.src = "https://player.vimeo.com/api/player.js";
        document.body.appendChild(vimeoScript);
      }
    };
    
    injectSchema();
    loadVimeoScript();
    
    return () => {
      document.body.classList.remove('noise-overlay');
      const script = document.getElementById('schema-script-home');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <ProcessSection />
        <PricingSection />
        <DashboardSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
