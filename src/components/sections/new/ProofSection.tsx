import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProofSection: React.FC = () => {
  const emailResponses = [
    "Interesting timing with this email. We're actually dealing with this exact problem right now...",
    "How did you know we're having issues with our reengagement sequence?",
    "Your email caught my attention. We've been looking for a solution exactly like this...",
    "Perfect timing - we just had a team meeting about this challenge yesterday"
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Video Testimonial */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients"
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-xl overflow-hidden">
                    <iframe 
                      src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                      className="w-full h-full" 
                      title="David Hughes Testimonial"
                    ></iframe>
                  </AspectRatio>
                </div>
              </div>
              
              <div>
                <div className="text-center lg:text-left">
                  <p className="text-lg text-gray-600 mb-4">David Hughes</p>
                  <p className="text-sm text-gray-500 mb-8">Founder & CEO, Podcast Whales</p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                      <div className="text-sm text-gray-600">Meetings in 30 days</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                      <div className="text-sm text-gray-600">Clients closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Statement */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              <strong>The results speak for themselves:</strong> This isn't unusual. Our inference approach consistently 
              generates 30-50 qualified meetings per month with prospects who match your exact ICP—and weren't actively 
              looking for solutions.
            </p>
          </div>
          
          {/* Email Responses */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Real responses to our inference-driven emails:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {emailResponses.map((response, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <p className="text-gray-700 italic">"{response}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;