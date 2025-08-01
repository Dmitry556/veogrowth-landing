
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
                <div className="space-y-4 mb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">The Challenge:</strong> Podcast Whales needed consistent pipeline of executives interested in starting podcasts, but generic "you should start a podcast" emails weren't working.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Our Solution:</strong> Instead of pitching podcasting services, we pitched <em className="text-purple-600">specific podcast concepts</em> tailored to each prospect's business situation.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Example:</strong> To a CEO competing with Loom: <em className="text-purple-600">"What if you launched 'The Async CEO' - interviewing remote leaders about killing meetings? Position yourself as the anti-Loom."</em>
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">David Hughes</p>
                  <p className="text-gray-600">Founder & CEO, <a href="https://www.podcastwhales.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Podcast Whales</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ResultsSection;
