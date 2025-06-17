import React from 'react';

const InvestmentSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 leading-tight">
            You Only Pay For <span className="text-green-600">Meetings That Happen</span>
          </h2>
          
          <div className="prose prose-xl max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 mb-8 text-center">
              Most agencies charge $10-30K per month whether they deliver or not. We don't believe in that model.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
              Our inference engine is so effective, we bet our revenue on it. You shouldn't pay for emails sent or hours worked. 
              You should pay for qualified conversations with potential customers.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Here's how simple it is:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Start with 2 free meetings</h4>
                  <p className="text-gray-600">See the quality of prospects we deliver</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">If you like what you see</h4>
                  <p className="text-gray-600">Purchase meeting packages based on your needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale up or down</h4>
                  <p className="text-gray-600">Based on your capacity and results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-lg font-bold text-green-600">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Pay only for meetings that show up</h4>
                  <p className="text-gray-600">No retainers. No long contracts. No risk.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-green-900 mb-4">No retainers. No long contracts. No risk.</h3>
              <p className="text-lg text-gray-700">
                We're so confident in our results, we only get paid when you get meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;