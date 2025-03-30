import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/blog';

// Sample blog posts data - in a real implementation this would be fetched from your data source
const getBlogPosts = (): BlogPost[] => {
  // This is just a placeholder - in a real implementation,
  // you would fetch your blog posts from your actual data source
  return [
    {
      id: '1',
      title: 'How to Create Poke-the-Bear Questions That Get Replies',
      publishDate: '2024-07-10',
      excerpt: "Cold emails that get ignored cost your business thousands in wasted opportunity. The difference between a 0.5% and 3% response rate isn't just better copy—it's asking the right questions.",
      category: 'cold-email',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
        title: 'Co-founder at Veogrowth'
      },
      readingTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: '8',
      title: 'How to Set Up a Cold Email Campaign That Actually Works',
      publishDate: '2024-07-10',
      excerpt: "Most cold email campaigns fail before they even start. After analyzing over 1.5 million emails and generating 10,000+ positive responses in 2024, we've identified exactly what separates campaigns that generate pipeline from those that waste your budget.",
      category: 'cold-email',
      author: {
        name: 'Dmitry Pinchuk',
        avatarUrl: '/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png',
        title: 'Co-founder at Veogrowth'
      },
      readingTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
};

export const generateSitemap = async () => {
  try {
    const blogPosts = getBlogPosts();
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home Page -->
  <url>
    <loc>https://veogrowth.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog Main Page -->
  <url>
    <loc>https://veogrowth.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Individual Blog Posts -->`;

    // Add each blog post URL
    blogPosts.forEach(post => {
      sitemap += `
  <url>
    <loc>https://veogrowth.com/blog/${post.id}</loc>
    <lastmod>${post.publishDate || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    // Write the sitemap to the public directory
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};
