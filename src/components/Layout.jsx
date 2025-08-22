import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SkipNavigation from './SkipNavigation';
import EnhancedCustomCursor from './EnhancedCustomCursor';
import { 
  Menu, 
  X, 
  BookOpen, 
  Target, 
  Users, 
  TrendingUp, 
  DollarSign, 
  HelpCircle, 
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: BookOpen },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Target },
    { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (href) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white max-w-full overflow-x-hidden">
      <SkipNavigation />

      {/* Topbar with Gradient - Scrolls away */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 text-white py-2 overflow-hidden w-full max-w-full"
        style={{ width: '100vw', maxWidth: '100vw' }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="header-container">
          <div className="flex items-center justify-center text-center px-2">
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 max-w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium text-gray-100 text-xs sm:text-sm truncate">
                <span className="hidden xs:inline">🚀 </span>Transform Your Book Marketing •
                <span className="text-gold-400 font-semibold"> Join 500+ Authors</span>
                <span className="hidden sm:inline"> • Free Consultation Available</span>
              </span>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full animate-pulse flex-shrink-0"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Navigation - Sticky on scroll */}
      <motion.nav
        className={`fixed left-0 right-0 transition-all duration-300 overflow-hidden w-full max-w-full ${
          isScrolled
            ? 'top-0 z-50 nav-glass shadow-xl'
            : 'nav-with-topbar z-40 bg-white/80 backdrop-blur-sm'
        }`}
        style={{ width: '100vw', maxWidth: '100vw' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-container">
          <div className="flex justify-between items-center py-3 lg:py-4 w-full min-w-0 max-w-full overflow-hidden">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 group mr-1 sm:mr-2 lg:mr-6 flex-1 min-w-0 max-w-full overflow-hidden">
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <BookOpen className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-gold-500" />
                </div>
                <motion.div
                  className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 sm:w-3 lg:w-4 h-2.5 sm:h-3 lg:h-4 bg-gold-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 text-white m-0.5" />
                </motion.div>
              </motion.div>
              <div className="flex flex-col min-w-0 flex-shrink overflow-hidden">
                <span className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-300 truncate whitespace-nowrap">
                  Author<span className="text-gold-500">Glide</span>
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide hidden xl:block">
                  Book Marketing Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`group flex items-center xl:space-x-1 px-1 lg:px-2 xl:px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-sm xl:text-base whitespace-nowrap ${
                        isActive(item.href)
                          ? 'bg-gold-100 text-gold-700 shadow-md'
                          : 'text-navy-700 hover:bg-gray-100 hover:text-gold-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 hidden xl:block" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="btn-primary ml-2 xl:ml-4 group whitespace-nowrap text-sm lg:text-sm xl:text-base px-4 lg:px-6 py-2 lg:py-3"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-gray-200 text-navy-700 transition-colors duration-200 flex-shrink-0"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Container */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden overflow-hidden relative z-50"
                >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mx-4 mt-2 mb-4">
                  <div className="space-y-3">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                              isActive(item.href)
                                ? 'bg-gold-100 text-gold-700 shadow-md'
                                : 'text-navy-700 hover:bg-gray-50'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-primary w-full justify-center"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main id="main-content" className="pt-20 lg:pt-24" tabIndex={-1}>
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="gradient-bg text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>

        <div className="relative">
          {/* Newsletter Section */}
          <div className="border-b border-white/10">
            <div className="container-custom section-padding-sm">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    Stay Updated with Author Marketing Tips
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Get weekly insights, strategies, and success stories delivered to your inbox
                  </p>
                  <div className="max-w-md mx-auto flex gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    <button className="btn-primary px-6">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="container-custom section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Link to="/" className="flex items-center space-x-3 mb-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                      Author<span className="text-gold-500">Glide</span>
                    </span>
                    <span className="text-sm text-gray-300">Book Marketing Experts</span>
                  </div>
                </Link>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
                  Empowering authors to reach their readers through strategic, results-driven marketing. 
                  Your literary success story starts here.
                </p>
                
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Youtube, href: '#', label: 'YouTube' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gold-500 transition-all duration-300 hover:scale-110"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 text-gold-500 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {[
                    'Amazon Advertising',
                    'Social Media Marketing',
                    'Email Campaigns',
                    'Press & PR',
                    'SEO Optimization',
                    'Paid Advertising'
                  ].map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                        {service}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 text-gold-500 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <Mail className="w-5 h-5 text-gold-500 mt-1 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:hello@authorglide.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                        hello@authorglide.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <Phone className="w-5 h-5 text-gold-500 mt-1 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+15551234567" className="text-gray-300 hover:text-gold-400 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <MapPin className="w-5 h-5 text-gold-500 mt-1 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">New York, NY</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-sm text-gray-300 flex items-center">
                      <Sparkles className="w-4 h-4 text-gold-500 mr-2" />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-center py-8 space-y-4 md:space-y-0">
                <motion.p 
                  className="text-gray-400 text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  &copy; 2025 Author Glide. All rights reserved.
                </motion.p>
                
                <motion.div 
                  className="flex space-x-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {[
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
                    { name: 'Cookie Policy', href: '/cookie-policy' }
                  ].map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Custom Cursor */}
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
    </div>
  );
};

export default Layout;
