
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';

interface FeaturedBlogCardProps {
  post: BlogPost;
  isVisible: boolean;
}

const FeaturedBlogCard = ({ post, isVisible }: FeaturedBlogCardProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <article 
      className={cn(
        "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-2xl p-8 md:p-10 opacity-0 translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10",
        isVisible && "opacity-100 translate-y-0 hover:-translate-y-2"
      )}
    >
      <div className="relative">
        {/* Featured Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full px-4 py-2 border border-yellow-400/30">
            <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-yellow-400">Featured Article</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        
        {/* Category Badge */}
        <div className="mb-6">
          <Badge 
            variant="outline" 
            className="bg-purple-900/50 text-purple-300 border-purple-500/50 px-4 py-2 text-sm font-medium"
          >
            {post.category}
          </Badge>
        </div>
        
        {/* Title */}
        <Link 
          to={`/blog/${post.id}`} 
          className="block group transition-all duration-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {post.title}
          </h2>
        </Link>
        
        {/* Excerpt */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-700/50">
          {/* Author Info */}
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4 border-2 border-gray-600">
              <AvatarImage src={post.author.avatarUrl} alt={`${post.author.name} - Featured blog post author`} />
              <AvatarFallback className="bg-gray-700 text-gray-300">{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-white">{post.author.name}</div>
              <div className="text-sm text-gray-400">{post.author.title}</div>
            </div>
          </div>
          
          {/* Meta Info & CTA */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">{post.readingTime}</span>
              </div>
            </div>
            
            <Link 
              to={`/blog/${post.id}`}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedBlogCard;
