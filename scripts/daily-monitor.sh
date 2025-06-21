#!/bin/bash

# Daily Indexing Progress Monitor for VeoGrowth
# Usage: ./scripts/daily-monitor.sh

echo "🚀 VeoGrowth Daily SEO Monitor - $(date)"
echo "========================================"
echo

# Run the indexing progress check
echo "📊 Running indexing progress check..."
node scripts/monitor-indexing.js

echo
echo "📈 Quick Analytics Summary:"
echo "---------------------------"

# Run a quick search console analysis
node scripts/analyze-search-console.js | grep -E "(Total Clicks|Total Impressions|Average CTR|URLs Indexed|indexed)"

echo
echo "🔔 Daily Monitoring Complete!"
echo "💡 Tip: Run this script daily for the next week to track indexing progress"
echo "📁 Full reports saved to: ./reports/"
echo