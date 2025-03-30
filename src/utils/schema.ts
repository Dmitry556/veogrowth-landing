
/**
 * Schema.org JSON-LD utilities for SEO
 * Generates structured data to help search engines understand content
 */

import { BlogPost } from "@/types/blog";

// Organization schema for Veogrowth
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Veogrowth",
    "url": "https://veogrowth.com",
    "logo": "https://veogrowth.com/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png",
    "description": "Discover how to create successful cold email campaigns and high-converting outbound strategies that drive B2B sales and generate pipeline.",
    "sameAs": [
      "https://twitter.com/veogrowth",
      "https://www.linkedin.com/company/veogrowth",
      "https://www.facebook.com/veogrowth"
    ]
  };
};

// Website schema for Veogrowth
export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Veogrowth",
    "url": "https://veogrowth.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://veogrowth.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

// Article schema for blog posts
export const generateArticleSchema = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veogrowth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veogrowth.com/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate
  };
};

// Generate a combined schema array for the homepage
export const generateHomePageSchema = () => {
  return [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ];
};

// Helper to convert schema objects to JSON string
export const schemaToString = (schema: any) => {
  return JSON.stringify(schema, null, 2);
};
