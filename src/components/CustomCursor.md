# Custom Book-Themed Cursor

A custom cursor implementation for the Author Glide website featuring a book icon with page-turning animations.

## Features

### 📚 **Default State**
- Animated book icon with detailed SVG paths
- Page-turning animation with floating pages
- Sparkle effects and rotating elements
- Smooth movement with spring animations
- GPU-accelerated performance

### ✨ **Hover Interactions**
- Transforms into elegant breathing dot cursor on interactive elements
- Soft glow effect with enhanced visibility
- Precise interaction targeting
- Smooth transitions between states

### ⚡ **Performance Optimizations**
- RequestAnimationFrame for smooth mouse tracking
- Automatic mobile device detection (cursor disabled on touch devices)
- Efficient event listeners with passive options
- GPU acceleration for animations
- Memory leak prevention with proper cleanup

## Components

### 1. `EnhancedCustomCursor`
Main cursor component with full functionality.

```jsx
<EnhancedCustomCursor 
  size={32}
  dotSize={8}
  colors={{
    default: '#f59e0b',
    hover: '#fbbf24',
    accent: '#102a43'
  }}
  animationSpeed={300}
/>
```

### 2. `useCursor` Hook
Utility hook for managing cursor interactions.

```jsx
import { useCursor } from '../hooks/useCursor';

const MyComponent = () => {
  const { bookHover } = useCursor();
  
  return (
    <button {...bookHover}>
      Click me!
    </button>
  );
};
```

## Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | number | 32 | Size of the cursor in pixels |
| `dotSize` | number | 8 | Size of the default dot cursor |
| `colors.default` | string | '#f59e0b' | Default cursor color |
| `colors.hover` | string | '#fbbf24' | Hover state color |
| `colors.accent` | string | '#102a43' | Accent color for effects |
| `animationSpeed` | number | 300 | Animation speed in milliseconds |

## Interactive Elements

The cursor automatically detects and responds to these elements only:
- `<a>` tags (links)
- `<button>` elements
- Elements with `role="button"`
- Custom button classes (`.btn-primary`, `.btn-secondary`, `.btn-ghost`)

**Note:** Form elements like inputs, textareas, and selects will maintain the default system cursor for better usability.

## Usage Examples

### Basic Integration
```jsx
import EnhancedCustomCursor from './components/EnhancedCustomCursor';

function App() {
  return (
    <div>
      {/* Your app content */}
      <EnhancedCustomCursor />
    </div>
  );
}
```

### Custom Hover Handlers
```jsx
import { useCursor } from './hooks/useCursor';

const MyButton = () => {
  const { createHoverHandler } = useCursor();
  const hoverProps = createHoverHandler('book');
  
  return (
    <button 
      className="btn-primary"
      {...hoverProps}
    >
      Hover for book animation!
    </button>
  );
};
```

### Manual Cursor Control
```jsx
import { useCursor } from './hooks/useCursor';

const MyComponent = () => {
  const { setCursorHover, hideCursor } = useCursor();
  
  const handleSpecialHover = () => {
    setCursorHover(true);
  };
  
  const handleHideOnScroll = () => {
    hideCursor(true);
    setTimeout(() => hideCursor(false), 1000);
  };
  
  return (
    <div onMouseEnter={handleSpecialHover}>
      Special interaction area
    </div>
  );
};
```

## CSS Integration

The cursor automatically hides the default system cursor:

```css
body {
  cursor: none; /* Hide default cursor on desktop */
}

/* Hide default cursor on interactive elements */
a, button, [role="button"], input, textarea, select {
  cursor: none;
}

/* Restore cursor on mobile/touch devices */
@media (hover: none) and (pointer: coarse) {
  body, a, button {
    cursor: auto !important;
  }
}
```

## Mobile Behavior

- Automatically detects mobile/touch devices
- Disables custom cursor on mobile for better performance
- Falls back to system cursor on touch devices
- Responsive to orientation changes

## Performance Features

### Optimizations
- **RAF-based mouse tracking**: Smooth 60fps movement
- **Event delegation**: Efficient hover detection
- **Passive event listeners**: Non-blocking scroll performance
- **Automatic cleanup**: Prevents memory leaks
- **GPU acceleration**: Hardware-accelerated animations

### Memory Management
- Automatic event listener cleanup on unmount
- Cancellation of pending animation frames
- Efficient element selection and caching
- No memory leaks in long-running applications

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Testing

Visit `/cursor-demo` to test all cursor interactions and animations in a dedicated demo environment. You'll see the book animation by default, and when you hover over interactive elements, the cursor will transform into an elegant dot.

## Troubleshooting

### Cursor not appearing
- Check if device is detected as mobile
- Verify CSS `cursor: none` is applied
- Ensure component is rendered after Layout

### Performance issues
- Reduce `animationSpeed` value
- Check for conflicting CSS animations
- Verify RAF cleanup is working properly

### Animation not triggering
- Verify element has correct selectors
- Check event listener attachment
- Ensure hover handlers are properly bound

## Future Enhancements

- [ ] Multiple cursor variants (writing, reading, etc.)
- [ ] Sound effects integration
- [ ] Custom cursor paths/shapes
- [ ] Theme-based color switching
- [ ] Accessibility improvements
- [ ] Touch gesture support
