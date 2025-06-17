/**
 * Generate URL-friendly slug from title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Blog post slug mappings for existing content
 */
export const blogPostSlugs: Record<string, string> = {
  '1': 'poke-the-bear-questions-that-get-replies',
  '3': 'competitor-lookalike-insights-using-public-data', 
  '8': 'cold-email-campaign-that-actually-works'
};

/**
 * Reverse mapping from slug to ID
 */
export const slugToId: Record<string, string> = Object.fromEntries(
  Object.entries(blogPostSlugs).map(([id, slug]) => [slug, id])
);

/**
 * Get slug from blog post ID
 */
export const getSlugFromId = (id: string): string => {
  return blogPostSlugs[id] || id;
};

/**
 * Get ID from blog post slug
 */
export const getIdFromSlug = (slug: string): string => {
  return slugToId[slug] || slug;
};