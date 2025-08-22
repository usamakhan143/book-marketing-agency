import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimatedSection, { ScrollAnimatedItem } from './ScrollAnimatedSection';
import { 
  scrollFadeUp, 
  scrollFadeLeft, 
  scrollFadeRight, 
  scrollScaleIn,
  cardSlideUp,
  statsAnimation,
  ctaAnimation
} from '../utils/scrollAnimations';
import { 
  DeviceDetection, 
  getAdaptiveAnimationConfig,
  usePerformanceMonitoring
} from '../utils/scrollPerformance';
import { Play, Pause, RefreshCw, Settings, Info } from 'lucide-react';

const ScrollAnimationDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({});
  const [adaptiveConfig, setAdaptiveConfig] = useState(getAdaptiveAnimationConfig());
  const performanceMonitor = usePerformanceMonitoring(true);

  useEffect(() => {
    // Gather device information
    setDeviceInfo({
      isMobile: DeviceDetection.isMobile(),
      prefersReducedMotion: DeviceDetection.prefersReducedMotion(),
      supportsHardwareAcceleration: DeviceDetection.supportsHardwareAcceleration(),
      performanceTier: DeviceDetection.getPerformanceTier(),
      supportsPassiveEvents: DeviceDetection.supportsPassiveEvents()
    });

    if (performanceMonitor) {
      performanceMonitor.start();
    }

    return () => {
      if (performanceMonitor) {
        const metrics = performanceMonitor.stop();
        console.log('Demo Performance Metrics:', metrics);
      }
    };
  }, []);

  const demoSections = [
    {
      title: "Fade Up Animation",
      description: "Smooth fade in with upward motion",
      animation: scrollFadeUp,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Fade Left Animation", 
      description: "Slides in from the left with rotation",
      animation: scrollFadeLeft,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Fade Right Animation",
      description: "Slides in from the right with subtle rotation",
      animation: scrollFadeRight,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Scale In Animation",
      description: "Scales up with rotation effect",
      animation: scrollScaleIn,
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Card Slide Up",
      description: "Card-specific animation with 3D rotation",
      animation: cardSlideUp,
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Stats Animation",
      description: "Perfect for metrics and statistics",
      animation: statsAnimation,
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  const refreshAnimations = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Scroll Animation System Demo
              </h1>
              <p className="text-gray-600">
                Interactive showcase of bidirectional scroll animations with performance optimizations
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              
              <button
                onClick={refreshAnimations}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                Info
              </button>
            </div>
          </div>

          {/* Device Info Panel */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Device Information
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div>Mobile: <span className="font-mono">{deviceInfo.isMobile ? 'Yes' : 'No'}</span></div>
                    <div>Performance Tier: <span className="font-mono capitalize">{deviceInfo.performanceTier}</span></div>
                    <div>Hardware Acceleration: <span className="font-mono">{deviceInfo.supportsHardwareAcceleration ? 'Yes' : 'No'}</span></div>
                    <div>Reduced Motion: <span className="font-mono">{deviceInfo.prefersReducedMotion ? 'Yes' : 'No'}</span></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Adaptive Configuration</h3>
                  <div className="space-y-1 text-sm">
                    <div>Duration: <span className="font-mono">{adaptiveConfig.duration}s</span></div>
                    <div>Stagger Delay: <span className="font-mono">{adaptiveConfig.staggerDelay}ms</span></div>
                    <div>Complex Animations: <span className="font-mono">{adaptiveConfig.enableComplexAnimations ? 'Yes' : 'No'}</span></div>
                    <div>Exit Animations: <span className="font-mono">{adaptiveConfig.exitAnimations ? 'Yes' : 'No'}</span></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Features</h3>
                  <div className="space-y-1 text-sm">
                    <div>GPU Acceleration: <span className="font-mono">✓</span></div>
                    <div>Intersection Observer: <span className="font-mono">✓</span></div>
                    <div>Passive Event Listeners: <span className="font-mono">✓</span></div>
                    <div>Memory Management: <span className="font-mono">✓</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Demo Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {demoSections.map((section, index) => (
          <ScrollAnimatedSection
            key={section.title}
            animation={section.animation}
            threshold={0.2}
            triggerOnce={false}
            className="py-16"
            disabled={!isPlaying}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white px-6 py-3 rounded-full shadow-lg mb-4"
              >
                <span className="text-sm font-semibold text-gray-600">Demo Section {index + 1}</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <ScrollAnimatedItem
                  key={item}
                  animation={section.animation}
                  index={item - 1}
                  delay={item * 100}
                >
                  <div className={`p-8 rounded-xl border-2 ${section.color} hover:shadow-lg transition-shadow duration-300`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{item}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Demo Card {item}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      This card demonstrates the {section.title.toLowerCase()} with smooth entry and exit animations based on scroll direction.
                    </p>
                    <div className="mt-6 space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(item / 3) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-500">Animation Progress</div>
                    </div>
                  </div>
                </ScrollAnimatedItem>
              ))}
            </div>
          </ScrollAnimatedSection>
        ))}

        {/* CTA Demo Section */}
        <ScrollAnimatedSection
          animation={ctaAnimation}
          threshold={0.3}
          triggerOnce={false}
          className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 rounded-3xl"
          disabled={!isPlaying}
        >
          <div className="text-center max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block bg-white/20 px-6 py-3 rounded-full text-white/90 font-semibold mb-6">
                🎉 Scroll Animation System Complete
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Smooth, Professional
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Scroll Animations
                </span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Experience bidirectional scroll animations with performance optimizations, 
                adaptive configurations, and smooth entry/exit effects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "⚡", title: "Performance Optimized", desc: "GPU accelerated with adaptive configurations" },
                { icon: "📱", title: "Mobile Friendly", desc: "Optimized for all devices and connection speeds" },
                { icon: "♿", title: "Accessible", desc: "Respects reduced motion preferences" }
              ].map((feature, index) => (
                <ScrollAnimatedItem
                  key={feature.title}
                  animation={cardSlideUp}
                  index={index}
                  delay={index * 200}
                >
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.desc}</p>
                  </div>
                </ScrollAnimatedItem>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-gray-600">
            Scroll up and down to see the bidirectional animations in action. 
            Animations adapt to your device performance and accessibility preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;
