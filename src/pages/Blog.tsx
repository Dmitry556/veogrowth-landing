import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import BlogPagination from '@/components/blog/BlogPagination';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';
import { generateOrganizationSchema, generateWebsiteSchema, schemaToString } from '@/utils/schema';
import { BlogPost } from '@/types/blog';

const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Create Poke-the-Bear Questions That Get Replies',
    excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions that make prospects stop and think.",
    category: 'Copywriting',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-10-05',
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'The Psychology Behind High-Converting Cold Emails',
    excerpt: 'Discover the psychological principles that make recipients more likely to respond positively to your outreach.',
    category: 'Copywriting',
    author: {
      name: 'Marcus Johnson',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      title: 'CMO, GrowthWorks'
    },
    publishDate: '2023-09-28',
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'How We Find Competitor & Lookalike Insights Using Public Data',
    excerpt: "Sending generic cold emails just doesn't work well anymore. To make outreach feel relevant, knowing who a company competes with or their ideal customers is pure gold.",
    category: 'Research',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-09-15',
    readingTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    id: '4',
    title: 'Building an Outbound Sales Machine: From Zero to Seven Figures',
    excerpt: 'A step-by-step playbook for constructing a sustainable outbound process that generates consistent pipeline.',
    category: 'Sales',
    author: {
      name: 'Aisha Patel',
      avatarUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
      title: 'Sales Director, RevOps Inc'
    },
    publishDate: '2023-09-12',
    readingTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Cold Email Teardown: Analyzing a $100k/Month Campaign',
    excerpt: 'A deep dive into a real-world cold email sequence that generated six-figure revenue for a B2B SaaS company.',
    category: 'Copywriting',
    author: {
      name: 'Elena Rodriguez',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      title: 'Growth Consultant, ScaleUp LLC'
    },
    publishDate: '2023-08-05',
    readingTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-ead37193ca4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'The Future of Outbound: AI, Automation, and Personalization',
    excerpt: 'Exploring the emerging trends and technologies that will shape the next generation of outbound sales and marketing.',
    category: 'Tech Stack',
    author: {
      name: 'Rajesh Kumar',
      avatarUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      title: 'CEO, InnovateAI'
    },
    publishDate: '2023-07-18',
    readingTime: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47a04ca018e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Account-Based Marketing for Startups: A Practical Guide',
    excerpt: 'How early-stage companies can leverage ABM strategies to target high-value accounts and accelerate growth.',
    category: 'List Building',
    author: {
      name: 'Sophie Dubois',
      avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      title: 'Marketing Manager, SeedRocket'
    },
    publishDate: '2023-07-01',
    readingTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1505628356033-6da43bae39ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'How to Set Up a Cold Email Campaign That Actually Works',
    excerpt: "Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.",
    category: 'Clay',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: '2023-06-15',
    readingTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'The Art of the Follow-Up: Nudging Prospects Without Annoying Them',
    excerpt: 'Master the subtle techniques of following up with leads to increase conversions without being pushy or intrusive.',
    category: 'Sales',
    author: {
      name: 'Carlos Ramirez',
      avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
      title: 'Sales Consultant, FollowUpPro'
    },
    publishDate: '2023-06-01',
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1542744166-e35939358f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
        generateOrganizationSchema(),
        generateWebsiteSchema()
      ]);
      document.head.appendChild(script);
    };
    
    injectSchema();
    document.title = "Veogrowth - Insights and Resources for B2B Outbound Strategy";
    
    return () => {
      clearTimeout(timer);
      const script = document.getElementById('schema-script-blog');
      if (script) {
        script.remove();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 pt-32 pb-16">
        <section className="mb-12">
          <h1 className="text-h1 font-bold tracking-tight mb-4">
            Insights and Resources for B2B Outbound Strategy
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Stay up-to-date with the latest trends, tips, and techniques for generating pipeline and driving revenue through effective outbound sales and marketing strategies.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-h2 font-semibold mb-6">Featured Article</h2>
          <FeaturedBlogCard 
            post={sampleBlogPosts.find(post => post.featured === true) || sampleBlogPosts[0]} 
            isVisible={isLoaded} 
          />
        </section>
        
        <section className="mb-12">
          <BlogCategoryFilter 
            categories={categories}
            activeCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </section>
        
        <section className="mb-16">
          <h2 className="text-h2 font-semibold mb-6">All Articles</h2>
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
        </section>
        
        {totalPages > 1 && (
          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        
        <section className="mt-16">
          <NewsletterSubscribe />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
