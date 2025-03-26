
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

  const currentDate = new Date().toISOString().split('T')[0];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Create Poke-the-Bear Questions That Get Replies',
      excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions.",
      category: 'cold-email',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
        title: 'Co-founder at Veogrowth'
      },
      publishDate: currentDate,
      readingTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true,
      content: `# How to Create Poke-the-Bear Questions That Get Replies

Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions that make prospects stop and think.

Enter the "Poke-the-Bear" question technique—a proven method to cut through inbox noise and get decision-makers to respond.

## What Are Poke-the-Bear Questions?

Poke-the-Bear questions target your prospect's hidden pain points—problems they might not even realize they have. Unlike leading questions that feel manipulative, these questions get prospects to think differently about their current situation.

The concept (popularized by cold email expert Josh Braun) is simple: instead of asking if someone wants a solution, you make them question whether their current approach is actually working.

## Why Standard Questions Fail

Most cold emails ask predictable questions that prospects have seen hundreds of times:

❌ "Would you be interested in learning more about our solution?"
❌ "Do you need help with [problem]?"
❌ "Can I get 15 minutes on your calendar?"

These questions require zero thought and can be answered with an automatic "no." They fail because they:

1. Feel like obvious sales tactics
2. Don't create any cognitive dissonance
3. Don't make prospects reconsider their status quo

## The Poke-the-Bear Framework

To create effective Poke-the-Bear questions, follow this simple framework:

1. **Identify the gap**: What does your prospect not know that could hurt them?
2. **Focus on consequences**: What risks are they unknowingly taking?
3. **Challenge assumptions**: What "truths" are they accepting without question?
4. **Ask neutrally**: Phrase as a genuine inquiry, not a leading statement

## 10 Examples That Drive Responses

Here are real Poke-the-Bear questions that have generated positive replies across different industries:

### For Sales Teams
"How do you know your SDRs aren't spending 8+ hours weekly on activities your competitors have automated?"

### For Marketing Leaders
"How are you measuring if your content actually influences pipeline, or just creates vanity metrics?"

### For HR Directors
"What process confirms your top candidates aren't accepting other offers while your approval workflows run?"

### For E-commerce
"How do you know which abandoned carts represent actual lost revenue versus normal shopping behavior?"

### For SaaS Companies
"What system ensures customers struggling with your product get help before they cancel?"

### For Financial Services
"How do you verify your clients aren't keeping assets with competitors that you could be managing?"

### For Agencies
"What confirms the leads you're generating actually match your clients' ideal customer profile?"

### For Manufacturing
"How do you know your quality control process isn't missing the issues customers care most about?"

### For Healthcare
"What verifies your patient follow-up process isn't causing preventable readmissions?"

### For Real Estate
"How do you track which properties you've shown aren't selling because of easily fixable issues?"

## Implementing in Cold Emails

The perfect placement for a Poke-the-Bear question is after your opening line. For example:

---

**Subject:** measurement question

Hi {First_Name},

LinkedIn showed you took over as Marketing Director at {Company} last month. Congrats on the role.

How are you currently determining if your marketing analytics are tracking metrics that actually drive revenue, or just measuring activity?

We've helped companies like {Competitor} connect their marketing data directly to revenue outcomes, increasing attribution accuracy by 37%.

If improving your marketing ROI visibility is a priority this quarter, would sharing our approach be helpful?

Best,
{Your Name}

---

## Common Mistakes to Avoid

❌ **Making it accusatory**: "Don't you realize your current approach is flawed?"
❌ **Being too generic**: "How do you know your process is working?"
❌ **Using industry jargon**: "How are you optimizing your multi-touch attribution paradigm?"
❌ **Obvious sales fishing**: "Wouldn't you like to save time and money?"

## Why This Works: The Psychology

Poke-the-Bear questions work because they:

1. **Create cognitive dissonance**: They highlight gaps between what prospects believe and reality
2. **Trigger loss aversion**: They activate the fear of missing something important
3. **Build credibility**: They position you as an expert who sees what others miss
4. **Feel conversational**: They read like something a trusted advisor would ask

## Testing Your Questions

Before deploying in campaigns, test your Poke-the-Bear questions with these criteria:

1. Does it highlight a risk the prospect hasn't considered?
2. Would it make them pause and think "that's a good question"?
3. Is it specific to their role and industry?
4. Does it avoid feeling like a sales tactic?

If you answer yes to all four, you've created an effective Poke-the-Bear question.

## Beyond the First Reply

Once you get a response, don't ruin it by immediately pushing for a meeting. Instead:

1. Acknowledge their answer
2. Provide a brief but valuable insight
3. Ask a follow-up question that deepens the conversation
4. Only then suggest next steps if appropriate

The goal is a conversation, not just a meeting booking.

## Start Creating Your Questions

The best Poke-the-Bear questions come from deep industry knowledge. What do you know that your prospects don't? What assumptions are they making that could be hurting them?

Create a list of 5-10 customized questions for your specific audience, test them on a small batch of prospects, and refine based on response rates.

When you hit on the right question, you'll see your response rates jump dramatically—often from below 1% to 3-5% or higher.

---

**Need more help with your cold email campaigns?** Our team has generated over 10,000 positive responses in 2024 alone. Contact us for a free campaign test where we'll validate your offer works before you pay a penny.`,
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
    },
    {
      id: '8',
      title: 'How to Set Up a Cold Email Campaign That Actually Works',
      excerpt: "Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.",
      category: 'cold-email',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
        title: 'Co-founder at Veogrowth'
      },
      publishDate: currentDate,
      readingTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: `# How to Set Up a Cold Email Campaign That Actually Works

Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024 alone, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.

This guide breaks down the exact process we use with companies like Instantly, ClickUp, and Intercom to create cold email campaigns that consistently deliver results.

## The Three Questions Every Cold Email Campaign Must Answer

Before launching any campaign, you need clear answers to these fundamental questions:

1. **How are you going to send emails?** (Infrastructure)
2. **Who are you going to send the emails to?** (List building)
3. **What are you going to say to those people?** (Copywriting)

Let's tackle each one with actionable steps.

## Part 1: Email Infrastructure That Lands in the Primary Inbox

### The Foundation: Inbox Setup

The difference between landing in spam and the primary inbox often comes down to your sending infrastructure. Follow these exact steps:

#### Step 1: Choose the Right Sending Accounts
- **Use Google Workspace or Microsoft Outlook accounts** (not marketing automation platforms)
- Set up 2 inboxes per domain maximum
- Use separate domains from your main company domain
- Instantly.ai or Smartlead.ai are reliable platforms for managing multiple inboxes

#### Step 2: Prepare Your Infrastructure
- Set up proper authentication (SPF, DKIM, and DMARC records)
- Forward your sending domains to your main website
- Enable custom tracking if necessary (though open rates are increasingly unreliable)

#### Step 3: Warm Up Your Domains
- Warm each inbox for a minimum of 3 weeks before sending
- Start with 30 emails per day per inbox
- Maintain a 10+ minute delay between emails
- Keep 50% of your sending capacity in reserve for backup

Pro Tip: May through July 2024 saw significant deliverability challenges. If you experience sudden drops in open rates, switch to your reserve inboxes rather than troubleshooting.

## Part 2: Build Lists That Actually Convert

List quality directly impacts deliverability and response rates. Here's how to build lists that convert:

### Step 1: Define Your ICP with Precision
Apply the "10 Things I Hate About You" Rule: If you can't find 10 potential issues with your list criteria, you don't know your target well enough.

For example, when targeting marketing leaders at banks:
- Some titles may include sales AND marketing responsibilities
- Industry filters often include fintech and consultancies
- Bank size varies dramatically (100 vs. 10,000 employees)

### Step 2: Source Your Contacts
- **LinkedIn-based tools**: Apollo.io is excellent for initial lists, but has export limits
- **Advanced option**: Use Clay.com with email finders like Prospeo, LeadMagic, or TryKitt.ai
- **Non-LinkedIn prospects**: D7 lead finder or Google Maps scraping via Apify
- **Event-based lists**: Often produce 3X higher response rates than cold outreach

### Step 3: Verify Your Data
Implement an email validation waterfall:
1. Clean contact data and standardize formatting
2. Run emails through verification tools (Debounce, MillionVerifier)
3. Double-verify questionable emails before sending
4. Remove catch-all domains that can't be properly verified

Pro Tip: An email validation waterfall can reduce bounce rates by up to 70%, dramatically improving deliverability.

## Part 3: Copywriting That Gets Responses

After analyzing thousands of campaigns, here's what works consistently:

### Step 1: Follow the Four-Sentence Framework
1. **First sentence**: Why you're reaching out and why now
2. **Second sentence**: Explain how you help (value proposition)
3. **Third sentence**: Show social proof (specific results)
4. **Fourth sentence**: Clear call to action

### Step 2: Apply These Proven Principles
- Keep emails under 90 words (shorter = better)
- Use metrics with decimal points (went from 400 to 1200 visitors is more believable than boosted by 60X in 90 days)
- Make subject lines 2-3 words and conversational
- Remove corporate jargon completely
- Create cognitive dissonance with "Poke the Bear" questions
- Use one specific case study rather than generic claims

### Step 3: Structure Your Sequence
- Limit to 4 emails maximum
- Space emails 3-4 days apart
- Use this sequence structure:
  * Email 1: Introduction and main value proposition
  * Email 2: Thread to Email 1, add context
  * Email 3: New thread, different value proposition
  * Email 4: Thread to Email 3, brief final check-in

Example First Email:

Subject: process question

Hey {First_Name} – saw you brought on 3 new SDRs last month according to LinkedIn. Congrats on the team growth.

How are you currently making sure their emails aren't landing in spam folders instead of generating meetings?

We've helped companies like Instantly.ai generate $4.2M in pipeline by solving the exact deliverability problems that plague most outbound teams.

If making sure your new team members are actually reaching prospects is a priority, would connecting for 15 minutes be helpful?

## Part 4: Launch and Optimization

Now it's time to put everything together:

### Step 1: Pre-Launch Checklist
- Confirm all domains have been warming for 3+ weeks
- Verify your email list (target 0.5% bounce rate maximum)
- Test your emails by sending to yourself first
- Prepare follow-up processes for positive responses

### Step 2: Start Small and Scale
- Begin with 500-1000 contacts to test your approach
- Track positive response rate and meeting booked rate (not open rate)
- Aim for at least 1 positive response per 300 contacts
- Only scale when you've validated your messaging works

### Step 3: Continual Improvement
Instead of sending more emails to the same people, test these variables:
1. Different value propositions (save time vs. save money vs. make money)
2. Different triggers (new in role, hiring, tech installed)
3. Different sequence structures
4. Different list-building approaches

## When to Kill a Campaign (And When to Keep Going)

Many teams give up too early or persist with failing campaigns too long. Here's when to make the call:

**Kill the campaign if:**
- You've contacted 1,000+ prospects with no positive responses
- Your bounce rate exceeds 5% despite verification
- You're seeing spam complaints

**Keep optimizing if:**
- You're getting positive responses but below your target rate
- You're getting "not interested" responses (shows you're landing in inboxes)
- You haven't tested at least 3 different value propositions

## Case Study: How We Generated 52 Leads in One Day

For one enterprise client, we achieved 52 qualified leads in a single day using this exact approach:

1. **Infrastructure**: Rotated between Google and Outlook inboxes with ESP matching
2. **List building**: Created hyper-specific segments based on LinkedIn engagement
3. **Copywriting**: Used AI to analyze each prospect's last three posts
4. **Optimization**: Tested 8 different campaigns simultaneously

The winning approach wasn't what we expected – a simple two-sentence email that asked a direct question about their current process outperformed all our more complex approaches.

## Common Cold Email Mistakes to Avoid

After analyzing thousands of campaigns, these are the most common mistakes:

1. **Sending too many emails per inbox** (stick to 20-40/day)
2. **Using your main domain** for cold outreach
3. **Not verifying emails** before sending
4. **Writing emails that are too long** (keep under 90words)
5. **Using corporate jargon** instead of simple language
6. **Following up too many times** (4 emails maximum)
7. **Not testing different value propositions**
8. **Focusing on open rates** instead of response rates
9. **Using calendar links** in initial emails instead of starting conversations
10. **Giving up before testing enough variables**

## The Next Steps

Setting up a cold email campaign that works isn't about finding secret hacks – it's about executing the fundamentals with precision:

1. Build proper infrastructure that lands in the inbox
2. Create lists with verified contacts who match your ICP
3. Write concise, value-focused copy that creates curiosity
4. Test methodically and optimize based on response rates

If you'd like to skip the trial and error, we offer a free campaign test where we'll validate your offer works with cold email before you pay a penny. It takes just 15 minutes to set up, and you'll see actual leads hitting your inbox within 3 weeks.

Ready to build a cold email campaign that actually works? [Contact us for your free campaign test →](#)`,
      tableOfContents: [
        { id: 'the-three-questions-every-cold-email-campaign-must-answer', title: 'The Three Questions Every Cold Email Campaign Must Answer' },
        { id: 'part-1-email-infrastructure-that-lands-in-the-primary-inbox', title: 'Part 1: Email Infrastructure That Lands in the Primary Inbox' },
        { id: 'part-2-build-lists-that-actually-convert', title: 'Part 2: Build Lists That Actually Convert' },
        { id: 'part-3-copywriting-that-gets-responses', title: 'Part 3: Copywriting That Gets Responses' },
        { id: 'part-4-launch-and-optimization', title: 'Part 4: Launch and Optimization' },
        { id: 'when-to-kill-a-campaign-and-when-to-keep-going', title: 'When to Kill a Campaign (And When to Keep Going)' },
        { id: 'case-study-how-we-generated-52-leads-in-one-day', title: 'Case Study: How We Generated 52 Leads in One Day' },
        { id: 'common-cold-email-mistakes-to-avoid', title: 'Common Cold Email Mistakes to Avoid' },
        { id: 'the-next-steps', title: 'The Next Steps' }
      ]
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

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'all');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 sm:px-6 mb-16">
          <h1 className="text-h1 font-bold tracking-tight leading-heading gradient-text text-center mb-4">
            Insights
          </h1>
          <p className="text-center text-body-large text-white/80 max-w-3xl mx-auto">
            Expert strategies, practical tips, and the latest trends in B2B outbound growth
          </p>
        </section>

        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <BlogCategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onChange={handleCategoryChange} 
          />
        </div>

        {currentPage === 1 && activeCategory === 'all' && featuredPost && (
          <section className="container mx-auto px-4 sm:px-6 mb-16">
            <FeaturedBlogCard post={featuredPost} isVisible={isLoaded} />
          </section>
        )}
        
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
          
          {currentPage === 1 && regularPosts.length > 3 && (
            <div className="my-16">
              <NewsletterSubscribe />
            </div>
          )}
          
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
