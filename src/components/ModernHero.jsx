import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  Mail, 
  Star,
  Award,
  Trophy,
  Play
} from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

// Lazy load the DynamicStats component
const DynamicStats = lazy(() => import('./DynamicStats'));

const ModernHero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [heroRef, , hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const authorAvatars = [
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp',
    'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&format=webp'
  ];

  const heroVariants = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  } : {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
      aria-label="Hero section"
    >
      {/* Optimized Background with reduced complexity */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto"
          variants={heroVariants}
          initial="initial"
          animate={hasIntersected ? "animate" : "initial"}
        >
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-left space-y-6 lg:space-y-8">
            
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gold-500/20 backdrop-blur-md rounded-full border border-gold-400/30 text-gold-300 font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-white">#1 Book Marketing Agency</span>
                <div className="ml-2 lg:ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={staggerItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5rem font-black leading-[0.9] lg:leading-[0.85]">
                <span className="block text-white">Transform Your</span>
                <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  Literary Dreams
                </span>
                <span className="block text-white">Into Reality</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light"
              variants={staggerItem}
            >
              Join the <span className="text-gold-400 font-semibold">500+ successful authors</span> who transformed their publishing dreams into <span className="text-emerald-400 font-semibold">bestseller reality</span> with our proven strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              variants={staggerItem}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  aria-label="Launch marketing campaign"
                >
                  <Rocket className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span>Launch My Campaign</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Schedule free strategy call"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>Free Strategy Call</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8"
              variants={staggerItem}
            >
              {/* Author Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2 lg:-space-x-3">
                  {authorAvatars.map((img, i) => (
                    <OptimizedImage
                      key={i}
                      src={img}
                      alt={`Success story ${i + 1}`}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/20 hover:scale-110 transition-transform duration-300 shadow-lg"
                      aspectRatio="aspect-square"
                      priority={i < 2}
                    />
                  ))}
                </div>
                <div className="ml-3 lg:ml-4">
                  <div className="text-white font-semibold text-sm lg:text-base">500+ Success Stories</div>
                  <div className="text-gold-400 text-xs lg:text-sm">Join our author community</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <div className="flex text-gold-400 mr-2 lg:mr-3" role="img" aria-label="5 star rating">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm lg:text-base">4.9/5 Rating</div>
                  <div className="text-gray-400 text-xs lg:text-sm">200+ reviews</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Showcase - 5 columns */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <motion.div 
              className="relative"
              variants={fadeInRight}
            >
              {/* Glassmorphism Container */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 shadow-xl p-5 lg:p-6 hover:bg-white/10 transition-all duration-500">
                
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                    Success Metrics
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-sm mx-auto">
                    Real results from <span className="text-gold-400 font-semibold">real campaigns</span>
                  </p>
                </div>

                {/* Stats Component with Suspense */}
                <div className="stats-container mb-6 lg:mb-8">
                  <Suspense fallback={
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-3 lg:p-4 min-h-[100px] animate-pulse" />
                      ))}
                    </div>
                  }>
                    <DynamicStats className="mb-6 lg:mb-8" />
                  </Suspense>
                </div>

                {/* Achievement Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-300">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Industry Leader</div>
                    <div className="text-emerald-400 text-xs">5+ Years</div>
                  </div>
                  <div className="text-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300">
                    <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Proven Results</div>
                    <div className="text-blue-400 text-xs">89% Success</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-8 bg-white/30 rounded-full" />
      </motion.div>
    </section>
  );
};

export default ModernHero;
