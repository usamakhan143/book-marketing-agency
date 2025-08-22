import React, { useCallback } from 'react';

/**
 * Custom hook to manage cursor interactions
 * Provides utilities for components to interact with the custom cursor
 */
export const useCursor = () => {
  // Set cursor to hover state
  const setCursorHover = useCallback((isHovering = true) => {
    const event = new CustomEvent('cursor-hover', { 
      detail: { isHovering } 
    });
    document.dispatchEvent(event);
  }, []);

  // Set cursor variant
  const setCursorVariant = useCallback((variant = 'default') => {
    const event = new CustomEvent('cursor-variant', { 
      detail: { variant } 
    });
    document.dispatchEvent(event);
  }, []);

  // Hide cursor temporarily
  const hideCursor = useCallback((isHidden = true) => {
    const event = new CustomEvent('cursor-visibility', { 
      detail: { isHidden } 
    });
    document.dispatchEvent(event);
  }, []);

  // Enhanced hover handlers for components
  const onMouseEnter = useCallback(() => {
    setCursorHover(true);
  }, [setCursorHover]);

  const onMouseLeave = useCallback(() => {
    setCursorHover(false);
  }, [setCursorHover]);

  // Special hover handler for different cursor types
  const createHoverHandler = useCallback((variant = 'book') => ({
    onMouseEnter: () => {
      setCursorVariant(variant);
      setCursorHover(true);
    },
    onMouseLeave: () => {
      setCursorVariant('default');
      setCursorHover(false);
    }
  }), [setCursorVariant, setCursorHover]);

  return {
    setCursorHover,
    setCursorVariant,
    hideCursor,
    onMouseEnter,
    onMouseLeave,
    createHoverHandler,
    // Pre-built handlers for common use cases
    bookHover: createHoverHandler('book'),
    buttonHover: createHoverHandler('button'),
    linkHover: createHoverHandler('link')
  };
};


/**
 * Utility function to add cursor class to elements
 */
export const addCursorClass = (element, className = 'cursor-interactive') => {
  if (element && typeof element.classList !== 'undefined') {
    element.classList.add(className);
  }
};

/**
 * Cursor variants configuration
 */
export const CURSOR_VARIANTS = {
  DEFAULT: 'default',
  BOOK: 'book',
  BUTTON: 'button',
  LINK: 'link',
  TEXT: 'text',
  LOADING: 'loading'
};

export default useCursor;
