
/**
 * Schema.org JSON-LD utilities for SEO
 * Generates structured data to help search engines understand content
 */

import { BlogPost } from "@/types/blog";

// Enhanced Organization schema for Veogrowth with knowledge graph signals
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Veogrowth",
    "alternateName": ["VeoGrowth", "Veo Growth"],
    "url": "https://www.veogrowth.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.veogrowth.com/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png",
      "width": 400,
      "height": 400
    },
    "description": "B2B lead generation agency specializing in performance-based cold email campaigns. Pay only for qualified meetings that actually happen.",
    "slogan": "Generate Pipeline Without Hiring More Sales Reps",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Dmitry Pinchuk",
      "jobTitle": "Founder & CEO",
      "url": "https://www.veogrowth.com/about",
      "sameAs": [
        "https://www.linkedin.com/in/dmitrypinchuk"
      ]
    },
    "knowsAbout": [
      "Cold Email Marketing",
      "B2B Lead Generation", 
      "Sales Development",
      "Email Campaign Optimization",
      "Performance Marketing",
      "Sales Automation",
      "Outbound Marketing Strategy"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "serviceArea": {
      "@type": "Place", 
      "name": "Global"
    },
    "offers": {
      "@type": "Offer",
      "name": "Pay-Per-Meeting Lead Generation",
      "description": "Performance-based B2B lead generation where clients only pay for qualified meetings with decision-makers"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://calendly.com/veogrowth"
    },
    "sameAs": [
      "https://twitter.com/veogrowth",
      "https://www.linkedin.com/company/veogrowth",
      "https://www.facebook.com/veogrowth"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };
};

// Professional Service schema for Veogrowth
export const generateProfessionalServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VeoGrowth",
    "description": "B2B lead generation agency with a pay-per-meeting model where clients only pay for qualified meetings that actually happen.",
    "serviceType": "Lead Generation",
    "priceRange": "$$",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2B Lead Generation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Pay-Per-Meeting Lead Generation",
          "description": "Performance-based lead generation where you only pay for qualified meetings with decision-makers."
        }
      ]
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
        "url": "https://www.veogrowth.com/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png"
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
    generatePersonSchema(),
    generateWebsiteSchema(),
    generateProfessionalServiceSchema()
  ];
};

// Helper to convert schema objects to JSON string
// Person schema for Dmitry Pinchuk (founder)
export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dmitry Pinchuk", 
    "givenName": "Dmitry",
    "familyName": "Pinchuk",
    "jobTitle": "Founder & CEO of Veogrowth",
    "description": "B2B lead generation expert and founder of Veogrowth, specializing in performance-based cold email campaigns and sales development strategies.",
    "url": "https://www.veogrowth.com/about",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQFM7wSeqcLPyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721634299261?e=2147483647&v=beta&t=77NLh-cQo2Bpvuu_b5sm5Pf5RUOuR072wC-r4foWyUE",
    "worksFor": {
      "@type": "Organization",
      "name": "Veogrowth",
      "url": "https://www.veogrowth.com"
    },
    "knowsAbout": [
      "Cold Email Marketing",
      "B2B Lead Generation",
      "Sales Development", 
      "Performance Marketing",
      "Email Campaign Optimization",
      "Sales Automation"
    ],
    "expertise": [
      "Cold Email Strategy",
      "B2B Sales Development",
      "Lead Generation",
      "Performance-Based Marketing"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/dmitrypinchuk"
    ],
    "nationality": "US"
  };
};

// Enhanced WebSite schema with better search capabilities
export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Veogrowth - B2B Lead Generation Agency",
    "alternateName": "Veogrowth",
    "url": "https://www.veogrowth.com",
    "description": "Performance-based B2B lead generation agency. Pay only for qualified meetings that actually happen. Cold email campaigns that generate pipeline.",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.veogrowth.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Veogrowth"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Veogrowth"
    }
  };
};

export const schemaToString = (schema: any) => {
  return JSON.stringify(schema, null, 2);
};
