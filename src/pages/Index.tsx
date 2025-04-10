
import React, { useEffect, lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { generateHomePageSchema, schemaToString } from '@/utils/schema';

// Lazy load non-critical sections
const ProblemSection = lazy(() => import('@/components/sections/ProblemSection'));
const SolutionSection = lazy(() => import('@/components/sections/SolutionSection'));
const ResultsSection = lazy(() => import('@/components/sections/ResultsSection'));
const ProcessSection = lazy(() => import('@/components/sections/ProcessSection'));
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const DashboardSection = lazy(() => import('@/components/sections/DashboardSection'));
const FaqSection = lazy(() => import('@/components/sections/FaqSection'));

// Simple loading component for lazy-loaded sections
const SectionLoader = () => <div className="py-24 flex justify-center"><div className="w-8 h-8 border-2 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin"></div></div>;

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
    
    injectSchema();
    
    // Use Intersection Observer for animations
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
        { threshold: 0.15, rootMargin: '50px' }
      );
      
      document.querySelectorAll('.fade-in-element').forEach((el) => {
        observer.observe(el);
      });
    };
    
    // Add minimal delay to ensure DOM is ready
    const timer = setTimeout(() => {
      observeElements();
    }, 100);
    
    return () => {
      clearTimeout(timer);
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
