import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, Target } from 'lucide-react';

const EmailExamplesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const emailGridRef = useRef<HTMLDivElement>(null);

  const emailExamples = [
    {
      id: 1,
      category: 'SaaS Post-Acquisition',
      to: 'VP Sales at a SaaS company just acquired',
      subject: 'Zendesk integration + Freshworks merger',
      preview: 'Targeting specific integration challenges after acquisition',
      body: `Hi Daniel,

With Freshworks acquisition closing last month and Zendesk as your support backbone, I imagine your team is juggling two customer databases while trying to hit Q1 targets.

Clearbit faced the same mess during their HubSpot integration - lost 20% of leads in the chaos.

They fixed it with unified lead routing that didn't require ripping out either system.

Worth a quick chat on keeping revenue flowing during integration?`
    },
    {
      id: 2,
      category: 'Growing Marketing Agency',
      to: 'Founder of agency that went from 12 to 35 employees',
      subject: 'Project management chaos at 35 people?',
      preview: 'Identifying scaling pain points from hiring data',
      body: `Sarah,

Saw you've hired 23 people since September. I'm guessing your Notion setup from 12 employees is now complete chaos with 35.

When Sandwich Video hit this size, project handoffs were taking longer than the actual work.

Curious - are you seeing the same thing?`
    },
    {
      id: 3,
      category: 'Manufacturing Expansion',
      to: 'COO of manufacturer opening new facility',
      subject: 'Phoenix facility + inventory tracking',
      preview: 'Spotting operational challenges before they mention them',
      body: `Hi Marcus,

With your Phoenix facility opening next month and still running NetSuite 2019, are your ops team manually syncing inventory between locations?

Tesla supplier Acme Parts had the same problem - their team was doing Excel reconciliation until 2am.

Fixed it without upgrading NetSuite. Happy to share how if useful.`
    },
    {
      id: 4,
      category: 'Series B Hiring Spree',
      to: 'Head of People at startup that raised Series B',
      subject: '40 offers out = onboarding nightmare?',
      preview: 'Inferring onboarding challenges from hiring volume',
      body: `Jennifer,

LinkedIn shows 40 open roles at Datawise. With January start dates approaching, I imagine you're scrambling to build onboarding that doesn't suck.

Brex had 50 people starting one Monday. Total disaster - half quit within 90 days.

They rebuilt everything async. New hires now productive by day 3.

Want to hear what worked?`
    },
    {
      id: 5,
      category: 'E-commerce Returns',
      to: 'Director of CX at e-commerce brand',
      subject: 'Post-holiday returns hitting hard?',
      preview: 'Timing outreach based on seasonal business cycles',
      body: `Hey Alex,

January returns are brutal. Guessing your team is drowning in "where's my refund" tickets while trying to help actual customers.

Allbirds automated 80% of return status questions without adding headcount.

Customers happier, team stopped burning out.

Open to ideas before it gets worse?`
    },
    {
      id: 6,
      category: 'Healthcare Tech Compliance',
      to: 'VP Engineering at healthtech startup',
      subject: 'HIPAA audit prep with 50 engineers',
      preview: 'Connecting promotions to compliance challenges',
      body: `Michael,

Saw you promoted 3 engineers to team leads last month. With HIPAA audits coming, betting they're freaking out about compliance docs they've never dealt with.

Oscar Health's new leads spent months on audit prep. Killed their roadmap.

There's a faster way. Worth 15 minutes to discuss?`
    },
    {
      id: 7,
      category: 'Creative Agency Pitch',
      to: 'CMO at DTC brand doing $50M+',
      subject: 'Liquid Death\'s $700M valuation secret',
      preview: 'Proposing bold creative concepts, not services',
      body: `Hey Amanda,

Liquid Death just hit $700M valuation selling water. Their secret? They made boring products controversial.

What if your sustainable shoes had a "carbon criminal" campaign? Where customers get "arrested" for their old shoes and "released" with yours?

We'd create fake wanted posters, arrest videos, even a bail bond website.

Want to explore making sustainability rebellious instead of preachy?`
    },
    {
      id: 8,
      category: 'Financial Services Scale',
      to: 'COO at payment processor',
      subject: '2M transactions/day on old infrastructure',
      preview: 'Understanding infrastructure stress from growth metrics',
      body: `Hi Patricia,

Processing 2M transactions daily on infrastructure built for 500K - your engineers must be playing Jenga with servers at 3am.

Stripe's competitor hit the same wall. System crashed during Black Friday.

They scaled to 10M/day without rebuilding. The approach was clever.

Want the playbook?`
    },
    {
      id: 9,
      category: 'Real Estate Tech Growth',
      to: 'CEO of proptech startup in new markets',
      subject: 'Miami + Austin expansion coordination',
      preview: 'Multi-market expansion coordination challenges',
      body: `Tom,

Launching Miami and Austin simultaneously while your ops team sits in NYC - betting there's a lot of 6am calls and confused contractors.

Opendoor's expansion team was living on planes until they figured out remote coordination.

Cut launch time by 60%. Worth exploring their model?`
    },
    {
      id: 10,
      category: 'B2B Marketing Agency Pitch',
      to: 'VP Marketing at cybersecurity company',
      subject: 'Make security sexy (yes, really)',
      preview: 'Creative positioning in a boring industry',
      body: `Hi Marcus,

Every security company shows hackers in hoodies. What if you did the opposite?

Picture this: "The World's Most Boring Security Company" campaign. Khaki-wearing, suburban dad engineers keeping hackers out while mowing lawns.

Make it so boring it's fascinating. Like how Farmers Insurance made insurance interesting with weird claims.

Ready to be the security company people actually remember?`
    }
  ];

  const totalSlides = Math.ceil(emailExamples.length / 4);

  const scrollToEmailGrid = () => {
    if (emailGridRef.current) {
      const yOffset = -120; // Offset for header
      const element = emailGridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(scrollToEmailGrid, 100); // Small delay to let animation start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(scrollToEmailGrid, 100); // Small delay to let animation start
  };

  const getCurrentEmails = () => {
    const startIndex = currentSlide * 4;
    return emailExamples.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-900/30 text-purple-300 rounded-full px-6 py-3 mb-8 border border-purple-500/30 backdrop-blur-sm">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Generated Cold Emails</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cold Email Examples
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our AI Writes
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These aren't templates. Our AI analyzes each company's situation and writes emails that show real understanding of their specific challenges.
          </p>
        </div>

        {/* Email Grid - 2 rows, 2 columns */}
        <div ref={emailGridRef} className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors border border-gray-700 hover:border-purple-500 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors border border-gray-700 hover:border-purple-500 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-8">
            {getCurrentEmails().map((email, index) => (
              <div 
                key={`${currentSlide}-${email.id}`}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Email Header */}
                <div className="p-6 border-b border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-purple-900/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                      {email.category}
                    </span>
                    <Target className="w-4 h-4 text-gray-500" />
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-2">
                    <span className="font-medium">To:</span> {email.to}
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    <span className="font-medium">Subject:</span> {email.subject}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {email.preview}
                  </p>
                </div>

                {/* Email Body Preview */}
                <div className="p-6">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                      {email.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setTimeout(scrollToEmailGrid, 100);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-purple-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* What Makes These Different */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Makes These Different</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <span className="text-red-400 font-bold">❌</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-red-400">Traditional Cold Email</h4>
                <p className="text-gray-400 text-sm italic">
                  "I noticed you're growing fast..."
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-blue-400 font-bold">🎯</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-blue-400">Our Inference Approach</h4>
                <p className="text-gray-400 text-sm italic">
                  "With 40 open roles and January start dates, I imagine you're scrambling to build onboarding that doesn't suck."
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <span className="text-green-400 font-bold">💡</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-green-400">For Agencies</h4>
                <p className="text-gray-400 text-sm italic">
                  "What if your sustainable shoes had a 'carbon criminal' campaign?"
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300">
                <strong className="text-white">One is a template.</strong> Others show we understand what's happening in their business - or can propose ideas that actually make them stop and think.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            See What Our AI Writes for You →
          </button>
          <p className="text-gray-400 text-sm mt-4">Free strategy call • See real examples for your industry</p>
        </div>
      </div>
    </section>
  );
};

export default EmailExamplesSlider;