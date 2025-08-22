import { useEffect, useRef, useState } from 'react';

/**
 * Simplified scroll animation hook that actually works reliably
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = false,
  enabled = true
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce && hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '100px'
      }
    );

    observerRef.current = observer;
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, enabled, hasAnimated]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated
  };
};

/**
 * Simplified staggered animation hook
 */
export const useStaggeredAnimation = (
  itemCount = 0,
  {
    threshold = 0.1,
    staggerDelay = 150,
    triggerOnce = false,
    enabled = true
  } = {}
) => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [itemStates, setItemStates] = useState({});
  const containerRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!enabled || itemCount === 0) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !containerVisible) {
          setContainerVisible(true);
          
          // Clear any existing timeouts
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          
          // Trigger staggered animations
          for (let i = 0; i < itemCount; i++) {
            const timeout = setTimeout(() => {
              setItemStates(prev => ({
                ...prev,
                [i]: true
              }));
            }, i * staggerDelay);
            
            timeoutsRef.current.push(timeout);
          }
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!entry.isIntersecting && !triggerOnce) {
          setContainerVisible(false);
          
          // Clear timeouts and reset states
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          setItemStates({});
        }
      },
      {
        threshold,
        rootMargin: '100px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [itemCount, threshold, staggerDelay, triggerOnce, enabled, containerVisible]);

  return {
    containerRef,
    containerVisible,
    itemStates
  };
};
