#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { preview } from 'vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to prerender - matching your sitemap
const routes = [
  '/',
  '/case-studies',
  '/case-studies/podcast-whales-25-meetings-6-clients',
  '/case-studies/zero-fee-payment-processor-52-meetings',
  '/case-studies/api-monitoring-platform-56-meetings',
  '/blog',
  '/blog/poke-the-bear-questions-that-get-replies',
  '/blog/competitor-lookalike-insights-using-public-data',
  '/blog/cold-email-campaign-that-actually-works',
  '/about',
  '/tech-stack',
  '/resources/true-cost-of-sdr',
  '/tools/microsoft-filter'
];

const PREVIEW_HOST = '127.0.0.1';
const PREVIEW_PORT = 4173;
const DIST_DIR = path.join(__dirname, '../dist');

async function prerenderRoutes() {
  console.log('🚀 Starting prerendering process...');
  
  const previewServer = await preview({
    preview: {
      host: PREVIEW_HOST,
      port: PREVIEW_PORT,
      open: false,
    },
  });

  const resolvedUrl = previewServer.resolvedUrls?.local?.[0] ?? `http://${PREVIEW_HOST}:${PREVIEW_PORT}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Wait for React to load
    await page.setDefaultTimeout(30000);
    
    for (const route of routes) {
      try {
        console.log(`📄 Prerendering: ${route}`);
        
        const url = `${resolvedUrl.replace(/\/$/, '')}${route}`;
        
        // Go to the page
        await page.goto(url, { 
          waitUntil: ['networkidle0', 'domcontentloaded'],
          timeout: 30000 
        });
        
        // Wait for React to render
        await page.waitForSelector('#root', { timeout: 10000 });
        
        // Wait a bit more to ensure all content is loaded
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Get the fully rendered HTML
        const html = await page.content();
        
        // Create directory structure
        const routePath = route === '/' ? '/index' : route;
        const filePath = path.join(DIST_DIR, routePath);
        
        if (routePath.includes('/')) {
          const dir = path.dirname(filePath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
        }
        
        // Save the HTML file
        const fileName = route === '/'
          ? path.join(DIST_DIR, 'index.html')
          : path.join(filePath, 'index.html');
        
        // Ensure directory exists
        const finalDir = path.dirname(fileName);
        if (!fs.existsSync(finalDir)) {
          fs.mkdirSync(finalDir, { recursive: true });
        }
        
        fs.writeFileSync(fileName, html);
        
        console.log(`✅ Successfully prerendered: ${route} -> ${fileName}`);
        
      } catch (error) {
        console.error(`❌ Failed to prerender ${route}:`, error.message);
      }
    }
  } finally {
    await browser.close();
    await previewServer.close();
    console.log('🎉 Prerendering completed!');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prerenderRoutes().catch(console.error);
}

export { prerenderRoutes };
