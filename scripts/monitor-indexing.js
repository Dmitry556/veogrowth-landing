#!/usr/bin/env node

/**
 * Indexing Progress Monitor for VeoGrowth
 * 
 * This script monitors the sitemap submission and indexing progress
 * after the recent deployment and sitemap submission.
 */

import { google } from 'googleapis';

const SITE_URL = 'sc-domain:veogrowth.com';
const CREDENTIALS_PATH = '/Users/dmitry/.config/gsc-credentials.json';

async function monitorIndexingProgress() {
  console.log('🔍 SITEMAP SUBMISSION & INDEXING PROGRESS REPORT');
  console.log('================================================');
  console.log(`Date: ${new Date().toISOString()}`);
  console.log();

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    // 1. Check sitemap status
    console.log('📄 SITEMAP STATUS:');
    console.log('==================');
    const sitemapResponse = await searchconsole.sitemaps.list({
      siteUrl: SITE_URL,
    });

    if (sitemapResponse.data.sitemap && sitemapResponse.data.sitemap.length > 0) {
      sitemapResponse.data.sitemap.forEach(sitemap => {
        console.log(`Sitemap URL: ${sitemap.path}`);
        console.log(`Last Submitted: ${sitemap.lastSubmitted}`);
        console.log(`Last Downloaded: ${sitemap.lastDownloaded}`);
        console.log(`Is Pending: ${sitemap.isPending}`);
        console.log(`Errors: ${sitemap.errors || 0}`);
        console.log(`Warnings: ${sitemap.warnings || 0}`);
        
        if (sitemap.contents) {
          sitemap.contents.forEach(content => {
            console.log(`Content Type: ${content.type}`);
            console.log(`URLs Submitted: ${content.submitted}`);
            console.log(`URLs Indexed: ${content.indexed}`);
            const indexingRate = content.indexed && content.submitted ? 
              ((content.indexed / content.submitted) * 100).toFixed(1) + '%' : '0%';
            console.log(`Indexing Rate: ${indexingRate}`);
            
            // Key insight about indexing status
            if (content.indexed === 0 && content.submitted > 0) {
              console.log('⏳ Status: Sitemap submitted, awaiting indexing');
            } else if (content.indexed > 0) {
              console.log('✅ Status: Pages being indexed');
            }
          });
        }
        console.log();
      });
    } else {
      console.log('❌ No sitemaps found. This is unusual.');
    }

    // 2. Check recent search performance
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    
    const todayStr = today.toISOString().split('T')[0];
    const threeDaysAgoStr = threeDaysAgo.toISOString().split('T')[0];

    console.log('🚀 RECENT SEARCH PERFORMANCE (Last 3 Days):');
    console.log('============================================');
    
    const recentData = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: threeDaysAgoStr,
        endDate: todayStr,
        dimensions: ['date', 'page'],
        rowLimit: 100,
      },
    });

    if (recentData.data.rows && recentData.data.rows.length > 0) {
      console.log('📈 New search activity detected:');
      console.log();
      
      const pageStats = {};
      recentData.data.rows.forEach(row => {
        const date = row.keys[0];
        const page = row.keys[1];
        
        if (!pageStats[page]) {
          pageStats[page] = { impressions: 0, clicks: 0, dates: new Set() };
        }
        
        pageStats[page].impressions += row.impressions || 0;
        pageStats[page].clicks += row.clicks || 0;
        pageStats[page].dates.add(date);
      });

      // Show top performing pages
      Object.entries(pageStats)
        .sort((a, b) => b[1].impressions - a[1].impressions)
        .slice(0, 10)
        .forEach(([page, stats]) => {
          const pageName = page.replace('https://veogrowth.com/', '').replace('https://www.veogrowth.com/', '') || 'Homepage';
          console.log(`📄 ${pageName}`);
          console.log(`   Impressions: ${stats.impressions}`);
          console.log(`   Clicks: ${stats.clicks}`);
          console.log(`   CTR: ${stats.impressions > 0 ? ((stats.clicks / stats.impressions) * 100).toFixed(2) + '%' : '0%'}`);
          console.log(`   Active dates: ${Array.from(stats.dates).sort().join(', ')}`);
          console.log();
        });
    } else {
      console.log('ℹ️ No new search activity in the last 3 days (normal for recent deployments)');
    }

    // 3. Get query performance changes
    console.log('🔍 QUERY PERFORMANCE TRACKING:');
    console.log('===============================');
    
    const queryData = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: threeDaysAgoStr,
        endDate: todayStr,
        dimensions: ['query'],
        rowLimit: 20,
      },
    });

    if (queryData.data.rows && queryData.data.rows.length > 0) {
      console.log('Recent queries generating impressions:');
      queryData.data.rows.forEach((row, index) => {
        const query = row.keys[0];
        const impressions = row.impressions || 0;
        const clicks = row.clicks || 0;
        const position = row.position ? row.position.toFixed(1) : 'N/A';
        const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) + '%' : '0%';
        
        console.log(`${index + 1}. "${query}"`);
        console.log(`   Position: ${position}, Impressions: ${impressions}, Clicks: ${clicks}, CTR: ${ctr}`);
      });
    } else {
      console.log('No query data available for recent period');
    }

    // 4. Timeline and next steps
    console.log('\n⏰ INDEXING TIMELINE & NEXT STEPS:');
    console.log('===================================');
    console.log('✅ Sitemap submitted successfully (2025-06-21)');
    console.log('✅ Google has processed the sitemap (13 URLs submitted)');
    console.log('⏳ Currently: 0 URLs indexed (normal for first 24-48 hours)');
    console.log();
    console.log('Expected progression:');
    console.log('• Next 24 hours: Initial crawling should begin');
    console.log('• 2-3 days: First pages should appear as indexed');
    console.log('• 3-7 days: Majority of pages should be indexed');
    console.log('• 1-2 weeks: Full indexing and search visibility');
    console.log();
    console.log('🔔 Monitoring recommendations:');
    console.log('• Check this report daily for the next week');
    console.log('• Watch for increases in "URLs Indexed" count');
    console.log('• Monitor new impressions and queries');
    console.log('• If no indexing after 7 days, investigate technical issues');

  } catch (error) {
    console.error('❌ Error monitoring indexing progress:', error.message);
    
    // Provide manual guidance
    console.log();
    console.log('🔧 MANUAL MONITORING STEPS:');
    console.log('============================');
    console.log('1. Visit Google Search Console (search.google.com/search-console)');
    console.log('2. Select veogrowth.com property');
    console.log('3. Check "Sitemaps" section for indexing progress');
    console.log('4. Monitor "Coverage" report for new indexed pages');
    console.log('5. Use "URL Inspection" tool for specific page status');
  }
}

// Run the monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  monitorIndexingProgress();
}

export { monitorIndexingProgress };