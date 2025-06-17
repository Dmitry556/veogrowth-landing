import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';
import PerformanceAnalytics from '@/utils/performance';

interface WebVitalsConfig {
  enabled?: boolean;
  debug?: boolean;
  analyticsId?: string;
  reportEndpoint?: string;
}

interface VitalScore {
  good: number;
  needsImprovement: number;
}

// Thresholds for Web Vitals scoring
const VITALS_THRESHOLDS: Record<string, VitalScore> = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
  INP: { good: 200, needsImprovement: 500 },
};

// Get score rating based on metric value
const getScoreRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = VITALS_THRESHOLDS[name];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};

// Format metric value for display
const formatMetricValue = (name: string, value: number): string => {
  switch (name) {
    case 'CLS':
      return value.toFixed(3);
    case 'FCP':
    case 'LCP':
    case 'TTFB':
    case 'INP':
      return `${Math.round(value)}ms`;
    default:
      return value.toString();
  }
};

// Report metric to analytics
const reportToAnalytics = (metric: Metric, config: WebVitalsConfig) => {
  const rating = getScoreRating(metric.name, metric.value);
  const formattedValue = formatMetricValue(metric.name, metric.value);
  
  if (config.debug) {
    console.group(`🚀 Web Vital: ${metric.name}`);
    console.log(`Value: ${formattedValue}`);
    console.log(`Rating: ${rating}`);
    console.log(`ID: ${metric.id}`);
    console.log(`Delta: ${metric.delta}`);
    console.log(`Entries:`, metric.entries);
    console.groupEnd();
  }

  // Send to Google Analytics if available
  if (typeof gtag !== 'undefined' && config.analyticsId) {
    gtag('event', metric.name, {
      custom_map: { metric_value: 'custom_metric_value' },
      custom_metric_value: metric.value,
      metric_rating: rating,
      metric_id: metric.id,
      metric_delta: metric.delta,
    });
  }

  // Send to custom endpoint if provided
  if (config.reportEndpoint) {
    fetch(config.reportEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating,
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch((error) => {
      if (config.debug) {
        console.error('Failed to report Web Vital:', error);
      }
    });
  }

  // Store in localStorage for debugging
  if (config.debug) {
    const vitalsData = JSON.parse(localStorage.getItem('webVitals') || '[]');
    vitalsData.push({
      name: metric.name,
      value: metric.value,
      rating,
      formattedValue,
      timestamp: Date.now(),
      url: window.location.href,
    });
    localStorage.setItem('webVitals', JSON.stringify(vitalsData.slice(-50))); // Keep last 50 metrics
  }
};

// Web Vitals monitoring hook
export const useWebVitals = (config: WebVitalsConfig = {}) => {
  useEffect(() => {
    if (!config.enabled) return;

    // Initialize analytics service
    const analytics = PerformanceAnalytics.getInstance({
      debug: config.debug,
      analyticsId: config.analyticsId,
      reportEndpoint: config.reportEndpoint,
    });

    const reportMetric = (metric: Metric) => {
      analytics.reportMetric(metric);
    };

    // Monitor all Core Web Vitals and additional metrics
    onCLS(reportMetric);
    onFCP(reportMetric);
    onLCP(reportMetric);
    onTTFB(reportMetric);
    onINP(reportMetric);

    if (config.debug) {
      console.log('🚀 Web Vitals monitoring started');
    }
  }, [config]);
};

// React component for Web Vitals monitoring
interface WebVitalsProps extends WebVitalsConfig {}

const WebVitals: React.FC<WebVitalsProps> = (props) => {
  useWebVitals(props);
  return null; // This component doesn't render anything
};

// Utility function to get current vitals from localStorage
export const getStoredVitals = () => {
  try {
    return JSON.parse(localStorage.getItem('webVitals') || '[]');
  } catch {
    return [];
  }
};

// Utility function to clear stored vitals
export const clearStoredVitals = () => {
  localStorage.removeItem('webVitals');
};

// Performance score calculator
export const calculatePerformanceScore = (vitals: any[]) => {
  if (vitals.length === 0) return 0;

  const scores = vitals.map(vital => {
    switch (vital.rating) {
      case 'good': return 100;
      case 'needs-improvement': return 70;
      case 'poor': return 30;
      default: return 0;
    }
  });

  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
};

// Global declaration for gtag
declare global {
  function gtag(...args: any[]): void;
}

export default WebVitals;