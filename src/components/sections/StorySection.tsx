import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-24 bg-white border-b border-gray-200">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-600 text-sm font-medium mb-8">
            The Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16 text-gray-900">
            The Day Cold Email Died (And What Replaced It)
          </h2>
          
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-white rounded-xl p-8 mb-12 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Problem</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  You know why cold email stopped working?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Everyone bought the same Apollo list.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Everyone uses the same AI tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Everyone sends "Hi Sarah, I saw you're VP of Marketing at..."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Prospects can smell it instantly. <span className="font-semibold text-red-600">Delete.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-purple-100 rounded-xl p-8 border border-purple-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Breakthrough</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  But here's what changed everything:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  AI can now do something that was <strong className="text-gray-900">impossible before</strong>—make <strong className="text-gray-900">intelligent inferences</strong> about thousands of prospects simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison Box */}
        <div className="bg-white rounded-xl p-8 md:p-10 mb-20 max-w-4xl mx-auto border border-purple-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Everyone Else</h3>
              <p className="text-gray-600 italic text-lg leading-relaxed">"I see you use Salesforce."</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">✅ Our AI</h3>
              <p className="text-gray-900 font-medium text-lg leading-relaxed">
                "Based on your 3 new enterprise clients and that RevOps hire last month, you're probably dealing with data silos between your CRM and billing system."
              </p>
            </div>
          </div>
        </div>
        
        {/* The Why Now */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why wasn't this possible 2 years ago?
          </h3>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Three things had to converge:
          </p>
          
          <div className="text-left space-y-6 mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                AI models that can actually reason, not just match patterns
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                APIs that let us pull real-time intelligence at scale
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Infrastructure costs dropping 90% for this kind of processing
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-900 leading-relaxed font-medium">
            We built a system that does this inference work across your entire market. And just as important—it knows who to skip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;