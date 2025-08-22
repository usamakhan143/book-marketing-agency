import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedDivider from '../components/AnimatedDivider';
import LightweightHeroBackground from '../components/LightweightHeroBackground';
import EnhancedCTA from '../components/EnhancedCTA';
import DynamicStats from '../components/DynamicStats';
import { useScrollReveal, useScrollRevealMultiple } from '../hooks/useScrollReveal';
import {
  BookOpen,
  Target,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Zap,
  BarChart3,
  Globe,
  Heart,
  Rocket,
  Shield,
  Clock,
  MessageSquare,
  DollarSign,
  Sparkles,
  ChevronRight,
  Quote,
  MousePointer,
  Send,
  Trophy,
  Mail
} from 'lucide-react';

const Home = () => {
  // Initialize scroll reveal for multiple elements
  const aboutSectionRef = useScrollReveal();
  const aboutCardsRef = useScrollReveal();

  // Initialize scroll reveal for multiple similar elements (call hooks at component level)
  useScrollRevealMultiple('.scroll-reveal');
  useScrollRevealMultiple('.scroll-reveal-left');
  useScrollRevealMultiple('.scroll-reveal-right');
  useScrollRevealMultiple('.scroll-reveal-scale');

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Author Glide",
    "description": "Professional book marketing services for independent authors, publishers, and self-published writers",
    "url": "https://authorglide.com",
    "telephone": "+1-555-123-4567",
    "email": "hello@authorglide.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/authorglide",
      "https://twitter.com/authorglide",
      "https://linkedin.com/company/authorglide"
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEO
        title="Professional Book Marketing Services for Authors"
        description="Increase your book sales with Author Glide's proven marketing strategies. Amazon ads, social media marketing, PR campaigns, and more for independent authors."
        keywords="book marketing services for authors, promote my book online, amazon book advertising, affordable book marketing company, book promotion for self-published authors"
        canonical="/"
        schema={schema}
      />
      
      <div className="min-h-screen smooth-scroll">
        
        {/* 1. Optimized Interactive Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden dark-section">
          {/* Optimized Lightweight Background */}
          <LightweightHeroBackground />

          <div className="container-custom relative z-20 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

              {/* Optimized Hero Content */}
              <div className="lg:col-span-1 xl:col-span-7 text-left space-y-6 lg:space-y-8">
                {/* Optimized Badge */}
                <div className="animate-fade-in animation-delay-200">
                  <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gold-500/20 backdrop-blur-md rounded-full border border-gold-400/30 text-gold-300 font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-white">
                      #1 Book Marketing Agency
                    </span>
                    <div className="ml-2 lg:ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Responsive Headline */}
                <div className="animate-fade-in animation-delay-400">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] lg:leading-[0.85]">
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-scale-in-bounce animation-delay-600">
                      Literary Dreams
                    </span>
                    <span className="block text-white">Into Reality</span>
                  </h1>
                </div>

                {/* Optimized Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in animation-delay-500 font-light">
                  Join the <span className="text-gold-400 font-semibold">500+ successful authors</span> who transformed their publishing dreams into <span className="text-emerald-400 font-semibold">bestseller reality</span> with our proven strategies.
                </p>

                {/* Simplified CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in animation-delay-700">
                  <EnhancedCTA
                    to="/contact"
                    variant="primary"
                    size="lg"
                    icon={Rocket}
                    endIcon={ArrowRight}
                    className="group"
                  >
                    Launch My Campaign
                  </EnhancedCTA>

                  <EnhancedCTA
                    to="/contact"
                    variant="secondary"
                    size="lg"
                    icon={Mail}
                    className="group"
                  >
                    Free Strategy Call
                  </EnhancedCTA>
                </div>

                {/* Simplified Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 animate-fade-in animation-delay-900">
                  {/* Author Avatars */}
                  <div className="flex items-center">
                    <div className="flex -space-x-2 lg:-space-x-3">
                      {[
                        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
                        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
                        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
                        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100'
                      ].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Success story ${i + 1}`}
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/20 object-cover hover:scale-110 transition-transform duration-300 shadow-lg"
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
                    <div className="flex text-gold-400 mr-2 lg:mr-3">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm lg:text-base">4.9/5 Rating</div>
                      <div className="text-gray-400 text-xs lg:text-sm">200+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimized Stats Showcase */}
              <div className="lg:col-span-1 xl:col-span-5 mt-8 lg:mt-0">
                <div className="relative animate-scale-in animation-delay-300">
                  {/* Optimized Glassmorphism Container */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 shadow-xl p-5 lg:p-6 hover:bg-white/10 transition-all duration-500">
                    {/* Content */}
                    <div className="text-center mb-6 lg:mb-8">
                      <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-white/20 mb-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-emerald-300 text-sm font-semibold">Live Data</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                        Success Metrics
                      </h3>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-sm mx-auto">
                        Real results from <span className="text-gold-400 font-semibold">real campaigns</span>
                      </p>
                    </div>

                    {/* Compact & Professional Stats Component */}
                    <div className="stats-container">
                      <DynamicStats className="mb-6 lg:mb-8" />
                    </div>

                    {/* Compact Achievement Badges */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                        <Award className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 mx-auto mb-2" />
                        <div className="text-white font-semibold text-sm">Industry Leader</div>
                        <div className="text-emerald-400 text-xs">5+ Years</div>
                      </div>
                      <div className="text-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-white font-semibold text-sm">Proven Results</div>
                        <div className="text-blue-400 text-xs">89% Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplified Scroll Indicator */}
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-1 h-8 bg-white/30 rounded-full animate-pulse" />
          </div>
        </section>

        {/* Animated Divider */}
        <AnimatedDivider type="wave" color="gold" />

        {/* 2. About Highlight Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div
              ref={aboutSectionRef}
              className="text-center mb-16 scroll-reveal"
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block animate-fade-in animation-delay-200">Why Choose Author Glide?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 animate-fade-in animation-delay-400">
                Your Publishing Success Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-600">
                With 5+ years of experience and 500+ successful campaigns, we know what it takes
                to turn your book into a bestseller.
              </p>
            </div>

            <div
              ref={aboutCardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
            >
              {[
                {
                  icon: Shield,
                  title: "Proven Track Record",
                  description: "89% success rate with measurable results that speak for themselves.",
                  stat: "500+ Books Promoted"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Industry veterans with deep knowledge of publishing and marketing.",
                  stat: "15+ Years Experience"
                },
                {
                  icon: Heart,
                  title: "Author-First Approach",
                  description: "We understand authors because we are authors. Your success is our mission.",
                  stat: "95+ Client Retention"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`
                      relative text-center group card-interactive hover-lift-light scroll-reveal-scale
                      bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500
                      border border-gray-100 hover:border-gold-200
                      p-8 lg:p-10 xl:p-12 space-y-6 overflow-hidden
                      animation-delay-${(index + 1) * 200}
                    `}
                  >
                    <div className="relative z-10 flex flex-col items-center space-y-4">
                      <div className="icon-wrapper w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 hover-glow-gold">
                        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="bg-navy-900 text-white text-sm font-bold px-6 py-3 rounded-full hover-scale transition-all duration-300 cursor-pointer shadow-lg">
                        {feature.stat}
                      </div>
                    </div>

                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg lg:text-xl group-hover:text-gray-700 transition-colors duration-300 leading-relaxed max-w-sm mx-auto">
                        {feature.description}
                      </p>
                    </div>

                    {/* Elegant hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-gold-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-gold-400 opacity-0 group-hover:opacity-30 scale-95 group-hover:scale-100 transition-all duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Animated Divider */}
        <AnimatedDivider type="geometric" color="navy" />

        {/* 3. Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 scroll-reveal">
              <span className="text-gold-600 font-semibold text-lg mb-2 block animate-fade-in animation-delay-200">Complete Marketing Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 animate-fade-in animation-delay-400">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-600">
                From strategy to execution, we handle every aspect of your book marketing campaign
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Amazon Optimization",
                  description: "Maximize visibility with targeted ads and optimized listings.",
                  features: ["Keyword Research", "A+ Content", "Sponsored Ads"]
                },
                {
                  icon: Globe,
                  title: "Social Media Marketing",
                  description: "Build your author brand across all platforms.",
                  features: ["Content Strategy", "Community Building", "Paid Campaigns"]
                },
                {
                  icon: BarChart3,
                  title: "Email Marketing",
                  description: "Connect directly with readers through email campaigns.",
                  features: ["List Building", "Automation", "Newsletter Design"]
                },
                {
                  icon: MessageSquare,
                  title: "PR & Media Outreach",
                  description: "Get featured in publications and podcasts.",
                  features: ["Press Releases", "Media Lists", "Interview Booking"]
                },
                {
                  icon: Zap,
                  title: "SEO & Web Presence",
                  description: "Improve discoverability across search engines.",
                  features: ["Website Optimization", "Google Ads", "Local SEO"]
                },
                {
                  icon: MousePointer,
                  title: "Paid Advertising",
                  description: "Strategic campaigns across multiple platforms.",
                  features: ["Google Ads", "Facebook Ads", "BookBub Promotion"]
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`card-premium p-8 group hover-lift-light card-interactive scroll-reveal-scale animation-delay-${(index + 1) * 100}`}
                  >
                    <div className="icon-wrapper bg-gradient-to-br from-gold-400 to-gold-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto hover-glow-gold">
                      <Icon className="w-8 h-8 animate-heartbeat" />
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-4 text-center group-hover:text-gold-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-center group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 hover:text-gray-700 transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 icon-bounce" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Animated Divider */}
        <AnimatedDivider type="dots" color="gold" />

        {/* 4. Process - How It Works */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Simple Process</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                How We Make Magic Happen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven 4-step process ensures your book gets the attention it deserves
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    icon: MessageSquare,
                    title: "Discovery Call",
                    description: "We learn about your book, goals, and target audience in a detailed consultation."
                  },
                  {
                    step: "02", 
                    icon: Target,
                    title: "Strategy Development",
                    description: "Our experts create a custom marketing strategy tailored to your genre and goals."
                  },
                  {
                    step: "03",
                    icon: Rocket,
                    title: "Campaign Launch",
                    description: "We execute your marketing campaign across all chosen channels with precision."
                  },
                  {
                    step: "04",
                    icon: BarChart3,
                    title: "Track & Optimize",
                    description: "Continuous monitoring and optimization to maximize your book's performance."
                  }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className="process-step text-center relative z-10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                          <Icon className="w-10 h-10 text-gold-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Success Metrics */}
        <section className="gradient-bg text-white section-padding dark-section relative overflow-hidden">
          {/* Background Analytics Image */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business analytics background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/90"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 font-semibold text-lg mb-2 block">Proven Results</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Numbers That Speak for Themselves
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real data from real campaigns that transformed authors' careers
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: BookOpen,
                  number: "500+", 
                  label: "Books Promoted",
                  description: "Successful campaigns across all genres"
                },
                { 
                  icon: Users,
                  number: "2.5M+", 
                  label: "Readers Reached",
                  description: "Total audience engagement generated"
                },
                { 
                  icon: TrendingUp,
                  number: "342%", 
                  label: "Average Sales Increase",
                  description: "Typical improvement in first 6 months"
                },
                { 
                  icon: Star,
                  number: "4.9/5", 
                  label: "Client Satisfaction",
                  description: "Based on 200+ reviews and testimonials"
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="stats-card"
                    variants={fadeInUp}
                  >
                    <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold text-white mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gold-300 font-semibold text-lg mb-2">{stat.label}</div>
                    <div className="text-gray-300 text-sm">{stat.description}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 6. Author Success Stories */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Success Stories</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Authors Who Transformed Their Careers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from real authors who achieved their publishing dreams with our help
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Mitchell",
                  genre: "Romance",
                  book: "Hearts Entwined",
                  result: "400% sales increase",
                  timeline: "6 months",
                  quote: "Author Glide transformed my book marketing completely. I went from selling 10 books a month to hitting the Amazon bestseller list.",
                  achievement: "Amazon Bestseller",
                  avatar: "SM"
                },
                {
                  name: "Marcus Thompson", 
                  genre: "Thriller",
                  book: "Silent Witness",
                  result: "2.1M reach",
                  timeline: "4 months",
                  quote: "The team's expertise in Amazon advertising is unmatched. They helped me understand my audience and create campaigns that convert.",
                  achievement: "Featured in BookBub",
                  avatar: "MT"
                },
                {
                  name: "Elena Rodriguez",
                  genre: "Fantasy",
                  book: "The Crystal Wars",
                  result: "5-figure income",
                  timeline: "8 months",
                  quote: "Professional, responsive, and results-driven. They didn't just market my book, they helped me build my entire author brand.",
                  achievement: "Full-time Author",
                  avatar: "ER"
                }
              ].map((story, index) => (
                <motion.div 
                  key={index} 
                  className="testimonial-card group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Achievement Badge */}
                  <div className="absolute -top-4 left-6 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {story.achievement}
                  </div>

                  <div className="pt-6">
                    <Quote className="w-8 h-8 text-gold-500 mb-4" />
                    
                    <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                      "{story.quote}"
                    </p>
                    
                    {/* Stats */}
                    <div className="flex space-x-4 mb-6">
                      <div className="bg-gold-50 px-3 py-2 rounded-lg text-center">
                        <div className="text-gold-600 font-bold text-lg">{story.result}</div>
                        <div className="text-gray-500 text-xs">Growth</div>
                      </div>
                      <div className="bg-blue-50 px-3 py-2 rounded-lg text-center">
                        <div className="text-blue-600 font-bold text-lg">{story.timeline}</div>
                        <div className="text-gray-500 text-xs">Timeline</div>
                      </div>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center text-gold-400 font-bold mr-4">
                        {story.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-navy-900 text-lg">{story.name}</div>
                        <div className="text-gray-500">{story.genre} Author • "{story.book}"</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Testimonials Carousel */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Client Reviews</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                What Authors Say About Us
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex text-gold-500">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-semibold">4.9/5 from 200+ reviews</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "The ROI on my marketing investment was incredible. Within 3 months, I recouped my investment and then some.",
                  author: "James Parker",
                  role: "Sci-Fi Author",
                  rating: 5
                },
                {
                  quote: "They made book marketing feel simple and stress-free. I could focus on writing while they handled everything else.",
                  author: "Lisa Chen",
                  role: "Mystery Author", 
                  rating: 5
                },
                {
                  quote: "The personalized approach and constant communication made me feel like their only client. Exceptional service!",
                  author: "David Williams",
                  role: "Historical Fiction Author",
                  rating: 5
                },
                {
                  quote: "From unknown to bestseller in 8 months. The strategy they developed was perfectly tailored to my genre.",
                  author: "Amanda Foster",
                  role: "Young Adult Author",
                  rating: 5
                },
                {
                  quote: "The analytics and reporting gave me insights I never had before. I finally understood my readers.",
                  author: "Robert Kim",
                  role: "Business Author",
                  rating: 5
                },
                {
                  quote: "Worth every penny. The expertise and results speak for themselves. My book sales tripled in 4 months.",
                  author: "Maria Santos",
                  role: "Contemporary Fiction Author",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex text-gold-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{testimonial.author}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Pricing Teaser */}
        <section className="section-padding bg-gradient-to-br from-gold-50 to-gold-100">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Investment Options</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Flexible Plans for Every Author
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package to launch your book marketing campaign
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "997",
                  period: "one-time",
                  description: "Perfect for first-time authors ready to launch",
                  features: [
                    "Amazon Optimization",
                    "Basic Social Media Setup", 
                    "Email Marketing Foundation",
                    "30-day Campaign",
                    "Weekly Reports"
                  ],
                  popular: false
                },
                {
                  name: "Professional", 
                  price: "2,497",
                  period: "one-time",
                  description: "Comprehensive marketing for serious authors",
                  features: [
                    "Everything in Starter",
                    "Multi-platform Advertising",
                    "PR & Media Outreach",
                    "90-day Campaign",
                    "Dedicated Account Manager",
                    "Advanced Analytics"
                  ],
                  popular: true
                },
                {
                  name: "Elite",
                  price: "4,997", 
                  period: "one-time",
                  description: "Premium service for bestseller aspirations",
                  features: [
                    "Everything in Professional",
                    "Celebrity Endorsements",
                    "Premium Media Placements",
                    "6-month Campaign",
                    "Personal Marketing Consultant",
                    "Guaranteed Results"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-2xl scale-105' 
                      : 'bg-white text-navy-900 shadow-lg'
                  } border border-gray-200 hover:shadow-xl transition-all duration-300`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-gold-400' : 'text-gold-600'}`}>
                        ${plan.price}
                      </span>
                      <span className={`ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`mt-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 mr-3 ${plan.popular ? 'text-gold-400' : 'text-gold-500'}`} />
                        <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gold-500 hover:bg-gold-600 text-white'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">Need a custom solution? We've got you covered.</p>
              <Link to="/contact" className="btn-secondary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Custom Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 9. FAQ Preview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Common Questions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to the most frequently asked questions about our services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does it take to see results?",
                  answer: "Most authors see initial results within 2-4 weeks, with significant improvements typically occurring within 60-90 days. However, results vary based on genre, competition, and campaign scope."
                },
                {
                  question: "Do you work with all genres?",
                  answer: "Yes! We have experience across all genres including fiction, non-fiction, romance, thriller, fantasy, business books, and more. Our strategies are customized for each genre's unique audience."
                },
                {
                  question: "What's included in the campaign management?",
                  answer: "Full campaign management includes strategy development, ad creation and optimization, content creation, performance monitoring, weekly reports, and dedicated account management."
                },
                {
                  question: "Can you help with books already published?",
                  answer: "Absolutely! Many of our most successful campaigns are for books that have been published for months or even years. It's never too late to start marketing your book effectively."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      Q
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-11 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/faq" className="btn-secondary">
                View All FAQs
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 10. Contact Teaser */}
        <section className="section-padding bg-gradient-to-br from-navy-50 to-blue-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-gold-600 font-semibold text-lg mb-2 block">Ready to Get Started?</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                  Let's Discuss Your Book's Potential
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Schedule a free 30-minute consultation to discuss your book, goals, and how we can help you achieve bestseller status.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Clock, text: "30-minute free consultation" },
                    { icon: Target, text: "Custom strategy discussion" },
                    { icon: Shield, text: "No obligation or pressure" },
                    { icon: Award, text: "Expert recommendations" }
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="w-6 h-6 text-gold-500" />
                        <span className="text-gray-700 font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    <Users className="w-5 h-5 mr-2" />
                    View Our Process
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Quick Contact</h3>
                    <p className="text-gray-600">Get in touch in under 60 seconds</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                      <option>Select Book Genre</option>
                      <option>Fiction</option>
                      <option>Non-Fiction</option>
                      <option>Romance</option>
                      <option>Thriller/Mystery</option>
                      <option>Fantasy/Sci-Fi</option>
                      <option>Business</option>
                      <option>Other</option>
                    </select>

                    <textarea 
                      placeholder="Tell us about your book and goals..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                    ></textarea>

                    <button className="w-full btn-primary">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Your information is secure and never shared
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 11. Trust Signals */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-semibold text-lg mb-2 block">Trusted by Industry</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Recognized Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Awards, certifications, and partnerships that demonstrate our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: "Google Partner", icon: Target },
                { name: "Facebook Marketing Partner", icon: Users },
                { name: "Amazon Advertising Partner", icon: BookOpen },
                { name: "BookBub Partner", icon: Star },
                { name: "Publishers Association", icon: Award },
                { name: "Marketing Excellence Award", icon: Trophy },
                { name: "5-Star Rating", icon: Star },
                { name: "BBB Accredited", icon: Shield }
              ].map((trust, index) => {
                const Icon = trust.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:bg-gold-100 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-gold-600 transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {trust.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12. Final CTA */}
        <section className="hero-gradient text-white section-padding relative overflow-hidden dark-section">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container-custom relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-6 py-3 bg-gold-500/20 backdrop-blur-md rounded-full text-gold-300 font-semibold border border-gold-500/30">
                  <Rocket className="w-5 h-5 mr-2" />
                  Ready to Launch Your Success?
                </span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Your Bestseller 
                <span className="text-gradient block">Journey Starts Now</span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Join 500+ successful authors who transformed their publishing dreams into reality.
                Don't let your book stay hidden. Let's make it shine.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn-primary text-xl px-12 py-5 group">
                    <Sparkles className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    Start My Success Story
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn-ghost text-xl px-12 py-5 group">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Schedule Consultation
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { icon: Clock, text: "Free 30-min consultation" },
                  { icon: Shield, text: "Risk-free guarantee" },
                  { icon: Award, text: "Proven results" }
                ].map((guarantee, index) => {
                  const Icon = guarantee.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center space-x-3 text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-6 h-6 text-gold-400" />
                      <span className="font-medium">{guarantee.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
