# Google Search Console MCP Server Setup

## Overview
Successfully configured Google Search Console MCP server to analyze VeoGrowth website data.

## Configuration Details

### 1. Credentials Location
- **File**: `/Users/dmitry/.config/gsc-credentials.json`
- **Permissions**: 600 (secure access)
- **Service Account**: `veogrowth-gsc-access@gen-lang-client-0208819761.iam.gserviceaccount.com`

### 2. MCP Server Configuration
- **Location**: `/Users/dmitry/Library/Application Support/Claude/claude_desktop_config.json`
- **Package**: `mcp-search-console` (v1.0.2)
- **Environment Variable**: `GOOGLE_APPLICATION_CREDENTIALS`

### 3. VeoGrowth Property Details
- **Property URL**: `sc-domain:veogrowth.com` (Domain property)
- **Access Status**: ✅ Verified and accessible
- **Data Available**: Search analytics, queries, impressions, clicks, CTR, positions

## Recent Search Performance Sample
Based on last 30 days:
- **"veogrowth"**: 5 impressions, position 1.0
- **"sdr costs"**: 12 impressions, position 76.75  
- **"veo sales"**: 1 impression, position 55.0

## Next Steps

### To Use the MCP Server:
1. **Restart Claude Desktop** to load the new MCP server
2. The server will be available as `google-search-console` in your MCP tools
3. You can now query search analytics data directly through Claude

### Available Data Types:
- Search queries and their performance
- Page performance metrics
- Click-through rates and positions
- Impressions and clicks data
- Site indexing status
- Core Web Vitals (if available)

### Common Analysis Queries:
- Top performing keywords
- Pages with declining performance
- Opportunities for CTR improvement
- Search visibility trends
- Technical SEO issues

## Security Notes
- Credentials are stored securely with restricted permissions
- Service account has read-only access to Search Console data
- All data access is logged and auditable

## Support
If you encounter any issues:
1. Check that Claude Desktop has been restarted
2. Verify credentials file permissions remain at 600
3. Ensure the service account still has access to the Search Console property

---
*Setup completed on 2025-06-21*