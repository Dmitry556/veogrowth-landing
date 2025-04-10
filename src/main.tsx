
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a function to load non-critical CSS
const loadNonCriticalCSS = () => {
  const links = [
    // Add any additional non-critical CSS files here
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

// Mount the app
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Load non-critical CSS after the page has loaded
window.addEventListener('load', () => {
  // Wait a short moment to ensure main content is displayed
  setTimeout(loadNonCriticalCSS, 100);
});

// Add passive event listeners for scroll performance
document.addEventListener('touchstart', function() {}, { passive: true });
document.addEventListener('touchmove', function() {}, { passive: true });
document.addEventListener('wheel', function() {}, { passive: true });

