
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import HeroSection from '@/components/sections/HeroSection';
import LogoSlider from '@/components/sections/LogoSlider';
import StorySection from '@/components/sections/StorySection';
import SolutionSection from '@/components/sections/SolutionSection';
import EmailExamplesSlider from '@/components/sections/EmailExamplesSlider';
import ResultsSection from '@/components/sections/ResultsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import QualificationSection from '@/components/sections/QualificationSection';
import SimpleFinalCta from '@/components/sections/SimpleFinalCta';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';

// More efficient section loader
const SectionLoader = () => (
  <div className="py-12 flex justify-center">
    <div className="spinner"></div>
  </div>
);

// Optimized intersection observer for lazy loading
const useOptimizedIntersection = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px 0px', threshold: 0.01, ...options });
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [element, options]);
  
  return { isVisible, setRef: setElement };
};

const Index = () => {
  // Track if this is the first render to optimize schema injection
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    // Update document title with high priority
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
      
      // Add high-priority preconnects
      const preconnects = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://i.vimeocdn.com'
      ];
      
      preconnects.forEach(url => {
        if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = url;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };
    
    if (isFirstRender.current) {
      injectSchema();
      isFirstRender.current = false;
    } else {
      // Use requestIdleCallback for non-critical operations on re-renders
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          injectSchema();
        }, { timeout: 1000 });
      } else {
        setTimeout(injectSchema, 500);
      }
    }
    
    return () => {
      const script = document.getElementById('schema-script-home');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CanonicalUrl path="/" />
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Logo Slider */}
        <LogoSlider />
        
        {/* The Story Section */}
        <StorySection />
        
        {/* The Three-Layer Innovation Section */}
        <SolutionSection />
        
        {/* Email Examples Section */}
        <EmailExamplesSlider />
        
        {/* How It Actually Works Section */}
        <ProcessSection />
        
        {/* Proof Section */}
        <ResultsSection />
        
        {/* Who This Is For Section */}
        <QualificationSection />
        
        {/* Investment Section */}
        <PricingSection />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* Final CTA Section */}
        <SimpleFinalCta />
      </main>
      
      <Footer />
    </div>
  );
};

// Optimized lazy section loader with better memory management
const LazySection = ({ component: Component, id }: { component: React.ComponentType, id: string }) => {
  const { isVisible, setRef } = useOptimizedIntersection();

  return (
    <div id={id} ref={setRef}>
      {isVisible ? (
        <Component />
      ) : (
        <SectionLoader />
      )}
    </div>
  );
};

export default Index;
