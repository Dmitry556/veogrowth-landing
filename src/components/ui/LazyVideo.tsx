
import React, { useState, useEffect } from 'react';

interface LazyVideoProps {
  videoId: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ 
  videoId, 
  title = "Video", 
  width = 640, 
  height = 360,
  className = ""
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [clicked, setClicked] = useState(false);
  const placeholderRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only mark as intersecting once the element is fully in view
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generate thumbnail URL (using Vimeo's pattern)
  const thumbnailUrl = `https://i.vimeocdn.com/video/${videoId}-placeholder.jpg`;

  // Only load the Vimeo script when the user clicks play
  const handleClick = () => {
    setClicked(true);
    
    // Load Vimeo script only when needed
    if (!document.querySelector('script[src*="player.vimeo.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  };

  if (!clicked) {
    return (
      <div 
        ref={placeholderRef}
        className={`video-placeholder relative cursor-pointer overflow-hidden rounded-xl ${className}`}
        style={{ maxWidth: width, width: '100%', aspectRatio: `${width}/${height}` }}
        onClick={handleClick}
        aria-label={`Play ${title} video`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          {isIntersecting && (
            <img 
              src={thumbnailUrl} 
              alt={`${title} preview`}
              className="w-full h-full object-cover"
              style={{ opacity: 0.8 }}
              loading="lazy"
            />
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white font-medium">
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`} style={{ maxWidth: width }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
        loading="lazy"
      />
    </div>
  );
};

export default LazyVideo;
