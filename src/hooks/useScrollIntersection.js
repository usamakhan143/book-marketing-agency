import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Enhanced scroll intersection hook for bidirectional animations
 * Supports entry/exit animations based on scroll direction
 */
export const useScrollIntersection = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
  enabled = true,
  exitThreshold = 0.1,
  exitRootMargin = '-20px'
} = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [animationState, setAnimationState] = useState('initial'); // initial, entering, visible, exiting
  
  const elementRef = useRef(null);
  const observerRef = useRef(null);
  const exitObserverRef = useRef(null);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  // Track scroll direction
  const updateScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
    setScrollDirection(direction);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(updateScrollDirection, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [enabled, updateScrollDirection]);

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    const element = elementRef.current;

    // Entry observer - triggers when element enters viewport
    const entryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasEntered(true);
          setAnimationState('entering');
          
          // Delay to show entering animation
          setTimeout(() => {
            setAnimationState('visible');
          }, 50);

          if (triggerOnce) {
            entryObserver.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    // Exit observer - triggers when element is about to leave viewport
    const exitObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && hasEntered && !triggerOnce) {
          setIsInView(false);
          setAnimationState('exiting');
          
          // Delay to complete exit animation
          setTimeout(() => {
            setAnimationState('initial');
          }, 300);
        }
      },
      { 
        threshold: exitThreshold, 
        rootMargin: exitRootMargin 
      }
    );

    observerRef.current = entryObserver;
    exitObserverRef.current = exitObserver;

    entryObserver.observe(element);
    if (!triggerOnce) {
      exitObserver.observe(element);
    }

    return () => {
      entryObserver.disconnect();
      exitObserver.disconnect();
    };
  }, [enabled, threshold, rootMargin, exitThreshold, exitRootMargin, triggerOnce, hasEntered]);

  return {
    ref: elementRef,
    isInView,
    hasEntered,
    scrollDirection,
    animationState
  };
};

/**
 * Hook for staggered scroll animations
 */
export const useStaggeredScrollIntersection = (
  itemCount = 0,
  {
    threshold = 0.1,
    rootMargin = '0px',
    staggerDelay = 150,
    triggerOnce = false,
    enabled = true
  } = {}
) => {
  const [states, setStates] = useState({});
  const [containerInView, setContainerInView] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!enabled || !containerRef.current || itemCount === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !containerInView) {
          setContainerInView(true);
          
          // Trigger staggered animations
          Array.from({ length: itemCount }, (_, index) => {
            const timeout = setTimeout(() => {
              setStates(prev => ({
                ...prev,
                [index]: { 
                  isVisible: true, 
                  animationState: 'entering',
                  delay: index * staggerDelay
                }
              }));
            }, index * staggerDelay);
            
            timeoutsRef.current.push(timeout);
          });

          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!entry.isIntersecting && containerInView && !triggerOnce) {
          setContainerInView(false);
          
          // Clear timeouts and reset states
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          
          setStates({});
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [enabled, itemCount, threshold, rootMargin, staggerDelay, triggerOnce, containerInView]);

  return {
    containerRef,
    states,
    containerInView
  };
};

/**
 * Hook for scroll-based parallax effects
 */
export const useScrollParallax = ({
  speed = 0.5,
  direction = 'vertical', // 'vertical' | 'horizontal'
  enabled = true
} = {}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;

      if (direction === 'vertical') {
        setOffset(rate);
      }
    };

    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [speed, direction, enabled]);

  return { ref: elementRef, offset };
};

// Utility function for throttling
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
