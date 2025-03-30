
/**
 * Font optimization utilities
 * Implements font preloading, display swap, and dynamic font loading
 */

// Preload critical fonts
export const preloadCriticalFonts = () => {
  const fonts = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      rel: 'preload',
      as: 'style',
    }
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = font.rel;
    link.href = font.href;
    link.as = font.as;
    
    // Add preconnect for Google Fonts
    if (font.href.includes('fonts.googleapis.com')) {
      const preconnectGoogle = document.createElement('link');
      preconnectGoogle.rel = 'preconnect';
      preconnectGoogle.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnectGoogle);
      
      const preconnectGstatic = document.createElement('link');
      preconnectGstatic.rel = 'preconnect';
      preconnectGstatic.href = 'https://fonts.gstatic.com';
      preconnectGstatic.crossOrigin = 'anonymous';
      document.head.appendChild(preconnectGstatic);
    }
    
    document.head.appendChild(link);
  });
};

// Add font-display: swap to all loaded fonts
export const addFontDisplaySwap = () => {
  // Find all stylesheet links
  const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
  
  styleLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // If it's a Google Font URL and doesn't already have display=swap
    if (href && href.includes('fonts.googleapis.com') && !href.includes('display=swap')) {
      link.setAttribute('href', `${href}${href.includes('?') ? '&' : '?'}display=swap`);
    }
  });
};

// Load fonts only when needed
export const loadFontsOnDemand = () => {
  // Function to check if element is using a specific font
  const checkForFontUsage = (fontName: string) => {
    const elements = document.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
      const computedStyle = window.getComputedStyle(elements[i]);
      if (computedStyle.fontFamily.includes(fontName)) {
        return true;
      }
    }
    return false;
  };
  
  // Only load Inter font if it's being used
  if (checkForFontUsage('Inter')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }
};
