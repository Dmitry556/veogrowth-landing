import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Share2, MessageSquare, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import TableOfContents from '@/components/blog/TableOfContents';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  
  const blogPost: BlogPost = {
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
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    content: `
      <h2 id="introduction">Introduction: The Outbound Scaling Challenge</h2>
      <p>Scaling outbound campaigns effectively is one of the most significant challenges B2B companies face today. While many organizations understand the value of direct outreach, they struggle to grow their operations without sacrificing quality or overwhelming their teams.</p>
      <p>This article explores proven strategies that leading companies implement to scale their outbound efforts successfully, drawing from our experience working with hundreds of high-growth organizations.</p>
      
      <h2 id="foundational-elements">The Foundational Elements of Scalable Outbound</h2>
      <p>Before attempting to scale your outbound operation, certain foundational elements must be in place:</p>
      <ul>
        <li>A clearly defined ideal customer profile (ICP) and buyer personas</li>
        <li>Messaging that consistently resonates with your target audience</li>
        <li>Initial product-market fit validation through early outbound success</li>
        <li>Basic tracking and measurement infrastructure</li>
      </ul>
      <p>Without these elements, scaling efforts often lead to wasted resources and diminishing returns.</p>
      
      <h2 id="data-quality">Data Quality: The Cornerstone of Scalable Outbound</h2>
      <p>High-quality data is non-negotiable when scaling outbound campaigns. Companies that successfully scale their outreach invest significantly in:</p>
      
      <h3 id="data-enrichment">Advanced Data Enrichment Practices</h3>
      <p>Leading organizations use multiple data providers and implement sophisticated validation procedures to ensure contact information accuracy exceeds 90%.</p>
      
      <blockquote>
        <p>"We found that improving our data quality from 70% to 95% accuracy had a greater impact on campaign performance than any optimization to our messaging or cadence." — VP of Sales, Enterprise SaaS Company</p>
      </blockquote>
      
      <h3 id="data-segmentation">Strategic Segmentation</h3>
      <p>Effective segmentation becomes even more critical at scale. Successful companies segment their prospect database across multiple dimensions:</p>
      <ul>
        <li>Firmographic factors (industry, company size, location)</li>
        <li>Technographic indicators (technology stack, digital maturity)</li>
        <li>Behavioral signals (hiring patterns, funding events, product launches)</li>
        <li>Engagement history (past interactions, website visits, content downloads)</li>
      </ul>
      
      <h2 id="team-structure">Team Structure for Scale</h2>
      <p>As outbound operations grow, team structure becomes increasingly important. The most effective models we've observed include:</p>
      
      <h3 id="specialized-roles">Specialized Role Definition</h3>
      <pre><code>// Example team structure
const outboundTeam = {
  researchSpecialists: "Focus on ICP identification and list building",
  contentCreators: "Develop messaging templates and personalization frameworks",
  outreachSpecialists: "Execute campaigns and handle initial responses",
  accountExecutives: "Manage qualified opportunities and close deals"
};
      </code></pre>
      
      <h2 id="technology-stack">The Technology Stack for Scaling Outbound</h2>
      <p>While technology alone won't scale your outbound efforts, the right stack is essential for supporting growth. Key components include:</p>
      <ul>
        <li>CRM system with advanced segmentation capabilities</li>
        <li>Outreach automation platform with personalization features</li>
        <li>Intent data providers for prioritization</li>
        <li>Analytics and reporting tools for continuous optimization</li>
      </ul>
      
      <h2 id="measuring-success">Measuring Success at Scale</h2>
      <p>As campaigns grow, metrics must evolve beyond simple response rates. Sophisticated outbound operations track:</p>
      <ul>
        <li>Campaign influence on pipeline generation</li>
        <li>Velocity metrics (time from first touch to opportunity)</li>
        <li>Conversion rates across the entire funnel</li>
        <li>Cost per qualified opportunity by segment</li>
        <li>Revenue influenced by outbound activities</li>
      </ul>
      
      <h2 id="conclusion">Conclusion: Sustainable Scaling</h2>
      <p>Scaling outbound effectively is a balanced equation of people, process, and technology. The most successful organizations maintain focus on quality while gradually increasing volume, constantly testing and refining their approach.</p>
      <p>By investing in the foundations outlined above, companies can build outbound operations that deliver consistent pipeline and revenue growth without sacrificing quality or burning out their teams.</p>
    `,
    tableOfContents: [
      { id: 'introduction', title: 'Introduction: The Outbound Scaling Challenge' },
      { id: 'foundational-elements', title: 'The Foundational Elements of Scalable Outbound' },
      { id: 'data-quality', title: 'Data Quality: The Cornerstone of Scalable Outbound' },
      { id: 'data-enrichment', title: 'Advanced Data Enrichment Practices' },
      { id: 'data-segmentation', title: 'Strategic Segmentation' },
      { id: 'team-structure', title: 'Team Structure for Scale' },
      { id: 'specialized-roles', title: 'Specialized Role Definition' },
      { id: 'technology-stack', title: 'The Technology Stack for Scaling Outbound' },
      { id: 'measuring-success', title: 'Measuring Success at Scale' },
      { id: 'conclusion', title: 'Conclusion: Sustainable Scaling' }
    ]
  };

  const relatedPosts: BlogPost[] = [
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
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      if (articleRef.current) {
        const element = articleRef.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const windowScrollTop = window.scrollY - element.offsetTop;
        
        if (windowScrollTop >= 0) {
          const scrolled = Math.min(100, Math.max(0, (windowScrollTop / totalHeight) * 100));
          setScrollProgress(scrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href
      })
      .catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Error copying link:', err));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 mb-8">
          <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to all articles</span>
          </Link>
        </div>
        
        <section 
          className={cn(
            "relative w-full h-[40vh] md:h-[50vh] mb-8 overflow-hidden opacity-0 transform translate-y-4",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: '0ms' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 ease-out"
            style={{ 
              backgroundImage: `url(${blogPost.imageUrl})`,
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32">
                <TableOfContents items={blogPost.tableOfContents} />
              </div>
            </aside>
            
            <article 
              ref={articleRef}
              className={cn(
                "lg:col-span-9 max-w-4xl opacity-0",
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: '200ms' }}
            >
              <header className="mb-10">
                <Badge 
                  variant="outline" 
                  className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
                >
                  {blogPost.category.charAt(0).toUpperCase() + blogPost.category.slice(1)}
                </Badge>
                
                <h1 className="text-h1 font-bold tracking-tight leading-heading mb-6">
                  {blogPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-white/70">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border border-white/10">
                      <AvatarImage src={blogPost.author.avatarUrl} alt={blogPost.author.name} />
                      <AvatarFallback>
                        <User size={20} />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-medium">{blogPost.author.name}</div>
                      <div className="text-xs">{blogPost.author.title}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(blogPost.publishDate)}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{blogPost.readingTime}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-auto"
                    onClick={shareArticle}
                  >
                    <Share2 size={16} className="mr-2" />
                    <span>Share</span>
                  </Button>
                </div>
                
                <div className="lg:hidden mt-8">
                  <details className="glass-card p-4">
                    <summary className="font-medium cursor-pointer">Table of Contents</summary>
                    <div className="mt-4 pl-4">
                      <TableOfContents items={blogPost.tableOfContents} />
                    </div>
                  </details>
                </div>
              </header>
              
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              ></div>
              
              <footer className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline" className="bg-primary/5">outbound</Badge>
                  <Badge variant="outline" className="bg-primary/5">sales</Badge>
                  <Badge variant="outline" className="bg-primary/5">scaling</Badge>
                  <Badge variant="outline" className="bg-primary/5">growth</Badge>
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="font-medium">Share this article</div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" onClick={shareArticle}>
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
                
                <div className="glass-card p-6 mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12 border border-white/10">
                      <AvatarImage src={blogPost.author.avatarUrl} alt={blogPost.author.name} />
                      <AvatarFallback><User size={24} /></AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-lg">{blogPost.author.name}</h3>
                      <p className="text-white/70">{blogPost.author.title}</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    Sophia is a growth strategist with over 10 years of experience in B2B sales and marketing. 
                    She specializes in helping technology companies build and scale their outbound programs.
                  </p>
                </div>
                
                <section className="mt-12">
                  <h3 className="text-h3 font-semibold mb-6">Discussion</h3>
                  
                  <div className="glass-card p-6 mb-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10 border border-white/10">
                        <AvatarFallback><User size={20} /></AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <textarea 
                          className="glass-input w-full h-24 mb-4" 
                          placeholder="Share your thoughts..."
                        ></textarea>
                        <div className="flex justify-end">
                          <Button>Post Comment</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opacity-70 text-center py-6">
                    <MessageSquare className="mx-auto mb-2" />
                    <p>Be the first to comment on this article</p>
                  </div>
                </section>
              </footer>
            </article>
          </div>
        </div>
        
        <section className="container mx-auto px-4 sm:px-6 mt-20">
          <h2 className="text-h2 font-bold mb-10">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index}
                isVisible={isLoaded} 
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
