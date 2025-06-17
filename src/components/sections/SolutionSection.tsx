
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { LineChart, ArrowUpRight, Zap, DollarSign, Database } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <Database className="text-primary" />,
      title: "Layer 1: We Build Custom Intelligence",
      description: [
        "<strong>Everyone else</strong> pulls \"VPs at SaaS companies\" from Apollo.",
        "<strong>We</strong> build <strong>custom intelligence</strong> that doesn't exist in any database:",
        "<strong>Which companies just expanded?</strong>",
        "<strong>Who hired 10+ salespeople last quarter?</strong>",
        "<strong>Who's implementing new tools and struggling with integration?</strong>"
      ],
      gradient: "from-blue-600/20 to-blue-400/5"
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Layer 2: Our AI Actually Thinks",
      description: [
        "<strong>Most \"AI\"</strong> just fills in templates.",
        "<strong>Ours</strong> analyzes each prospect and <strong>infers:</strong>",
        "• Who's actively struggling with <strong>problems you solve</strong>",
        "• Who's <strong>NOT ready</strong> (we skip them, protecting your reputation)",
        "• What <strong>specific challenge</strong> they're facing this week"
      ],
      gradient: "from-amber-500/20 to-amber-300/5"
    },
    {
      icon: <ArrowUpRight className="text-green-600" />,
      title: "Layer 3: We Write About Problems, Not Features",
      description: [
        "Instead of <em>\"I noticed you're growing fast,\"</em>",
        "<strong>Our AI writes:</strong>",
        "<em>\"With your team doubling since January, I imagine your onboarding playbook from 20 employees doesn't scale to 50.\"</em>"
      ],
      gradient: "from-green-600/20 to-green-400/5"
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-24 bg-white border-b border-gray-200">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-sm font-medium mb-8">
            Our Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-gray-900">
            How We Get 10x Better Results Than Everyone Else
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-12">
            We didn't just improve cold email. We rebuilt every single step from scratch.
          </p>
          
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Old Way (Broken)</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Traditional cold email follows the same broken process: <strong>Buy list</strong> → <strong>Add basic personalization</strong> → <strong>Blast everyone</strong> → <strong>Hope for replies</strong>.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 mb-12 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Way (Rebuilt From Scratch)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We threw that out and reimagined everything:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <p className="text-gray-700">How lists are built (<strong>custom intelligence</strong>, not database filters)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <p className="text-gray-700">How prospects are qualified (<strong>AI inference</strong>, not spray and pray)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <p className="text-gray-700">How messages are written (<strong>problem-first</strong>, not feature-first)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <p className="text-gray-700">How campaigns are structured (<strong>20+ micro-campaigns</strong>, not one blast)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold text-xs">•</span>
                  </div>
                  <p className="text-gray-700">How infrastructure is managed (<strong>protected domains</strong>, not burned reputation)</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-gray-900 leading-relaxed font-bold">
                Here's our three-layer system that makes it all work:
              </p>
            </div>
          </div>
        </div>
        
        {/* Three-Layer System */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{solution.title}</h3>
                  <div className="space-y-3">
                    {solution.description.map((line, lineIndex) => (
                      <p 
                        key={lineIndex} 
                        className="text-gray-700 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Formula */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-purple-50 rounded-xl p-8 md:p-10 text-center border border-purple-200">
            <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">The math is simple:</p>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Better Data</strong> × <strong>Smarter AI</strong> × <strong>Real Problems</strong> = <span className="text-purple-600 font-bold text-2xl">30+ meetings per month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
