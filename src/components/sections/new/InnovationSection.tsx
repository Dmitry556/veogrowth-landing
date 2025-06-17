import React from 'react';

const InnovationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How We Get <span className="text-blue-600">10x Better Results</span>
              <br />
              Than Everyone Else
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We didn't just improve cold email. We rebuilt every single step from scratch.
            </p>
          </div>
          
          {/* Traditional vs Our Approach */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Traditional Cold Email</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Buy list → Add basic personalization → Blast everyone → Hope for replies
                  </div>
                  <div className="text-sm text-gray-500 space-y-2 ml-5">
                    <p>• Database filters only</p>
                    <p>• Generic templates</p>
                    <p>• One-size-fits-all campaigns</p>
                    <p>• Burned domain reputation</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-6">✅ Our Three-Layer System</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom intelligence → AI inference → Problem-first messaging
                  </div>
                  <div className="text-sm text-gray-600 space-y-2 ml-5">
                    <p>• Real-time market intelligence</p>
                    <p>• Individual prospect analysis</p>
                    <p>• 20+ micro-campaigns</p>
                    <p>• Protected infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Three Layers */}
          <div className="space-y-8">
            {/* Layer 1 */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">We Build Custom Intelligence</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Everyone else pulls "VPs at SaaS companies" from Apollo. We build intelligence that doesn't exist in any database:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Which companies just expanded to new locations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Who hired 10+ salespeople last quarter
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Who's implementing new tools and struggling with integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Layer 2 */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our AI Actually Thinks</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Most "AI" just fills in templates. Ours analyzes each prospect and infers:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Who's actively struggling with problems you solve
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Who's NOT ready (we skip them, protecting your reputation)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      What specific challenge they're facing this week
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Layer 3 */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-green-500">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">We Write About Problems, Not Features</h3>
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm text-red-600 font-medium mb-2">❌ Instead of:</p>
                      <p className="text-gray-700 italic">"I noticed you're growing fast"</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-600 font-medium mb-2">✅ Our AI writes:</p>
                      <p className="text-gray-700 font-medium">
                        "With your team doubling since January, I imagine your onboarding playbook 
                        from 20 employees doesn't scale to 50."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Formula */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-4">The math is simple:</p>
              <p className="text-xl">
                Better Data × Smarter AI × Real Problems = <span className="text-yellow-300">30+ meetings per month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;