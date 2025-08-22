import React from 'react';

const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 transition-all duration-200"
      tabIndex={1}
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;
