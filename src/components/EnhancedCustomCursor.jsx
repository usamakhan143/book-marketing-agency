import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const EnhancedCustomCursor = ({
  size = 32,
  dotSize = 8,
  colors = {
    default: '#f59e0b',
    hover: '#fbbf24',
    accent: '#102a43'
  },
  animationSpeed = 300,
  springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const animationRef = useRef(null);

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animations for smooth following
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Enhanced Book icon with better animations - now shows by default
  const BookIcon = ({ isAnimating, variant = 'book' }) => {
    const iconColor = colors.default;

    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="cursor-book-icon"
        initial={{ scale: 1, rotate: 0, opacity: 1 }}
        animate={{
          scale: isHovering ? 0 : 1,
          rotate: !isHovering ? [0, -5, 5, 0] : 0,
          opacity: isHovering ? 0 : 1
        }}
        transition={{
          duration: animationSpeed / 1000,
          ease: "easeOut",
          rotate: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: !isHovering ? Infinity : 0,
            repeatType: "loop"
          }
        }}
      >
        {/* Main book shape */}
        <motion.path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        
        <motion.path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`${iconColor}15`}
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 0.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Animated page content */}
        <motion.g
          initial={{ opacity: 0.6, x: 0 }}
          animate={{
            opacity: !isHovering ? [0, 1, 0] : 0.6,
            x: !isHovering ? [-5, 0, 5] : 0
          }}
          transition={{
            duration: 0.8,
            repeat: !isHovering ? Infinity : 0,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <path d="M9 7h6" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 11h6" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 15h4" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
        
        {/* Page turning effect */}
        <motion.path
          d="M14 3v4l2-1 2 1V3"
          stroke={iconColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`${iconColor}30`}
          initial={{ scale: 1, y: -5 }}
          animate={{
            scale: !isHovering ? [0, 1, 0] : 0,
            y: !isHovering ? [-5, -10, -5] : -5,
            rotate: !isHovering ? [0, 10, -10, 0] : 0
          }}
          transition={{
            duration: 1.2,
            repeat: !isHovering ? Infinity : 0,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        {/* Sparkle effects */}
        <motion.g
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: !isHovering ? [0, 1, 0, 1, 0] : 0,
            scale: !isHovering ? [0, 0.5, 1, 0.5, 0] : 0,
            rotate: !isHovering ? [0, 90, 180, 270, 360] : 0
          }}
          transition={{
            duration: 2,
            repeat: !isHovering ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <circle cx="21" cy="8" r="1" fill={iconColor} opacity="0.8" />
          <circle cx="22" cy="12" r="0.5" fill={iconColor} opacity="0.6" />
          <circle cx="21" cy="16" r="1" fill={iconColor} opacity="0.8" />
        </motion.g>
      </motion.svg>
    );
  };

  // Enhanced dot cursor with breathing effect - now shows on hover
  const DotCursor = () => (
    <motion.div
      className="cursor-dot"
      style={{
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        backgroundColor: colors.hover,
        border: `2px solid ${colors.hover}40`,
        boxShadow: `0 0 ${dotSize * 3}px ${colors.hover}50`
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovering ? [1, 1.2, 1] : 0,
        opacity: isHovering ? 1 : 0,
        backgroundColor: isHovering ? colors.hover : colors.default
      }}
      transition={{
        duration: animationSpeed / 1000,
        ease: "easeOut",
        scale: {
          duration: 2,
          repeat: isHovering ? Infinity : 0,
          ease: "easeInOut"
        }
      }}
    />
  );

  // Mouse movement handler with RAF optimization
  const handleMouseMove = useCallback((e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    });
  }, [cursorX, cursorY]);

  // Enhanced visibility handlers
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setIsHovering(false);
  }, []);

  // Hover detection with better performance
  const handleElementHover = useCallback((isHovering) => {
    setIsHovering(isHovering);
  }, []);

  // Listen for custom cursor events
  useEffect(() => {
    const handleCursorHover = (e) => {
      setIsHovering(e.detail.isHovering);
    };

    const handleCursorVariant = (e) => {
      setCursorVariant(e.detail.variant);
    };

    const handleCursorVisibility = (e) => {
      setIsHidden(e.detail.isHidden);
    };

    document.addEventListener('cursor-hover', handleCursorHover);
    document.addEventListener('cursor-variant', handleCursorVariant);
    document.addEventListener('cursor-visibility', handleCursorVisibility);

    return () => {
      document.removeEventListener('cursor-hover', handleCursorHover);
      document.removeEventListener('cursor-variant', handleCursorVariant);
      document.removeEventListener('cursor-visibility', handleCursorVisibility);
    };
  }, []);

  // Mobile detection with better accuracy
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    
    // Listen for orientation changes
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  // Enhanced event listeners setup
  useEffect(() => {
    if (isMobile) return;

    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseEnter = () => handleMouseEnter();
    const handleGlobalMouseLeave = () => handleMouseLeave();

    // Add global mouse listeners with passive option for better performance
    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleGlobalMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleGlobalMouseLeave, { passive: true });

    // Restrict to only buttons and clickable links
    const interactiveSelectors = [
      'a', 'button', '[role="button"]',
      '.btn-primary', '.btn-secondary', '.btn-ghost'
    ].join(', ');
    
    const elements = document.querySelectorAll(interactiveSelectors);

    // Add optimized hover listeners
    elements.forEach(element => {
      const handleElementMouseEnter = () => {
        handleElementHover(true);
        // Add custom cursor class for styling
        element.classList.add('cursor-active');
      };
      
      const handleElementMouseLeave = () => {
        handleElementHover(false);
        // Remove custom cursor class
        element.classList.remove('cursor-active');
      };
      
      element.addEventListener('mouseenter', handleElementMouseEnter, { passive: true });
      element.addEventListener('mouseleave', handleElementMouseLeave, { passive: true });
      
      // Store cleanup function
      element._enhancedCursorCleanup = () => {
        element.removeEventListener('mouseenter', handleElementMouseEnter);
        element.removeEventListener('mouseleave', handleElementMouseLeave);
        element.classList.remove('cursor-active');
      };
    });

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseenter', handleGlobalMouseEnter);
      document.removeEventListener('mouseleave', handleGlobalMouseLeave);
      
      // Enhanced cleanup
      elements.forEach(element => {
        if (element._enhancedCursorCleanup) {
          element._enhancedCursorCleanup();
        }
      });

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, handleMouseMove, handleMouseEnter, handleMouseLeave, handleElementHover]);

  // Don't render on mobile or when hidden
  if (isMobile || isHidden) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'normal'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Enhanced outer glow with color variations */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: size + 15,
              height: size + 15,
              background: `radial-gradient(circle, ${colors.default}20 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(8px)'
            }}
            animate={{
              scale: isHovering ? 1.2 : 1.5,
              opacity: isHovering ? 0.6 : 0.8,
              background: isHovering
                ? `radial-gradient(circle, ${colors.hover}30 0%, transparent 70%)`
                : `radial-gradient(circle, ${colors.default}30 0%, transparent 70%)`
            }}
            transition={{ duration: animationSpeed / 1000, ease: "easeOut" }}
          />
          
          {/* Main cursor container with enhanced animations */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
            animate={{
              scale: isHovering ? 1 : 1.2,
              rotate: !isHovering ? [0, 5, -5, 0] : 0
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 300,
              mass: 0.1,
              rotate: {
                duration: 1,
                repeat: !isHovering ? Infinity : 0,
                ease: "easeInOut"
              }
            }}
          >
            {/* Enhanced dot cursor */}
            <DotCursor />
            
            {/* Enhanced book icon cursor */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookIcon isAnimating={isHovering} variant={cursorVariant} />
            </div>
          </motion.div>

          {/* Trailing particles effect */}
          <motion.div
            className="absolute inset-0 rounded-full border border-current opacity-20"
            style={{
              width: size * 1.5,
              height: size * 1.5,
              transform: 'translate(-50%, -50%)',
              color: isHovering ? colors.hover : colors.default
            }}
            animate={{
              scale: !isHovering ? [1, 1.3, 1] : [1, 1.1, 1],
              opacity: !isHovering ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedCustomCursor;
