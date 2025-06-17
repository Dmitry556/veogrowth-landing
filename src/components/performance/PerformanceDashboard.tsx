import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { getStoredVitals, clearStoredVitals, calculatePerformanceScore } from './WebVitals';

interface VitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  formattedValue: string;
  timestamp: number;
  url: string;
}

const PerformanceDashboard: React.FC = () => {
  const [vitals, setVitals] = useState<VitalMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVitals = () => {
      const storedVitals = getStoredVitals();
      setVitals(storedVitals);
    };

    updateVitals();
    
    // Update every 5 seconds
    const interval = setInterval(updateVitals, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needs-improvement':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-50 border-green-200';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'poor': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getLatestMetrics = () => {
    const latest: Record<string, VitalMetric> = {};
    vitals.forEach(vital => {
      if (!latest[vital.name] || vital.timestamp > latest[vital.name].timestamp) {
        latest[vital.name] = vital;
      }
    });
    return Object.values(latest);
  };

  const performanceScore = calculatePerformanceScore(getLatestMetrics());

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && !window.location.search.includes('debug=true')) {
    return null;
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="Show Performance Dashboard"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-xl rounded-lg border border-gray-200 w-80 max-h-96 overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Web Vitals</h3>
          {performanceScore > 0 && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              performanceScore >= 90 ? 'bg-green-100 text-green-700' :
              performanceScore >= 70 ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {performanceScore}/100
            </span>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div className="p-4 max-h-80 overflow-y-auto">
        {getLatestMetrics().length === 0 ? (
          <p className="text-gray-500 text-sm">No metrics collected yet. Navigate around the site to see Web Vitals data.</p>
        ) : (
          <div className="space-y-3">
            {getLatestMetrics().map((vital) => (
              <div key={vital.name} className={`p-3 rounded-lg border ${getRatingColor(vital.rating)}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {getRatingIcon(vital.rating)}
                    <span className="font-medium text-sm">{vital.name}</span>
                  </div>
                  <span className="text-sm font-mono">{vital.formattedValue}</span>
                </div>
                <div className="text-xs opacity-75">
                  {new Date(vital.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {vitals.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            <button
              onClick={() => {
                clearStoredVitals();
                setVitals([]);
              }}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Clear Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDashboard;