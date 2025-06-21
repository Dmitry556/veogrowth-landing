#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚨 EMERGENCY SEO DEPLOYMENT SCRIPT');
console.log('==================================');

function runCommand(command, description) {
  console.log(`\n📦 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: __dirname + '/..' });
    console.log(`✅ ${description} completed successfully`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

function createEmergencyBuild() {
  console.log('\n🔥 STARTING EMERGENCY BUILD PROCESS');
  
  // Step 1: Build the application
  runCommand('npm run build', 'Building application');
  
  // Step 2: Create basic HTML files manually for immediate deployment
  console.log('\n📄 Creating static HTML pages for immediate deployment...');
  
  const distDir = path.join(__dirname, '../dist');
  const routes = [
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
  
  // Read the base index.html
  const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  
  // Create directories and files for each route
  routes.forEach(route => {
    const routePath = path.join(distDir, route);
    
    // Create directory
    if (!fs.existsSync(routePath)) {
      fs.mkdirSync(routePath, { recursive: true });
    }
    
    // Write index.html file
    fs.writeFileSync(path.join(routePath, 'index.html'), baseHtml);
    console.log(`✅ Created: ${route}/index.html`);
  });
  
  console.log('\n✅ Static HTML files created successfully!');
  
  // Step 3: Verify critical files exist
  console.log('\n🔍 Verifying deployment files...');
  
  const criticalFiles = [
    'index.html',
    'sitemap.xml',
    'robots.txt',
    '_redirects'
  ];
  
  criticalFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.error(`❌ ${file} missing!`);
    }
  });
  
  console.log('\n🎉 EMERGENCY BUILD COMPLETED!');
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Deploy the /dist folder to your hosting provider');
  console.log('2. Submit updated sitemap to Google Search Console');
  console.log('3. Request re-indexing of critical pages');
  console.log('4. Monitor Google Search Console for crawl errors');
  console.log('\n⚡ This should resolve the 0 indexed pages issue within 24-48 hours');
}

// Run the emergency build
createEmergencyBuild();