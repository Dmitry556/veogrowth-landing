/**
 * Performance utilities and analytics
 */

import type { Metric } from 'web-vitals';

// Performance thresholds based on Google's recommendations
export const PERFORMANCE_THRESHOLDS = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FID: { good: 100, needsImprovement: 300 },
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
  INP: { good: 200, needsImprovement: 500 },
} as const;

export type PerformanceRating = 'good' | 'needs-improvement' | 'poor';

/**
 * Get performance rating for a metric
 */
export const getPerformanceRating = (metricName: string, value: number): PerformanceRating => {
  const threshold = PERFORMANCE_THRESHOLDS[metricName as keyof typeof PERFORMANCE_THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};

/**
 * Format metric value for display
 */
export const formatMetricValue = (metricName: string, value: number): string => {
  switch (metricName) {
    case 'CLS':
      return value.toFixed(3);
    case 'FID':
    case 'FCP':
    case 'LCP':
    case 'TTFB':
    case 'INP':
      return `${Math.round(value)}ms`;
    default:
      return value.toString();
  }
};

/**
 * Calculate overall performance score
 */
export const calculatePerformanceScore = (metrics: Array<{ name: string; value: number }>): number => {
  if (metrics.length === 0) return 0;

  const scores = metrics.map(metric => {
    const rating = getPerformanceRating(metric.name, metric.value);
    switch (rating) {
      case 'good': return 100;
      case 'needs-improvement': return 70;
      case 'poor': return 30;
      default: return 0;
    }
  });

  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
};

/**
 * Performance analytics service
 */
export class PerformanceAnalytics {
  private static instance: PerformanceAnalytics;
  private debug: boolean;
  private analyticsId?: string;
  private reportEndpoint?: string;

  constructor(config: {
    debug?: boolean;
    analyticsId?: string;
    reportEndpoint?: string;
  } = {}) {
    this.debug = config.debug || false;
    this.analyticsId = config.analyticsId;
    this.reportEndpoint = config.reportEndpoint;
  }

  static getInstance(config?: any): PerformanceAnalytics {
    if (!PerformanceAnalytics.instance) {
      PerformanceAnalytics.instance = new PerformanceAnalytics(config);
    }
    return PerformanceAnalytics.instance;
  }

  /**
   * Report a Web Vital metric
   */
  async reportMetric(metric: Metric): Promise<void> {
    const rating = getPerformanceRating(metric.name, metric.value);
    const formattedValue = formatMetricValue(metric.name, metric.value);
    
    const payload = {
      name: metric.name,
      value: metric.value,
      rating,
      formattedValue,
      id: metric.id,
      delta: metric.delta,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType(),
      deviceMemory: this.getDeviceMemory(),
      isVisible: !document.hidden,
    };

    if (this.debug) {
      console.group(`🚀 Web Vital: ${metric.name}`);
      console.log(`Value: ${formattedValue}`);
      console.log(`Rating: ${rating}`);
      console.log(`ID: ${metric.id}`);
      console.log(`Delta: ${metric.delta}`);
      console.log(`Entries:`, metric.entries);
      console.groupEnd();
    }

    // Report to Google Analytics
    this.reportToGoogleAnalytics(payload);

    // Report to custom endpoint
    await this.reportToCustomEndpoint(payload);

    // Store locally for debugging
    if (this.debug) {
      this.storeLocally(payload);
    }
  }

  /**
   * Report to Google Analytics
   */
  private reportToGoogleAnalytics(payload: any): void {
    if (typeof gtag !== 'undefined' && this.analyticsId) {
      gtag('event', 'web_vitals', {
        custom_map: { 
          metric_name: 'custom_metric_name',
          metric_value: 'custom_metric_value',
          metric_rating: 'custom_metric_rating'
        },
        custom_metric_name: payload.name,
        custom_metric_value: payload.value,
        custom_metric_rating: payload.rating,
        value: Math.round(payload.value),
      });
    }
  }

  /**
   * Report to custom analytics endpoint
   */
  private async reportToCustomEndpoint(payload: any): Promise<void> {
    if (!this.reportEndpoint) return;

    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        keepalive: true, // Ensure the request completes even if the page is unloaded
      });
    } catch (error) {
      if (this.debug) {
        console.error('Failed to report Web Vital to custom endpoint:', error);
      }
    }
  }

  /**
   * Store metric locally for debugging
   */
  private storeLocally(payload: any): void {
    try {
      const vitalsData = JSON.parse(localStorage.getItem('webVitals') || '[]');
      vitalsData.push(payload);
      localStorage.setItem('webVitals', JSON.stringify(vitalsData.slice(-100))); // Keep last 100 metrics
    } catch (error) {
      if (this.debug) {
        console.error('Failed to store Web Vital locally:', error);
      }
    }
  }

  /**
   * Get connection type if available
   */
  private getConnectionType(): string {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    return connection?.effectiveType || 'unknown';
  }

  /**
   * Get device memory if available
   */
  private getDeviceMemory(): number {
    return (navigator as any).deviceMemory || 0;
  }

  /**
   * Generate performance report
   */
  generateReport(): any {
    try {
      const vitals = JSON.parse(localStorage.getItem('webVitals') || '[]');
      const latestMetrics = this.getLatestMetrics(vitals);
      const score = calculatePerformanceScore(latestMetrics);
      
      return {
        score,
        metrics: latestMetrics,
        timestamp: Date.now(),
        url: window.location.href,
        summary: this.generateSummary(latestMetrics),
      };
    } catch {
      return null;
    }
  }

  /**
   * Get latest metrics (one per type)
   */
  private getLatestMetrics(vitals: any[]): any[] {
    const latest: Record<string, any> = {};
    vitals.forEach(vital => {
      if (!latest[vital.name] || vital.timestamp > latest[vital.name].timestamp) {
        latest[vital.name] = vital;
      }
    });
    return Object.values(latest);
  }

  /**
   * Generate performance summary
   */
  private generateSummary(metrics: any[]): any {
    const summary = {
      good: 0,
      needsImprovement: 0,
      poor: 0,
      total: metrics.length,
    };

    metrics.forEach(metric => {
      switch (metric.rating) {
        case 'good':
          summary.good++;
          break;
        case 'needs-improvement':
          summary.needsImprovement++;
          break;
        case 'poor':
          summary.poor++;
          break;
      }
    });

    return summary;
  }
}

// Global declaration for gtag
declare global {
  function gtag(...args: any[]): void;
}

export default PerformanceAnalytics;