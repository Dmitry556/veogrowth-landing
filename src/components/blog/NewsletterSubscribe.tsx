
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
    <div className="glass-card p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-h3 font-bold mb-4">Stay updated with the latest insights</h3>
          <p className="text-white/70">
            Subscribe to our newsletter to receive exclusive updates, industry insights, and actionable tips to supercharge your outbound growth.
          </p>
        </div>
        
        <div className="flex items-center">
          {isSubmitted ? (
            <div className="w-full text-center py-6 animate-fade-in">
              <div className="text-green-400 mb-2">✓</div>
              <p className="font-medium">Thanks for subscribing!</p>
              <p className="text-white/70 text-sm mt-1">You'll receive our next newsletter soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="glass-input flex-1"
                  required
                />
                <CustomButton type="submit">
                  Subscribe
                </CustomButton>
              </div>
              <p className="text-white/50 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
