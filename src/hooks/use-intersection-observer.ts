
import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
}: UseIntersectionObserverOptions = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      // Fallback for browsers that don't support IntersectionObserver
      setIsIntersecting(true);
      return;
    }

    if (observerRef.current) {
      if (elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
        
        // If trigger once and element is intersecting, disconnect observer
        if (triggerOnce && entry.isIntersecting && observerRef.current && elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
          observerRef.current.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    return () => {
      if (observerRef.current) {
        if (elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  // Set up the observer once we have a valid element reference
  const setRef = (element: Element | null) => {
    if (!element || element === elementRef.current) return;

    elementRef.current = element;
    
    if (observerRef.current && elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  };

  return {
    setRef,
    entry,
    isIntersecting,
  };
}
