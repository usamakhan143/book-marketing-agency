import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer with performance optimizations
 * @param {Object} options - Intersection observer options
 * @param {number} options.threshold - Threshold for triggering (0 to 1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @param {boolean} options.enabled - Whether the observer is enabled
 * @returns {Array} [ref, isIntersecting, hasIntersected]
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  enabled = true
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    // Create observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting;
          setIsIntersecting(isElementIntersecting);

          if (isElementIntersecting && !hasIntersected) {
            setHasIntersected(true);
            
            // Disconnect observer if triggerOnce is true
            if (triggerOnce) {
              observerRef.current?.disconnect();
            }
          }
        },
        {
          threshold,
          rootMargin
        }
      );
    }

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, enabled, hasIntersected]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return [elementRef, isIntersecting, hasIntersected];
};

/**
 * Hook for animating multiple elements with staggered delays
 * @param {Array} elements - Array of element selectors or refs
 * @param {Object} options - Animation options
 * @returns {Object} Animation states for each element
 */
export const useStaggeredIntersection = (
  elementsCount = 0,
  {
    threshold = 0.1,
    rootMargin = '50px',
    staggerDelay = 100,
    triggerOnce = true
  } = {}
) => {
  const [intersectionStates, setIntersectionStates] = useState({});
  const refsArray = useRef([]);
  const observerRef = useRef(null);

  // Initialize refs array
  useEffect(() => {
    refsArray.current = Array(elementsCount).fill().map((_, i) => 
      refsArray.current[i] || { current: null }
    );
  }, [elementsCount]);

  useEffect(() => {
    if (elementsCount === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refsArray.current.findIndex(ref => ref.current === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setTimeout(() => {
              setIntersectionStates(prev => ({
                ...prev,
                [index]: true
              }));
            }, index * staggerDelay);

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;

    // Observe all current elements
    refsArray.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [elementsCount, threshold, rootMargin, staggerDelay, triggerOnce]);

  return [refsArray.current, intersectionStates];
};

/**
 * Hook for batch intersection observing with performance optimization
 * @param {Object} options - Observer options
 * @returns {Function} Function to register elements for observation
 */
export const useBatchIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
} = {}) => {
  const observerRef = useRef(null);
  const callbacksMap = useRef(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = callbacksMap.current.get(entry.target);
          if (callback && entry.isIntersecting) {
            callback(entry);
            
            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
              callbacksMap.current.delete(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const observe = (element, callback) => {
    if (!element || !observerRef.current) return;

    callbacksMap.current.set(element, callback);
    observerRef.current.observe(element);
  };

  const unobserve = (element) => {
    if (!element || !observerRef.current) return;

    observerRef.current.unobserve(element);
    callbacksMap.current.delete(element);
  };

  return { observe, unobserve };
};
