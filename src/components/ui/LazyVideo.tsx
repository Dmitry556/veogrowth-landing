
import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  videoId: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ 
  videoId, 
  title = "Video", 
  width = 640, 
  height = 360,
  className = "",
  priority = false
}) => {
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [clicked, setClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true);

  // Generate thumbnail URLs
  const thumbnailUrl = `https://i.vimeocdn.com/video/${videoId}-placeholder.jpg`;
  const smallThumbnailUrl = `https://i.vimeocdn.com/video/${videoId}-placeholder-small.jpg`;
  
  // Preload the thumbnail image
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = thumbnailUrl;
    }
  }, [priority, thumbnailUrl]);

  useEffect(() => {
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (priority) return; // Skip IntersectionObserver for priority videos
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only mark as intersecting once the element is in view
        if (entry.isIntersecting && isMounted.current) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px 0px', // Preload when within 200px
        threshold: 0.01 
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Load Vimeo API in a non-blocking way
  const loadVimeoApi = () => {
    if (!document.querySelector('script[src*="player.vimeo.com"]')) {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }
    return Promise.resolve();
  };

  // Handle click on the video placeholder
  const handleClick = async () => {
    setClicked(true);
    
    try {
      // Load Vimeo API only when needed
      await loadVimeoApi();
      
      if (isMounted.current) {
        setLoaded(true);
      }
    } catch (error) {
      console.error('Error loading Vimeo player:', error);
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
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        {/* Progressive image loading */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          {isIntersecting && (
            <>
              <img 
                src={smallThumbnailUrl} 
                alt=""
                className="w-full h-full object-cover"
                style={{ opacity: 0.8 }}
                aria-hidden="true"
                loading="eager"
              />
              <img 
                src={thumbnailUrl} 
                alt={`${title} preview`}
                className="w-full h-full object-cover"
                style={{ opacity: 0.8 }}
                loading="lazy"
                onLoad={(e) => {
                  // Once the full image loads, make it visible
                  (e.target as HTMLImageElement).style.zIndex = "1";
                }}
              />
            </>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white font-medium z-10">
          {title}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${className}`} 
      style={{ maxWidth: width }}
    >
      {!loaded && (
        <div className="flex items-center justify-center" style={{ height: height }}>
          <div className="spinner"></div>
        </div>
      )}
      <div style={{ display: loaded ? 'block' : 'none' }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
          width={width}
          height={height}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

export default LazyVideo;
