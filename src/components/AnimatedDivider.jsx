import React from 'react';

const AnimatedDivider = ({ 
  type = 'wave', 
  color = 'gold', 
  className = '',
  animated = true 
}) => {
  const baseClasses = `w-full overflow-hidden ${className}`;
  
  const colorClasses = {
    gold: 'text-gold-500',
    navy: 'text-navy-900',
    white: 'text-white',
    gray: 'text-gray-300'
  };

  const animationClasses = animated ? 'animate-float' : '';

  const renderWave = () => (
    <div className={baseClasses}>
      <svg
        className={`w-full h-16 ${colorClasses[color]} ${animationClasses}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        />
      </svg>
    </div>
  );

  const renderZigzag = () => (
    <div className={`${baseClasses} flex justify-center`}>
      <svg
        className={`w-full h-8 ${colorClasses[color]} ${animationClasses}`}
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M0,20 L60,5 L120,35 L180,5 L240,35 L300,5 L360,35 L420,5 L480,35 L540,5 L600,35 L660,5 L720,35 L780,5 L840,35 L900,5 L960,35 L1020,5 L1080,35 L1140,5 L1200,20" />
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className={`${baseClasses} flex justify-center items-center py-8`}>
      <div className="flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${colorClasses[color].replace('text-', 'bg-')} ${animationClasses} animation-delay-${i * 100}`}
          />
        ))}
      </div>
    </div>
  );

  const renderGradientLine = () => (
    <div className={`${baseClasses} flex justify-center py-8`}>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full shimmer-gold" />
    </div>
  );

  const renderGeometric = () => (
    <div className={`${baseClasses} flex justify-center py-8`}>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 ${colorClasses[color].replace('text-', 'bg-')} transform rotate-45 ${animationClasses}`} />
        <div className={`w-16 h-0.5 ${colorClasses[color].replace('text-', 'bg-')}`} />
        <div className={`w-3 h-3 ${colorClasses[color].replace('text-', 'bg-')} rounded-full ${animationClasses} animation-delay-200`} />
        <div className={`w-16 h-0.5 ${colorClasses[color].replace('text-', 'bg-')}`} />
        <div className={`w-2 h-2 ${colorClasses[color].replace('text-', 'bg-')} transform rotate-45 ${animationClasses} animation-delay-400`} />
      </div>
    </div>
  );

  const renderTypes = {
    wave: renderWave,
    zigzag: renderZigzag,
    dots: renderDots,
    gradient: renderGradientLine,
    geometric: renderGeometric
  };

  return renderTypes[type] ? renderTypes[type]() : renderWave();
};

export default AnimatedDivider;
