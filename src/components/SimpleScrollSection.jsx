import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Simple, working animation variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Animation type mapping
const animations = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerItem
};

const SimpleScrollSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  threshold = 0.15,
  triggerOnce = false,
  stagger = false,
  staggerItemCount = 0,
  as = 'section',
  id,
  ariaLabel,
  ...props
}) => {
  // Use appropriate hook based on stagger setting
  const scrollData = stagger 
    ? useStaggeredAnimation(staggerItemCount, { threshold, triggerOnce })
    : useScrollAnimation({ threshold, triggerOnce });

  const animationVariant = animations[animation] || animations.fadeUp;
  const MotionComponent = motion[as] || motion.section;

  if (stagger) {
    const { containerRef, containerVisible } = scrollData;
    
    return (
      <MotionComponent
        ref={containerRef}
        id={id}
        className={className}
        aria-label={ariaLabel}
        initial="hidden"
        animate={containerVisible ? "visible" : "hidden"}
        variants={animations.staggerContainer}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }

  const { ref, isVisible } = scrollData;

  return (
    <MotionComponent
      ref={ref}
      id={id}
      className={className}
      aria-label={ariaLabel}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animationVariant}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Simplified animated item component for staggered animations
export const SimpleScrollItem = ({
  children,
  className = '',
  animation = 'staggerItem',
  index = 0,
  as = 'div',
  ...props
}) => {
  const animationVariant = animations[animation] || animations.staggerItem;
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={animationVariant}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default SimpleScrollSection;
