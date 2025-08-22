import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = ({
  size = 32,
  dotSize = 8,
  color = '#f59e0b', // Gold color from theme
  animationSpeed = 300,
  springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const animationRef = useRef(null);

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animations for smooth following
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Book icon SVG component
  const BookIcon = ({ isAnimating }) => (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="cursor-book-icon"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ 
        scale: isHovering ? 1 : 0,
        rotate: isAnimating ? [0, -5, 5, 0] : 0
      }}
      transition={{ 
        duration: animationSpeed / 1000,
        ease: "easeOut",
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
          repeat: isAnimating ? Infinity : 0,
          repeatType: "loop"
        }
      }}
    >
      {/* Book cover */}
      <motion.path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(245, 158, 11, 0.1)"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 0.1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Page flip lines */}
      <motion.g
        initial={{ opacity: 0, x: -5 }}
        animate={{ 
          opacity: isAnimating ? [0, 1, 0] : 0.6,
          x: isAnimating ? [-5, 0, 5] : 0
        }}
        transition={{ 
          duration: 0.8,
          repeat: isAnimating ? Infinity : 0,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <path d="M9 7h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 15h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
      
      {/* Floating pages effect */}
      <motion.path
        d="M14 3v4l2-1 2 1V3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(245, 158, 11, 0.2)"
        initial={{ scale: 0, y: -5 }}
        animate={{ 
          scale: isAnimating ? [0, 1, 0] : 0,
          y: isAnimating ? [-5, -10, -5] : -5
        }}
        transition={{ 
          duration: 1.2,
          repeat: isAnimating ? Infinity : 0,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.3
        }}
      />
    </motion.svg>
  );

  // Dot cursor component
  const DotCursor = () => (
    <motion.div
      className="cursor-dot"
      style={{
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 ${dotSize * 2}px rgba(245, 158, 11, 0.3)`
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isHovering ? 0 : 1,
        opacity: isHovering ? 0 : 1
      }}
      transition={{ 
        duration: animationSpeed / 1000,
        ease: "easeOut"
      }}
    />
  );

  // Mouse movement handler with optimized performance
  const handleMouseMove = useCallback((e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    });
  }, [cursorX, cursorY]);

  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setIsHovering(false);
  }, []);

  // Hover detection for interactive elements
  const handleElementHover = useCallback((isHovering) => {
    setIsHovering(isHovering);
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isMobile) return;

    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseEnter = () => handleMouseEnter();
    const handleGlobalMouseLeave = () => handleMouseLeave();

    // Add global mouse listeners
    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleGlobalMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleGlobalMouseLeave, { passive: true });

    // Interactive elements selector
    const interactiveElements = 'a, button, [role="button"], input, textarea, select, [tabindex], .cursor-pointer';
    const elements = document.querySelectorAll(interactiveElements);

    // Add hover listeners to interactive elements
    elements.forEach(element => {
      const handleElementMouseEnter = () => handleElementHover(true);
      const handleElementMouseLeave = () => handleElementHover(false);
      
      element.addEventListener('mouseenter', handleElementMouseEnter, { passive: true });
      element.addEventListener('mouseleave', handleElementMouseLeave, { passive: true });
      
      // Store cleanup functions
      element._cursorCleanup = () => {
        element.removeEventListener('mouseenter', handleElementMouseEnter);
        element.removeEventListener('mouseleave', handleElementMouseLeave);
      };
    });

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseenter', handleGlobalMouseEnter);
      document.removeEventListener('mouseleave', handleGlobalMouseLeave);
      
      // Cleanup element listeners
      elements.forEach(element => {
        if (element._cursorCleanup) {
          element._cursorCleanup();
        }
      });

      // Cancel any pending animation frames
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, handleMouseMove, handleMouseEnter, handleMouseLeave, handleElementHover]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
          style={{
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Outer glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: size + 10,
              height: size + 10,
              background: `radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 0.3
            }}
            transition={{ duration: animationSpeed / 1000 }}
          />
          
          {/* Main cursor container */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
            animate={{ scale: isHovering ? 1.2 : 1 }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 300,
              mass: 0.1
            }}
          >
            {/* Default dot cursor */}
            <DotCursor />
            
            {/* Book icon cursor */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookIcon isAnimating={isHovering} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
