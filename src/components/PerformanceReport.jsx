import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PerformanceReport = () => {
  const [metrics, setMetrics] = useState({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const collectMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(p => p.name === 'first-contentful-paint');
        const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;

        setMetrics(prev => ({
          ...prev,
          fcp: fcp ? fcp.startTime : null,
          ttfb: ttfb
        }));
      }

      // Observe LCP
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Observe FID
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              setMetrics(prev => ({ 
                ...prev, 
                fid: entry.processingStart - entry.startTime 
              }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Observe CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.log('Performance Observer not fully supported');
        }
      }
    };

    // Collect metrics after page load
    setTimeout(collectMetrics, 1000);
  }, []);

  const getScoreColor = (metric, value) => {
    if (value === null) return 'text-gray-500';
    
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-500';

    if (value <= threshold.good) return 'text-green-600';
    if (value <= threshold.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatValue = (metric, value) => {
    if (value === null) return 'N/A';
    
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    
    return `${Math.round(value)}ms`;
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setShowReport(!showReport)}
        className="fixed bottom-4 right-4 z-50 bg-navy-900 text-white p-3 rounded-full shadow-lg hover:bg-navy-800 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Report"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </motion.button>

      {/* Performance Report Panel */}
      {showReport && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-navy-900">Performance Metrics</h3>
            <button
              onClick={() => setShowReport(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900 uppercase text-sm">
                    {key}
                  </span>
                  <div className="text-xs text-gray-500">
                    {key === 'lcp' && 'Largest Contentful Paint'}
                    {key === 'fid' && 'First Input Delay'}
                    {key === 'cls' && 'Cumulative Layout Shift'}
                    {key === 'fcp' && 'First Contentful Paint'}
                    {key === 'ttfb' && 'Time to First Byte'}
                  </div>
                </div>
                <span className={`font-bold ${getScoreColor(key, value)}`}>
                  {formatValue(key, value)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700">
              <strong>Score Guide:</strong> <span className="text-green-600">Green = Good</span>, <span className="text-yellow-600">Yellow = Needs Improvement</span>, <span className="text-red-600">Red = Poor</span>
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Core Web Vitals monitoring (Development only)
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PerformanceReport;
