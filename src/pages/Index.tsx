
import React, { useEffect, lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';

// Lazy load non-critical sections with increased threshold for better performance
const SectionLoader = () => <div className="py-12 flex justify-center"><div className="spinner"></div></div>;

// Use dynamic imports with chunks
const ProblemSection = lazy(() => import(/* webpackChunkName: "problem-section" */ '@/components/sections/ProblemSection'));
const SolutionSection = lazy(() => import(/* webpackChunkName: "solution-section" */ '@/components/sections/SolutionSection'));
const ResultsSection = lazy(() => import(/* webpackChunkName: "results-section" */ '@/components/sections/ResultsSection'));
const ProcessSection = lazy(() => import(/* webpackChunkName: "process-section" */ '@/components/sections/ProcessSection'));
const PricingSection = lazy(() => import(/* webpackChunkName: "pricing-section" */ '@/components/sections/PricingSection'));
const DashboardSection = lazy(() => import(/* webpackChunkName: "dashboard-section" */ '@/components/sections/DashboardSection'));
const FaqSection = lazy(() => import(/* webpackChunkName: "faq-section" */ '@/components/sections/FaqSection'));

const Index = () => {
  useEffect(() => {
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
    
    // Use requestIdleCallback for non-critical operations
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        injectSchema();
      }, { timeout: 1000 });
    } else {
      setTimeout(injectSchema, 500);
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
      <Header />
      
      <main>
        <HeroSection />
        
        <LazySection component={ProblemSection} id="problems" />
        <LazySection component={SolutionSection} id="solutions" />
        <LazySection component={ResultsSection} id="results" />
        <LazySection component={ProcessSection} id="process" />
        <LazySection component={PricingSection} id="pricing" />
        <LazySection component={DashboardSection} id="dashboard" />
        <LazySection component={FaqSection} id="faq" />
      </main>
      
      <Footer />
    </div>
  );
};

// Optimized lazy section loader
const LazySection = ({ component: Component, id }: { component: React.ComponentType, id: string }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' } // Preload when within 200px
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={sectionRef}>
      {isVisible ? (
        <Suspense fallback={<SectionLoader />}>
          <Component />
        </Suspense>
      ) : (
        <SectionLoader />
      )}
    </div>
  );
};

export default Index;
