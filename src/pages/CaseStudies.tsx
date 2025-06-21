import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  useEffect(() => {
    document.title = "VeoGrowth Case Studies | $8M+ Pipeline Generated";
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: 'podcast-whales-25-meetings-6-clients',
      title: 'Podcast Whales: 25 Meetings, 6 Clients in 30 Days',
      industry: 'B2B Podcast Production Agency',
      results: {
        meetings: '25',
        pipeline: '$48K/mo',
        responseRate: '90%'
      },
      challenge: 'Needed consistent pipeline of executives interested in starting podcasts',
      preview: 'Creative, personalized pitches that proposed specific podcast concepts for each prospect, not generic service pitches.',
      imageUrl: '',
      tags: ['Creative Services', 'Podcast Production', 'Custom Concepts']
    },
    {
      id: 'employee-training-platform-42-meetings',
      title: 'Employee Training Platform: 42 Meetings in 30 Days',
      industry: 'B2B SaaS - Employee Training',
      results: {
        meetings: '42',
        pipeline: '$840K',
        responseRate: '3.8%'
      },
      challenge: 'Stuck at 10 demos/month from inbound, needed predictable pipeline to scale past $7M ARR',
      preview: 'Using our three-layer intelligence approach, we identified companies with active training challenges and generated 42 meetings in just 30 days.',
      imageUrl: '',
      tags: ['Employee Training', 'AI Intelligence', 'Custom Data']
    },
    {
      id: 'zero-fee-payment-processor-52-meetings',
      title: 'Zero-Fee Payment Processor: 52 Meetings',
      industry: 'B2B Payment Processing',
      results: {
        meetings: '52',
        pipeline: '$605K',
        responseRate: '3.5%'
      },
      challenge: 'Standing out in the most commoditized industry with 500,000+ SMB retailers and restaurants as TAM',
      preview: 'Massive TAM qualification at scale using clear differentiation (zero monthly fees) and simple math that resonates with small business owners.',
      imageUrl: '',
      tags: ['Payment Processing', 'SMB', 'Scale Approach']
    },
    {
      id: 'api-monitoring-platform-56-meetings',
      title: 'API Monitoring Platform: 56 Meetings in 90 Days',
      industry: 'Developer Tools & Infrastructure',
      results: {
        meetings: '56',
        pipeline: '$554K',
        responseRate: '2.4%'
      },
      challenge: 'Developers hate sales emails and ignore vendor outreach - reaching 300,000+ companies with production APIs',
      preview: 'Technical credibility and developer empathy helped reach engineering teams at scale with characteristic-based qualification and architecture-specific messaging.',
      imageUrl: '',
      tags: ['Developer Tools', 'API Monitoring', 'Technical Credibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path="/case-studies" />
      <Helmet>
        <title>Veogrowth Case Studies | B2B Lead Generation Success Stories</title>
        <meta name="description" content="VeoGrowth client success stories: $8M+ pipeline generated, 10,000+ meetings booked. Real case studies from B2B SaaS companies." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 pt-32 pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-900/30 text-green-300 rounded-full px-4 py-2 mb-6 border border-green-500/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">$8M+ in verified pipeline generated</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Real Results From Real Campaigns
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              See how we've helped B2B companies generate qualified meetings and pipeline through strategic cold email campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-gray-400 text-sm">Qualified Meetings</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">$8M+</div>
                <div className="text-gray-400 text-sm">Pipeline Generated</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-20">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies', current: true }
            ]}
            className="text-gray-300"
          />
        </div>

        {/* Case Studies Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every campaign is different, but the results speak for themselves. Here's how we've helped companies across different industries scale their outbound.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src={study.imageUrl}
                      alt={`${study.title} - ${study.industry} case study showing ${study.results.meetings} meetings generated`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-900/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {study.id === 'podcast-whales-25-meetings-6-clients' ? (
                        <>
                          <a href="https://www.podcastwhales.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">
                            Podcast Whales
                          </a>
                          : 25 Meetings, 6 Clients in 30 Days
                        </>
                      ) : (
                        study.title
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {study.preview}
                    </p>
                  </div>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-900/30 rounded-lg mb-2 mx-auto">
                        <Users className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-lg font-bold text-white">{study.results.meetings}</div>
                      <div className="text-xs text-gray-500">Meetings</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-900/30 rounded-lg mb-2 mx-auto">
                        <DollarSign className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-lg font-bold text-white">{study.results.pipeline}</div>
                      <div className="text-xs text-gray-500">Pipeline</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-purple-900/30 rounded-lg mb-2 mx-auto">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-lg font-bold text-white">{study.results.responseRate}</div>
                      <div className="text-xs text-gray-500">Response</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Industries We Serve */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We've Helped Scale</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our proven methodology works across industries, from early-stage startups to enterprise companies.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'SaaS & Software',
                  'FinTech & Banking',
                  'Healthcare Tech',
                  'E-commerce Platforms',
                  'Manufacturing',
                  'Professional Services',
                  'Real Estate Tech',
                  'MarTech & AdTech'
                ].map((industry) => (
                  <div 
                    key={industry}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                  >
                    <span className="text-sm font-medium text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 text-center border border-purple-500/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the companies that trust us to generate <strong className="text-white">qualified pipeline</strong> through strategic cold email campaigns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get Your Strategy Call →
              </button>
              <span className="text-gray-400 text-sm">Free • 30 minutes • See if we're a fit</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;