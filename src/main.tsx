
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './critical.css'

// Preload important resources (only in production)
const preloadResources = () => {
  if (import.meta.env.PROD) {
    const resources = [
      { href: '/assets/index.css', as: 'style', rel: 'preload' }
    ];
    
    resources.forEach(({ href, as, rel }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.as = as;
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Load non-critical CSS after initial paint (only in production)
const loadNonCriticalCSS = () => {
  if (import.meta.env.PROD) {
    const links = [
      '/assets/index.css'
    ];
    
    links.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }
};

// Optimize third-party script loading
const loadDeferredScripts = () => {
  // Only load tracking code when user has had time to interact with page
  setTimeout(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Load tracking scripts here when browser is idle
        const trackingScript = document.createElement('script');
        trackingScript.text = `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/Q1N5W0HL05O5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("Q1N5W0HL05O5");}();`;
        document.body.appendChild(trackingScript);
      }, { timeout: 4000 });
    } else {
      setTimeout(() => {
        // Fallback for browsers without requestIdleCallback
        const trackingScript = document.createElement('script');
        trackingScript.text = `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/Q1N5W0HL05O5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("Q1N5W0HL05O5");}();`;
        document.body.appendChild(trackingScript);
      }, 4000);
    }
  }, 2000);
};

// Run preloading early
preloadResources();

// Mount the app
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Add passive event listeners for scroll performance
// Explicitly cast document to Document type
(function(doc: Document) {
  doc.addEventListener('touchstart', () => {}, { passive: true });
  doc.addEventListener('touchmove', () => {}, { passive: true });
  doc.addEventListener('wheel', () => {}, { passive: true });
})(document as Document);

// Load non-critical resources after main content
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    loadNonCriticalCSS();
    loadDeferredScripts();
  }, { timeout: 2000 });
} else {
  // Fallback for browsers without requestIdleCallback
  // Use a properly typed window object with an IIFE
  (function(win: Window) {
    win.addEventListener('load', () => {
      setTimeout(() => {
        loadNonCriticalCSS();
        loadDeferredScripts();
      }, 200);
    });
  })(window as Window);
}
