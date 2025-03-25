
import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import BlogPagination from '@/components/blog/BlogPagination';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const postsPerPage = 6;

  // Simulate blog posts data that would normally come from an API
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Scaling Your Outbound Campaigns: Strategies That Actually Work',
      excerpt: 'Learn how top-performing companies are scaling their outbound efforts without sacrificing quality or burning out their teams.',
      category: 'strategy',
      author: {
        name: 'Sophia Chen',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        title: 'Growth Director, TechVentures'
      },
      publishDate: '2023-10-15',
      readingTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: '2',
      title: 'The Psychology Behind High-Converting Cold Emails',
      excerpt: 'Discover the psychological principles that make recipients more likely to respond positively to your outreach.',
      category: 'cold-email',
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
      title: 'Building an Outbound Sales Machine: From Zero to Seven Figures',
      excerpt: 'A step-by-step playbook for constructing a sustainable outbound process that generates consistent pipeline.',
      category: 'sales',
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
      id: '4',
      title: 'Data-Driven Lead Generation: Beyond the Basics',
      excerpt: 'How to leverage data analytics to improve targeting, personalization, and conversion rates in your outbound campaigns.',
      category: 'analytics',
      author: {
        name: 'Wei Zhang',
        avatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
        title: 'Head of Data, LeadScience'
      },
      publishDate: '2023-08-22',
      readingTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'The Future of B2B Outreach: AI, Automation, and the Human Touch',
      excerpt: 'Exploring the balance between cutting-edge technology and the irreplaceable value of human connection in sales.',
      category: 'technology',
      author: {
        name: 'Jamal Williams',
        avatarUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
        title: 'Innovation Lead, FutureReach'
      },
      publishDate: '2023-08-05',
      readingTime: '9 min read',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      title: 'Compliance and Ethics in Modern Outbound Strategies',
      excerpt: 'Navigating privacy regulations, ethical considerations, and best practices for sustainable outreach in a changing landscape.',
      category: 'compliance',
      author: {
        name: 'Elena Rodriguez',
        avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
        title: 'Legal Advisor, CompliancePro'
      },
      publishDate: '2023-07-19',
      readingTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '7',
      title: 'From Prospect to Partner: Building Long-Term Relationships',
      excerpt: 'Strategies for turning initial outbound connections into meaningful, mutually beneficial business relationships.',
      category: 'strategy',
      author: {
        name: 'Thomas Nguyen',
        avatarUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
        title: 'Partnerships Director, RelationshipIQ'
      },
      publishDate: '2023-07-03',
      readingTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);

  // Get regular posts (excluding featured)
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'all');

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  // Handle scroll for animations and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading state for staggered animations
  useEffect(() => {
    // Short timeout to trigger animation after component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog list
    document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Blog Header */}
        <section className="container mx-auto px-4 sm:px-6 mb-16">
          <h1 className="text-h1 font-bold tracking-tight leading-heading gradient-text text-center mb-4">
            Insights
          </h1>
          <p className="text-center text-body-large text-white/80 max-w-3xl mx-auto">
            Expert strategies, practical tips, and the latest trends in B2B outbound growth
          </p>
        </section>

        {/* Category Filter */}
        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <BlogCategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onChange={handleCategoryChange} 
          />
        </div>

        {/* Featured Post (only show on first page and when no category filter) */}
        {currentPage === 1 && activeCategory === 'all' && featuredPost && (
          <section className="container mx-auto px-4 sm:px-6 mb-16">
            <FeaturedBlogCard post={featuredPost} isVisible={isLoaded} />
          </section>
        )}
        
        {/* Blog List */}
        <section id="blog-list" className="container mx-auto px-4 sm:px-6 mb-16">
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
          
          {/* Newsletter Section (between posts) */}
          {currentPage === 1 && regularPosts.length > 3 && (
            <div className="my-16">
              <NewsletterSubscribe />
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16">
              <BlogPagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </div>
          )}
        </section>
        
        {/* Back to top button - appears after scrolling */}
        <button 
          className={cn(
            "fixed bottom-8 right-8 bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-3 shadow-md transition-all duration-300 backdrop-blur-sm z-10",
            scrollPosition > 400 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
