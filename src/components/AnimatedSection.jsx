import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer, reducedMotion } from '../utils/animations';

const AnimatedSection = ({
  children,
  className = '',
  animation = fadeInUp,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  stagger = false,
  delay = 0,
  as = 'section',
  ...props
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finalAnimation = prefersReducedMotion ? reducedMotion : animation;

  const MotionComponent = motion[as] || motion.section;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="initial"
      animate={hasIntersected ? "animate" : "initial"}
      variants={stagger ? staggerContainer : finalAnimation}
      transition={{
        delay,
        ...finalAnimation.animate?.transition
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
