/**
 * Generate review schema for case studies
 */
export const generateCaseStudyReviewSchema = (
  title: string,
  description: string,
  rating: number = 5,
  reviewCount: number = 1
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization", 
      "name": "Veogrowth",
      "url": "https://veogrowth.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": 5,
      "ratingCount": reviewCount
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Verified Client"
      },
      "reviewBody": description
    }
  };
};