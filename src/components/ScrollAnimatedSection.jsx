import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollIntersection, useStaggeredScrollIntersection } from '../hooks/useScrollIntersection';
import {
  getOptimizedAnimation,
  gpuAccelerated,
  scrollFadeUp,
  staggeredContainer,
  staggeredItem
} from '../utils/scrollAnimations';
import {
  DeviceDetection,
  getAdaptiveAnimationConfig,
  GPUOptimization,
  MemoryManager,
  usePerformanceMonitoring
} from '../utils/scrollPerformance';

const ScrollAnimatedSection = ({
  children,
  className = '',
  animation = scrollFadeUp,
  threshold = 0.15,
  rootMargin = '0px',
  triggerOnce = false,
  exitThreshold = 0.1,
  exitRootMargin = '-20px',
  stagger = false,
  staggerDelay = 150,
  staggerItemCount = 0,
  as = 'section',
  delay = 0,
  disabled = false,
  id,
  ariaLabel,
  ...props
}) => {
  const [adaptiveConfig, setAdaptiveConfig] = useState(getAdaptiveAnimationConfig());
  const [isMobile, setIsMobile] = useState(DeviceDetection.isMobile());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(DeviceDetection.prefersReducedMotion());
  const elementRef = useRef(null);
  const performanceMonitor = usePerformanceMonitoring(process.env.NODE_ENV === 'development');

  // Initialize performance monitoring and adaptive settings
  useEffect(() => {
    if (performanceMonitor) {
      performanceMonitor.start();
    }

    const updateConfig = () => {
      const newConfig = getAdaptiveAnimationConfig();
      setAdaptiveConfig(newConfig);
      setIsMobile(DeviceDetection.isMobile());
      setPrefersReducedMotion(DeviceDetection.prefersReducedMotion());
    };

    updateConfig();

    // GPU acceleration setup
    if (elementRef.current && adaptiveConfig.enableComplexAnimations) {
      GPUOptimization.accelerate(elementRef.current);
    }

    // Optimized resize listener
    const resizeHandler = () => updateConfig();
    window.addEventListener('resize', resizeHandler, { passive: true });

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateConfig);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      mediaQuery.removeEventListener('change', updateConfig);

      // Cleanup performance monitoring
      if (performanceMonitor) {
        const metrics = performanceMonitor.stop();
        if (process.env.NODE_ENV === 'development') {
          console.log('Scroll Animation Performance:', metrics);
        }
      }

      // Memory cleanup
      if (elementRef.current) {
        MemoryManager.cleanupAnimation(elementRef.current);
      }
    };
  }, []);

  // Get optimized animation based on device and preferences
  const optimizedAnimation = React.useMemo(() => {
    if (!adaptiveConfig.enableComplexAnimations) {
      return {
        initial: { opacity: 0 },
        entering: {
          opacity: 1,
          transition: {
            duration: adaptiveConfig.duration,
            ease: adaptiveConfig.easing
          }
        },
        visible: { opacity: 1 },
        exiting: adaptiveConfig.exitAnimations ? {
          opacity: 0,
          transition: { duration: 0.3 }
        } : { opacity: 1 }
      };
    }

    const baseAnimation = getOptimizedAnimation(animation, isMobile, prefersReducedMotion);

    // Apply adaptive configuration
    return {
      ...baseAnimation,
      entering: {
        ...baseAnimation.entering,
        transition: {
          ...baseAnimation.entering.transition,
          duration: adaptiveConfig.duration,
          ease: adaptiveConfig.easing
        }
      }
    };
  }, [animation, isMobile, prefersReducedMotion, adaptiveConfig]);

  // Use appropriate intersection hook based on stagger settings with adaptive configuration
  const scrollIntersection = useScrollIntersection({
    threshold: threshold || adaptiveConfig.intersectionThreshold,
    rootMargin,
    triggerOnce: triggerOnce || !adaptiveConfig.exitAnimations,
    exitThreshold,
    exitRootMargin,
    enabled: !disabled && !stagger
  });

  const staggeredIntersection = useStaggeredScrollIntersection(
    staggerItemCount,
    {
      threshold: threshold || adaptiveConfig.intersectionThreshold,
      rootMargin,
      staggerDelay: staggerDelay || adaptiveConfig.staggerDelay,
      triggerOnce: triggerOnce || !adaptiveConfig.exitAnimations,
      enabled: !disabled && stagger
    }
  );

  // Determine which intersection data to use
  const intersectionData = stagger ? staggeredIntersection : scrollIntersection;

  if (disabled) {
    const Component = as === 'div' ? 'div' : 'section';
    return (
      <Component
        id={id}
        className={className}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Component>
    );
  }

  if (stagger) {
    const { containerRef, containerInView } = intersectionData;
    
    return (
      <motion.section
        ref={containerRef}
        id={id}
        className={className}
        aria-label={ariaLabel}
        initial="initial"
        animate={containerInView ? "entering" : "initial"}
        variants={staggeredContainer}
        style={{
          ...gpuAccelerated,
          transitionDelay: `${delay}ms`
        }}
        {...props}
      >
        {children}
      </motion.section>
    );
  }

  const { ref, animationState } = intersectionData;
  const MotionComponent = motion[as] || motion.section;

  // Adaptive style configuration
  const adaptiveStyles = React.useMemo(() => {
    const baseStyles = {
      transitionDelay: `${delay}ms`
    };

    if (adaptiveConfig.enableComplexAnimations && DeviceDetection.supportsHardwareAcceleration()) {
      return {
        ...baseStyles,
        ...gpuAccelerated
      };
    }

    return baseStyles;
  }, [delay, adaptiveConfig]);

  return (
    <MotionComponent
      ref={(node) => {
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
        elementRef.current = node;
      }}
      id={id}
      className={className}
      aria-label={ariaLabel}
      initial="initial"
      animate={animationState}
      variants={optimizedAnimation}
      style={adaptiveStyles}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Specialized component for staggered items within a section
export const ScrollAnimatedItem = ({
  children,
  className = '',
  animation = staggeredItem,
  index = 0,
  delay = 0,
  as = 'div',
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  const optimizedAnimation = getOptimizedAnimation(animation, isMobile, prefersReducedMotion);
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={optimizedAnimation}
      style={{
        ...gpuAccelerated,
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Text reveal component for animated text elements
export const ScrollAnimatedText = ({
  children,
  className = '',
  as = 'div',
  splitByWords = false,
  splitByCharacters = false,
  staggerDelay = 50,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const MotionComponent = motion[as] || motion.div;

  if (!splitByWords && !splitByCharacters) {
    return (
      <MotionComponent
        className={className}
        variants={staggeredItem}
        style={gpuAccelerated}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }

  // Split text for character/word-by-word animation
  const text = typeof children === 'string' ? children : '';
  const splitText = splitByCharacters 
    ? text.split('') 
    : splitByWords 
    ? text.split(' ') 
    : [text];

  return (
    <MotionComponent
      className={className}
      variants={{
        initial: {},
        entering: {
          transition: {
            staggerChildren: isMobile ? staggerDelay / 2 : staggerDelay,
            delayChildren: 0.1
          }
        },
        visible: {},
        exiting: {
          transition: {
            staggerChildren: staggerDelay / 3,
            staggerDirection: -1
          }
        }
      }}
      style={gpuAccelerated}
      {...props}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            initial: { 
              opacity: 0, 
              y: 20,
              filter: 'blur(4px)'
            },
            entering: { 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)',
              transition: { 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            },
            visible: { 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            },
            exiting: { 
              opacity: 0, 
              y: -10,
              filter: 'blur(2px)',
              transition: { duration: 0.3 }
            }
          }}
          style={{
            display: 'inline-block',
            marginRight: splitByWords ? '0.25em' : '0'
          }}
        >
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

// Container for scroll animations with performance monitoring
export const ScrollAnimationContainer = ({
  children,
  className = '',
  enablePerformanceMonitoring = false,
  ...props
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({});

  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const startTime = performance.now();
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const animationEntries = entries.filter(entry => 
        entry.name.includes('animation') || entry.name.includes('transition')
      );
      
      if (animationEntries.length > 0) {
        setPerformanceMetrics(prev => ({
          ...prev,
          animationDuration: animationEntries.reduce((sum, entry) => sum + entry.duration, 0),
          animationCount: animationEntries.length
        }));
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => {
      observer.disconnect();
      const endTime = performance.now();
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Scroll animations performance: ${endTime - startTime}ms`, performanceMetrics);
      }
    };
  }, [enablePerformanceMonitoring, performanceMetrics]);

  return (
    <div className={className} {...props}>
      {children}
      {process.env.NODE_ENV === 'development' && enablePerformanceMonitoring && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          Animations: {performanceMetrics.animationCount || 0} | 
          Duration: {Math.round(performanceMetrics.animationDuration || 0)}ms
        </div>
      )}
    </div>
  );
};

export default ScrollAnimatedSection;
