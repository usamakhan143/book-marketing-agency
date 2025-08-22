import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Dynamic movement animations - elements slide in from different directions
const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -15
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic for smooth entry
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  }
};

const slideInFromRight = {
  hidden: {
    opacity: 0,
    x: 100,
    rotateY: 15
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  }
};

const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    rotateX: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const slideInFromTop = {
  hidden: {
    opacity: 0,
    y: -80,
    scale: 1.1,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const rotateSlideIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 15,
      stiffness: 80
    }
  }
};

const bounceIn = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 100
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55], // easeInOutBack for bounce effect
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  }
};

const flipIn = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
    x: -50
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

// Advanced staggered container with sequential reveals
const dynamicStaggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Longer stagger for more dramatic effect
      delayChildren: 0.3,
      duration: 0.6
    }
  }
};

// Mixed movement item animation
const staggeredMoveIn = {
  hidden: {
    opacity: 0,
    y: 60,
    x: -30,
    scale: 0.8,
    rotate: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  }
};

// Animation mapping
const animations = {
  slideLeft: slideInFromLeft,
  slideRight: slideInFromRight,
  slideUp: slideInFromBottom,
  slideDown: slideInFromTop,
  rotate: rotateSlideIn,
  bounce: bounceIn,
  flip: flipIn,
  staggerContainer: dynamicStaggerContainer,
  staggerItem: staggeredMoveIn
};

const DynamicScrollSection = ({
  children,
  className = '',
  animation = 'slideUp',
  threshold = 0.3, // Higher threshold for better timing
  triggerOnce = false,
  stagger = false,
  staggerItemCount = 0,
  as = 'section',
  id,
  ariaLabel,
  delay = 0,
  ...props
}) => {
  // Use appropriate hook based on stagger setting
  const scrollData = stagger 
    ? useStaggeredAnimation(staggerItemCount, { 
        threshold, 
        triggerOnce,
        staggerDelay: 200 // Longer delay for more dramatic effect
      })
    : useScrollAnimation({ threshold, triggerOnce });

  const animationVariant = animations[animation] || animations.slideUp;
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
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // GPU acceleration
          transitionDelay: `${delay}ms`
        }}
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
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)', // GPU acceleration
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Dynamic animated item component for staggered animations
export const DynamicScrollItem = ({
  children,
  className = '',
  animation = 'staggerItem',
  index = 0,
  as = 'div',
  customDelay = 0,
  ...props
}) => {
  const animationVariant = animations[animation] || animations.staggerItem;
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={{
        ...animationVariant,
        visible: {
          ...animationVariant.visible,
          transition: {
            ...animationVariant.visible.transition,
            delay: customDelay || (index * 0.15) // Custom stagger timing
          }
        }
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)' // GPU acceleration
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Special component for alternating animations (left/right pattern)
export const AlternatingScrollItem = ({
  children,
  className = '',
  index = 0,
  as = 'div',
  ...props
}) => {
  // Alternate between left and right animations
  const animation = index % 2 === 0 ? 'slideLeft' : 'slideRight';
  const animationVariant = animations[animation];
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={{
        ...animationVariant,
        visible: {
          ...animationVariant.visible,
          transition: {
            ...animationVariant.visible.transition,
            delay: index * 0.2 // Staggered timing
          }
        }
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)'
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Component for sequential reveal pattern
export const SequentialReveal = ({
  children,
  className = '',
  items = [],
  containerClass = '',
  itemDelay = 0.2,
  ...props
}) => {
  const { containerRef, containerVisible } = useStaggeredAnimation(items.length, {
    threshold: 0.3,
    staggerDelay: itemDelay * 1000,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={containerRef}
      className={containerClass}
      initial="hidden"
      animate={containerVisible ? "visible" : "hidden"}
      variants={dynamicStaggerContainer}
      {...props}
    >
      {items.map((item, index) => (
        <DynamicScrollItem
          key={index}
          className={className}
          index={index}
          customDelay={index * itemDelay}
        >
          {typeof item === 'function' ? item(index) : item}
        </DynamicScrollItem>
      ))}
    </motion.div>
  );
};

export default DynamicScrollSection;
