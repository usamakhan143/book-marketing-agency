// Animation variants for Framer Motion with performance optimizations
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 20,
      stiffness: 120
    }
  }
};

export const slideInUp = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Hover animations for interactive elements
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut"
  }
};

export const hoverLift = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};

export const buttonHover = {
  scale: 1.02,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  transition: {
    duration: 0.2,
    ease: "easeOut"
  }
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    ease: "easeInOut"
  }
};

// Page transition animations
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Background animations for hero sections
export const floatingElements = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(245, 158, 11, 0.3)",
      "0 0 40px rgba(245, 158, 11, 0.5)",
      "0 0 20px rgba(245, 158, 11, 0.3)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Text animations
export const typewriter = {
  animate: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

export const typewriterItem = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut"
    }
  }
};

// Card animations
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};

export const cardTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    ease: "easeInOut"
  }
};

// Number counter animation utility
export const createCounterAnimation = (endValue, duration = 2000) => {
  return {
    animate: {
      transition: {
        duration: duration / 1000,
        ease: "easeOut"
      }
    }
  };
};

// Optimized animation settings for different screen sizes
export const getResponsiveAnimation = (isMobile) => ({
  duration: isMobile ? 0.4 : 0.6,
  ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
  type: isMobile ? "tween" : "spring",
  damping: 25,
  stiffness: isMobile ? 150 : 120
});

// Reduced motion variants for accessibility
export const reducedMotion = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};
