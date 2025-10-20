import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import { generateCaseStudySchema } from '@/utils/reviewSchema';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Zap, Brain, MessageSquare, Mic, Star } from 'lucide-react';

const PodcastWhalesCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Study: Podcast Whales - 25 Meetings, 6 Clients | VeoGrowth";
  }, []);

  const caseStudySchema = generateCaseStudySchema(
    "Podcast Whales: 25 Meetings, 6 Clients in 30 Days",
    "How VeoGrowth helped Podcast Whales generate 25 meetings and close 6 clients in 30 days using creative, personalized pitches that proposed specific podcast concepts.",
    "https://www.veogrowth.com/case-studies/podcast-whales-25-meetings-6-clients",
    "2025-06-23"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path="/case-studies/podcast-whales-25-meetings-6-clients" />
      <Helmet>
        <title>Podcast Whales Case Study: 25 Meetings, 6 Clients in 30 Days - Veogrowth</title>
        <meta name="description" content="How we helped Podcast Whales generate 25 meetings and close 6 clients in 30 days using creative, personalized pitches that proposed specific podcast concepts." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(caseStudySchema)}
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
                <Mic className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">90% Show Rate • $48K/month New Revenue</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                    Podcast Whales
                  </a>:
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  25 Meetings, 6 Clients in 30 Days
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                How creative, personalized pitches that proposed specific podcast concepts generated consistent pipeline for a B2B podcast production agency.
              </p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">25</div>
                <div className="text-sm text-gray-400">Meetings Booked</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-gray-400">Clients Closed</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">$48K</div>
                <div className="text-sm text-gray-400">Monthly Revenue</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">90%</div>
                <div className="text-sm text-gray-400">Show Rate</div>
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
                    <span className="text-purple-400 font-medium">Company:</span>
                    <p className="text-white">
                      <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        Podcast Whales
                      </a> - B2B Podcast Production Agency
                    </p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Service:</span>
                    <p className="text-white">Full-service podcast production for B2B companies</p>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Target Audience:</span>
                    <p className="text-white">Founders, CEOs, and CMOs at B2B SaaS & Services</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Challenge:</span>
                    <p className="text-white">Needed consistent pipeline of executives interested in starting podcasts</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Traditional Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The Traditional Approach (That Doesn't Work)</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">
                Most agencies would blast CEOs with:
              </p>
              <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-900/10 rounded-r-lg">
                <p className="text-red-300 italic">
                  "Hi John, I see you're the CEO of TechCorp. Did you know podcasts can increase brand awareness? We help companies create podcasts. Want to chat?"
                </p>
              </blockquote>
              <div className="flex items-center mt-4 space-x-4 text-red-400">
                <span>Delete.</span>
                <span>Too generic.</span>
                <span>Too salesy.</span>
              </div>
            </div>
          </section>

          {/* Our Three-Layer Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Three-Layer Approach for <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Podcast Whales</a></h2>
            
            {/* Layer 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 1: Custom Intelligence Building</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  Instead of just targeting "CEOs at B2B companies," we built intelligence identifying:
                </p>
                <ul className="space-y-3">
                  {[
                    'Founders who recently appeared on OTHER podcasts (they understand the value)',
                    'CEOs whose competitors launched successful podcasts',
                    'CMOs who wrote about "thought leadership" or "content strategy" on LinkedIn',
                    'Companies that just raised funding (budget for brand building)',
                    'Executives who mentioned "building community" in recent interviews',
                    'B2B companies with strong personal brands but no owned media'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-300 font-medium">
                    From their TAM, we identified companies where podcasting would actually make strategic sense.
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
                <h3 className="text-xl font-bold">Layer 2: AI Inference & Creative Angles</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">Our AI analyzed each prospect and developed unique podcast angles:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="text-green-400 font-medium">Creative Angles Developed:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>SaaS founder who tweets about customer success → "Customer therapy session" podcast</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>CEO competing with established players → "David vs Goliath" industry podcast</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>CMO focused on community → Behind-the-scenes founder stories podcast</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Recently funded company → Category creation podcast opportunity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-red-400 font-medium">Who NOT to Approach:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Companies already running successful podcasts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Executives who explicitly posted about hating podcasts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Businesses in crisis mode (wrong timing)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 3: Creative, Personalized Pitches</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  Instead of generic "you should start a podcast" emails, our AI wrote:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h4 className="text-purple-400 font-medium mb-3">To a CEO whose competitor has a popular podcast:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Loom has 50K podcast downloads/month</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Hi Sarah,</p>
                      <p className="mb-3">Loom's CEO podcast gets 50K downloads monthly. They're basically programming the minds of your future customers every commute.</p>
                      <p className="mb-3">What if you launched "The Async CEO" - interviewing remote leaders about killing meetings? Position yourself as the anti-Loom.</p>
                      <p className="mb-3">We'd handle everything. You just show up and be controversial.</p>
                      <p>Interested?</p>
                    </blockquote>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-blue-400 font-medium mb-3">To a founder who tweets about customer success:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Your customers' horror stories = podcast gold</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">David,</p>
                      <p className="mb-3">Your tweet about saving CustomerX from churning got 500 likes. That story deserves more than 280 characters.</p>
                      <p className="mb-3">Imagine "SaaS 911" - a podcast where you live-debug customer crises. Like Gordon Ramsay's Kitchen Nightmares but for software.</p>
                      <p className="mb-3">Drift grew 10x doing unconventional content.</p>
                      <p>Want to explore turning support tickets into subscriber growth?</p>
                    </blockquote>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-green-400 font-medium mb-3">To a CMO writing about thought leadership:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Thought leadership that doesn't suck</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Jennifer,</p>
                      <p className="mb-3">Your LinkedIn post about "fake thought leadership" nailed it. Everyone's saying the same nothing.</p>
                      <p className="mb-3">What if you did the opposite? "The Contrarian CMO" - bringing on guests to debate popular marketing "truths."</p>
                      <p className="mb-3">First episode: "Brand building is dead." Watch the internet explode.</p>
                      <p className="mb-3">Salesforce's CMO podcast drove $2M in pipeline being boring. Imagine being interesting.</p>
                      <p>Ready to start some fights?</p>
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
                    <span className="text-gray-300">Prospects identified:</span>
                    <span className="text-white font-medium">6,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Campaign angles:</span>
                    <span className="text-white font-medium">3 distinct</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Meetings booked:</span>
                    <span className="text-white font-medium">25 in 30 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Show rate:</span>
                    <span className="text-green-400 font-medium">90%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-6">Client Success</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Clients closed:</span>
                    <span className="text-white font-medium">6 from first batch</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Average deal size:</span>
                    <span className="text-white font-medium">$8,000/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">New revenue:</span>
                    <span className="text-white font-medium">$48,000/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">ROI in 60 days:</span>
                    <span className="text-green-400 font-medium">10x</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">David Hughes, Founder of <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Podcast Whales</a></h3>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                "Over the last 30 days, we hopped on 25 meetings and closed six high-ticket clients. The emails weren't pitching podcasts - they were pitching specific show concepts that made perfect sense for each prospect. One CEO said it was the best cold email he'd ever received."
              </blockquote>
            </div>
          </section>

          {/* Why This Worked */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Why This Worked</h2>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <p className="text-gray-300 mb-6 text-lg">
                Traditional agencies pitch the service: "We make podcasts."
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                We pitched the vision: "Here's the exact podcast that would position you as the category leader."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Custom Data</h4>
                  <p className="text-gray-400 text-sm">Found executives who would actually care about podcasting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold mb-2">AI Inference</h4>
                  <p className="text-gray-400 text-sm">Created unique angles for each prospect's situation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Creative Pitches</h4>
                  <p className="text-gray-400 text-sm">Made them visualize success, not evaluate a service</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">
                  <strong className="text-white">The result:</strong> Meetings with executives who said "I never thought about starting a podcast until I read your email."
                </p>
              </div>
            </div>
          </section>

          {/* Key Takeaway */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Takeaway</h2>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <p className="text-lg text-gray-300 mb-6">
                For creative services like <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Podcast Whales</a>, the inference engine doesn't just identify problems - it proposes solutions so specific and compelling that prospects can't help but respond.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="p-6 bg-red-900/20 rounded-xl border border-red-500/30">
                  <h3 className="text-red-400 font-bold mb-4">❌ Generic Approach</h3>
                  <p className="text-gray-400 italic">
                    "You should start a podcast"
                  </p>
                </div>
                
                <div className="p-6 bg-green-900/20 rounded-xl border border-green-500/30">
                  <h3 className="text-green-400 font-bold mb-4">✅ Our Approach</h3>
                  <p className="text-gray-400 italic">
                    "Here's the exact podcast that would crush your competitor"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Creative Campaigns That Convert?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how our creative intelligence approach can generate qualified meetings for your agency or service business.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Your Strategy Call →
              </button>
              <p className="text-gray-400 text-sm mt-4">Free • 30 minutes • Real creative concepts for your business</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PodcastWhalesCaseStudy;