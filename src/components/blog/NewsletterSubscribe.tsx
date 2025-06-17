
import React, { useState } from 'react';
import CustomButton from '@/components/ui/CustomButton';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, handle subscription logic
      console.log('Subscribing:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 md:p-10 shadow-xl border border-purple-500/20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Get Weekly Cold Email Insights
        </h3>
        <p className="text-purple-100 text-lg leading-relaxed mb-8">
          Join 2,500+ growth leaders getting our proven strategies, case studies, and tactical breakdowns. 
          <strong className="text-white"> No fluff, just what's working right now.</strong>
        </p>
        
        {isSubmitted ? (
          <div className="w-full text-center py-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-bold text-white mb-2">You're in! 🎉</p>
            <p className="text-purple-200">Your next insight-packed email arrives Tuesday.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="relative mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email..."
                className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-lg font-medium shadow-lg"
                required
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
            
            <CustomButton 
              type="submit" 
              className="w-full bg-white text-purple-700 hover:bg-gray-100 font-bold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Getting Insights →
            </CustomButton>
            
            <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-purple-200">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Weekly emails</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
