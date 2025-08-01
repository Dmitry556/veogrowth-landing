import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';

export const metadata: Metadata = {
  title: 'VeoGrowth - 30+ Qualified B2B Meetings Monthly | Pay Per Meeting',
  description: 'VeoGrowth generates 30+ qualified B2B meetings monthly using AI-powered cold email campaigns. Pay only for meetings that show up. $8M+ pipeline generated. No retainers, no contracts.',
  openGraph: {
    title: 'VeoGrowth - 30+ Qualified B2B Meetings Monthly | Pay Per Meeting',
    description: 'Pay only for qualified meetings that show up. $8M+ pipeline generated.',
    url: 'https://www.veogrowth.com',
  },
  alternates: {
    canonical: 'https://www.veogrowth.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoSlider />
        <ResultsSection />
        <CaseStudiesPreview />
        <EmailExamplesSlider />
        <StorySection />
        <SolutionSection />
        <ProcessSection />
        <QualificationSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}