import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const DynamicStats = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    growth: 0,
    readers: 0,
    success: 0
  });
  const containerRef = useRef(null);

  const stats = [
    {
      icon: TrendingUp,
      value: 342,
      suffix: '%',
      label: 'Sales Growth',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      glowColor: 'shadow-emerald-500/20'
    },
    {
      icon: Users,
      value: 2.5,
      suffix: 'M+',
      label: 'Readers Reached',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      glowColor: 'shadow-blue-500/20'
    },
    {
      icon: Target,
      value: 89,
      suffix: '%',
      label: 'Success Rate',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      glowColor: 'shadow-purple-500/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px' // Start animation earlier for smoother experience
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (start, end, duration, key, formatter = (val) => val) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;

        setAnimatedValues(prev => ({
          ...prev,
          [key]: formatter(current)
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Animate each stat with optimized timing for better performance
    setTimeout(() => animateValue(0, 342, 1500, 'growth'), 100);
    setTimeout(() => animateValue(0, 2.5, 1600, 'readers', (val) => Math.round(val * 10) / 10), 200);
    setTimeout(() => animateValue(0, 89, 1400, 'success'), 300);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 ${className}`}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        let displayValue;

        switch (index) {
          case 0:
            displayValue = Math.round(animatedValues.growth);
            break;
          case 1:
            displayValue = animatedValues.readers;
            break;
          case 2:
            displayValue = Math.round(animatedValues.success);
            break;
          default:
            displayValue = 0;
        }

        return (
          <div
            key={index}
            className={`
              relative group cursor-pointer overflow-hidden
              bg-black/20 backdrop-blur-lg border border-white/10
              rounded-2xl p-3 lg:p-4
              hover:bg-black/30 hover:border-white/20
              transition-all duration-300 ease-out
              ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}
              min-h-[100px] lg:min-h-[120px] max-h-[140px]
              flex flex-col justify-center items-center
              max-w-full
            `}
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Subtle Glow Effect */}
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
              bg-gradient-to-br ${stat.color.replace('text-', 'from-')} via-transparent to-transparent
              transition-opacity duration-300 blur-lg
            `} />

            {/* Compact Icon */}
            <div className={`
              relative z-10 flex items-center justify-center
              w-10 h-10 lg:w-12 lg:h-12
              ${stat.color} rounded-lg mb-3
              group-hover:scale-110 transition-transform duration-300
            `}>
              <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>

            {/* Compact Number Display */}
            <div className="relative z-10 text-center max-w-full">
              <div className={`
                text-xl lg:text-2xl font-bold text-white
                group-hover:scale-105 transition-transform duration-300
                leading-none mb-1 truncate
              `}>
                {displayValue}
                <span className="text-lg lg:text-xl ml-0.5 font-semibold">{stat.suffix}</span>
              </div>
              <div className="text-xs lg:text-sm text-gray-300 font-medium leading-tight px-1">
                {stat.label}
              </div>
            </div>

            {/* Clean Border Highlight */}
            <div className={`
              absolute inset-0 rounded-2xl border ${stat.color.replace('text-', 'border-')}
              opacity-0 group-hover:opacity-30 transition-opacity duration-300
            `} />
          </div>
        );
      })}
    </div>
  );
};

export default DynamicStats;
