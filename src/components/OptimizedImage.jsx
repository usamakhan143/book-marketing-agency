import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  aspectRatio = 'aspect-video',
  objectFit = 'object-cover',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'blur',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generate WebP and fallback URLs
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return '';
    
    // If it's already a data URL or blob, return as is
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }

    // For external URLs (like Pexels), try to add WebP support
    if (originalSrc.includes('pexels.com')) {
      // Pexels supports format conversion via URL parameters
      const separator = originalSrc.includes('?') ? '&' : '?';
      return `${originalSrc}${separator}auto=compress&cs=tinysrgb&format=webp`;
    }

    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const containerClasses = `
    relative overflow-hidden ${aspectRatio} ${className}
    ${isLoading ? 'bg-gray-200 animate-pulse' : ''}
  `;

  const imageClasses = `
    w-full h-full ${objectFit} transition-all duration-300
    ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
    ${hasError ? 'hidden' : ''}
  `;

  if (priority) {
    // For above-the-fold images, load immediately without lazy loading
    return (
      <div className={containerClasses} style={{ width, height }}>
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          className={imageClasses}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          loading="eager"
          decoding="async"
          {...props}
        />
        {hasError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-xs">Image unavailable</p>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={containerClasses} style={{ width, height }}>
      <LazyLoadImage
        src={getOptimizedSrc(src)}
        alt={alt}
        className={imageClasses}
        width={width}
        height={height}
        sizes={sizes}
        effect={placeholder}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
