
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import HeroSection from '@/components/sections/HeroSection';
import EmailExamplesSlider from '@/components/sections/EmailExamplesSlider';
import GrowthProcessSection from '@/components/sections/GrowthProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import FaqSection from '@/components/sections/FaqSection';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';

// More efficient section loader
const SectionLoader = () => (
  <div className="py-12 flex justify-center">
    <div className="spinner"></div>
  </div>
);

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if we are running in a browser that supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  // Track if this is the first render to optimize schema injection
  const isFirstRender = React.useRef(true);

  // Add fast, subtle scroll animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        will-change: opacity, transform;
      }
      
      .fade-in {
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
      
      .fade-in.visible {
        opacity: 1;
      }
      
      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
        overflow-x: hidden;
      }
      
      body {
        overflow-x: hidden;
      }
      
      * {
        box-sizing: border-box;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
    <div className="min-h-screen bg-background text-foreground" style={{ overflowX: 'hidden' }}>
      <CanonicalUrl path="/" />
      <Header />

      <main>
        <div className="fade-in visible">
          <HeroSection />
        </div>

        {/* Proof Section - Moved up for credibility */}
        <AnimatedSection delay={0}>
          <ResultsSection />
        </AnimatedSection>

        {/* Case Studies Preview - New section for social proof */}
        <AnimatedSection delay={100}>
          <CaseStudiesPreview />
        </AnimatedSection>

        {/* Email Examples Section - Moved up to show work quality */}
        <AnimatedSection delay={200}>
          <EmailExamplesSlider />
        </AnimatedSection>

        {/* How It Works / Pricing / Fit */}
        <AnimatedSection delay={0}>
          <GrowthProcessSection />
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={0}>
          <FaqSection />
        </AnimatedSection>

      </main>

      <Footer />
    </div>
  );
};

// Simple section loader
const LazySection = ({ component: Component, id }: { component: React.ComponentType, id: string }) => {
  return (
    <div id={id}>
      <Component />
    </div>
  );
};

export default Index;
