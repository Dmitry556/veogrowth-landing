
/**
 * Web Vitals performance monitoring utility
 * Logs key performance metrics to help track site speed
 */

// Core Web Vitals metrics
export const measureWebVitals = () => {
  try {
    if ('performance' in window) {
      // Record navigation timing metrics
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        setTimeout(() => {
          const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
          const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
          const lcpEntry = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1] : null;
          
          // Core Web Vitals and other performance metrics
          console.log('📊 Performance Metrics:');
          console.log(`⏱️ Time to First Byte (TTFB): ${Math.round(navEntry.responseStart)} ms`);
          console.log(`⏱️ First Contentful Paint (FCP): ${fcpEntry ? Math.round(fcpEntry.startTime) : 'Not available'} ms`);
          console.log(`⏱️ Largest Contentful Paint (LCP): ${lcpEntry ? Math.round(lcpEntry.startTime) : 'Not available'} ms`);
          console.log(`⏱️ DOM Content Loaded: ${Math.round(navEntry.domContentLoadedEventEnd)} ms`);
          console.log(`⏱️ Full Page Load: ${Math.round(navEntry.loadEventEnd)} ms`);
        }, 3000); // Wait for metrics to be available
      }
    }
  } catch (error) {
    console.error('Error measuring performance metrics:', error);
  }
};

// Define the proper type for LayoutShift entries
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Track Cumulative Layout Shift (CLS)
export const observeLayoutShifts = () => {
  try {
    if ('PerformanceObserver' in window) {
      let cls = 0;
      
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // Cast to our properly typed interface
          const layoutShift = entry as LayoutShiftEntry;
          if (!layoutShift.hadRecentInput) {
            cls += layoutShift.value;
          }
        }
        console.log(`⚠️ Cumulative Layout Shift (CLS): ${cls.toFixed(3)}`);
      }).observe({ type: 'layout-shift', buffered: true });
    }
  } catch (error) {
    console.error('Error observing layout shifts:', error);
  }
};

// Helper to record component render time
export const measureComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    console.log(`⚡ ${componentName} rendered in ${Math.round(endTime - startTime)}ms`);
  };
};
