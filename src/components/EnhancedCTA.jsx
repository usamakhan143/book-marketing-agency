import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedCTA = ({ 
  to, 
  children, 
  variant = 'primary', 
  size = 'lg',
  className = '',
  icon: Icon,
  endIcon: EndIcon,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const variants = {
    primary: 'bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-white shadow-2xl hover:shadow-gold-500/25',
    secondary: 'bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20',
    ghost: 'bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white'
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl'
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    buttonRef.current.style.setProperty('--mouse-x', `${x}px`);
    buttonRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleClick = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const baseClasses = `
    relative overflow-hidden font-semibold rounded-2xl
    transition-all duration-300 ease-out
    transform-gpu cursor-pointer
    group inline-flex items-center justify-center
    hover:scale-105 active:scale-95
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const buttonContent = (
    <>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      
      {/* Mouse Follow Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(100px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 70%)`
        }}
      />
      
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex items-center space-x-3">
        {Icon && (
          <Icon className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        )}
        <span className="font-bold tracking-wide">{children}</span>
        {EndIcon && (
          <EndIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
        )}
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-gold-400/20 via-gold-500/30 to-gold-600/20 blur-xl -z-10" />
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default EnhancedCTA;
