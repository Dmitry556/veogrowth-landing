import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Star, Zap, Target, Brain, Mail, Users, Database, Workflow, Video, ChevronRight } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('lead-enrichment');
  
  useEffect(() => {
    document.title = "Tech Stack - Veogrowth | The Best GTM Tools We Use and Recommend";
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: 'lead-enrichment',
      title: 'Lead Enrichment',
      icon: Database,
      description: 'Find any data point about prospects and companies',
      tools: [
        {
          name: 'Clay',
          description: '75+ enrichment tools, AI agents, and everything you\'d need to find the data point you\'re looking for.',
          pricing: 'Starting at $134/month',
          offer: 'Get 2,000 credits',
          highlight: true,
          reason: 'The question you should be asking about Clay is: what data can\'t it find? Clay can find essentially any publicly available data point about a person or company. It\'s the basis for nearly all of our lead enrichment projects.'
        },
        {
          name: 'LeadMagic',
          description: 'Transform your prospecting data into customers with insights not found anywhere else.',
          pricing: 'Starting at $25/month',
          offer: 'Try it for free',
          reason: 'LeadMagic gets into the nitty-gritty with niche data points. Their founder Jesse Ouellette is incredible at finding the newest and most effective data for outbound copy.'
        }
      ]
    },
    {
      id: 'intent-data',
      title: 'Intent Data',
      icon: Target,
      description: 'Identify prospects showing buying signals',
      tools: [
        {
          name: 'Commonroom',
          description: 'The most comprehensive set of signals available anywhere—out of the box.',
          pricing: 'Starting at $625/month',
          offer: 'Try it for free',
          reason: 'Intent signal aggregator that creates maps of prospects\' activity across all channels. Think of it as Clay but for sourcing intent data.'
        },
        {
          name: 'Trigify',
          description: 'Find the right lead at the perfect time. Leverage sales triggers to engage ideal prospects.',
          pricing: 'Starting at $90/month',
          offer: 'Try it for free',
          reason: 'Automate actions when intent signals occur. Perfect for optimizing speed to outreach and creating intent-based qualified leads.'
        },
        {
          name: 'RB2B',
          description: 'Find who\'s visiting your website and leverage the data for smarter GTM decisions.',
          pricing: 'Starting at $99/month',
          offer: 'Try it for free',
          reason: 'De-anonymizes website visitors on the personal level. You can literally see who is visiting your website - a powerful intent signal.'
        }
      ]
    },
    {
      id: 'email-sequencing',
      title: 'Email Sequencing',
      icon: Mail,
      description: 'Send personalized email campaigns at scale',
      tools: [
        {
          name: 'Smartlead',
          description: 'Create robust outbound templates and send effective email campaigns at scale.',
          pricing: 'Starting at $39/month',
          offer: 'Try it for free',
          highlight: true,
          reason: 'One of two email sequencing tools worth considering. Connect unlimited email accounts, run high scale campaigns, and use their incredible API for automations.'
        },
        {
          name: 'Instantly',
          description: 'Create sender accounts, set up email campaigns and more, all in one platform.',
          pricing: 'Starting at $49/month',
          offer: 'Try it for free',
          reason: 'Perfect for your first automated outbound campaign. Easy interface with all-in-one features like buying and warming up inboxes.'
        }
      ]
    },
    {
      id: 'multi-channel',
      title: 'Multi-Channel Tools',
      icon: Users,
      description: 'Reach prospects across email, LinkedIn, and more',
      tools: [
        {
          name: 'LaGrowthMachine',
          description: 'Run campaigns with email, LinkedIn, Twitter, and more, all at once.',
          pricing: 'Starting at $50/month',
          offer: 'Get 30 days free',
          reason: 'True multi-channel tool with email, LinkedIn, and Twitter. Includes LinkedIn voice notes feature which we\'ve found very effective.'
        },
        {
          name: 'Lemlist',
          description: 'Create custom messaging flows tailored perfectly to your ICP.',
          pricing: 'Starting at $99/month',
          offer: 'Try it for free',
          reason: 'Advanced conditions and super robust custom flows. Supports email, phone, and LinkedIn with excellent multi-channel functionality.'
        }
      ]
    },
    {
      id: 'ai-copywriting',
      title: 'AI Copywriting',
      icon: Brain,
      description: 'AI-powered copy generation and optimization',
      tools: [
        {
          name: 'Twain',
          description: 'Train AI to write copy and messages for your product, tailored to your target audience.',
          pricing: 'Starting at $45/month',
          offer: 'Try it for free',
          reason: 'Best AI copywriting tool on the market. Follows industry best practices and writes better than 80% of outbound people we\'ve seen.'
        },
        {
          name: 'Anthropic',
          description: 'AI safety and research company building reliable, interpretable, and steerable AI systems.',
          pricing: 'Starting at $0/month',
          offer: 'Try it for free',
          reason: 'Writes far better copy than OpenAI or Gemini when prompted correctly. Great for building custom copywriting workflows.'
        }
      ]
    },
    {
      id: 'linkedin-outreach',
      title: 'LinkedIn Outreach',
      icon: Users,
      description: 'Automate LinkedIn prospecting safely',
      tools: [
        {
          name: 'HeyReach',
          description: 'Automate unlimited LinkedIn senders, reach 1000+ leads weekly, manage replies in 1 inbox.',
          pricing: 'Starting at $79/month',
          offer: 'Try it for free',
          highlight: true,
          reason: 'Not a single person has gotten their LinkedIn account banned when using this tool and following best practices. Clean system with multi-variable functionality.'
        },
        {
          name: 'Lemlist',
          description: 'Close more deals by engaging with your leads across multiple channels on autopilot.',
          pricing: 'Starting at $99/month',
          offer: 'Try it for free',
          reason: 'Send LinkedIn reactions, requests, follows, comments, and custom voice messages. Create comprehensive LinkedIn flows easily.'
        }
      ]
    },
    {
      id: 'media-personalization',
      title: 'Media Personalization',
      icon: Video,
      description: 'Create personalized videos and images at scale',
      tools: [
        {
          name: 'Sendspark',
          description: 'Create engaging personalized videos for single sends or campaigns for thousands.',
          pricing: 'Starting at $79/month',
          offer: 'Try it for free',
          reason: 'Dynamic templates with prospect\'s website in background. Can clone your voice to say prospect\'s name. Early leader in AI video personalization.'
        },
        {
          name: 'DynaPics',
          description: 'Generate dynamic images. Connect your data source to auto-generate personalized images.',
          pricing: 'Starting at $99/month',
          offer: 'Try it for free',
          reason: 'Easiest way to send personalized images at scale. Create templates and use API to generate thousands of custom images.'
        }
      ]
    },
    {
      id: 'lead-sourcing',
      title: 'Lead Sourcing',
      icon: Database,
      description: 'Find and build prospect lists',
      tools: [
        {
          name: 'Clay',
          description: '75+ enrichment tools, AI agents, and everything you need to find any data point.',
          pricing: 'Starting at $134/month',
          offer: 'Get 2,000 credits',
          highlight: true,
          reason: 'Import your entire TAM into an actionable spreadsheet without spending on export credits. Filter by any data point imaginable.'
        },
        {
          name: 'Ocean.io',
          description: 'Smarter prospecting data platform for more quality leads and faster revenue growth.',
          pricing: 'Starting at $59/month',
          offer: 'Try it for free',
          reason: 'Best company lookalikes function in the GTM space. Scraped 300M websites and uses AI to find lookalikes for any company.'
        },
        {
          name: 'Apollo',
          description: 'Find your ideal prospects & turn your process into a revenue machine.',
          pricing: 'Starting at $49/month',
          offer: 'Try it for free',
          reason: 'Solid database for most B2B sectors. Exports contain many data points, making it great for comprehensive lead sourcing.'
        }
      ]
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      icon: Workflow,
      description: 'Automate your GTM processes',
      tools: [
        {
          name: 'Zapier',
          description: 'Automate your work across 7000+ app integrations, so you can focus on what matters.',
          pricing: 'Starting at $73/month',
          offer: 'Try it for free',
          reason: 'Incredibly easy to use. While pricier, it takes very little time to build automations so you can get back to the important work.'
        },
        {
          name: 'Make',
          description: 'Save time and developer resources. Integrate 1000s of apps in our no-code platform.',
          pricing: 'Starting at $9/month',
          offer: 'Try it for free',
          reason: 'Great middle ground between Zapier and N8N. Significantly less expensive than Zapier and easier to use than N8N.'
        },
        {
          name: 'N8N',
          description: 'Secure and AI-native workflow automation tool for technical people.',
          pricing: 'Starting at $20/month',
          offer: 'Try it for free',
          reason: 'Cheapest automation tool on the market. Nearly free other than hosting costs, and you can automate almost anything.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Tech Stack - Veogrowth | The Best GTM Tools We Use and Recommend</title>
        <meta name="description" content="Discover the complete tech stack we use for successful cold email campaigns. From lead enrichment to automation, these are the tools that power our results." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full px-4 py-2 mb-6 border border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Tools We Actually Use</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              The Best GTM Tool Stack
              <br />
              <span className="text-purple-600">For Your Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Half the battle when developing an effective go-to-market motion is the tool stack. These are the tools we use ourselves and recommend based on real results.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                        activeCategory === category.id
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="truncate">{category.title}</span>
                      {activeCategory === category.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    Get Recommendations
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className={activeCategory === category.id ? 'block' : 'hidden'}
                >
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.tools.map((tool, toolIndex) => (
                      <div 
                        key={tool.name}
                        className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center mb-3">
                                <h3 className="text-lg font-semibold text-gray-900 mr-3">{tool.name}</h3>
                                {tool.highlight && (
                                  <div className="inline-flex items-center bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                                    <Star className="w-3 h-3 mr-1" />
                                    Top Pick
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-700 mb-3">{tool.description}</p>
                              <p className="text-sm text-gray-600 leading-relaxed">{tool.reason}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row gap-4">
                              <div className="text-gray-600 text-sm">
                                <span className="font-medium text-gray-900">Pricing:</span> {tool.pricing}
                              </div>
                              {tool.offer && (
                                <div className="inline-flex items-center bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-200">
                                  {tool.offer}
                                </div>
                              )}
                            </div>
                            
                            <button
                              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group text-sm"
                              onClick={() => window.open('#', '_blank')}
                            >
                              Learn More
                              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA Section */}
              <section className="mt-16">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    Need Help Choosing the Right Stack?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                    Every business is different. Get personalized tool recommendations based on your specific needs and scale.
                  </p>
                  <button 
                    onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Your Custom Stack Recommendations →
                  </button>
                  <p className="text-gray-500 text-sm mt-3">Free consultation • Personalized recommendations</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechStack;