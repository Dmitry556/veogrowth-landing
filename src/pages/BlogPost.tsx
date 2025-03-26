
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
    title: 'How to Create Poke-the-Bear Questions That Get Replies',
    excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions that make prospects stop and think.",
    category: 'cold-email',
    author: {
      name: 'Dmitry Pinchuk',
      avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
      title: 'Co-founder at Veogrowth'
    },
    publishDate: new Date().toISOString().split('T')[0],
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2 id="what-are-poke-the-bear-questions">What Are Poke-the-Bear Questions?</h2>
      <p>Poke-the-Bear questions target your prospect's hidden pain points—problems they might not even realize they have. Unlike leading questions that feel manipulative, these questions get prospects to think differently about their current situation.</p>
      <p>The concept (popularized by cold email expert Josh Braun) is simple: instead of asking if someone wants a solution, you make them question whether their current approach is actually working.</p>
      
      <h2 id="why-standard-questions-fail">Why Standard Questions Fail</h2>
      <p>Most cold emails ask predictable questions that prospects have seen hundreds of times:</p>
      <p>❌ "Would you be interested in learning more about our solution?"<br>
      ❌ "Do you need help with [problem]?"<br>
      ❌ "Can I get 15 minutes on your calendar?"</p>
      <p>These questions require zero thought and can be answered with an automatic "no." They fail because they:</p>
      <ul>
        <li>Feel like obvious sales tactics</li>
        <li>Don't create any cognitive dissonance</li>
        <li>Don't make prospects reconsider their status quo</li>
      </ul>
      
      <h2 id="the-poke-the-bear-framework">The Poke-the-Bear Framework</h2>
      <p>To create effective Poke-the-Bear questions, follow this simple framework:</p>
      <ol>
        <li><strong>Identify the gap</strong>: What does your prospect not know that could hurt them?</li>
        <li><strong>Focus on consequences</strong>: What risks are they unknowingly taking?</li>
        <li><strong>Challenge assumptions</strong>: What "truths" are they accepting without question?</li>
        <li><strong>Ask neutrally</strong>: Phrase as a genuine inquiry, not a leading statement</li>
      </ol>
      
      <h2 id="10-examples-that-drive-responses">10 Examples That Drive Responses</h2>
      <p>Here are real Poke-the-Bear questions that have generated positive replies across different industries:</p>
      
      <h3 id="for-sales-teams">For Sales Teams</h3>
      <p>"How do you know your SDRs aren't spending 8+ hours weekly on activities your competitors have automated?"</p>
      
      <h3 id="for-marketing-leaders">For Marketing Leaders</h3>
      <p>"How are you measuring if your content actually influences pipeline, or just creates vanity metrics?"</p>
      
      <h3 id="for-hr-directors">For HR Directors</h3>
      <p>"What process confirms your top candidates aren't accepting other offers while your approval workflows run?"</p>
      
      <h3 id="for-e-commerce">For E-commerce</h3>
      <p>"How do you know which abandoned carts represent actual lost revenue versus normal shopping behavior?"</p>
      
      <h3 id="for-saas-companies">For SaaS Companies</h3>
      <p>"What system ensures customers struggling with your product get help before they cancel?"</p>
      
      <h3 id="for-financial-services">For Financial Services</h3>
      <p>"How do you verify your clients aren't keeping assets with competitors that you could be managing?"</p>
      
      <h3 id="for-agencies">For Agencies</h3>
      <p>"What confirms the leads you're generating actually match your clients' ideal customer profile?"</p>
      
      <h3 id="for-manufacturing">For Manufacturing</h3>
      <p>"How do you know your quality control process isn't missing the issues customers care most about?"</p>
      
      <h3 id="for-healthcare">For Healthcare</h3>
      <p>"What verifies your patient follow-up process isn't causing preventable readmissions?"</p>
      
      <h3 id="for-real-estate">For Real Estate</h3>
      <p>"How do you track which properties you've shown aren't selling because of easily fixable issues?"</p>
      
      <h2 id="implementing-in-cold-emails">Implementing in Cold Emails</h2>
      <p>The perfect placement for a Poke-the-Bear question is after your opening line. For example:</p>
      
      <blockquote>
        <p><strong>Subject:</strong> measurement question</p>
        <p>Hi {First_Name},</p>
        <p>LinkedIn showed you took over as Marketing Director at {Company} last month. Congrats on the role.</p>
        <p>How are you currently determining if your marketing analytics are tracking metrics that actually drive revenue, or just measuring activity?</p>
        <p>We've helped companies like {Competitor} connect their marketing data directly to revenue outcomes, increasing attribution accuracy by 37%.</p>
        <p>If improving your marketing ROI visibility is a priority this quarter, would sharing our approach be helpful?</p>
        <p>Best,<br>{Your Name}</p>
      </blockquote>
      
      <h2 id="common-mistakes-to-avoid">Common Mistakes to Avoid</h2>
      <p>❌ <strong>Making it accusatory</strong>: "Don't you realize your current approach is flawed?"<br>
      ❌ <strong>Being too generic</strong>: "How do you know your process is working?"<br>
      ❌ <strong>Using industry jargon</strong>: "How are you optimizing your multi-touch attribution paradigm?"<br>
      ❌ <strong>Obvious sales fishing</strong>: "Wouldn't you like to save time and money?"</p>
      
      <h2 id="why-this-works-the-psychology">Why This Works: The Psychology</h2>
      <p>Poke-the-Bear questions work because they:</p>
      <ol>
        <li><strong>Create cognitive dissonance</strong>: They highlight gaps between what prospects believe and reality</li>
        <li><strong>Trigger loss aversion</strong>: They activate the fear of missing something important</li>
        <li><strong>Build credibility</strong>: They position you as an expert who sees what others miss</li>
        <li><strong>Feel conversational</strong>: They read like something a trusted advisor would ask</li>
      </ol>
      
      <h2 id="testing-your-questions">Testing Your Questions</h2>
      <p>Before deploying in campaigns, test your Poke-the-Bear questions with these criteria:</p>
      <ol>
        <li>Does it highlight a risk the prospect hasn't considered?</li>
        <li>Would it make them pause and think "that's a good question"?</li>
        <li>Is it specific to their role and industry?</li>
        <li>Does it avoid feeling like a sales tactic?</li>
      </ol>
      <p>If you answer yes to all four, you've created an effective Poke-the-Bear question.</p>
      
      <h2 id="beyond-the-first-reply">Beyond the First Reply</h2>
      <p>Once you get a response, don't ruin it by immediately pushing for a meeting. Instead:</p>
      <ol>
        <li>Acknowledge their answer</li>
        <li>Provide a brief but valuable insight</li>
        <li>Ask a follow-up question that deepens the conversation</li>
        <li>Only then suggest next steps if appropriate</li>
      </ol>
      <p>The goal is a conversation, not just a meeting booking.</p>
      
      <h2 id="start-creating-your-questions">Start Creating Your Questions</h2>
      <p>The best Poke-the-Bear questions come from deep industry knowledge. What do you know that your prospects don't? What assumptions are they making that could be hurting them?</p>
      <p>Create a list of 5-10 customized questions for your specific audience, test them on a small batch of prospects, and refine based on response rates.</p>
      <p>When you hit on the right question, you'll see your response rates jump dramatically—often from below 1% to 3-5% or higher.</p>
      <p><strong>Need more help with your cold email campaigns?</strong> Our team has generated over 10,000 positive responses in 2024 alone. Contact us for a free campaign test where we'll validate your offer works before you pay a penny.</p>
    `,
    tableOfContents: [
      { id: 'what-are-poke-the-bear-questions', title: 'What Are Poke-the-Bear Questions?' },
      { id: 'why-standard-questions-fail', title: 'Why Standard Questions Fail' },
      { id: 'the-poke-the-bear-framework', title: 'The Poke-the-Bear Framework' },
      { id: '10-examples-that-drive-responses', title: '10 Examples That Drive Responses' },
      { id: 'implementing-in-cold-emails', title: 'Implementing in Cold Emails' },
      { id: 'common-mistakes-to-avoid', title: 'Common Mistakes to Avoid' },
      { id: 'why-this-works-the-psychology', title: 'Why This Works: The Psychology' },
      { id: 'testing-your-questions', title: 'Testing Your Questions' },
      { id: 'beyond-the-first-reply', title: 'Beyond the First Reply' },
      { id: 'start-creating-your-questions', title: 'Start Creating Your Questions' }
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
                  <Badge variant="outline" className="bg-primary/5">cold-email</Badge>
                  <Badge variant="outline" className="bg-primary/5">response-rate</Badge>
                  <Badge variant="outline" className="bg-primary/5">b2b</Badge>
                  <Badge variant="outline" className="bg-primary/5">questions</Badge>
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
                    Dmitry is a co-founder at Veogrowth with expertise in B2B outbound strategies. 
                    He has helped hundreds of companies improve their response rates and generate consistent pipeline through effective cold outreach campaigns.
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
