import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center leading-tight">
            The Day Cold Email Died
            <br />
            <span className="text-blue-600">(And What Replaced It)</span>
          </h2>
          
          {/* Opening Hook */}
          <div className="prose prose-xl max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              You know why cold email stopped working? Everyone bought the same Apollo list. Everyone uses the same AI tools. 
              Everyone sends "Hi Sarah, I saw you're VP of Marketing at..."
            </p>
            
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Prospects can smell it instantly. <span className="font-semibold text-red-600">Delete.</span>
            </p>
            
            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              But here's what changed everything: AI can now do something that was impossible before—make intelligent 
              inferences about thousands of prospects simultaneously.
            </p>
          </div>
          
          {/* Comparison Box */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-4">❌ Everyone Else</h3>
                <p className="text-gray-600 italic">"I see you use Salesforce."</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4">✅ Our AI</h3>
                <p className="text-gray-700 font-medium">
                  "Based on your 3 new enterprise clients and that RevOps hire last month, you're probably dealing 
                  with data silos between your CRM and billing system."
                </p>
              </div>
            </div>
          </div>
          
          {/* The Why Now */}
          <div className="prose prose-xl max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 mb-8 font-semibold">
              Why wasn't this possible 2 years ago?
            </p>
            
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Three things had to converge:
            </p>
            
            <ul className="text-lg text-gray-700 space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                AI models that can actually reason, not just match patterns
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                APIs that let us pull real-time intelligence at scale
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                Infrastructure costs dropping 90% for this kind of processing
              </li>
            </ul>
            
            <p className="text-xl leading-relaxed text-gray-700">
              We built a system that does this inference work across your entire market. And just as important—it knows who to skip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;