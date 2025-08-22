import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Enhanced loading component with better UX
const EnhancedLoader = ({ message = 'Loading...', size = 'default' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-gold-500 border-t-transparent rounded-full mb-4`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        className="text-gray-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

// Section loader for individual sections
export const SectionLoader = ({ height = 'min-h-64' }) => (
  <div className={`${height} bg-gray-50 animate-pulse rounded-2xl flex items-center justify-center`}>
    <EnhancedLoader size="small" message="Loading section..." />
  </div>
);

// Page loader for full pages
export const PageLoader = ({ message = 'Loading page...' }) => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <EnhancedLoader message={message} />
  </div>
);

// Component loader for lazy components
export const ComponentLoader = ({ message = 'Loading component...' }) => (
  <div className="animate-pulse bg-gray-200 h-32 rounded-xl flex items-center justify-center">
    <EnhancedLoader size="small" message={message} />
  </div>
);

// LazyWrapper with error boundary
class LazyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">Failed to load component</h3>
          <p className="text-red-700 mb-4">Something went wrong while loading this section.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main LazyWrapper component
export const LazyWrapper = ({ 
  children, 
  fallback = <ComponentLoader />,
  errorBoundary = true 
}) => {
  const content = (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );

  if (errorBoundary) {
    return <LazyErrorBoundary>{content}</LazyErrorBoundary>;
  }

  return content;
};

export default LazyWrapper;
