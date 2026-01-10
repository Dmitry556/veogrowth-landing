/**
 * Generate clean case study schema - NO REVIEWS to avoid Google errors
 */
export const generateCaseStudySchema = (
  title: string,
  description: string,
  url: string,
  datePublished: string = "2025-06-23"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": "Veogrowth",
      "url": "https://www.veogrowth.com"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Veogrowth",
      "url": "https://www.veogrowth.com"
    },
    "datePublished": datePublished,
    "dateModified": "2025-06-23",
    "articleSection": "Case Studies",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "about": {
      "@type": "Service",
      "name": "B2B Lead Generation",
      "serviceType": "Marketing",
      "provider": {
        "@type": "Organization",
        "name": "Veogrowth"
      }
    }
  };
};