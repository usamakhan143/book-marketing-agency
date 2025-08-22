import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      element.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
              entry.target.classList.add('revealed');
            });
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.05 : 0.1, // Lower threshold on mobile
        rootMargin: window.innerWidth < 768 ? '20px' : '50px', // Smaller margin on mobile
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
};

export const useScrollRevealMultiple = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      elements.forEach(element => element.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame and reduce stagger on mobile
            const staggerDelay = window.innerWidth < 768 ? index * 50 : index * 100;
            setTimeout(() => {
              requestAnimationFrame(() => {
                entry.target.classList.add('revealed');
              });
            }, staggerDelay);
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.05 : 0.1,
        rootMargin: window.innerWidth < 768 ? '20px' : '50px',
        ...options,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, options]);
};

export default useScrollReveal;
