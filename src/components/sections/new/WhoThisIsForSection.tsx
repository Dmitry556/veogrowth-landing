import React from 'react';

const WhoThisIsForSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 leading-tight">
            This Only Works If You Have <span className="text-blue-600">Three Things</span>
          </h2>
          
          <div className="space-y-12">
            {/* Large Market */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">A large market.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We need 50,000+ potential customers. Our approach requires scale to build proper intelligence and segments. 
                Small TAMs can't support this.
              </p>
            </div>
            
            {/* Proven Traction */}
            <div className="bg-green-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Proven traction.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You should be doing $100K+ monthly. This proves you can handle meeting volume and actually close deals. 
                We're here to scale what's working, not validate your model.
              </p>
            </div>
            
            {/* Real Solution */}
            <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">A real solution.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your product needs to solve actual business problems. We can identify prospects struggling with those exact problems, 
                but you need something worth talking about.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl text-gray-700 mb-6">
                If that's you, we should talk. If not, we're probably not a fit—and that's okay.
              </p>
              <p className="text-lg text-gray-600">
                We only work with <strong>5 companies per month</strong> because each requires custom intelligence building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;