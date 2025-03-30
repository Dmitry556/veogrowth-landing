
import React, { useEffect, Suspense, lazy } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';
import { measureComponentRender } from '@/utils/performance';
import { preloadCriticalFonts, addFontDisplaySwap } from '@/utils/fontOptimization';

// Lazy load below-the-fold sections
const ProblemSection = lazy(() => import('@/components/sections/ProblemSection'));
const SolutionSection = lazy(() => import('@/components/sections/SolutionSection'));
const ResultsSection = lazy(() => import('@/components/sections/ResultsSection'));
const ProcessSection = lazy(() => import('@/components/sections/ProcessSection'));
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const DashboardSection = lazy(() => import('@/components/sections/DashboardSection'));
const FaqSection = lazy(() => import('@/components/sections/FaqSection'));

// Loading fallback component for lazy-loaded sections
const SectionLoader = () => (
  <div className="py-12 w-full flex justify-center">
    <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

const Index = () => {
  // Performance measurement
  const finishRenderMeasurement = measureComponentRender('Index Page');
  
  useEffect(() => {
    // Add smooth fade-in for page load
    document.body.classList.add('noise-overlay');
    
    // Optimize fonts
    preloadCriticalFonts();
    addFontDisplaySwap();
    
    // Animation for scroll-triggered elements
    const observeElements = () => {
      // Use Intersection Observer API for better performance
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '50px' }
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
    
    injectSchema();
    
    // Register when component is done rendering
    finishRenderMeasurement();
    
    return () => {
      document.body.classList.remove('noise-overlay');
      const script = document.getElementById('schema-script-home');
      if (script) {
        script.remove();
      }
    };
  }, [finishRenderMeasurement]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Critical above-the-fold content loaded eagerly */}
        <HeroSection />
        
        {/* Below-the-fold content lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SolutionSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ResultsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProcessSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <DashboardSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FaqSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
