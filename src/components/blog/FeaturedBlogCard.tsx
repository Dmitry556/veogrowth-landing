
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
        "glass-card group overflow-hidden opacity-0 translate-y-4 transition-all duration-300",
        isVisible && "opacity-100 translate-y-0 hover:-translate-y-1"
      )}
    >
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-blue-400 font-medium">Featured</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        
        <Badge 
          variant="outline" 
          className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
        >
          {post.category}
        </Badge>
        
        <Link to={`/blog/${post.id}`} className="block group-hover:text-blue-400 transition-colors">
          <h2 className="text-h2 font-bold leading-tight mb-4">{post.title}</h2>
        </Link>
        
        <p className="text-white/80 text-lg mb-6">{post.excerpt}</p>
        
        <div className="flex flex-wrap items-center gap-6 mt-auto pt-4 border-t border-white/10">
          {/* Author */}
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3 border border-white/10">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-xs text-white/70">{post.author.title}</div>
            </div>
          </div>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-white/60">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedBlogCard;
