import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { getSlugFromId } from '@/utils/slug';
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import BlogPagination from '@/components/blog/BlogPagination';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';
import { generateWebsiteSchema, schemaToString } from '@/utils/schema';
import { BlogPost } from '@/types/blog';

const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Create Poke-the-Bear Questions That Get Replies',
    excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions that make prospects stop and think.",
    category: 'Copywriting',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-10-05',
    readingTime: '6 min read',
    imageUrl: '',
    featured: true
  },
  {
    id: '3',
    title: 'How We Find Competitor & Lookalike Insights Using Public Data',
    excerpt: "Sending generic cold emails just doesn't work well anymore. To make outreach feel relevant, knowing who a company competes with or their ideal customers is pure gold.",
    category: 'Research',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-09-15',
    readingTime: '5 min read',
    imageUrl: '',
    content: `
      <p>Sending generic cold emails just doesn't work well anymore. To make outreach feel relevant, knowing who a company competes with, or who their ideal customers actually look like, is pure gold. Guessing isn't reliable, but we found that using publicly available data, often with a bit of smart automation, helps us get much closer to understanding a prospect's world.</p>
      
      <p>When we try to figure out competitors, we learned early on not to rely on just one database. Different platforms often have different pieces of the puzzle. We noticed that public company profile pages, like those on ZoomInfo, Crunchbase, or even Owler, frequently list companies they see as competitors. One source might be incomplete, but checking several gives us a much better picture. Our usual process involves setting up simple web scrapers – we often use tools like Zenrows running inside Clay – designed to visit these public pages for the companies we're researching. These scrapers look for and pull out any names listed in competitor sections. Sometimes, if the lists are long or varied, we might even use a bit of AI to analyze all the names pulled from different sites and highlight which competitors show up most often.</p>
      
      <p>Finding companies that resemble a prospect's best customers – their lookalikes – requires a different approach. For this, we lean heavily on what the company itself shows us. Their own website is often the best source. If they feature specific customer logos or detailed case studies, that tells us exactly the kind of success story they value and likely want to repeat. We again use tools, sometimes AI agents like Claygent or simple scrapers, to automatically pull those specific customer names featured on the prospect's website. Once we have that list of their 'star' customers, we can use those names as seeds. We might feed them into lookalike tools, like Ocean.io, or apply filtering logic within Clay based on matching industry and company size, to find other businesses that share very similar characteristics.</p>
      
      <p>The point of all this isn't about digging up secrets. It's simply about using the information that's already out there in a more structured way. Doing this research upfront means our cold emails can feel much less random. Instead of a vague opener like "We help companies like yours," we have the foundation to say something more specific and grounded, like, "Saw on your site you work with [Case Study Name], we often help companies similar to them achieve..." or perhaps, "As you often compete with [Competitor Name], have you considered...?". This extra step connects our message directly to their world, making the outreach feel more informed and relevant right from the start.</p>
    `,
    tableOfContents: [
      {
        id: 'competitor-research',
        title: 'Competitor Research Methods'
      },
      {
        id: 'lookalike-analysis',
        title: 'Lookalike Customer Analysis'
      },
      {
        id: 'practical-application',
        title: 'Practical Application in Outreach'
      }
    ]
  },
  {
    id: '8',
    title: 'How to Set Up a Cold Email Campaign That Actually Works',
    excerpt: "Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.",
    category: 'Clay',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-06-15',
    readingTime: '8 min read',
    imageUrl: ''
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const postsPerPage = 6;
  
  const categories = ['all', ...new Set(sampleBlogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'all'
    ? sampleBlogPosts
    : sampleBlogPosts.filter(post => post.category === selectedCategory);
  
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const injectSchema = () => {
      const existingScript = document.getElementById('schema-script-blog');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'schema-script-blog';
      script.type = 'application/ld+json';
      script.innerHTML = schemaToString([
        generateWebsiteSchema()
      ]);
      document.head.appendChild(script);
    };
    
    injectSchema();
    document.title = "Veogrowth Blog | Cold Email Strategies & B2B Lead Generation";
    
    return () => {
      clearTimeout(timer);
      const script = document.getElementById('schema-script-blog');
      if (script) {
        script.remove();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path="/blog" />
      <Helmet>
        <title>Veogrowth Blog | Cold Email Strategies & B2B Lead Generation</title>
        <meta name="description" content="Expert insights on cold email strategies, B2B lead generation, and outbound sales development. Learn proven tactics that generate pipeline and qualified meetings." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-900/30 text-purple-300 rounded-full px-6 py-3 mb-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium">2,500+ cold email experts read our insights</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Master Cold Email
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                That Actually Works
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Get proven strategies, real case studies, and tactical insights from 
              <strong className="text-white"> campaigns that generated $8M+ in pipeline</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real campaigns, real results</span>
              </div>
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Actionable, not theoretical</span>
              </div>
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Updated weekly</span>
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
              { label: 'Blog', current: true }
            ]}
            className="text-gray-300"
          />
        </div>

        {/* Featured Article Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full px-6 py-2 mb-6 border border-purple-500/30">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-purple-300">Editor's Pick</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Popular This Week</h2>
            <p className="text-gray-400 text-lg">The strategies our community is implementing right now</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FeaturedBlogCard 
              post={sampleBlogPosts.find(post => post.featured === true) || sampleBlogPosts[0]} 
              isVisible={isLoaded} 
            />
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-gray-400">Find exactly what you need to level up your outbound game</p>
          </div>
          <BlogCategoryFilter 
            categories={categories}
            activeCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </section>
        
        {/* All Articles Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {selectedCategory === 'all' ? 'All Insights' : `${selectedCategory} Insights`}
              </h2>
              <p className="text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} • Updated weekly
              </p>
            </div>
            
            {filteredPosts.length > 6 && (
              <div className="text-sm text-gray-400">
                Showing {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index}
                isVisible={isLoaded} 
              />
            ))}
          </div>
          
          {currentPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">Try selecting a different category or check back soon for new content.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                View all articles →
              </button>
            </div>
          )}
        </section>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <section className="mb-20">
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        )}
        
        {/* Newsletter Section */}
        <section className="mb-16">
          <NewsletterSubscribe />
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 text-center border border-purple-500/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Cold Email Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop guessing. Start with a strategy session and see how we can help you 
              <strong className="text-white"> book more qualified meetings</strong> in the next 30 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Your Strategy Call →
              </button>
              <span className="text-gray-400 text-sm">Free • 30 minutes • No pitch, just value</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
