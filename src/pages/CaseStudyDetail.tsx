import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Case study data - in real app this would come from API or CMS
  const caseStudy = {
    'podcast-whales-25-meetings-6-clients': {
      title: 'Podcast Whales: 25 Meetings, 6 Clients in 30 Days',
      industry: 'B2B Podcast Production Agency',
      revenue: 'Service Agency',
      tam: 'Founders, CEOs, and CMOs at B2B SaaS & Services',
      challenge: 'Needed consistent pipeline of executives interested in starting podcasts',
      results: {
        meetings: '25',
        pipeline: '$48K/mo',
        responseRate: '90%',
        showRate: '90%',
        proposalStage: '6',
        closed: '6'
      },
      imageUrl: ''
    },
    'employee-training-platform-42-meetings': {
      title: 'Employee Training Platform: 42 Meetings in 30 Days',
      industry: 'B2B SaaS - Employee Training & Development',
      revenue: '$7M ARR',
      tam: '75,000 companies with 50-500 employees',
      challenge: 'Stuck at 10 demos/month from inbound, needed predictable pipeline',
      results: {
        meetings: '42',
        pipeline: '$840K',
        responseRate: '3.8%',
        showRate: '90%',
        proposalStage: '8',
        closed: '3'
      },
      imageUrl: ''
    }
  }[id as string];

  if (!caseStudy) {
    return (
      <div className="min-h-screen text-white" style={{ background: '#0a0a0a', fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-teal-400 hover:text-teal-300">
            ← Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white" style={{ background: '#0a0a0a', fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Helmet>
        <title>{caseStudy.title} - Veogrowth Case Study</title>
        <meta name="description" content={`Detailed case study: ${caseStudy.title}. See how we generated ${caseStudy.results.meetings} meetings in 30 days using our three-layer intelligence approach.`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #061210 0%, #0a0a0a 50%, #060d14 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(13, 148, 136, 0.12) 0%, transparent 60%)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-900/30 text-green-300 rounded-full px-4 py-2 mb-6 border border-green-500/30 backdrop-blur-sm">
                <span className="text-sm font-medium">{caseStudy.results.closed} Clients Won • {caseStudy.results.showRate} Show Rate</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {caseStudy.title.split(':')[0]}:
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  {caseStudy.title.split(':')[1]?.trim()}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                How we used our three-layer intelligence approach to identify companies with active training challenges and generate qualified meetings.
              </p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-800/40 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">{caseStudy.results.meetings}</div>
                <div className="text-sm text-gray-400">Meetings Booked</div>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">{caseStudy.results.pipeline}</div>
                <div className="text-sm text-gray-400">Pipeline Generated</div>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">{caseStudy.results.closed}</div>
                <div className="text-sm text-gray-400">Clients Won</div>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 text-center border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">{caseStudy.results.showRate}</div>
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
                    <span className="text-teal-400 font-medium">Industry:</span>
                    <p className="text-white">{caseStudy.industry}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-teal-400 font-medium">Revenue:</span>
                    <p className="text-white">{caseStudy.revenue}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-teal-400 font-medium">TAM:</span>
                    <p className="text-white">{caseStudy.tam}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-teal-400 font-medium">Challenge:</span>
                    <p className="text-white">{caseStudy.challenge}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Everyone Else Would Do */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What Everyone Else Would Do</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">
                Pull a list of "HR Directors at companies with 50-500 employees" and send:
              </p>
              <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-900/10 rounded-r-lg">
                <p className="text-red-300 italic">
                  "Hi Sarah, I see you're the HR Director at TechCorp. We help companies like yours improve employee training. Want to chat?"
                </p>
              </blockquote>
              <div className="flex items-center mt-4 space-x-4 text-red-400">
                <span>Delete.</span>
                <span>Delete.</span>
                <span>Delete.</span>
              </div>
            </div>
          </section>

          {/* Our Three-Layer Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What We Did: The Three-Layer Approach</h2>
            
            {/* Layer 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold">Layer 1: Built Custom Intelligence</h3>
              </div>
              
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  Instead of generic HR lists, we built custom data identifying:
                </p>
                <ul className="space-y-3">
                  {[
                    'Companies that posted 10+ job openings in the last 60 days (rapid hiring = training needs)',
                    'Organizations that announced "return to office" plans (new training requirements)',
                    'Companies whose Glassdoor reviews mentioned "lack of growth opportunities"',
                    'Businesses that just promoted internal employees to VP/Director roles',
                    'Organizations using outdated LMS systems (based on job postings mentioning specific tools)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-teal-900/20 rounded-lg">
                  <p className="text-teal-300 font-medium">
                    From 75,000 companies, we identified 12,000 with active training challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold">Layer 2: Research & Qualification</h3>
              </div>
              
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">We analyzed each company and inferred:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="text-green-400 font-medium">Companies to TARGET:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Companies hiring 10+ engineers → Need technical onboarding at scale</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Return-to-office announcements → Need hybrid work training</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>New VP promotions → Need leadership development programs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Poor Glassdoor reviews about growth → Need career pathway training</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-red-400 font-medium">Companies to SKIP:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Companies that just implemented a competitor</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Organizations in hiring freezes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>Businesses with dedicated L&D teams over 5 people</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-300 font-medium">
                    This filtered to 3,200 companies actively struggling with training challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold">Layer 3: Problem-First Messaging</h3>
              </div>
              
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 mb-6">
                  Instead of generic outreach, we wrote emails like:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-teal-500">
                    <h4 className="text-teal-400 font-medium mb-3">To a company that hired 15 engineers in 2 months:</h4>
                    <blockquote className="text-gray-300 italic leading-relaxed">
                      "Hi Michael,<br/><br/>
                      With 15 engineers joining since January and another 8 postings live, I imagine your tech leads are spending more time onboarding than coding.<br/><br/>
                      Datadog had the same problem - senior engineers becoming full-time teachers. They now use async video modules that new hires complete before day one.<br/><br/>
                      Worth exploring how to get your senior engineers back to building?"
                    </blockquote>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-blue-400 font-medium mb-3">To a company with poor Glassdoor reviews about growth:</h4>
                    <blockquote className="text-gray-300 italic leading-relaxed">
                      "Hi Jennifer,<br/><br/>
                      Noticed three recent Glassdoor reviews mentioned 'no clear career path' at CloudFlow. With your Series B last month, I imagine retention is now critical for scaling.<br/><br/>
                      When Lattice faced this, they built visual career frameworks for each role. Reduced turnover by 40% in 6 months.<br/><br/>
                      Open to ideas on building growth paths that actually retain talent?"
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
                <h3 className="text-xl font-bold mb-6">Month 1 Performance</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Emails sent:</span>
                    <span className="text-white font-medium">18,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Reply rate:</span>
                    <span className="text-green-400 font-medium">3.8% (vs. 1% industry avg)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Meetings booked:</span>
                    <span className="text-white font-medium">42</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Never found in Apollo:</span>
                    <span className="text-teal-400 font-medium">12 companies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-900/20 to-emerald-900/20 rounded-2xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-bold mb-6">Quality of Meetings</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Show rate:</span>
                    <span className="text-white font-medium">90% (38 of 42)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Avg company size:</span>
                    <span className="text-white font-medium">200 employees</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Moved to proposal:</span>
                    <span className="text-white font-medium">8 companies</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Closed in 60 days:</span>
                    <span className="text-green-400 font-medium">3 companies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/30 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Client Quote</h3>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                "We were skeptical about cold email, but these weren't cold emails. They knew our exact challenges. One prospect asked if we'd been spying on their Slack."
              </blockquote>
            </div>
          </section>

          {/* Why This Worked */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Why This Worked</h2>
            
            <div className="bg-gradient-to-r from-teal-900/20 to-emerald-900/20 rounded-2xl p-8 border border-teal-500/20">
              <p className="text-gray-300 mb-6 text-lg">
                Traditional cold email would have blasted all 75,000 companies with the same message. We:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Built Intelligence</h4>
                  <p className="text-gray-400 text-sm">Custom data showing who's actually struggling</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Deep Research</h4>
                  <p className="text-gray-400 text-sm">Inferred specific problems from patterns</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Problem-First</h4>
                  <p className="text-gray-400 text-sm">Wrote about their problems, not our features</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">
                  <strong className="text-white">The result:</strong> Meetings with companies who weren't even looking for training solutions, but recognized their problem in our email.
                </p>
              </div>
            </div>
          </section>

          {/* The Math */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">The Math</h2>
            
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="p-6 bg-red-900/20 rounded-xl border border-red-500/30">
                  <h3 className="text-red-400 font-bold mb-4">Traditional Approach</h3>
                  <div className="text-3xl font-bold text-white mb-2">75,000</div>
                  <div className="text-gray-400 mb-4">emails sent</div>
                  <div className="text-2xl font-bold text-red-400">37</div>
                  <div className="text-gray-400">meetings</div>
                </div>
                
                <div className="p-6 bg-green-900/20 rounded-xl border border-green-500/30">
                  <h3 className="text-green-400 font-bold mb-4">Our Approach</h3>
                  <div className="text-3xl font-bold text-white mb-2">18,000</div>
                  <div className="text-gray-400 mb-4">emails sent</div>
                  <div className="text-2xl font-bold text-green-400">42</div>
                  <div className="text-gray-400">meetings</div>
                </div>
              </div>
              
              <div className="text-center mt-8 p-6 bg-teal-900/20 rounded-xl">
                <div className="text-2xl font-bold text-teal-400 mb-2">5x More Efficient</div>
                <div className="text-gray-300">Infinitely More Intelligent</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-teal-900/50 to-emerald-900/50 rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want Similar Results for Your Company?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how our three-layer intelligence approach can identify your ideal prospects and generate qualified meetings.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Your Strategy Call →
              </button>
              <p className="text-gray-400 text-sm mt-4">Free • 30 minutes • No pitch, just insights</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;