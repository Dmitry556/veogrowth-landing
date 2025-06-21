#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO data for each route
const seoData = {
  '/': {
    title: 'VeoGrowth - AI-Powered B2B Lead Generation | 30+ Meetings Monthly',
    description: 'Generate 30+ qualified B2B meetings monthly using AI-powered cold email campaigns. Pay only for meetings that show up. $8M+ pipeline generated.',
    canonical: 'https://www.veogrowth.com/'
  },
  '/case-studies': {
    title: 'Case Studies - VeoGrowth Success Stories | Real Results',
    description: 'See how VeoGrowth generated $8M+ in pipeline through 150+ successful B2B lead generation campaigns. Real case studies with verified results.',
    canonical: 'https://www.veogrowth.com/case-studies'
  },
  '/case-studies/podcast-whales-25-meetings-6-clients': {
    title: 'Podcast Whales Case Study: 25 Meetings, 6 Clients in 30 Days',
    description: 'How VeoGrowth helped a podcast booking agency generate 25 qualified meetings and 6 new clients in 30 days using AI-powered outreach.',
    canonical: 'https://www.veogrowth.com/case-studies/podcast-whales-25-meetings-6-clients'
  },
  '/case-studies/zero-fee-payment-processor-52-meetings': {
    title: 'Zero-Fee Payment Processor: 52 Meetings, $605K Pipeline',
    description: 'How VeoGrowth generated 52 qualified meetings and $605K in pipeline for a zero-fee payment processor using targeted cold email campaigns.',
    canonical: 'https://www.veogrowth.com/case-studies/zero-fee-payment-processor-52-meetings'
  },
  '/case-studies/api-monitoring-platform-56-meetings': {
    title: 'API Monitoring Platform: 56 Meetings in 90 Days | $554K Pipeline',
    description: 'How VeoGrowth helped an API monitoring platform generate 56 meetings with engineering decision-makers and $554K in pipeline.',
    canonical: 'https://www.veogrowth.com/case-studies/api-monitoring-platform-56-meetings'
  },
  '/blog': {
    title: 'B2B Cold Email Blog - VeoGrowth Strategy & Tips',
    description: 'Learn proven B2B cold email strategies, tactics, and insights from VeoGrowth experts. Real-world examples and actionable tips.',
    canonical: 'https://www.veogrowth.com/blog'
  },
  '/blog/poke-the-bear-questions-that-get-replies': {
    title: 'Poke the Bear Questions That Get Cold Email Replies',
    description: 'Learn the exact "poke the bear" question framework that generates 3x more cold email replies. Proven tactics with real examples.',
    canonical: 'https://www.veogrowth.com/blog/poke-the-bear-questions-that-get-replies'
  },
  '/blog/competitor-lookalike-insights-using-public-data': {
    title: 'Competitor Lookalike Insights Using Public Data for Cold Email',
    description: 'Discover how to find competitor lookalikes using public data for highly targeted cold email campaigns. Step-by-step guide.',
    canonical: 'https://www.veogrowth.com/blog/competitor-lookalike-insights-using-public-data'
  },
  '/blog/cold-email-campaign-that-actually-works': {
    title: 'Cold Email Campaign That Actually Works | VeoGrowth Strategy',
    description: 'The exact cold email campaign framework that generates 30+ meetings monthly. Real examples and step-by-step implementation.',
    canonical: 'https://www.veogrowth.com/blog/cold-email-campaign-that-actually-works'
  },
  '/about': {
    title: 'About VeoGrowth - AI-Powered B2B Lead Generation Experts',
    description: 'Learn about VeoGrowth, the B2B lead generation agency that has generated $8M+ in pipeline for 150+ clients using AI-powered cold email.',
    canonical: 'https://www.veogrowth.com/about'
  },
  '/tech-stack': {
    title: 'Tech Stack - VeoGrowth B2B Lead Generation Technology',
    description: 'Explore the technology stack behind VeoGrowth\'s AI-powered B2B lead generation platform. Tools, integrations, and infrastructure.',
    canonical: 'https://www.veogrowth.com/tech-stack'
  },
  '/resources/true-cost-of-sdr': {
    title: 'True Cost of SDR Whitepaper - VeoGrowth vs In-House SDR',
    description: 'Calculate the real cost of hiring SDRs vs VeoGrowth\'s AI-powered lead generation. Comprehensive cost analysis and ROI comparison.',
    canonical: 'https://www.veogrowth.com/resources/true-cost-of-sdr'
  },
  '/tools/microsoft-filter': {
    title: 'Microsoft Email Filter Tool - VeoGrowth Free B2B Tool',
    description: 'Free tool to identify and filter Microsoft email addresses for better B2B cold email deliverability. Instant results.',
    canonical: 'https://www.veogrowth.com/tools/microsoft-filter'
  }
};

function optimizeHtmlSeo(htmlContent, route) {
  const seo = seoData[route] || seoData['/'];
  
  // Update title
  htmlContent = htmlContent.replace(
    /<title>.*?<\/title>/i,
    `<title>${seo.title}</title>`
  );
  
  // Update meta description
  htmlContent = htmlContent.replace(
    /<meta name="description" content=".*?"/i,
    `<meta name="description" content="${seo.description}"`
  );
  
  // Add canonical URL
  if (!htmlContent.includes('rel="canonical"')) {
    const canonicalTag = `    <link rel="canonical" href="${seo.canonical}" />`;
    htmlContent = htmlContent.replace(
      /<link rel="sitemap"/i,
      `${canonicalTag}\n    <link rel="sitemap"`
    );
  }
  
  // Update Open Graph tags
  htmlContent = htmlContent.replace(
    /<meta property="og:title" content=".*?"/i,
    `<meta property="og:title" content="${seo.title}"`
  );
  
  htmlContent = htmlContent.replace(
    /<meta property="og:description" content=".*?"/i,
    `<meta property="og:description" content="${seo.description}"`
  );
  
  htmlContent = htmlContent.replace(
    /<meta property="og:url" content=".*?"/i,
    `<meta property="og:url" content="${seo.canonical}"`
  );
  
  return htmlContent;
}

function optimizePrerenderedFiles() {
  const distDir = path.join(__dirname, '../dist');
  
  // Process each route
  Object.keys(seoData).forEach(route => {
    const routePath = route === '/' ? '' : route;
    const htmlPath = path.join(distDir, routePath, 'index.html');
    
    if (fs.existsSync(htmlPath)) {
      console.log(`🔧 Optimizing SEO for: ${route}`);
      
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');
      htmlContent = optimizeHtmlSeo(htmlContent, route);
      
      fs.writeFileSync(htmlPath, htmlContent);
      console.log(`✅ SEO optimized: ${htmlPath}`);
    } else {
      console.log(`⚠️  HTML file not found: ${htmlPath}`);
    }
  });
}

// Export for use by other scripts
export { optimizePrerenderedFiles, seoData };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizePrerenderedFiles();
}