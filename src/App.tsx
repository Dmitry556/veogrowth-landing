
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SchemaMarkup from "./components/schema/SchemaMarkup";
import WebVitals from "./components/performance/WebVitals";
import PerformanceDashboard from "./components/performance/PerformanceDashboard";
import RouteTracker from "./components/analytics/RouteTracker";

// Direct imports for immediate loading
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import PodcastWhalesCaseStudy from "./pages/PodcastWhalesCaseStudy";
import ZeroFeePaymentCaseStudy from "./pages/ZeroFeePaymentCaseStudy";
import ApiMonitoringCaseStudy from "./pages/ApiMonitoringCaseStudy";
import TechStack from "./pages/TechStack";
import NotFound from "./pages/NotFound";
import MicrosoftFilter from "./pages/MicrosoftFilter";
import SDRCostWhitepaper from "./pages/SDRCostWhitepaper";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import Compliance from "./pages/Compliance";
import GDPR from "./pages/GDPR";
import PerformanceReport from "./pages/PerformanceReport";
import ROICalculator from "./pages/ROICalculator";

// Create a client for React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60000, // 1 minute cache
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SchemaMarkup />
        <WebVitals 
          enabled={true}
          debug={process.env.NODE_ENV === 'development'}
          analyticsId={import.meta.env.VITE_GA_MEASUREMENT_ID}
        />
        <PerformanceDashboard />
        <BrowserRouter>
          <RouteTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/podcast-whales-25-meetings-6-clients" element={<PodcastWhalesCaseStudy />} />
            <Route path="/case-studies/zero-fee-payment-processor-52-meetings" element={<ZeroFeePaymentCaseStudy />} />
            <Route path="/case-studies/api-monitoring-platform-56-meetings" element={<ApiMonitoringCaseStudy />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/tools/microsoft-filter" element={<MicrosoftFilter />} />
            <Route path="/tools/roi-calculator" element={<ROICalculator />} />
            <Route path="/resources/true-cost-of-sdr" element={<SDRCostWhitepaper />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/security" element={<Security />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/gdpr" element={<GDPR />} />
            {/* Old blog post redirects */}
            <Route path="/blog/1" element={<Navigate to="/blog/poke-the-bear-questions-that-get-replies" replace />} />
            <Route path="/blog/2" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/3" element={<Navigate to="/blog/competitor-lookalike-insights-using-public-data" replace />} />
            <Route path="/blog/4" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/5" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/6" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/7" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/8" element={<Navigate to="/blog/cold-email-campaign-that-actually-works" replace />} />
            <Route path="/admin/performance" element={<PerformanceReport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
