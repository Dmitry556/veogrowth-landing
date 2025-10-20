
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './critical.css'

const GA_MEASUREMENT_ID = 'G-CJ84LMHNB9';
const REB2B_KEY = 'Q1N5W0HL05O5';
const VECTOR_KEY = '9c88a05f-36f8-4ddf-bda9-59ff5f2a1227';
const LEADSY_PID = '1tVPIUkQq5Ljn3MBk';
const SQUID_ID = '685159cc68deea1cd4d6e9a5';
const ALBACROSS_SITE_ID = '89547672';

type ScriptAttributes = Record<string, string | boolean>;

const ensureExternalScript = (id: string, src: string, attrs: ScriptAttributes = {}) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  if (!('async' in attrs)) {
    script.async = true;
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (value) (script as any)[key] = value;
      return;
    }
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
};

const ensureInlineScript = (id: string, content: string, parent: HTMLElement = document.head) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.type = 'text/javascript';
  script.text = content;
  parent.appendChild(script);
};

const preloadResources = () => {
  if (!import.meta.env.PROD) return;

  const resources = [
    { href: '/assets/index.css', as: 'style', rel: 'preload' as const }
  ];

  resources.forEach(({ href, as, rel }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.as = as;
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

const loadNonCriticalCSS = () => {
  if (!import.meta.env.PROD) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/index.css';
  document.head.appendChild(link);
};

const loadGoogleAnalytics = () => {
  ensureExternalScript('ga-script', `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  ensureInlineScript(
    'ga-config',
    `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}');`
  );
};

const loadLeadsyTag = () => {
  ensureExternalScript('leadsy-tag', 'https://r2.leadsy.ai/tag.js', {
    async: true,
    'data-pid': LEADSY_PID,
    'data-version': '062024'
  });
};

const loadVectorPixel = () => {
  ensureInlineScript(
    'vector-snippet',
    `!function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);vector.load('${VECTOR_KEY}');`
  );
};

const loadSquid = () => {
  if (!(window as any).$quid) {
    (window as any).$quid = {};
  }
  ensureExternalScript('squid-sdk', `https://app.asksquid.ai/tfs/${SQUID_ID}/sdk`);
};

const loadAlbacross = () => {
  ensureInlineScript('albacross-config', `window._nQc="${ALBACROSS_SITE_ID}";`);
  ensureExternalScript('albacross-script', 'https://serve.albacross.com/track.js');
};

const loadReb2b = () => {
  ensureInlineScript(
    'reb2b-snippet',
    `!function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=!0;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=!0;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/Q1N5W0HL05O5.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("${REB2B_KEY}");}();`
  );
};

const loadTrackingScripts = () => {
  loadGoogleAnalytics();
  loadLeadsyTag();
  loadVectorPixel();
  loadSquid();
  loadAlbacross();
  loadReb2b();
};

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
const scheduleDeferredWork = () => {
  const run = () => {
    loadNonCriticalCSS();
    loadTrackingScripts();
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, { timeout: 4000 });
  } else {
    setTimeout(run, 4000);
  }
};

scheduleDeferredWork();
