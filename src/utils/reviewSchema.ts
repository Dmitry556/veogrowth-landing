/**
 * Generate case study schema without problematic reviews
 */
export const generateCaseStudyReviewSchema = (
  title: string,
  description: string,
  rating: number = 5,
  reviewCount: number = 1
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.veogrowth.com/case-studies/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "VeoGrowth",
      "url": "https://www.veogrowth.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VeoGrowth",
      "url": "https://www.veogrowth.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.veogrowth.com/lovable-uploads/4882578b-1930-4387-b142-b075eb12bb6f.png"
      }
    },
    "datePublished": "2024-12-17",
    "dateModified": "2024-12-17",
    "articleSection": "Case Studies",
    "about": {
      "@type": "Service",
      "name": "B2B Lead Generation",
      "provider": {
        "@type": "Organization",
        "name": "VeoGrowth"
      }
    }
  };
};