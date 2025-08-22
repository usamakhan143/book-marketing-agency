import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';
import {
  BookOpen,
  Target,
  Users,
  Mail,
  ArrowRight,
  Star,
  Heart,
  Zap
} from 'lucide-react';

const CursorDemo = () => {
  const { createHoverHandler } = useCursor();
  const bookHover = createHoverHandler('book');

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-navy-900 mb-4">
            Custom Cursor Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our book-themed cursor! By default, you'll see an animated book with page-turning effects. Hover over interactive elements to see it transform into an elegant dot.
          </p>
        </motion.div>

        {/* Interactive Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Button Examples */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-gold-500" />
              Interactive Buttons
            </h3>
            <div className="space-y-4">
              <button 
                className="w-full btn-primary"
                {...bookHover}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Primary Button
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button 
                className="w-full btn-secondary"
                {...bookHover}
              >
                <Users className="w-5 h-5 mr-2" />
                Secondary Button
              </button>
              
              <button 
                className="w-full bg-white/10 backdrop-blur-md text-navy-900 font-semibold rounded-xl border border-gray-200 px-6 py-3 hover:bg-gray-50 transition-colors duration-300"
                {...bookHover}
              >
                <Mail className="w-5 h-5 mr-2" />
                Ghost Button
              </button>
            </div>
          </motion.div>

          {/* Link Examples */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-gold-500" />
              Text Links
            </h3>
            <div className="space-y-4">
              <a 
                href="#" 
                className="block text-gold-600 hover:text-gold-700 font-semibold transition-colors duration-200"
                {...bookHover}
              >
                → Explore Our Services
              </a>
              
              <a 
                href="#" 
                className="block text-navy-700 hover:text-navy-800 underline transition-colors duration-200"
                {...bookHover}
              >
                Read Success Stories
              </a>
              
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
                {...bookHover}
              >
                Contact Information
              </a>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 mb-2">Social Links:</p>
                <div className="flex space-x-3">
                  {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gold-600 hover:text-gold-700 font-medium transition-colors duration-200"
                      {...bookHover}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Examples */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-gold-500" />
              Regular Elements
            </h3>
            
            {/* Example Card (No cursor change) */}
            <div
              className="p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl border border-gold-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg"
            >
              <Star className="w-8 h-8 text-gold-600 mb-3" />
              <h4 className="font-bold text-navy-900 mb-2">Example Card</h4>
              <p className="text-gray-600 text-sm">
                This card maintains the default book cursor animation. Only buttons and links trigger the dot cursor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Form Elements */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-gold-500" />
            Form Elements (Default Cursor)
          </h3>

          <p className="text-gray-600 mb-6">
            Form elements maintain the default system cursor for better usability. The book cursor will continue to animate while you interact with these elements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-navy-900 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div>
              <label className="block text-navy-900 font-medium mb-2">
                Book Genre
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
              >
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Romance</option>
                <option>Thriller</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-navy-900 font-medium mb-2">
                Tell us about your book
              </label>
              <textarea
                rows={4}
                placeholder="Describe your book and marketing goals..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none transition-all duration-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-gold-400" />
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Default State</h4>
              <p className="text-gray-300 text-sm">
                The cursor appears as an animated book with page-turning effects, sparkles, and floating pages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Hover Detection</h4>
              <p className="text-gray-300 text-sm">
                When you hover over buttons and clickable links specifically, the cursor detects the interaction and prepares to transform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Elegant Dot</h4>
              <p className="text-gray-300 text-sm">
                The cursor transforms into an elegant breathing dot with soft glow for precise interactions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CursorDemo;
