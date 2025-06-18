import React from 'react';
import type { Metadata } from 'next';
import { Inter, Raleway, Lato } from 'next/font/google';
import './globals.css';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import SchemaMarkup from '@/components/schema/SchemaMarkup';
import WebVitals from '@/components/performance/WebVitals';
import PerformanceDashboard from '@/components/performance/PerformanceDashboard';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.veogrowth.com'),
  title: {
    default: 'VeoGrowth - 30+ Qualified B2B Meetings Monthly | Pay Per Meeting',
    template: '%s | VeoGrowth',
  },
  description: 'VeoGrowth generates 30+ qualified B2B meetings monthly using AI-powered cold email campaigns. Pay only for meetings that show up. $8M+ pipeline generated. No retainers, no contracts.',
  keywords: ['B2B lead generation', 'cold email', 'sales meetings', 'AI-powered outreach', 'qualified leads'],
  authors: [{ name: 'VeoGrowth Team' }],
  creator: 'VeoGrowth',
  publisher: 'VeoGrowth',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.veogrowth.com',
    siteName: 'VeoGrowth',
    title: 'VeoGrowth - 30+ Qualified B2B Meetings Monthly | Pay Per Meeting',
    description: 'VeoGrowth generates 30+ qualified B2B meetings monthly using AI-powered cold email campaigns. Pay only for meetings that show up.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VeoGrowth - B2B Lead Generation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veogrowth',
    creator: '@veogrowth',
    title: 'VeoGrowth - 30+ Qualified B2B Meetings Monthly',
    description: 'Pay only for qualified meetings that show up. $8M+ pipeline generated.',
    images: ['/og-image.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://www.veogrowth.com',
  },
};

// Create a client component for providers that need client-side state
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 60000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
          <WebVitals 
            enabled={true}
            debug={process.env.NODE_ENV === 'development'}
            analyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
          <PerformanceDashboard />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} ${lato.variable}`}>
      <head>
        <SchemaMarkup />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
        }} />
        
        {/* Visitor ID tracking scripts */}
        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="1tVPIUkQq5Ljn3MBk" data-version="062024"></script>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
            vector.load("9c88a05f-36f8-4ddf-bda9-59ff5f2a1227");
          `,
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            ;(function(squid){
              (window.$quid) || (window.$quid = {});
              document.head.appendChild((function(s){ s.src='https://app.asksquid.ai/tfs/'+squid+'/sdk';s.async=1; return s; })(document.createElement('script')));
            })('685159cc68deea1cd4d6e9a5');
          `,
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `window._nQc="89547672";`,
        }} />
        <script async src="https://serve.albacross.com/track.js"></script>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                  !function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/Q1N5W0HL05O5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("Q1N5W0HL05O5");}();
                }, { timeout: 4000 });
              } else {
                setTimeout(function() {
                  !function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/Q1N5W0HL05O5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("Q1N5W0HL05O5");}();
                }, 3000);
              }
            });
          `,
        }} />
      </head>
      <body className="min-h-screen bg-gray-900 text-white font-inter">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}