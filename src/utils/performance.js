// Performance monitoring utilities for Core Web Vitals

/**
 * Report Core Web Vitals metrics
 * @param {Object} metric - Web Vital metric object
 */
export const reportWebVitals = (metric) => {
  // Log metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}: ${metric.value}`);
  }

  // In production, you might want to send to analytics
  // Example: analytics.track('Web Vital', metric);
};

/**
 * Optimize images based on device capabilities
 * @param {string} src - Original image source
 * @param {Object} options - Optimization options
 * @returns {string} Optimized image URL
 */
export const optimizeImageUrl = (src, options = {}) => {
  const {
    width = 800,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  // For Pexels images, add optimization parameters
  if (src.includes('pexels.com')) {
    const separator = src.includes('?') ? '&' : '?';
    let url = `${src}${separator}auto=compress&cs=tinysrgb&w=${width}&format=${format}`;
    
    if (height) {
      url += `&h=${height}`;
    }
    
    return url;
  }

  // For other sources, return original (could be enhanced for other CDNs)
  return src;
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource URLs to preload
 */
export const preloadCriticalResources = (resources) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    // Determine resource type
    if (resource.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      link.as = 'image';
    } else if (resource.match(/\.(woff|woff2|ttf|otf)$/i)) {
      link.as = 'font';
      link.crossOrigin = 'anonymous';
    } else if (resource.match(/\.css$/i)) {
      link.as = 'style';
    } else if (resource.match(/\.js$/i)) {
      link.as = 'script';
    }
    
    link.href = resource;
    document.head.appendChild(link);
  });
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Intersection Observer helper for lazy loading
 * @param {Function} callback - Callback function when element intersects
 * @param {Object} options - Intersection Observer options
 * @returns {IntersectionObserver} Observer instance
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

/**
 * Critical resource loading strategy
 */
export const loadCriticalResources = () => {
  // Preload critical fonts
  const criticalFonts = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
  ];

  // Preload hero images
  const criticalImages = [
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp'
  ];

  preloadCriticalResources([...criticalFonts, ...criticalImages]);
};

/**
 * Performance observer for monitoring metrics
 */
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      reportWebVitals({
        name: 'LCP',
        value: lastEntry.startTime,
        id: lastEntry.id
      });
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // Observe First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        reportWebVitals({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          id: entry.name
        });
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }
  }
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  // Load critical resources
  loadCriticalResources();
  
  // Start performance observation
  observePerformance();
  
  // Monitor Cumulative Layout Shift
  let clsValue = 0;
  let clsEntries = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Layout shift not supported
  }

  // Report CLS on page unload
  addEventListener('beforeunload', () => {
    reportWebVitals({
      name: 'CLS',
      value: clsValue,
      entries: clsEntries
    });
  });
};

/**
 * Resource hints for better performance
 */
export const addResourceHints = () => {
  const head = document.head;

  // DNS prefetch for external domains
  const dnsPrefetch = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.pexels.com'
  ];

  dnsPrefetch.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    head.appendChild(link);
  });

  // Preconnect to critical third-party origins
  const preconnect = [
    { href: 'https://fonts.googleapis.com', crossorigin: false },
    { href: 'https://fonts.gstatic.com', crossorigin: true }
  ];

  preconnect.forEach(({ href, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = href;
    if (crossorigin) link.crossOrigin = 'anonymous';
    head.appendChild(link);
  });
};

// Initialize on module load
if (typeof window !== 'undefined') {
  // Add resource hints immediately
  addResourceHints();
  
  // Initialize performance monitoring when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPerformanceMonitoring);
  } else {
    initPerformanceMonitoring();
  }
}
