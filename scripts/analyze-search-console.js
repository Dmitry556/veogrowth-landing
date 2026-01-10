#!/usr/bin/env node

/**
 * Google Search Console Analytics Script for Veogrowth
 * 
 * This script uses the Google Search Console API to pull detailed analytics
 * and diagnose SEO issues for the Veogrowth website.
 * 
 * Requirements:
 * - Google Search Console API credentials
 * - Node.js with googleapis package
 * 
 * Usage: node scripts/analyze-search-console.js
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - Try domain property format
const SITE_URL = 'sc-domain:veogrowth.com';
const CREDENTIALS_PATH = '/Users/dmitry/.config/gsc-credentials.json';
const REPORT_PATH = path.join(__dirname, '../reports/search-console-analysis.json');

// Date range for analysis (last 30 days)
const END_DATE = '2025-06-23';
const START_DATE = '2025-05-24';

async function analyzeSearchConsole() {
  try {
    console.log('🔍 Starting Google Search Console Analysis for Veogrowth...');
    
    // Initialize Google API client
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    // 1. Get search analytics data with all requested dimensions
    console.log('📊 Fetching search analytics data...');
    const analyticsResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: START_DATE,
        endDate: END_DATE,
        dimensions: ['query', 'page', 'country', 'device'],
        rowLimit: 1000,
        startRow: 0,
      },
    });

    // 2. Get top queries
    console.log('🔍 Fetching top performing queries...');
    const topQueriesResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: START_DATE,
        endDate: END_DATE,
        dimensions: ['query'],
        rowLimit: 100,
        startRow: 0,
      },
    });

    // 3. Get top pages
    console.log('📄 Fetching top performing pages...');
    const topPagesResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: START_DATE,
        endDate: END_DATE,
        dimensions: ['page'],
        rowLimit: 100,
        startRow: 0,
      },
    });

    // 4. Get device breakdown
    console.log('📱 Fetching device performance...');
    const deviceResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: START_DATE,
        endDate: END_DATE,
        dimensions: ['device'],
        rowLimit: 10,
        startRow: 0,
      },
    });

    // 5. Get country breakdown
    console.log('🌍 Fetching country performance...');
    const countryResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: START_DATE,
        endDate: END_DATE,
        dimensions: ['country'],
        rowLimit: 50,
        startRow: 0,
      },
    });

    // 6. Get site indexing status
    console.log('🔍 Checking site indexing status...');
    let indexingStatus = null;
    try {
      const sitemapResponse = await searchconsole.sitemaps.list({
        siteUrl: SITE_URL,
      });
      indexingStatus = sitemapResponse.data;
    } catch (error) {
      console.warn('⚠️ Could not fetch sitemap status:', error.message);
    }

    // Compile the analysis
    const analysis = {
      metadata: {
        siteUrl: SITE_URL,
        startDate: START_DATE,
        endDate: END_DATE,
        generatedAt: new Date().toISOString(),
      },
      summary: {
        totalClicks: analyticsResponse.data.rows?.reduce((sum, row) => sum + (row.clicks || 0), 0) || 0,
        totalImpressions: analyticsResponse.data.rows?.reduce((sum, row) => sum + (row.impressions || 0), 0) || 0,
        totalQueries: topQueriesResponse.data.rows?.length || 0,
        totalPages: topPagesResponse.data.rows?.length || 0,
      },
      detailedAnalytics: analyticsResponse.data.rows || [],
      topQueries: topQueriesResponse.data.rows || [],
      topPages: topPagesResponse.data.rows || [],
      deviceBreakdown: deviceResponse.data.rows || [],
      countryBreakdown: countryResponse.data.rows || [],
      indexingStatus: indexingStatus,
    };

    // Calculate additional insights
    const avgCTR = analysis.summary.totalImpressions > 0 
      ? ((analysis.summary.totalClicks / analysis.summary.totalImpressions) * 100).toFixed(2)
      : 0;

    const avgPosition = analyticsResponse.data.rows?.length > 0
      ? (analyticsResponse.data.rows.reduce((sum, row) => sum + (row.position || 0), 0) / analyticsResponse.data.rows.length).toFixed(2)
      : 0;

    analysis.insights = {
      averageCTR: `${avgCTR}%`,
      averagePosition: avgPosition,
      topPerformingQuery: topQueriesResponse.data.rows?.[0]?.keys?.[0] || 'No data',
      topPerformingPage: topPagesResponse.data.rows?.[0]?.keys?.[0] || 'No data',
      primaryDevice: deviceResponse.data.rows?.[0]?.keys?.[0] || 'No data',
      primaryCountry: countryResponse.data.rows?.[0]?.keys?.[0] || 'No data',
    };

    // Save the report
    const reportsDir = path.dirname(REPORT_PATH);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(REPORT_PATH, JSON.stringify(analysis, null, 2));
    
    // Display summary
    console.log('\n📈 SEARCH CONSOLE ANALYSIS SUMMARY');
    console.log('=====================================');
    console.log(`📊 Total Clicks: ${analysis.summary.totalClicks}`);
    console.log(`👁️  Total Impressions: ${analysis.summary.totalImpressions}`);
    console.log(`🎯 Average CTR: ${analysis.insights.averageCTR}`);
    console.log(`📍 Average Position: ${analysis.insights.averagePosition}`);
    console.log(`🔍 Total Queries: ${analysis.summary.totalQueries}`);
    console.log(`📄 Total Pages: ${analysis.summary.totalPages}`);
    console.log(`🏆 Top Query: ${analysis.insights.topPerformingQuery}`);
    console.log(`📱 Primary Device: ${analysis.insights.primaryDevice}`);
    console.log(`🌍 Primary Country: ${analysis.insights.primaryCountry}`);
    
    console.log('\n🔍 POTENTIAL ISSUES IDENTIFIED:');
    console.log('================================');
    
    if (analysis.summary.totalClicks < 100) {
      console.log('❌ Very low click volume (< 100 clicks in 30 days)');
    }
    
    if (parseFloat(avgCTR) < 2) {
      console.log('❌ Low click-through rate (< 2%)');
    }
    
    if (parseFloat(avgPosition) > 20) {
      console.log('❌ Poor average search position (> 20)');
    }
    
    if (analysis.summary.totalQueries < 50) {
      console.log('❌ Limited query diversity (< 50 unique queries)');
    }
    
    console.log(`\n💾 Full report saved to: ${REPORT_PATH}`);
    
  } catch (error) {
    console.error('❌ Error analyzing Search Console data:', error);
    
    // Check for common issues
    if (error.message.includes('credentials')) {
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('- Ensure credentials file exists at:', CREDENTIALS_PATH);
      console.log('- Verify service account has Search Console access');
      console.log('- Check that the site is properly verified in GSC');
    }
    
    if (error.message.includes('permission')) {
      console.log('\n🔧 PERMISSION ISSUE:');
      console.log('- Verify the service account has access to the Search Console property');
      console.log('- Check that the site URL is correct:', SITE_URL);
    }
  }
}

// Create a backup manual analysis based on the GSC_MCP_SETUP.md data
function createManualAnalysis() {
  console.log('\n📋 MANUAL ANALYSIS BASED ON SETUP DATA');
  console.log('======================================');
  
  const manualData = {
    knownQueries: [
      { query: 'veogrowth', impressions: 5, position: 1.0 },
      { query: 'sdr costs', impressions: 12, position: 76.75 },
      { query: 'veo sales', impressions: 1, position: 55.0 }
    ],
    totalImpressions: 18,
    estimatedClicks: 1, // Based on position 1 for "veogrowth"
    issues: [
      'Very low search volume (only 18 impressions in sample)',
      'Poor positions for commercial keywords (76.75 for "sdr costs")',
      'Limited brand awareness (only 5 impressions for brand term)',
      'Missing content for relevant B2B keywords',
      'Potential indexing issues (27 pages not indexed as mentioned)'
    ]
  };
  
  console.log('🔍 Known Query Performance:');
  manualData.knownQueries.forEach(q => {
    console.log(`  - "${q.query}": ${q.impressions} impressions, position ${q.position}`);
  });
  
  console.log('\n❌ Critical Issues Identified:');
  manualData.issues.forEach(issue => {
    console.log(`  - ${issue}`);
  });
  
  console.log('\n💡 Recommended Actions:');
  console.log('  1. Conduct keyword research for B2B lead generation terms');
  console.log('  2. Create content targeting "SDR costs", "cold email", "B2B meetings"');
  console.log('  3. Fix indexing issues for 27 pages');
  console.log('  4. Improve internal linking structure');
  console.log('  5. Add more location-specific content');
  console.log('  6. Optimize for "lead generation" and "sales development" keywords');
  
  return manualData;
}

// Run the analysis
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Starting Veogrowth Search Console Analysis...\n');
  
  // First try the API approach
  analyzeSearchConsole().catch(error => {
    console.log('\n⚠️ API analysis failed, providing manual analysis instead...\n');
    createManualAnalysis();
  });
}

export { analyzeSearchConsole, createManualAnalysis };