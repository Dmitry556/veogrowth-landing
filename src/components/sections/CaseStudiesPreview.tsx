import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPreview: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 'podcast-whales-25-meetings-6-clients',
      title: 'Podcast Whales: 25 Meetings, 6 Clients in 30 Days',
      company: 'Podcast Whales',
      companyUrl: 'https://www.podcastwhales.com/',
      industry: 'B2B Podcast Production Agency',
      results: {
        meetings: '25',
        pipeline: '$48K/mo',
        responseRate: '90%'
      },
      challenge: 'Needed consistent pipeline of executives interested in starting podcasts',
      preview: 'Creative, personalized pitches that proposed specific podcast concepts for each prospect, not generic service pitches.',
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
      tags: ['Payment Processing', 'SMB', 'Scale Approach']
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </div>


          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredCaseStudies.map((study, index) => (
              <Link
                to={`/case-studies/${study.id}`}
                key={study.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-900/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                      {study.id === 'podcast-whales-25-meetings-6-clients' ? (
                        <>
                          <a href={study.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">
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
                  <div className="grid grid-cols-3 gap-3 mb-6">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Get Free Meetings CTA */}
          <div className="text-center">
            <button
              onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get 2 Free Meetings
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;