// Performance monitoring and optimization utilities for scroll animations

/**
 * Device and performance detection utilities
 */
export const DeviceDetection = {
  // Check if device is mobile
  isMobile: () => {
    return window.innerWidth < 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // Check if device has reduced motion preference
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check if device supports hardware acceleration
  supportsHardwareAcceleration: () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  },

  // Estimate device performance tier
  getPerformanceTier: () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const memory = navigator.deviceMemory || 4; // Default to 4GB if not available
    const cores = navigator.hardwareConcurrency || 4;

    // Low-end device detection
    if (memory <= 2 || cores <= 2) return 'low';
    
    // Check network conditions
    if (connection) {
      const slowConnections = ['slow-2g', '2g', '3g'];
      if (slowConnections.includes(connection.effectiveType)) return 'low';
    }

    // High-end device detection
    if (memory >= 8 && cores >= 8) return 'high';
    
    return 'medium';
  },

  // Check if device supports passive event listeners
  supportsPassiveEvents: () => {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      passiveSupported = false;
    }
    return passiveSupported;
  }
};

/**
 * Performance monitoring for scroll animations
 */
export class ScrollAnimationProfiler {
  constructor() {
    this.metrics = {
      frameDrops: 0,
      averageFPS: 60,
      animationDuration: 0,
      intersectionObserverCalls: 0,
      memoryUsage: 0
    };
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.isMonitoring = false;
  }

  start() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.monitorFrameRate();
  }

  stop() {
    this.isMonitoring = false;
    return this.getMetrics();
  }

  monitorFrameRate() {
    if (!this.isMonitoring) return;

    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;
    
    if (deltaTime > 16.67) { // Frame took longer than 60fps
      this.metrics.frameDrops++;
    }

    this.frameCount++;
    this.lastTime = currentTime;

    // Calculate average FPS every second
    if (this.frameCount % 60 === 0) {
      this.metrics.averageFPS = 1000 / (deltaTime / 60);
    }

    requestAnimationFrame(() => this.monitorFrameRate());
  }

  recordIntersectionCall() {
    this.metrics.intersectionObserverCalls++;
  }

  getMetrics() {
    // Get memory usage if available
    if (performance.memory) {
      this.metrics.memoryUsage = performance.memory.usedJSHeapSize / 1048576; // MB
    }

    return { ...this.metrics };
  }
}

/**
 * Adaptive animation configuration based on device performance
 */
export const getAdaptiveAnimationConfig = () => {
  const tier = DeviceDetection.getPerformanceTier();
  const isMobile = DeviceDetection.isMobile();
  const prefersReducedMotion = DeviceDetection.prefersReducedMotion();

  if (prefersReducedMotion) {
    return {
      duration: 0.3,
      easing: 'easeOut',
      staggerDelay: 50,
      enableComplexAnimations: false,
      enableParallax: false,
      enableBlur: false,
      enableScale: false,
      enableRotation: false,
      intersectionThreshold: 0.5,
      exitAnimations: false
    };
  }

  const configs = {
    low: {
      duration: 0.4,
      easing: 'easeOut',
      staggerDelay: 100,
      enableComplexAnimations: false,
      enableParallax: false,
      enableBlur: false,
      enableScale: false,
      enableRotation: false,
      intersectionThreshold: 0.3,
      exitAnimations: false
    },
    medium: {
      duration: 0.6,
      easing: [0.25, 0.46, 0.45, 0.94],
      staggerDelay: 80,
      enableComplexAnimations: true,
      enableParallax: false,
      enableBlur: false,
      enableScale: true,
      enableRotation: false,
      intersectionThreshold: 0.2,
      exitAnimations: isMobile ? false : true
    },
    high: {
      duration: 0.8,
      easing: [0.25, 0.46, 0.45, 0.94],
      staggerDelay: 60,
      enableComplexAnimations: true,
      enableParallax: true,
      enableBlur: true,
      enableScale: true,
      enableRotation: true,
      intersectionThreshold: 0.15,
      exitAnimations: true
    }
  };

  return configs[tier];
};

/**
 * Throttle function optimized for scroll events
 */
export const createOptimizedThrottle = (func, limit = 16) => {
  let inThrottle;
  let lastFunc;
  let lastRan;

  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

/**
 * Debounce function for resize events
 */
export const createOptimizedDebounce = (func, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * Intersection Observer with performance optimizations
 */
export const createOptimizedIntersectionObserver = (callback, options = {}) => {
  const config = getAdaptiveAnimationConfig();
  
  const defaultOptions = {
    threshold: config.intersectionThreshold,
    rootMargin: '50px',
    ...options
  };

  // Use passive observers when possible
  const observer = new IntersectionObserver((entries) => {
    // Batch process entries for better performance
    requestAnimationFrame(() => {
      entries.forEach(callback);
    });
  }, defaultOptions);

  return observer;
};

/**
 * GPU acceleration utilities
 */
export const GPUOptimization = {
  // Apply GPU acceleration to element
  accelerate: (element) => {
    if (element && DeviceDetection.supportsHardwareAcceleration()) {
      element.style.willChange = 'transform, opacity';
      element.style.transform = 'translateZ(0)';
      element.style.backfaceVisibility = 'hidden';
      element.style.perspective = '1000px';
    }
  },

  // Remove GPU acceleration
  decelerate: (element) => {
    if (element) {
      element.style.willChange = 'auto';
      element.style.transform = '';
      element.style.backfaceVisibility = '';
      element.style.perspective = '';
    }
  },

  // Apply to multiple elements
  accelerateElements: (elements) => {
    elements.forEach(el => GPUOptimization.accelerate(el));
  }
};

/**
 * Memory management for animations
 */
export const MemoryManager = {
  cleanupAnimation: (element) => {
    if (element) {
      // Remove transform properties that may cause memory leaks
      element.style.transform = '';
      element.style.filter = '';
      element.style.willChange = 'auto';
    }
  },

  cleanupObserver: (observer) => {
    if (observer) {
      observer.disconnect();
    }
  },

  // Batch cleanup
  cleanup: (elements, observers = []) => {
    elements.forEach(el => MemoryManager.cleanupAnimation(el));
    observers.forEach(obs => MemoryManager.cleanupObserver(obs));
  }
};

/**
 * Core Web Vitals monitoring for animations
 */
export const WebVitalsMonitor = {
  measureCLS: () => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const clsValue = entries.reduce((sum, entry) => sum + entry.value, 0);
        resolve(clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    });
  },

  measureLCP: () => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  },

  measureFID: () => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0];
        if (firstInput) {
          const fid = firstInput.processingStart - firstInput.startTime;
          resolve(fid);
        }
      }).observe({ entryTypes: ['first-input'] });
    });
  }
};

// Global performance monitor instance
export const globalProfiler = new ScrollAnimationProfiler();

// Export performance monitoring hook
export const usePerformanceMonitoring = (enabled = false) => {
  if (!enabled || process.env.NODE_ENV !== 'development') return null;

  return {
    start: () => globalProfiler.start(),
    stop: () => globalProfiler.stop(),
    getMetrics: () => globalProfiler.getMetrics()
  };
};

export default {
  DeviceDetection,
  ScrollAnimationProfiler,
  getAdaptiveAnimationConfig,
  createOptimizedThrottle,
  createOptimizedDebounce,
  createOptimizedIntersectionObserver,
  GPUOptimization,
  MemoryManager,
  WebVitalsMonitor,
  globalProfiler,
  usePerformanceMonitoring
};
