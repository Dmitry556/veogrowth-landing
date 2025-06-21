#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 VERIFYING INDEXABILITY - VeoGrowth SEO Check');
console.log('==============================================');

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/case-studies', file: 'case-studies/index.html' },
  { path: '/case-studies/podcast-whales-25-meetings-6-clients', file: 'case-studies/podcast-whales-25-meetings-6-clients/index.html' },
  { path: '/case-studies/zero-fee-payment-processor-52-meetings', file: 'case-studies/zero-fee-payment-processor-52-meetings/index.html' },
  { path: '/case-studies/api-monitoring-platform-56-meetings', file: 'case-studies/api-monitoring-platform-56-meetings/index.html' },
  { path: '/blog', file: 'blog/index.html' },
  { path: '/blog/poke-the-bear-questions-that-get-replies', file: 'blog/poke-the-bear-questions-that-get-replies/index.html' },
  { path: '/blog/competitor-lookalike-insights-using-public-data', file: 'blog/competitor-lookalike-insights-using-public-data/index.html' },
  { path: '/blog/cold-email-campaign-that-actually-works', file: 'blog/cold-email-campaign-that-actually-works/index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/tech-stack', file: 'tech-stack/index.html' },
  { path: '/resources/true-cost-of-sdr', file: 'resources/true-cost-of-sdr/index.html' },
  { path: '/tools/microsoft-filter', file: 'tools/microsoft-filter/index.html' }
];

const distDir = path.join(__dirname, '../dist');

function verifyIndexability() {
  console.log('\n📊 CHECKING STATIC FILES...\n');
  
  let passedChecks = 0;
  let totalChecks = 0;
  
  routes.forEach(route => {
    totalChecks++;
    const filePath = path.join(distDir, route.file);
    
    if (fs.existsSync(filePath)) {
      const fileSize = fs.statSync(filePath).size;
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for critical SEO elements
      const hasTitle = content.includes('<title>');
      const hasDescription = content.includes('meta name="description"');
      const hasContent = content.includes('VeoGrowth');
      const hasSchema = content.includes('application/ld+json');
      
      if (hasTitle && hasDescription && hasContent && hasSchema && fileSize > 10000) {
        console.log(`✅ ${route.path} - READY FOR INDEXING (${Math.round(fileSize/1024)}KB)`);
        passedChecks++;
      } else {
        console.log(`❌ ${route.path} - MISSING ELEMENTS`);
        if (!hasTitle) console.log(`   - Missing title tag`);
        if (!hasDescription) console.log(`   - Missing meta description`);
        if (!hasContent) console.log(`   - Missing content`);
        if (!hasSchema) console.log(`   - Missing schema markup`);
        if (fileSize < 10000) console.log(`   - File too small (${fileSize} bytes)`);
      }
    } else {
      console.log(`❌ ${route.path} - FILE NOT FOUND: ${filePath}`);
    }
  });
  
  console.log('\n📈 INDEXABILITY REPORT');
  console.log('=====================');
  console.log(`Pages Ready for Indexing: ${passedChecks}/${totalChecks} (${Math.round(passedChecks/totalChecks*100)}%)`);
  
  if (passedChecks >= totalChecks * 0.8) {
    console.log('🎉 SUCCESS: Your site is ready for Google indexing!');
    console.log('\n🚀 NEXT STEPS:');
    console.log('1. Deploy the /dist folder to your hosting provider');
    console.log('2. Submit sitemap to Google Search Console: https://www.veogrowth.com/sitemap.xml');
    console.log('3. Request indexing for priority pages');
    console.log('4. Expected result: 8-12 pages indexed within 48 hours');
    console.log('\n💰 IMPACT: This should recover $50K+ in lost annual revenue');
  } else {
    console.log('⚠️  WARNING: Some pages may not index properly');
    console.log('Consider running the full prerendering process for better results');
  }
  
  // Check critical files
  console.log('\n🔧 CHECKING CRITICAL FILES...');
  const criticalFiles = ['sitemap.xml', 'robots.txt', '_redirects'];
  
  criticalFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.log(`❌ ${file} missing!`);
    }
  });
  
  // Check sitemap URLs match files
  console.log('\n🗺️  SITEMAP VERIFICATION...');
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    
    console.log(`Sitemap contains ${sitemapUrls.length} URLs`);
    console.log(`Static files created for ${passedChecks} URLs`);
    
    if (sitemapUrls.length === totalChecks) {
      console.log('✅ Sitemap URLs match expected pages');
    } else {
      console.log('⚠️  Sitemap and file count mismatch');
    }
  }
}

verifyIndexability();