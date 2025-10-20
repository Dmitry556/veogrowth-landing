import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <CanonicalUrl path="/case-studies" />
      <Helmet>
        <title>Veogrowth Case Studies | B2B Lead Generation Success Stories</title>
        <meta name="description" content="VeoGrowth client success stories: $8M+ pipeline generated, 10,000+ meetings booked. Real case studies from B2B SaaS companies." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-sm text-slate-300">
          <Link to="/" className="font-semibold tracking-tight text-slate-100">
            Veogrowth
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-emerald-200 transition-colors">Home</Link>
            <Link to="/case-studies" className="text-emerald-300">Case Studies</Link>
            <Link to="/blog" className="hover:text-emerald-200 transition-colors">Blog</Link>
            <Link to="/tools" className="hover:text-emerald-200 transition-colors">Free Tools</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">Free Trial Pilot</span>
            <button
              onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 hover:bg-emerald-500/20 transition-colors"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-[-20%] h-[420px] bg-[radial-gradient(circle,_rgba(45,212,191,0.18)_0%,_rgba(15,23,42,0)_70%)]" />
          <div className="absolute right-[-25%] top-[10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              <TrendingUp className="h-3.5 w-3.5" />
              $8M+ Pipeline Generated
            </span>

            <h1 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
              B2B Outbound Case Studies
            </h1>
            <p className="mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
              Proof that strategic, personalized outbound creates real pipeline. Explore the campaigns and playbooks we’ve used to drive meetings across industries.
            </p>

            <div className="grid w-full max-w-3xl grid-cols-1 gap-6 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 px-6 py-5">
                <div className="text-2xl font-semibold text-slate-50 md:text-3xl">10,000+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Qualified Meetings</div>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 px-6 py-5">
                <div className="text-2xl font-semibold text-slate-50 md:text-3xl">$8M+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Pipeline Created</div>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 px-6 py-5">
                <div className="text-2xl font-semibold text-slate-50 md:text-3xl">150+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Companies Served</div>
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
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">Success Stories</h2>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
              Every campaign is different, but the results speak for themselves. Explore how we tailor our systems to each market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="group rounded-2xl border border-slate-800/80 bg-slate-950/80 p-8 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex h-full flex-col gap-6">
                  <div className="flex items-start justify-between gap-4 text-sm text-slate-400">
                    <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-emerald-200">
                      {study.industry}
                    </span>
                    <span className="text-xs">Case {index + 1}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-50">
                      {study.id === 'podcast-whales-25-meetings-6-clients' ? (
                        <>
                          <a href="https://podcastwhales.co/" target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline-offset-4 transition-colors hover:text-emerald-200">
                            Podcast Whales
                          </a>
                          : 25 Meetings, 6 Clients in 30 Days
                        </>
                      ) : (
                        study.title
                      )}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300/90">
                      {study.preview}
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-300">
                    <div>
                      <div className="text-slate-500">Meetings</div>
                      <div className="text-base font-semibold text-slate-50">{study.results.meetings}</div>
                    </div>
                    <div className="h-8 w-px bg-slate-800" />
                    <div>
                      <div className="text-slate-500">Pipeline</div>
                      <div className="text-base font-semibold text-slate-50">{study.results.pipeline}</div>
                    </div>
                    <div className="h-8 w-px bg-slate-800" />
                    <div>
                      <div className="text-slate-500">Response</div>
                      <div className="text-base font-semibold text-slate-50">{study.results.responseRate}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                    {study.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-full border border-slate-800/80 bg-slate-950 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-transform duration-200 hover:translate-x-1"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Industries We Serve */}
        <section className="mb-20">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 md:p-10">
            <div className="mx-auto flex max-w-4xl flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-slate-50">Industries We've Helped Scale</h2>
                <p className="mt-3 text-sm text-slate-300">
                  Methodology-first outbound works across stages and verticals. Here’s where we’ve proven it most often.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3 md:grid-cols-4">
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
                    className="rounded-xl border border-slate-800/70 bg-slate-950/80 px-4 py-3 text-left"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
