
import React from 'react';
import CustomCard from '../ui/CustomCard';

const ProcessSection: React.FC = () => {
  
  // Content will be handled in the main layout

  // Define the keyframe animation as a style object
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <section id="process" className="py-20 md:py-24 bg-gray-900">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-white">
            From 50,000 Prospects to 30+ Meetings
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-12">
            Here's what happens when you work with us.
          </p>
          
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-gray-800/50 rounded-xl p-8 mb-12 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Step 1: Intelligent Segmentation</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We take your addressable market—let's say <strong className="text-white">50,000 potential customers</strong>—and break them into <strong className="text-white">20+ intelligent segments</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Not</strong> by industry or size.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  But by the <strong className="text-white">problems they're likely facing right now</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-8 mb-12 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Step 2: Custom Intelligence</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 leading-relaxed">
                  For each segment, we <strong className="text-white">build custom intelligence</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When a company expands to a new city, we find out <strong className="text-white">who's managing that chaos</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When they launch a product, we identify <strong className="text-white">who's scrambling for customer feedback</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-8 mb-16 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Step 3: AI Analysis</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Then our AI <strong className="text-white">analyzes each prospect individually</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  It connects dots between what we found and what <strong className="text-white">problems that creates for them</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Real inference</strong>, not templates.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Example Comparison */}
          <div className="bg-gray-800/70 rounded-xl p-8 md:p-10 mb-16 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">The Difference in Action</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-red-400 mb-4">❌ Everyone Else</h4>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "I noticed you're growing fast"
                </p>
              </div>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-400 mb-4">✅ Our AI</h4>
                <p className="text-white font-medium text-lg leading-relaxed">
                  "With your Phoenix expansion, I imagine your dispatch team is juggling calls between time zones while drivers sit idle."
                </p>
              </div>
            </div>
          </div>
          
          {/* Final explanation */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">The Scale</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We run <strong className="text-white">20+ of these campaigns simultaneously</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Different segments</strong>, different inferred problems, different angles.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  All backed by infrastructure that <strong className="text-white">actually delivers to the inbox</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">The Result</h3>
              <div className="space-y-4">
                <p className="text-xl text-gray-200 leading-relaxed">
                  <strong className="text-white">You don't need SDRs.</strong>
                </p>
                <p className="text-xl text-gray-200 leading-relaxed">
                  <strong className="text-white">You don't need to manage tools.</strong>
                </p>
                <p className="text-xl text-purple-300 leading-relaxed font-bold">
                  You just get meetings with people who weren't even looking for your solution—because we identified their problem before they posted about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
