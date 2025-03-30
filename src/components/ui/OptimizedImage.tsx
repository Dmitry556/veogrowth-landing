import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component that implements best practices for image optimization:
 * - WebP format support with fallback
 * - Explicit width/height to prevent layout shifts
 * - Lazy loading for below-the-fold images
 * - Responsive images with srcset
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = "100vw",
  priority = false,
  ...props
}: OptimizedImageProps) => {
  // Check if we have a WebP version available (assumes same basename with .webp extension)
  const getWebPSrc = (originalSrc: string) => {
    // If it's already a WebP, return as is
    if (originalSrc.endsWith('.webp')) return originalSrc;
    
    // If it's a URL with extension, replace the extension with .webp
    if (originalSrc.match(/\.(jpg|jpeg|png)($|\?)/i)) {
      return originalSrc.replace(/\.(jpg|jpeg|png)($|\?)/i, '.webp$2');
    }
    
    // For other cases (might be a CDN URL without clear extension)
    return originalSrc;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (imgSrc: string) => {
    if (!width) return undefined;
    
    const webpSrc = getWebPSrc(imgSrc);
    
    // Create breakpoints at 640px, 768px, 1024px, 1280px, 1536px
    const breakpoints = [640, 768, 1024, 1280, 1536];
    
    // For external URLs or when we can't manipulate the URL, return basic srcset
    if (imgSrc.startsWith('http') && !imgSrc.includes('?')) {
      return webpSrc;
    }
    
    // Generate srcset with width descriptors
    return breakpoints
      .map(bp => {
        // If URL contains query params, add width param
        if (webpSrc.includes('?')) {
          return `${webpSrc}&w=${bp} ${bp}w`;
        }
        // Otherwise add width as a query param
        return `${webpSrc}?w=${bp} ${bp}w`;
      })
      .join(', ');
  };

  return (
    <picture>
      {/* WebP source */}
      <source
        srcSet={generateSrcSet(src)}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("", className)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
