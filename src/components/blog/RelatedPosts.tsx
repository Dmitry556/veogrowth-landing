import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { getSlugFromId } from '@/utils/slug';
import { ArrowRight, Clock } from 'lucide-react';

interface RelatedPostsProps {
  currentPostId: string;
  allPosts: Record<string, BlogPost>;
  maxPosts?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ 
  currentPostId, 
  allPosts, 
  maxPosts = 2 
}) => {
  // Get related posts (excluding current post)
  const relatedPosts = Object.values(allPosts)
    .filter(post => post.id !== currentPostId)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-700/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Related Articles
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {relatedPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={`${post.title} - Related blog post`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-purple-900/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readingTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${getSlugFromId(post.id)}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-purple-500/30 text-purple-400 hover:text-purple-300 hover:border-purple-400/50 rounded-lg font-medium transition-all duration-200 hover:bg-purple-900/20"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;