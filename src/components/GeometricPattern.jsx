import React, { useEffect, useRef } from 'react';

const GeometricPattern = ({ className = '' }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Create animated paths
    const paths = svg.querySelectorAll('path');
    paths.forEach((path, index) => {
      path.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Animated geometric shapes */}
        <g className="animate-float-slow">
          <path
            d="M200,100 L400,50 L600,150 L400,250 Z"
            fill="url(#heroGradient1)"
            className="animate-pulse"
          />
        </g>

        <g className="animate-float-fast">
          <circle
            cx="800"
            cy="200"
            r="80"
            fill="url(#heroGradient2)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </g>

        <g className="animate-float">
          <path
            d="M1000,300 L1100,250 L1150,350 L1050,400 L950,350 Z"
            fill="url(#heroGradient1)"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </g>

        <g className="animate-float-slow">
          <rect
            x="100"
            y="500"
            width="120"
            height="120"
            rx="20"
            fill="url(#heroGradient2)"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
            transform="rotate(45 160 560)"
          />
        </g>

        <g className="animate-float-fast">
          <path
            d="M600,600 L700,550 L750,650 L650,700 Z"
            fill="url(#heroGradient1)"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </g>

        <g className="animate-float">
          <circle
            cx="300"
            cy="700"
            r="60"
            fill="url(#heroGradient2)"
            className="animate-pulse"
            style={{ animationDelay: '2.5s' }}
          />
        </g>

        {/* Connecting lines */}
        <g className="opacity-50">
          <line
            x1="200"
            y1="100"
            x2="800"
            y2="200"
            stroke="url(#heroGradient1)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '3s' }}
          />
          <line
            x1="600"
            y1="150"
            x2="1000"
            y2="300"
            stroke="url(#heroGradient2)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '3.5s' }}
          />
        </g>
      </svg>
    </div>
  );
};

export default GeometricPattern;
