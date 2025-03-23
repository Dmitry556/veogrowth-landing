
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ResultsSection from '@/components/sections/ResultsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FaqSection from '@/components/sections/FaqSection';

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
    
    return () => {
      document.body.classList.remove('noise-overlay');
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
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
