
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isVisible: boolean;
}

const BlogCard = ({ post, index, isVisible }: BlogCardProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate animation delay based on index
  const animationDelay = `${150 * (index % 6)}ms`;

  return (
    <article 
      className={cn(
        "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 rounded-xl p-6 opacity-0 translate-y-4 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 group cursor-pointer",
        isVisible && "opacity-100 translate-y-0 hover:-translate-y-1"
      )}
      style={{ 
        transitionDelay: animationDelay,
        animationDelay: animationDelay 
      }}
    >
      <div className="h-full flex flex-col">
        {/* Category Badge */}
        <div className="mb-4">
          <Badge 
            variant="outline" 
            className="bg-purple-900/40 text-purple-300 border-purple-500/40 px-3 py-1 text-xs font-medium"
          >
            {post.category}
          </Badge>
        </div>
        
        {/* Title */}
        <Link 
          to={`/blog/${post.id}`} 
          className="block group-hover:text-purple-400 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold leading-tight mb-3 text-white line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="text-gray-300 mb-6 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/40 mt-auto">
          {/* Author */}
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-3 border border-gray-600">
              <AvatarImage src={post.author.avatarUrl} alt={`${post.author.name} - Blog post author`} />
              <AvatarFallback className="bg-gray-700 text-gray-300 text-xs">{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">{post.author.name}</div>
              <div className="text-xs text-gray-400">{formatDate(post.publishDate)}</div>
            </div>
          </div>
          
          {/* Reading Time & Arrow */}
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex items-center text-xs">
              <Clock size={12} className="mr-1" />
              <span>{post.readingTime}</span>
            </div>
            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
              <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
