# Web Vitals Monitoring

This implementation provides comprehensive Web Vitals monitoring for the Veogrowth website.

## Features

- **Real-time monitoring** of all Core Web Vitals metrics:
  - Cumulative Layout Shift (CLS)
  - First Input Delay (FID)
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Time to First Byte (TTFB)
  - Interaction to Next Paint (INP)

- **Analytics integration** with Google Analytics
- **Custom reporting endpoint** support
- **Local storage** for debugging and analysis
- **Performance dashboard** with real-time metrics
- **Performance reports** with recommendations

## Components

### WebVitals.tsx
Main monitoring component that tracks Web Vitals metrics and reports them to various analytics services.

### PerformanceDashboard.tsx
Floating dashboard that displays real-time metrics during development and when `?debug=true` is in the URL.

### PerformanceReport.tsx
Comprehensive performance report page available at `/admin/performance` with:
- Overall performance score
- Detailed metrics breakdown
- Recommendations for improvements
- Export functionality

## Usage

The Web Vitals monitoring is automatically enabled when the app loads. In development mode, you'll see debug information in the console and can access the floating dashboard.

### Accessing the Dashboard
- Development: Always visible as floating button
- Production: Add `?debug=true` to URL to show dashboard

### Accessing the Report
Visit `/admin/performance` to see a comprehensive performance report.

## Configuration

The monitoring can be configured in App.tsx:

```tsx
<WebVitals 
  enabled={true}
  debug={process.env.NODE_ENV === 'development'}
  analyticsId={import.meta.env.VITE_GA_MEASUREMENT_ID}
  reportEndpoint="https://your-analytics-endpoint.com/metrics"
/>
```

## Data Storage

- Metrics are stored in localStorage for debugging
- Up to 100 most recent metrics are kept
- Data includes device and connection information
- All PII is excluded from collection

## Performance Thresholds

Metrics are rated according to Google's recommendations:
- **Good**: Green (recommended values)
- **Needs Improvement**: Yellow (acceptable but could be better)
- **Poor**: Red (needs immediate attention)

## Analytics Integration

- Automatic Google Analytics reporting (if GA is configured)
- Custom endpoint reporting for advanced analytics
- Structured data format for easy analysis