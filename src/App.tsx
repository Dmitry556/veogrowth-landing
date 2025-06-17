
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchemaMarkup from "./components/schema/SchemaMarkup";
import WebVitals from "./components/performance/WebVitals";
import PerformanceDashboard from "./components/performance/PerformanceDashboard";

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
            <Route path="/resources/true-cost-of-sdr" element={<SDRCostWhitepaper />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/security" element={<Security />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/gdpr" element={<GDPR />} />
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
