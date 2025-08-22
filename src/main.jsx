import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize our custom performance monitoring
import('./utils/performance.js').then(({ initPerformanceMonitoring }) => {
  initPerformanceMonitoring();
}).catch((error) => {
  console.log('Performance monitoring initialization failed:', error);
});
