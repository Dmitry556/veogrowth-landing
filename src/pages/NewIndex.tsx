import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewHeroSection from '@/components/sections/new/NewHeroSection';
import LogoSlider from '@/components/sections/LogoSlider';
import StorySection from '@/components/sections/new/StorySection';
import InnovationSection from '@/components/sections/new/InnovationSection';
import HowItWorksSection from '@/components/sections/new/HowItWorksSection';
import ProofSection from '@/components/sections/new/ProofSection';
import WhoThisIsForSection from '@/components/sections/new/WhoThisIsForSection';
import InvestmentSection from '@/components/sections/new/InvestmentSection';
import FinalCtaSection from '@/components/sections/new/FinalCtaSection';

const NewIndex = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <main className="relative">
        <NewHeroSection />
        <LogoSlider />
        <StorySection />
        <InnovationSection />
        <HowItWorksSection />
        <ProofSection />
        <WhoThisIsForSection />
        <InvestmentSection />
        <FinalCtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default NewIndex;