
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './critical.css'

// Create a function to load non-critical CSS
const loadNonCriticalCSS = () => {
  // Preload non-critical CSS
  const links = [
    '/assets/index.css'
  ];
  
  links.forEach(href => {
    if (href) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });
};

// Mount the app with optimized rendering
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Load non-critical CSS after the page has loaded
window.addEventListener('load', () => {
  // Wait a short moment to ensure main content is displayed
  requestIdleCallback(() => loadNonCriticalCSS());
});

// Add passive event listeners for scroll performance
document.addEventListener('touchstart', () => {}, { passive: true });
document.addEventListener('touchmove', () => {}, { passive: true });
document.addEventListener('wheel', () => {}, { passive: true });
