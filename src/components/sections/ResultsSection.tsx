
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { Quote, Play } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResultsSection: React.FC = () => {
  const emailResponses = [
    "Interesting timing with this email. We're actually dealing with this exact problem right now...",
    "How did you know we're having issues with our reengagement sequence?",
    "Your email caught my attention. We've been looking for a solution exactly like this..."
  ];

  return (
    <section id="results" className="py-20 md:py-24 bg-white border-b border-gray-200">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-sm font-medium mb-8">
            Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-gray-900">
            "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients"
          </h2>
        </div>
        
        {/* Video Testimonial - David Hughes */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Video on the left */}
              <div className="relative rounded-xl overflow-hidden border border-gray-200">
                <AspectRatio ratio={16 / 9} className="bg-gray-100">
                  <div style={{height: "100%", width: "100%"}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1011989557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                      style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                      title="David Hughes Testimonial"
                    ></iframe>
                  </div>
                </AspectRatio>
              </div>
              
              {/* Text content on the right */}
              <div>
                <Quote className="text-purple-600 opacity-30 mb-6" size={48} />
                <p className="text-xl md:text-2xl text-gray-900 mb-8 leading-relaxed font-medium">
                  "Over the last <strong className="text-purple-600">30 days</strong>, we hopped on <strong className="text-purple-600">25 meetings</strong> and closed <strong className="text-purple-600">six high-ticket clients</strong>."
                </p>
                <div>
                  <p className="text-lg font-bold text-gray-900">David Hughes</p>
                  <p className="text-gray-600">Founder & CEO, <a href="https://www.podcastwhales.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Podcast Whales</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* The results speak for themselves */}
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The results speak for themselves:</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't unusual.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our inference approach consistently generates <strong className="text-purple-600">30-50 qualified meetings per month</strong> with prospects who match your exact ICP.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                And weren't actively looking for solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
