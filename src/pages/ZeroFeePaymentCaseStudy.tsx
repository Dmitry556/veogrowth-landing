import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import { generateCaseStudySchema } from '@/utils/reviewSchema';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Zap, Brain, MessageSquare, CreditCard, Star } from 'lucide-react';

const ZeroFeePaymentCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Study: Zero-Fee Payment Processor - 52 Meetings | VeoGrowth";
  }, []);

  const caseStudySchema = generateCaseStudySchema(
    "Zero-Fee Payment Processor: 52 Meetings, $605K Pipeline",
    "How VeoGrowth generated 52 qualified meetings and $605K in pipeline for a zero-fee payment processor by targeting businesses frustrated with hidden fees.",
    "https://www.veogrowth.com/case-studies/zero-fee-payment-processor-52-meetings",
    "2025-06-23"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path="/case-studies/zero-fee-payment-processor-52-meetings" />
      <Helmet>
        <title>Zero-Fee Payment Processor Case Study: 52 Meetings - Veogrowth</title>
        <meta name="description" content="How we helped a zero-fee payment processor reach 89,000 qualified prospects and generate 52 meetings using massive TAM qualification and clear differentiation." />
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
                <CreditCard className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">3.5% Response Rate • $605K Revenue</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Zero-Fee Payment Processor:
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  52 Meetings
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                How massive TAM qualification and clear differentiation helped a payment processor stand out in the most commoditized industry.
              </p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">52</div>
                <div className="text-sm text-gray-400">Meetings Booked</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">$605K</div>
                <div className="text-sm text-gray-400">Annual Revenue</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">3.5%</div>
                <div className="text-sm text-gray-400">Response Rate</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">675K</div>
                <div className="text-sm text-gray-400">TAM Prospects</div>
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
                    <span className="text-purple-400 font-medium">Industry:</span>
                    <p className="text-white">B2B Payment Processing</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Unique Offer:</span>
                    <p className="text-white">Zero monthly fees, zero PCI fees, zero statement fees - only 2.7% + 25¢ per transaction</p>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Revenue:</span>
                    <p className="text-white">$12M ARR</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">TAM:</span>
                    <p className="text-white">500,000+ SMB retailers and restaurants</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-medium">Challenge:</span>
                    <p className="text-white">Standing out in the most commoditized industry</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The Problem: Everyone Claims "Better Rates"</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <p className="text-gray-300 mb-6">
                In payment processing, everyone fights over 0.1% rate differences. But our client had a KILLER OFFER: absolutely zero monthly fees while competitors charge $50-500/month.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">The challenge?</strong> Getting anyone to believe it and pay attention.
              </p>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Approach: Massive TAM, Smart Qualification</h2>
            
            {/* Layer 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Layer 1: Build the Entire Universe</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  We didn't look for fancy signals. We built a list of:
                </p>
                <ul className="space-y-3">
                  {[
                    'Every restaurant in target cities (183,000)',
                    'Every retail store under $10M revenue (247,000)',
                    'Every service business accepting payments (156,000)',
                    'Every e-commerce store on Shopify (89,000)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-300 font-medium">
                    Total potential TAM: 675,000 businesses
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
                <h3 className="text-xl font-bold">Layer 2: AI Qualification at Scale</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">Our AI analyzed each business to qualify/disqualify:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="text-green-400 font-medium">Qualify:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Small enough to feel monthly fees ($50K-500K monthly processing)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Using mainstream processors (Square, Stripe, Clover)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Independent businesses (not franchises with corporate deals)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Active and growing (not dying businesses)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-red-400 font-medium">Disqualify:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Too small (&lt;$10K/month processing)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Too large (&gt;$1M/month - have negotiated rates)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Franchises (corporate payment deals)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Already using a zero-fee processor</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-300 font-medium">
                    This filtered 675,000 → 89,000 qualified prospects
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
                <h3 className="text-xl font-bold">Layer 3: 1:1 Personalized Messaging Around the Killer Offer</h3>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  The offer was unbeatable. Our AI made it relevant to each prospect's specific situation:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h4 className="text-purple-400 font-medium mb-3">To a restaurant with 4.8 Yelp rating and "family-owned" in bio:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Square charging Antonio's monthly fees?</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Tony,</p>
                      <p className="mb-3">With a 4.8 rating and lines out the door on weekends, betting you process $60-80K/month at Antonio's.</p>
                      <p className="mb-3">Square's taking $179/month before you swipe a card. Plus 2.9% on every transaction.</p>
                      <p className="mb-3">We charge zero monthly fees. Just 2.7% + 25¢. You'd save ~$2,200/year.</p>
                      <p>Family restaurants like Antonio's deserve to keep that money. Worth discussing?</p>
                    </blockquote>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-blue-400 font-medium mb-3">To a boutique posting Instagram stories about "Small Business Saturday":</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Clover fees vs Small Business Saturday</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Sarah,</p>
                      <p className="mb-3">Loved your Small Business Saturday post about keeping money local. Ironic that Clover takes $89/month from Bella Boutique whether you sell anything or not.</p>
                      <p className="mb-3">Local shops switching to us save $1,000-2,000/year. Zero monthly fees, just pay when you sell.</p>
                      <p>Want to keep more money in the neighborhood?</p>
                    </blockquote>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-green-400 font-medium mb-3">To an e-commerce store running Facebook ads for seasonal products:</h4>
                    <div className="text-gray-400 text-sm mb-2">Subject: Ad costs + Shopify fees = ouch?</div>
                    <blockquote className="text-gray-300 leading-relaxed">
                      <p className="mb-3">Mike,</p>
                      <p className="mb-3">Saw you're pushing hard on Facebook ads for the holiday season. Between ad costs and Shopify's monthly fees + 2.9%, margins must be tight.</p>
                      <p className="mb-3">PureSupplements.com switched from Shopify Payments to us. Same integration, but saving $400/month they now put into more ads.</p>
                      <p>Quick math: $400/month saved = $80 more daily ad budget. Interested?</p>
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
                    <span className="text-gray-300">Qualified businesses:</span>
                    <span className="text-white font-medium">89,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Emails sent:</span>
                    <span className="text-white font-medium">67,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Responses:</span>
                    <span className="text-white font-medium">2,345 (3.5%)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Meetings booked:</span>
                    <span className="text-white font-medium">52</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Meetings attended:</span>
                    <span className="text-green-400 font-medium">48</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-6">Conversion Results</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Requested proposals:</span>
                    <span className="text-white font-medium">31</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Switched processors:</span>
                    <span className="text-white font-medium">22</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Average savings:</span>
                    <span className="text-white font-medium">$180/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">New MRR:</span>
                    <span className="text-white font-medium">$50,490</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Annual revenue:</span>
                    <span className="text-green-400 font-medium">$605,880</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Client Quote</h3>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                "We tried being clever. Turns out businesses just want to save money on fees. Your system helped us reach 89,000 qualified prospects with that simple message. The 3.5% response rate shocked us."
              </blockquote>
            </div>
          </section>

          {/* Why This Worked */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Why This Worked</h2>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <p className="text-gray-300 mb-6 text-lg">
                No fancy signals. No complex inference. Just:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Massive TAM</h4>
                  <p className="text-gray-400 text-sm">Properly qualified 675,000 → 89,000</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Clear Differentiator</h4>
                  <p className="text-gray-400 text-sm">Everyone understands (zero monthly fees)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Simple Math</h4>
                  <p className="text-gray-400 text-sm">$150/month saved = $1,800/year</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Learning</h2>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <p className="text-lg text-gray-300 mb-6">
                In commoditized industries with huge TAMs, you don't need fancy intelligence. You need:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Proper qualification at scale</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Clear, simple differentiation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Messaging that states the value clearly</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-300 font-medium">
                Sometimes the boring approach works best.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Scale Campaigns That Convert?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how our massive TAM approach can help you reach qualified prospects at scale with clear, simple messaging.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Your Strategy Call →
              </button>
              <p className="text-gray-400 text-sm mt-4">Free • 30 minutes • Scale strategy consultation</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZeroFeePaymentCaseStudy;