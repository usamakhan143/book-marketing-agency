// Enhanced animation variants for bidirectional scroll animations
// These work with the useScrollIntersection hook for smooth entry/exit effects

// Easing functions for smooth animations
const customEasing = [0.25, 0.46, 0.45, 0.94];
const springConfig = { damping: 25, stiffness: 120 };

// Base animation variants for sections
export const scrollFadeUp = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  entering: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: customEasing,
      type: "spring",
      ...springConfig
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exiting: {
    opacity: 0,
    y: -40,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const scrollFadeLeft = {
  initial: {
    opacity: 0,
    x: -80,
    rotateY: -5
  },
  entering: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: customEasing,
      type: "spring",
      ...springConfig
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0
  },
  exiting: {
    opacity: 0,
    x: -60,
    rotateY: -3,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export const scrollFadeRight = {
  initial: {
    opacity: 0,
    x: 80,
    rotateY: 5
  },
  entering: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: customEasing,
      type: "spring",
      ...springConfig
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0
  },
  exiting: {
    opacity: 0,
    x: 60,
    rotateY: 3,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export const scrollScaleIn = {
  initial: {
    opacity: 0,
    scale: 0.7,
    rotateZ: -3
  },
  entering: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 0.7,
      ease: customEasing,
      type: "spring",
      damping: 20,
      stiffness: 150
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0
  },
  exiting: {
    opacity: 0,
    scale: 0.9,
    rotateZ: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Hero section specific animations
export const heroAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  entering: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: customEasing,
      type: "spring",
      damping: 30,
      stiffness: 100
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exiting: {
    opacity: 0,
    y: -50,
    scale: 1.02,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Staggered container animations
export const staggeredContainer = {
  initial: {},
  entering: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  },
  exiting: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Individual stagger items
export const staggeredItem = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  entering: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: customEasing
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exiting: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Card-specific animations
export const cardSlideUp = {
  initial: {
    opacity: 0,
    y: 80,
    rotateX: 10
  },
  entering: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: customEasing,
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0
  },
  exiting: {
    opacity: 0,
    y: -40,
    rotateX: -5,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

// Text-specific animations
export const textReveal = {
  initial: {
    opacity: 0,
    y: 30,
    skewY: 3
  },
  entering: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      ease: customEasing
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0
  },
  exiting: {
    opacity: 0,
    y: -15,
    skewY: -1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Statistics/metrics animations
export const statsAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15
  },
  entering: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: customEasing,
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0
  },
  exiting: {
    opacity: 0,
    scale: 0.95,
    rotateY: 10,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

// CTA section animation
export const ctaAnimation = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateZ: -1
  },
  entering: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 1.0,
      ease: customEasing,
      type: "spring",
      damping: 25,
      stiffness: 110
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0
  },
  exiting: {
    opacity: 0,
    y: -40,
    scale: 1.02,
    rotateZ: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Reduced motion variants for accessibility
export const reducedMotionScroll = {
  initial: { opacity: 0 },
  entering: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  visible: { opacity: 1 },
  exiting: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Mobile-optimized animations (lighter/faster)
export const mobileScrollFadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  entering: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exiting: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Animation selector based on device and preference
export const getOptimizedAnimation = (baseAnimation, isMobile = false, prefersReducedMotion = false) => {
  if (prefersReducedMotion) return reducedMotionScroll;
  if (isMobile) {
    // Return lighter version for mobile
    const { initial, entering, visible, exiting } = baseAnimation;
    return {
      initial: { ...initial, scale: undefined, rotateY: undefined, rotateX: undefined, rotateZ: undefined },
      entering: { 
        ...entering, 
        scale: undefined, 
        rotateY: undefined, 
        rotateX: undefined, 
        rotateZ: undefined,
        transition: { duration: 0.4, ease: "easeOut" }
      },
      visible: { ...visible, scale: undefined, rotateY: undefined, rotateX: undefined, rotateZ: undefined },
      exiting: { 
        ...exiting, 
        scale: undefined, 
        rotateY: undefined, 
        rotateX: undefined, 
        rotateZ: undefined,
        transition: { duration: 0.3, ease: "easeInOut" }
      }
    };
  }
  return baseAnimation;
};

// Performance-optimized transform properties
export const gpuAccelerated = {
  willChange: "transform, opacity",
  transform: "translateZ(0)" // Force GPU acceleration
};

// Hover animations for interactive elements within sections
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: customEasing
  }
};

export const hoverGlow = {
  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: customEasing
  }
};
