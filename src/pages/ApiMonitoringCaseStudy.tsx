import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import { generateCaseStudyReviewSchema } from '@/utils/reviewSchema';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Zap, Brain, MessageSquare, Code, Star } from 'lucide-react';

const ApiMonitoringCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Study: API Monitoring Platform - 56 Meetings | VeoGrowth";
  }, []);

  const reviewSchema = generateCaseStudyReviewSchema(
    "API Monitoring Platform Campaign",
    "Generated 56 qualified meetings with engineering leaders by using technical credibility and characteristic-based qualification to reach 78,000 developers at companies with production APIs.",
    5,
    1
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path="/case-studies/api-monitoring-platform-56-meetings" />
      <Helmet>
        <title>API Monitoring Platform Case Study: 56 Meetings in 90 Days - Veogrowth</title>
        <meta name="description" content="How we helped an API monitoring platform reach 78,000 engineering leaders with technical credibility and generate 56 meetings using characteristic-based qualification." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-900/30 text-green-300 rounded-full px-4 py-2 mb-6 border border-green-500/30 backdrop-blur-sm">
                <Code className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">2.4% Response Rate • 93% Show Rate</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  API Monitoring Platform:
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  56 Meetings in 90 Days
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                How technical credibility and developer empathy helped reach engineering teams at scale with characteristic-based qualification.
              </p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">56</div>
                <div className="text-sm text-gray-400">Meetings Booked</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">$554K</div>
                <div className="text-sm text-gray-400">Annual Revenue</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">2.4%</div>
                <div className="text-sm text-gray-400">Response Rate</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">78K</div>
                <div className="text-sm text-gray-400">Emails Sent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Client Profile */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6">Client Profile</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Product:</span>
                    <p className="text-white">Real-time API monitoring & debugging platform</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Target Users:</span>
                    <p className="text-white">Engineering teams at companies with 10+ APIs</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Pricing:</span>
                    <p className="text-white">$500-5,000/month based on API calls</p>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">TAM:</span>
                    <p className="text-white">300,000+ companies with production APIs</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Challenge:</span>
                    <p className="text-white">Developers hate sales emails and ignore vendor outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The Problem: Developers Delete Everything</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">
                Traditional outreach to developers:
              </p>
              <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-900/10 rounded-r-lg mb-4">
                <p className="text-red-300 italic">
                  "Hi John, I see you're a Senior Engineer at TechCo. Our API monitoring platform can reduce downtime by 50%. Want to see a demo?"
                </p>
              </blockquote>
              <p className="text-gray-300">
                <strong className="text-white">Developer reaction:</strong> "Another vendor pitch." Block sender.
              </p>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Approach: Speak Developer, Not Sales</h2>
            
            {/* Layer 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 1: Characteristic-Based Qualification</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  We built a comprehensive list based on company characteristics:
                </p>
                <ul className="space-y-3">
                  {[
                    'Companies with 50+ engineers (need API architecture)',
                    'SaaS/tech companies with $10M+ revenue',
                    'Job postings for backend/API/DevOps roles',
                    'Companies using cloud infrastructure (AWS/GCP/Azure)',
                    'Businesses with mobile apps (always have APIs)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-300 font-medium">
                    Simple qualification criteria: Do they likely have 10+ production APIs? Yes = qualified.
                  </p>
                  <p className="text-gray-300 mt-2">
                    This gave us 315,000 companies with production APIs → 195,000 after removing enterprises with existing solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 2: Inference at Email Creation</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">For each qualified company, our AI analyzed available data to infer their situation:</p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Company with 50+ microservices repos = likely debugging challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Recent transition from monolith (based on repo history) = experiencing complexity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Hiring SREs/DevOps = scaling challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Multiple status page incidents = current pain</span>
                  </li>
                </ul>
                
                <div className="p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-300 font-medium">
                    The key: We email everyone who fits criteria, but each email reflects their specific inferred situation. Some have visible pain signals, others just get intelligent assumptions based on their architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 3: Technical Credibility in Every Email</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  Our AI wrote emails that showed we understand their actual architecture:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h4 className="text-purple-400 font-medium mb-3">To an engineer whose team manages 50+ microservices:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Debugging microservices with kubectl logs?</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Hey Marcus,</p>
                      <p className="mb-3">Saw your team manages 50+ microservices across 3 Kubernetes clusters. Betting someone's SSHing into pods at 3am trying to correlate logs.</p>
                      <p className="mb-3">Spotify's team was doing the same dance. Now they trace requests across all services in one view. P99 latency dropped 40%.</p>
                      <p>We built this specifically for k8s architectures. Want to see how it works with your setup?</p>
                    </blockquote>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-blue-400 font-medium mb-3">To a startup that just went from monolith to microservices:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: First microservices timeout mystery?</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Sarah,</p>
                      <p className="mb-3">Noticed FinanceAPI repo split into 8 services last month. Guessing you're hitting your first "which service caused the timeout?" mystery.</p>
                      <p className="mb-3">Every team discovers this fun: Request works fine in monolith. Breaks randomly in microservices. No idea why.</p>
                      <p className="mb-3">Stripe burned 2 months debugging this manually. There's a better way.</p>
                      <p>10 minutes to show you distributed tracing that actually works?</p>
                    </blockquote>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-green-400 font-medium mb-3">To a team actively dealing with incidents:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: 3 incidents this week</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">David,</p>
                      <p className="mb-3">Your status page shows 3 API incidents this week. With Black Friday coming, that's terrifying.</p>
                      <p className="mb-3">The "elevated error rates" from Tuesday looked exactly like what killed Shopify's checkout in 2019. Same cascade pattern.</p>
                      <p>We can spot these patterns before customers do. Free trial on your actual traffic?</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-xl font-bold mb-6">Campaign Performance</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Qualified companies:</span>
                    <span className="text-white font-medium">195,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Emails sent:</span>
                    <span className="text-white font-medium">78,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Response rate:</span>
                    <span className="text-white font-medium">2.4% (1,872)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Meetings booked:</span>
                    <span className="text-white font-medium">56</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Show rate:</span>
                    <span className="text-green-400 font-medium">93% (52 attended)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-6">Conversion Metrics</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Started free trials:</span>
                    <span className="text-white font-medium">38</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Converted to paid:</span>
                    <span className="text-white font-medium">22</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Average deal:</span>
                    <span className="text-white font-medium">$2,100/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Total MRR:</span>
                    <span className="text-white font-medium">$46,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Annual revenue:</span>
                    <span className="text-green-400 font-medium">$554,400</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                "We tried everything to reach developers. Your emails were the first that didn't sound like marketing. One senior engineer forwarded it to his team saying 'finally, a vendor who gets our architecture.' That never happens."
              </blockquote>
              
              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">The Math of Scale:</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Traditional approach:</strong> Hunt for 5,000 companies with visible problems → 50 emails/day → 2 customers</li>
                  <li><strong>Our approach:</strong> Email 78,000 qualified companies → 2,500 emails/day → 22 customers</li>
                  <li><strong>Result:</strong> More emails = more pipeline, but each one still personally relevant</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why This Worked */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Why This Worked</h2>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-red-900/20 rounded-xl border border-red-500/30">
                  <h3 className="text-red-400 font-bold mb-4">❌ What Everyone Sends</h3>
                  <p className="text-gray-400 italic">
                    "Our platform reduces downtime!"
                  </p>
                </div>
                
                <div className="p-6 bg-green-900/20 rounded-xl border border-green-500/30">
                  <h3 className="text-green-400 font-bold mb-4">✅ What We Sent</h3>
                  <p className="text-gray-400 italic">
                    "Debugging microservices with kubectl logs at 3am?"
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6">The Difference:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start mb-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Technical intelligence</strong>
                      <p className="text-gray-400 text-sm">Found real architecture patterns from GitHub</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Developer empathy</strong>
                      <p className="text-gray-400 text-sm">Acknowledged their actual pain (3am debugging)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Credible examples</strong>
                      <p className="text-gray-400 text-sm">Spotify, Stripe (companies developers respect)</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">No BS</strong>
                      <p className="text-gray-400 text-sm">Straight technical talk, no marketing speak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Breakthrough Insight */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">The Breakthrough Insight</h2>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <p className="text-lg text-gray-300 mb-6">
                We didn't hunt for companies with problems. We emailed every company that likely had 10+ APIs, then made each email technically relevant based on what we could infer about their architecture.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 font-medium">
                78,000 emails. Each one different. Each one technically credible.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <blockquote className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-blue-300 italic">
                    "This is the first vendor email I've ever forwarded to my team as actually useful."
                  </p>
                  <p className="text-gray-400 text-sm mt-2">— CTO response</p>
                </blockquote>
                
                <blockquote className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-green-300 italic">
                    "Your email described our exact problem better than our internal docs."
                  </p>
                  <p className="text-gray-400 text-sm mt-2">— Senior Engineer response</p>
                </blockquote>
              </div>
              
              <div className="mt-8 p-6 bg-purple-900/20 rounded-lg">
                <h4 className="text-purple-300 font-bold mb-3">The Real Innovation:</h4>
                <p className="text-gray-300">
                  Characteristic-based qualification for scale, combined with technical inference for relevance. Not hunting for needles in haystacks - emailing the entire haystack intelligently.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Technical Credibility at Scale?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how our technical intelligence approach can help you reach engineering teams with authentic, architecture-specific messaging.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Your Strategy Call →
              </button>
              <p className="text-gray-400 text-sm mt-4">Free • 30 minutes • Technical approach consultation</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiMonitoringCaseStudy;