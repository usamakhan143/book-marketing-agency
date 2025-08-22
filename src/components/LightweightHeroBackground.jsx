import React, { useEffect, useRef, useState } from 'react';

const LightweightHeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) return; // Throttle mouse events
      
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setMousePosition({ x, y });
        rafId = null;
      });
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900" />
      
      {/* Mouse-following gradient (optimized) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(245, 158, 11, 0.08), transparent 60%)`,
          willChange: 'background'
        }}
      />
      
      {/* Lightweight animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-gold-500/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Floating particles (CSS only) */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gold-400/20 rounded-full animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              willChange: 'transform'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LightweightHeroBackground;
