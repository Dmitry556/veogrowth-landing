import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 leading-tight">
            From <span className="text-blue-600">50,000 Prospects</span> to <span className="text-green-600">30+ Meetings</span>
          </h2>
          
          <div className="prose prose-xl max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Here's what happens when you work with us.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              We take your addressable market—let's say 50,000 potential customers—and break them into 20+ intelligent segments. 
              Not by industry or size, but by the problems they're likely facing right now.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              For each segment, we build custom intelligence. When a company expands to a new city, we find out who's managing that chaos. 
              When they launch a product, we identify who's scrambling for customer feedback.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Then our AI analyzes each prospect individually. It connects dots between what we found and what problems that creates for them. 
              Real inference, not templates.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instead of sending generic messages:</h3>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 font-medium text-sm mb-2">❌ Generic:</p>
                  <p className="text-gray-700 italic">"I noticed you're growing fast"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-600 font-medium text-sm mb-2">✅ Our AI writes:</p>
                  <p className="text-gray-700 font-medium">
                    "With your Phoenix expansion, I imagine your dispatch team is juggling calls between time zones 
                    while drivers sit idle."
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              We run 20+ of these campaigns simultaneously. Different segments, different inferred problems, different angles. 
              All backed by infrastructure that actually delivers to the inbox.
            </p>
            
            <p className="text-xl leading-relaxed text-gray-900 font-semibold">
              You don't need SDRs. You don't need to manage tools. You just get meetings with people who weren't even 
              looking for your solution—because we identified their problem before they posted about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;