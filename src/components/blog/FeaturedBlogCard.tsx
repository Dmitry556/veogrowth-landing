
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
        {/* Image container with zoom effect - takes full height on desktop */}
        <div className="relative w-full aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          <Link to={`/blog/${post.id}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ 
                backgroundImage: `url(${post.imageUrl})`,
                // Fixed dimensions prevent layout shift
                width: '100%',
                height: '100%'
              }}
              aria-label={`Featured image for ${post.title}`}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            
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
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-400 font-medium">Featured</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <Link to={`/blog/${post.id}`} className="block group-hover:text-blue-400 transition-colors">
            <h2 className="text-h2 font-bold leading-tight mb-4">{post.title}</h2>
          </Link>
          
          <p className="text-white/80 text-lg mb-6">{post.excerpt}</p>
          
          <div className="flex flex-wrap items-center gap-6 mt-auto pt-4 border-t border-white/10">
            {/* Author */}
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3 border border-white/10">
                <AvatarImage 
                  src={post.author.avatarUrl} 
                  alt={post.author.name} 
                  width={40} 
                  height={40}
                  loading="lazy"
                />
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
      </div>
    </article>
  );
};

export default FeaturedBlogCard;
