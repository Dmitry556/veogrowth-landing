import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { getIdFromSlug, getSlugFromId } from '@/utils/slug';
import { Calendar, Clock, Share2, MessageSquare, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateArticleSchema, schemaToString } from '@/utils/schema';
// import { useToast } from '@/components/ui/use-toast';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const id = slug ? getIdFromSlug(slug) : null;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  // const { toast } = useToast();
  
  const blogPosts: Record<string, BlogPost> = {
    "1": {
      id: '1',
      title: 'How to Create Poke-the-Bear Questions That Get Replies',
      excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions that make prospects stop and think.",
      category: 'Copywriting',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
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
      
      <h2 id="real-world-examples">Real-World Examples from Our Case Studies</h2>
      <p>Want to see Poke-the-Bear questions in action? Check out how we've used strategic questioning to drive results:</p>
      <ul>
        <li><a href="/case-studies/zero-fee-payment-processor-52-meetings" style="color: #a855f7;">Zero-Fee Payment Processor Case Study</a> - See how simple math questions about monthly fees generated 52 meetings</li>
        <li><a href="/case-studies/api-monitoring-platform-56-meetings" style="color: #a855f7;">API Monitoring Platform Case Study</a> - Learn how technical credibility questions resonated with engineering leaders</li>
        <li><a href="/case-studies/podcast-whales-25-meetings-6-clients" style="color: #a855f7;">Podcast Production Case Study</a> - Discover how creative concept questions stood out from generic pitches</li>
      </ul>
      
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
        { id: 'start-creating-your-questions', title: 'Start Creating Your Questions' },
        { id: 'real-world-examples', title: 'Real-World Examples from Our Case Studies' }
      ]
    },
    "3": {
      id: '3',
      title: 'How We Find Competitor & Lookalike Insights Using Public Data',
      excerpt: "Sending generic cold emails just doesn't work well anymore. To make outreach feel relevant, knowing who a company competes with or their ideal customers is pure gold.",
      category: 'Research',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
        title: 'Co-founder at Veogrowth'
      },
      publishDate: '2023-09-11',
      readingTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: `
      <p>Sending generic cold emails just doesn't work well anymore. To make outreach feel relevant, knowing who a company competes with, or who their ideal customers actually look like, is pure gold. Guessing isn't reliable, but we found that using publicly available data, often with a bit of smart automation, helps us get much closer to understanding a prospect's world.</p>
      
      <h2 id="finding-competitors">Finding Competitors: Cross-Reference Multiple Sources</h2>
      <p>When we try to figure out competitors, we learned early on not to rely on just one database. Different platforms often have different pieces of the puzzle. We noticed that public company profile pages, like those on ZoomInfo, Crunchbase, or even Owler, frequently list companies they see as competitors. One source might be incomplete, but checking several gives us a much better picture.</p>
      
      <p>Our usual process involves setting up simple web scrapers – we often use tools like Zenrows running inside Clay – designed to visit these public pages for the companies we're researching. These scrapers look for and pull out any names listed in competitor sections. Sometimes, if the lists are long or varied, we might even use a bit of AI to analyze all the names pulled from different sites and highlight which competitors show up most often.</p>
      
      <h2 id="identifying-lookalikes">Identifying Lookalikes: Learn From Their Success Stories</h2>
      <p>Finding companies that resemble a prospect's best customers – their lookalikes – requires a different approach. For this, we lean heavily on what the company itself shows us. Their own website is often the best source. If they feature specific customer logos or detailed case studies, that tells us exactly the kind of success story they value and likely want to repeat.</p>
      
      <p>We again use tools, sometimes AI agents like Claygent or simple scrapers, to automatically pull those specific customer names featured on the prospect's website. Once we have that list of their 'star' customers, we can use those names as seeds. We might feed them into lookalike tools, like Ocean.io, or apply filtering logic within Clay based on matching industry and company size, to find other businesses that share very similar characteristics.</p>
      
      <h2 id="making-outreach-relevant">Making Outreach Relevant: Connecting The Dots</h2>
      <p>The point of all this isn't about digging up secrets. It's simply about using the information that's already out there in a more structured way. Doing this research upfront means our cold emails can feel much less random. Instead of a vague opener like "We help companies like yours," we have the foundation to say something more specific and grounded, like, "Saw on your site you work with [Case Study Name], we often help companies similar to them achieve..." or perhaps, "As you often compete with [Competitor Name], have you considered...?".</p>
      
      <p>This extra step connects our message directly to their world, making the outreach feel more informed and relevant right from the start.</p>
      `,
      tableOfContents: [
        { id: 'finding-competitors', title: 'Finding Competitors: Cross-Reference Multiple Sources' },
        { id: 'identifying-lookalikes', title: 'Identifying Lookalikes: Learn From Their Success Stories' },
        { id: 'making-outreach-relevant', title: 'Making Outreach Relevant: Connecting The Dots' }
      ]
    },
    "8": {
      id: '8',
      title: 'How to Set Up a Cold Email Campaign That Actually Works',
      excerpt: "Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.",
      category: 'Clay',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE',
        title: 'Co-founder at Veogrowth'
      },
      publishDate: new Date().toISOString().split('T')[0],
      readingTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: `
      <h2 id="the-three-questions-every-cold-email-campaign-must-answer">The Three Questions Every Cold Email Campaign Must Answer</h2>
      <p>Before launching any campaign, you need clear answers to these fundamental questions:</p>
      <ol>
        <li><strong>How are you going to send emails?</strong> (Infrastructure)</li>
        <li><strong>Who are you going to send the emails to?</strong> (List building)</li>
        <li><strong>What are you going to say to those people?</strong> (Copywriting)</li>
      </ol>
      <p>Let's tackle each one with actionable steps.</p>
      
      <h2 id="part-1-email-infrastructure-that-lands-in-the-primary-inbox">Part 1: Email Infrastructure That Lands in the Primary Inbox</h2>
      <h3>The Foundation: Inbox Setup</h3>
      
      <p>The difference between landing in spam and the primary inbox often comes down to your sending infrastructure. Follow these exact steps:</p>
      
      <h4>Step 1: Choose the Right Sending Accounts</h4>
      <ul>
        <li><strong>Use Google Workspace or Microsoft Outlook accounts</strong> (not marketing automation platforms)</li>
        <li>Set up 2 inboxes per domain maximum</li>
        <li>Use separate domains from your main company domain</li>
        <li>Instantly.ai or Smartlead.ai are reliable platforms for managing multiple inboxes</li>
      </ul>
      
      <h4>Step 2: Prepare Your Infrastructure</h4>
      <ul>
        <li>Set up proper authentication (SPF, DKIM, and DMARC records)</li>
        <li>Forward your sending domains to your main website</li>
        <li>Enable custom tracking if necessary (though open rates are increasingly unreliable)</li>
      </ul>
      
      <h4>Step 3: Warm Up Your Domains</h4>
      <ul>
        <li>Warm each inbox for a minimum of 3 weeks before sending</li>
        <li>Start with 30 emails per day per inbox</li>
        <li>Maintain a 10+ minute delay between emails</li>
        <li>Keep 50% of your sending capacity in reserve for backup</li>
      </ul>
      
      <div class="glass-card p-4 my-6 border-l-4 border-blue-500">
        <p class="font-medium">Pro Tip:</p>
        <p>May through July 2024 saw significant deliverability challenges. If you experience sudden drops in open rates, switch to your reserve inboxes rather than troubleshooting.</p>
      </div>
      
      <h2 id="part-2-build-lists-that-actually-convert">Part 2: Build Lists That Actually Convert</h2>
      <p>List quality directly impacts deliverability and response rates. Here's how to build lists that convert:</p>
      
      <h3>Step 1: Define Your ICP with Precision</h3>
      <p>Apply the "10 Things I Hate About You" Rule: If you can't find 10 potential issues with your list criteria, you don't know your target well enough.</p>
      
      <p>For example, when targeting marketing leaders at banks:</p>
      <ul>
        <li>Some titles may include sales AND marketing responsibilities</li>
        <li>Industry filters often include fintech and consultancies</li>
        <li>Bank size varies dramatically (100 vs. 10,000 employees)</li>
      </ul>
      
      <h3>Step 2: Source Your Contacts</h3>
      <ul>
        <li><strong>LinkedIn-based tools</strong>: Apollo.io is excellent for initial lists, but has export limits</li>
        <li><strong>Advanced option</strong>: Use Clay.com with email finders like Prospeo, LeadMagic, or TryKitt.ai</li>
        <li><strong>Non-LinkedIn prospects</strong>: D7 lead finder or Google Maps scraping via Apify</li>
        <li><strong>Event-based lists</strong>: Often produce 3X higher response rates than cold outreach</li>
      </ul>
      
      <h3>Step 3: Verify Your Data</h3>
      <p>Implement an email validation waterfall:</p>
      <ol>
        <li>Clean contact data and standardize formatting</li>
        <li>Run emails through verification tools (Debounce, MillionVerifier)</li>
        <li>Double-verify questionable emails before sending</li>
        <li>Remove catch-all domains that can't be properly verified</li>
      </ol>
      
      <div class="glass-card p-4 my-6 border-l-4 border-blue-500">
        <p class="font-medium">Pro Tip:</p>
        <p>An email validation waterfall can reduce bounce rates by up to 70%, dramatically improving deliverability.</p>
      </div>
      
      <h2 id="part-3-copywriting-that-gets-responses">Part 3: Copywriting That Gets Responses</h2>
      <p>After analyzing thousands of campaigns, here's what works consistently:</p>
      
      <h3>Step 1: Follow the Four-Sentence Framework</h3>
      <ol>
        <li><strong>First sentence</strong>: Why you're reaching out and why now</li>
        <li><strong>Second sentence</strong>: Explain how you help (value proposition)</li>
        <li><strong>Third sentence</strong>: Show social proof (specific results)</li>
        <li><strong>Fourth sentence</strong>: Clear call to action</li>
      </ol>
      
      <h3>Step 2: Apply These Proven Principles</h3>
      <ul>
        <li>Keep emails under 90 words (shorter = better)</li>
        <li>Use metrics with decimal points (went from 400 to 1200 visitors is more believable than boosted by 60X in 90 days)</li>
        <li>Make subject lines 2-3 words and conversational</li>
        <li>Remove corporate jargon completely</li>
        <li>Create cognitive dissonance with "Poke the Bear" questions</li>
        <li>Use one specific case study rather than generic claims</li>
      </ul>
      
      <h3>Step 3: Structure Your Sequence</h3>
      <ul>
        <li>Limit to 4 emails maximum</li>
        <li>Space emails 3-4 days apart</li>
        <li>Use this sequence structure:
          <ul>
            <li>Email 1: Introduction and main value proposition</li>
            <li>Email 2: Thread to Email 1, add context</li>
            <li>Email 3: New thread, different value proposition</li>
            <li>Email 4: Thread to Email 3, brief final check-in</li>
          </ul>
        </li>
      </ul>
      
      <blockquote>
        <p><strong>Example First Email:</strong></p>
        <p><strong>Subject:</strong> process question</p>
        <p>Hey {First_Name} – saw you brought on 3 new SDRs last month according to LinkedIn. Congrats on the team growth.</p>
        <p>How are you currently making sure their emails aren't landing in spam folders instead of generating meetings?</p>
        <p>We've helped companies like Instantly.ai generate $4.2M in pipeline by solving the exact deliverability problems that plague most outbound teams.</p>
        <p>If making sure your new team members are actually reaching prospects is a priority, would connecting for 15 minutes be helpful?</p>
      </blockquote>
      
      <h2 id="part-4-launch-and-optimization">Part 4: Launch and Optimization</h2>
      <p>Now it's time to put everything together:</p>
      
      <h3>Step 1: Pre-Launch Checklist</h3>
      <ul>
        <li>Confirm all domains have been warming for 3+ weeks</li>
        <li>Verify your email list (target 0.5% bounce rate maximum)</li>
        <li>Test your emails by sending to yourself first</li>
        <li>Prepare follow-up processes for positive responses</li>
      </ul>
      
      <h3>Step 2: Start Small and Scale</h3>
      <ul>
        <li>Begin with 500-1000 contacts to test your approach</li>
        <li>Track positive response rate and meeting booked rate (not open rate)</li>
        <li>Aim for at least 1 positive response per 300 contacts</li>
        <li>Only scale when you've validated your messaging works</li>
      </ul>
      
      <h3>Step 3: Continual Improvement</h3>
      <p>Instead of sending more emails to the same people, test these variables:</p>
      <ol>
        <li>Different value propositions (save time vs. save money vs. make money)</li>
        <li>Different triggers (new in role, hiring, tech installed)</li>
        <li>Different sequence structures</li>
        <li>Different list-building approaches</li>
      </ol>
      
      <h2 id="when-to-kill-a-campaign-and-when-to-keep-going">When to Kill a Campaign (And When to Keep Going)</h2>
      <p>Many teams give up too early or persist with failing campaigns too long. Here's when to make the call:</p>
      
      <p><strong>Kill the campaign if:</strong></p>
      <ul>
        <li>You've contacted 1,000+ prospects with no positive responses</li>
        <li>Your bounce rate exceeds 5% despite verification</li>
        <li>You're seeing spam complaints</li>
      </ul>
      
      <p><strong>Keep optimizing if:</strong></p>
      <ul>
        <li>You're getting positive responses but below your target rate</li>
        <li>You're getting "not interested" responses (shows you're landing in inboxes)</li>
        <li>You haven't tested at least 3 different value propositions</li>
      </ul>
      
      <h2 id="case-study-how-we-generated-52-leads-in-one-day">Case Study: How We Generated 52 Leads in One Day</h2>
      <p>For one enterprise client, we achieved 52 qualified leads in a single day using this exact approach:</p>
      
      <ol>
        <li><strong>Infrastructure</strong>: Rotated between Google and Outlook inboxes with ESP matching</li>
        <li><strong>List building</strong>: Created hyper-specific segments based on LinkedIn engagement</li>
        <li><strong>Copywriting</strong>: Used AI to analyze each prospect's last three posts</li>
        <li><strong>Optimization</strong>: Tested 8 different campaigns simultaneously</li>
      </ol>
      
      <p>The winning approach wasn't what we expected – a simple two-sentence email that asked a direct question about their current process outperformed all our more complex approaches.</p>
      
      <h2 id="common-cold-email-mistakes-to-avoid">Common Cold Email Mistakes to Avoid</h2>
      <p>After analyzing thousands of campaigns, these are the most common mistakes:</p>
      
      <ol>
        <li><strong>Sending too many emails per inbox</strong> (stick to 20-40/day)</li>
        <li><strong>Using your main domain</strong> for cold outreach</li>
        <li><strong>Not verifying emails</strong> before sending</li>
        <li><strong>Writing emails that are too long</strong> (keep under 90words)</li>
        <li><strong>Using corporate jargon</strong> instead of simple language</li>
        <li><strong>Following up too many times</strong> (4 emails maximum)</li>
        <li><strong>Not testing different value propositions</strong></li>
        <li><strong>Focusing on open rates</strong> instead of response rates</li>
        <li><strong>Using calendar links</strong> in initial emails instead of starting conversations</li>
        <li><strong>Giving up before testing enough variables</strong></li>
      </ol>
      
      <h2 id="the-next-steps">The Next Steps</h2>
      <p>Setting up a cold email campaign that works isn't about finding secret hacks – it's about executing the fundamentals with precision:</p>
      
      <ol>
        <li>Build proper infrastructure that lands in the inbox</li>
        <li>Create lists with verified contacts who match your ICP</li>
        <li>Write concise, value-focused copy that creates curiosity</li>
        <li>Test methodically and optimize based on response rates</li>
      </ol>
      
      <p>If you'd like to skip the trial and error, we offer a free campaign test where we'll validate your offer works with cold email before you pay a penny. It takes just 15 minutes to set up, and you'll see actual leads hitting your inbox within 3 weeks.</p>
      
      <p>Ready to build a cold email campaign that actually works? <a href="#">Contact us for your free campaign test →</a></p>
    `,
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
    }
  };
  
  const blogPost = id ? blogPosts[id] : null;

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

    const injectSchema = () => {
      const existingScript = document.getElementById('schema-script-article');
      if (existingScript) {
        existingScript.remove();
      }
      
      if (blogPost) {
        const script = document.createElement('script');
        script.id = 'schema-script-article';
        script.type = 'application/ld+json';
        script.innerHTML = schemaToString(generateArticleSchema(blogPost));
        document.head.appendChild(script);
      }
    };

    injectSchema();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const script = document.getElementById('schema-script-article');
      if (script) {
        script.remove();
      }
    };
  }, [blogPost]);

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
        title: blogPost?.title || '',
        text: blogPost?.excerpt || '',
        url: window.location.href
      })
      .catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Error copying link:', err));
    }
  };


  if (!blogPost && isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="pt-32 pb-20 container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">Blog post not found</p>
          <p className="text-gray-500 text-sm mt-2">Available posts: {Object.keys(blogPosts).join(', ')}</p>
          <p className="text-gray-500 text-sm">Looking for ID: {id}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="pt-32 pb-20 container mx-auto px-4 sm:px-6 text-center">
          <div className="spinner mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts: BlogPost[] = Object.values(blogPosts)
    .filter(post => post.id !== id)
    .filter(post => post.category === blogPost.category || post.author.name === blogPost.author.name)
    .slice(0, 3);

  if (relatedPosts.length < 3) {
    const additionalPosts = Object.values(blogPosts)
      .filter(post => post.id !== id && !relatedPosts.some(relatedPost => relatedPost.id === post.id))
      .slice(0, 3 - relatedPosts.length);
    
    relatedPosts.push(...additionalPosts);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CanonicalUrl path={`/blog/${slug}`} />
      <Header />
      
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 mb-8">
          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: blogPost?.title || 'Article', current: true }
              ]}
              className="text-gray-300"
            />
          </div>
          
          <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to all articles</span>
          </Link>
        </div>
        
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
                "lg:col-span-9 max-w-4xl",
                isLoaded ? "animate-fade-in" : "opacity-100"
              )}
              style={{ animationDelay: isLoaded ? '200ms' : '0ms' }}
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
                      <AvatarImage src={blogPost.author.avatarUrl} alt={`${blogPost.author.name} - Article author photo`} />
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
                className="prose prose-lg max-w-none prose-invert"
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
                      <AvatarImage src={blogPost.author.avatarUrl} alt={`${blogPost.author.name} - Article author photo`} />
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
        
        {/* Related Posts */}
        {blogPost && (
          <RelatedPosts 
            currentPostId={blogPost.id}
            allPosts={blogPosts}
            maxPosts={2}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
