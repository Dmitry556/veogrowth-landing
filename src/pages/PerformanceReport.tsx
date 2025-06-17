import React, { useState, useEffect } from 'react';
import { Activity, Download, RefreshCw, TrendingUp, TrendingDown, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import PerformanceAnalytics from '@/utils/performance';

const PerformanceReport: React.FC = () => {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateReport();
  }, []);

  const generateReport = () => {
    setLoading(true);
    const analytics = PerformanceAnalytics.getInstance();
    const newReport = analytics.generateReport();
    setReport(newReport);
    setLoading(false);
  };

  const downloadReport = () => {
    if (!report) return;
    
    const dataStr = JSON.stringify(report, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `performance-report-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'needs-improvement':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600">Generating performance report...</p>
        </div>
      </div>
    );
  }

  if (!report || !report.metrics || report.metrics.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Performance Data Available</h2>
          <p className="text-gray-600 mb-6">
            Navigate around the website to collect Web Vitals data, then return to view your performance report.
          </p>
          <button
            onClick={generateReport}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Activity className="w-8 h-8 text-blue-600" />
                Performance Report
              </h1>
              <p className="text-gray-600 mt-1">
                Web Vitals analysis for {new URL(report.url).hostname}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={generateReport}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={downloadReport}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(report.score)}`}>
              {report.score}
            </div>
            <div className="text-gray-600 text-lg">Performance Score</div>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-semibold text-green-600">{report.summary.good}</div>
                <div className="text-sm text-gray-500">Good</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-yellow-600">{report.summary.needsImprovement}</div>
                <div className="text-sm text-gray-500">Needs Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-red-600">{report.summary.poor}</div>
                <div className="text-sm text-gray-500">Poor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {report.metrics.map((metric: any) => (
            <div key={metric.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getRatingIcon(metric.rating)}
                  <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{metric.formattedValue}</div>
                  <div className={`text-sm capitalize ${
                    metric.rating === 'good' ? 'text-green-600' :
                    metric.rating === 'needs-improvement' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {metric.rating.replace('-', ' ')}
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                <div>Collected: {new Date(metric.timestamp).toLocaleString()}</div>
                <div>ID: {metric.id}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h2>
          <div className="space-y-4">
            {report.metrics
              .filter((metric: any) => metric.rating !== 'good')
              .map((metric: any) => (
                <div key={metric.name} className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="font-medium text-gray-900">{metric.name}</h3>
                  <p className="text-gray-600">
                    {getRecommendation(metric.name, metric.rating)}
                  </p>
                </div>
              ))}
            {report.metrics.every((metric: any) => metric.rating === 'good') && (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellent Performance!</h3>
                <p className="text-gray-600">All Web Vitals metrics are in the good range.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const getRecommendation = (metricName: string, rating: string): string => {
  const recommendations: Record<string, string> = {
    CLS: 'Cumulative Layout Shift is high. Consider reserving space for images and ads, avoid inserting content above existing content, and use CSS aspect-ratio for images.',
    FID: 'First Input Delay is slow. Optimize JavaScript execution time, use web workers for heavy computations, and break up long tasks.',
    FCP: 'First Contentful Paint is slow. Optimize server response times, eliminate render-blocking resources, and optimize CSS delivery.',
    LCP: 'Largest Contentful Paint is slow. Optimize images, improve server response times, and eliminate render-blocking resources.',
    TTFB: 'Time to First Byte is slow. Optimize server response times, use a CDN, and consider server-side optimizations.',
    INP: 'Interaction to Next Paint is slow. Optimize JavaScript execution, reduce main thread work, and debounce user inputs.',
  };
  
  return recommendations[metricName] || 'Consider optimizing this metric for better user experience.';
};

export default PerformanceReport;