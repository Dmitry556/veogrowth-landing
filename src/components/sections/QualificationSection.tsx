import React from 'react';

const QualificationSection: React.FC = () => {
  const requirements = [
    {
      title: "A large market.",
      description: [
        "We need <strong>50,000+ potential customers</strong>.",
        "Our approach requires scale to build proper intelligence and segments.",
        "Small TAMs can't support this."
      ]
    },
    {
      title: "Proven traction.",
      description: [
        "You should be doing <strong>$100K+ monthly</strong>.",
        "This proves you can handle meeting volume and actually close deals.",
        "We're here to <strong>scale what's working</strong>, not validate your model."
      ]
    },
    {
      title: "A real solution.",
      description: [
        "Your product needs to solve <strong>actual business problems</strong>.",
        "We can identify prospects struggling with those exact problems.",
        "But you need something worth talking about."
      ]
    }
  ];

  return (
    <section id="qualification" className="py-20 md:py-24 bg-gray-900">
      
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            Who This Is For
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-white">
            This Only Works If You Have Three Things
          </h2>
        </div>
        
        {/* Three Requirements */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {req.title}
                    </h3>
                    <div className="space-y-3">
                      {req.description.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          className="text-lg text-gray-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Message */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              <strong className="text-white">If that's you</strong>, we should talk.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              <strong className="text-white">If not</strong>, we're probably not a fit—and that's okay.
            </p>
            <p className="text-lg text-purple-300 leading-relaxed font-medium">
              We only work with <strong className="text-white">5 companies per month</strong> because each requires custom intelligence building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;