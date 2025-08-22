import React, { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFloatingElement = (index) => {
      const element = document.createElement('div');
      const size = Math.random() * 80 + 20;
      const isCircle = Math.random() > 0.5;
      
      element.className = `floating-element-${index}`;
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${Math.random() > 0.6 ? 
          'linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.3))' : 
          'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))'
        };
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: ${isCircle ? '50%' : '20px'};
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float-${index} ${Math.random() * 10 + 15}s ease-in-out infinite;
        transform-origin: center;
        pointer-events: none;
        z-index: 1;
      `;

      // Create unique animation for each element
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float-${index} {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% { 
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(90deg) scale(1.1);
          }
          50% { 
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) rotate(180deg) scale(0.9);
          }
          75% { 
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(270deg) scale(1.05);
          }
        }
      `;
      document.head.appendChild(style);

      container.appendChild(element);
      
      return { element, style };
    };

    // Create fewer floating elements for better performance
    const elements = [];
    const elementCount = window.innerWidth > 1200 ? 6 : 4;
    for (let i = 0; i < elementCount; i++) {
      elements.push(createFloatingElement(i));
    }

    return () => {
      elements.forEach(({ element, style }) => {
        if (element.parentNode) element.parentNode.removeChild(element);
        if (style.parentNode) style.parentNode.removeChild(style);
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingElements;
