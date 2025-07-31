import React, { useState, useEffect } from 'react';
import VSLPlayer from '@/components/VSLPlayer';
import CustomButton from '@/components/ui/CustomButton';
import { trackCalendlyClick } from '@/utils/analytics';
import CanonicalUrl from '@/components/seo/CanonicalUrl';

const VSLHomepage: React.FC = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // Show CTA when video reaches 80% or ends
  const handleVideoProgress = (progress: number) => {
    setVideoProgress(progress);
    if (progress >= 80 && !showCTA) {
      setShowCTA(true);
    }
  };

  const handleVideoEnd = () => {
    setShowCTA(true);
  };

  useEffect(() => {
    // Update document title for VSL
    document.title = "Watch: How We Generate 30+ Qualified Meetings Per Month - VeoGrowth";
    
    // Add VSL-specific meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Watch our exclusive video showing how we generate 30+ qualified meetings per month for B2B companies using our proven cold outbound system.');
    }
  }, []);

  const handleCalendlyClick = () => {
    trackCalendlyClick('vsl-cta');
    window.open('https://calendly.com/veogrowth', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <CanonicalUrl path="/" />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Video Section */}
        <div className="w-full max-w-5xl mx-auto mb-8">
          {/* Video Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              How We Generate <span className="text-blue-400">30+ Qualified Meetings</span><br />
              Per Month on Autopilot
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch this exclusive behind-the-scenes video showing our exact system that's generated over $8M in verified pipeline for B2B companies.
            </p>
          </div>

          {/* Video Player */}
          <div className="bg-gray-900 rounded-2xl p-4 md:p-8 shadow-2xl">
            <VSLPlayer
              videoUrl="https://f63404c49a518cf4ff1d01c8890354c2.r2.cloudflarestorage.com/myvideo"
              onVideoEnd={handleVideoEnd}
              onVideoProgress={handleVideoProgress}
              poster="/api/placeholder/800/450"
            />
          </div>

          {/* Progress Indicator */}
          {videoProgress > 0 && (
            <div className="mt-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Progress:</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
                <span>{Math.round(videoProgress)}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`w-full max-w-2xl mx-auto text-center transition-all duration-1000 ${
          showCTA ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Generate Your Own Pipeline?
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Book a free strategy call to see if our system is right for your business.
              We'll show you exactly how we can generate 30+ qualified meetings for you.
            </p>
            
            <CustomButton
              onClick={handleCalendlyClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Your Free Strategy Call
            </CustomButton>

            <div className="mt-4 text-sm text-blue-200">
              ✓ No commitment required &nbsp;•&nbsp; ✓ 15-minute call &nbsp;•&nbsp; ✓ Free consultation
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$8M+</div>
              <div className="text-sm">Pipeline Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm">Qualified Meetings Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-sm">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          © 2025 VeoGrowth. All rights reserved. &nbsp;•&nbsp; 
          <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a> &nbsp;•&nbsp; 
          <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default VSLHomepage;