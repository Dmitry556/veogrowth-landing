// Google Analytics 4 Setup Script
// Run this once to automatically configure your GA4 property

const { google } = require('googleapis');

// Your GA4 Property ID (replace with actual)
const PROPERTY_ID = 'properties/YOUR_GA4_PROPERTY_ID';

// Events to mark as conversions
const CONVERSION_EVENTS = [
  'book_meeting_click',
  'email_click', 
  'use_tool',
  'view_case_study',
  'generate_lead'
];

async function setupGA4Conversions() {
  try {
    // Initialize the Analytics Admin API
    const auth = new google.auth.GoogleAuth({
      keyFile: 'path/to/your/service-account-key.json', // You'd need to create this
      scopes: ['https://www.googleapis.com/auth/analytics.edit'],
    });

    const analyticsAdmin = google.analyticsadmin('v1alpha');

    console.log('🚀 Setting up GA4 conversions...');

    // Create conversion events
    for (const eventName of CONVERSION_EVENTS) {
      try {
        await analyticsAdmin.properties.conversionEvents.create({
          parent: PROPERTY_ID,
          requestBody: {
            eventName: eventName,
            custom: false
          },
          auth
        });
        console.log(`✅ Created conversion event: ${eventName}`);
      } catch (error) {
        if (error.code === 409) {
          console.log(`⚠️  Conversion event already exists: ${eventName}`);
        } else {
          console.error(`❌ Error creating ${eventName}:`, error.message);
        }
      }
    }

    console.log('🎉 GA4 setup complete!');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n💡 Manual setup instructions:');
    console.log('1. Go to Analytics → Admin → Conversions');
    console.log('2. Click "Create conversion event"');
    console.log('3. Add these events:');
    CONVERSION_EVENTS.forEach(event => console.log(`   - ${event}`));
  }
}

// Alternative: Manual setup URLs
function generateSetupUrls() {
  console.log('\n🔗 Quick Setup Links:');
  console.log('Conversions: https://analytics.google.com/analytics/web/#/admin/conversions');
  console.log('Reports: https://analytics.google.com/analytics/web/#/reports/intelligenthome');
  console.log('Dashboard: https://analytics.google.com/analytics/web/#/reports/dashboard');
}

// Run the setup
if (require.main === module) {
  console.log('📊 Veogrowth Analytics Setup');
  console.log('============================\n');
  
  // For now, just show manual setup info
  generateSetupUrls();
  
  console.log('\n📋 Conversion Events to Create:');
  CONVERSION_EVENTS.forEach((event, index) => {
    console.log(`${index + 1}. ${event}`);
  });

  console.log('\n⏱️  Manual setup time: ~5 minutes');
  console.log('🤖 Or just use GA4\'s auto-insights feature!');
}

module.exports = { setupGA4Conversions, CONVERSION_EVENTS };