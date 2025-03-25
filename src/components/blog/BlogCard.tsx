
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
        "glass-card group overflow-hidden opacity-0 translate-y-4 transition-all duration-300",
        isVisible && "opacity-100 translate-y-0 hover:-translate-y-1"
      )}
      style={{ 
        transitionDelay: animationDelay,
        animationDelay 
      }}
    >
      {/* Image container with zoom effect */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <Link to={`/blog/${post.id}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Category badge */}
          <Badge 
            variant="outline" 
            className="absolute top-4 left-4 bg-primary/30 text-white border-primary/40 backdrop-blur-sm"
          >
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </Badge>
        </Link>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <Link to={`/blog/${post.id}`} className="block group-hover:text-blue-400 transition-colors">
          <h3 className="text-h3 font-semibold leading-tight mb-3 line-clamp-2">{post.title}</h3>
        </Link>
        
        <p className="text-white/70 mb-6 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          {/* Author */}
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 border border-white/10">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-white/70 truncate">{post.author.name}</span>
          </div>
          
          {/* Meta info */}
          <div className="flex items-center text-sm text-white/60">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
