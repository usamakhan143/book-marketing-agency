import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DynamicScrollSection, { DynamicScrollItem, AlternatingScrollItem, SequentialReveal } from '../components/DynamicScrollSection';
import {
  BookOpen,
  Smartphone,
  Mail,
  Megaphone,
  Search,
  Target,
  Home,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Music,
  Linkedin,
  Bookmark,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  return (
    <>
      <SEO
        title="Book Marketing Services - Amazon Ads, Social Media, PR & More"
        description="Comprehensive book marketing services including Amazon advertising, social media marketing, PR campaigns, email marketing, and SEO optimization for authors."
        keywords="book marketing services, amazon book ads, social media marketing for authors, book promotion services, author marketing"
        canonical="/services"
      />
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative pt-12 pb-[5.25rem] md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[750px]">
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          />

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-navy-400/30 to-navy-600/30 rounded-xl blur-lg"
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-gold-300/25 to-gold-500/25 rounded-full blur-lg"
              animate={{
                x: [0, 25, 0],
                y: [0, -30, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-navy-500/20 to-navy-700/20 rounded-lg blur-md"
              animate={{
                x: [0, -15, 0],
                y: [0, 20, 0],
                rotate: [0, -90, 0]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Interactive Background Pattern */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(16, 42, 67, 0.2) 0%, transparent 50%),
                               linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(16, 42, 67, 0.05) 100%)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="container-custom relative z-10 flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="text-center max-w-5xl mx-auto">

              {/* Interactive Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500/20 to-gold-400/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-gold-300 font-medium text-xs sm:text-sm lg:text-base">
                  Complete Marketing Solutions for Authors
                </span>
              </motion.div>

              {/* Main Title with Gradient Text */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                  ease: [0.215, 0.61, 0.355, 1],
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02 }}
              >
                Our Services
              </motion.h1>

              {/* Enhanced Description */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.0,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <p className="text-lg md:text-xl lg:[font-size:1.1rem] text-gray-300 mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed">
                  From Amazon optimization to social media campaigns, we provide everything you need.
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Professional book marketing that gets your story discovered by the right readers.
                </motion.p>
              </motion.div>

              {/* Interactive Service Statistics */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  { number: "6", label: "Core Services", icon: Target },
                  { number: "12+", label: "Marketing Platforms", icon: TrendingUp },
                  { number: "24/7", label: "Campaign Monitoring", icon: Search }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-gold-400/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)"
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Breadcrumb Navigation */}
              <motion.nav
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 max-w-fit mx-auto mb-5 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Home className="w-5 h-5 text-gold-400" />
                </motion.div>
                <span className="text-gray-300 font-medium">Home</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-white font-semibold">Services</span>
              </motion.nav>
            </div>
          </div>

          {/* Bottom Wave Effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.6 }}
          />
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              
              {/* Amazon Ads & Optimization */}
              <DynamicScrollSection
                className=""
                animation="slideLeft"
                threshold={0.3}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <DynamicScrollItem animation="slideLeft" customDelay={0.2}>
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gold-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy-900">
                          Amazon Ads & Optimization
                        </h2>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        Maximize your book's visibility on the world's largest bookstore. Our Amazon specialists
                        create and manage targeted advertising campaigns that drive sales while optimizing your
                        book listing for maximum discoverability.
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Sponsored Product, Brand, and Display ad campaigns
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Keyword research and bid optimization
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Book description and metadata optimization
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          A+ Content creation for enhanced listings
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Performance monitoring and reporting
                        </li>
                      </ul>
                    </div>
                  </DynamicScrollItem>

                  <DynamicScrollItem animation="slideRight" customDelay={0.4}>
                    <div className="card p-8 bg-gradient-to-br from-gold-50 to-gold-100">
                      <h3 className="text-xl font-semibold text-navy-900 mb-4">What You Get:</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between">
                          <span>Campaign Setup & Launch</span>
                          <span className="text-gold-600">✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weekly Optimization</span>
                          <span className="text-gold-600">✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Performance Reports</span>
                          <span className="text-gold-600">✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dedicated Account Manager</span>
                          <span className="text-gold-600">✓</span>
                        </div>
                      </div>
                    </div>
                  </DynamicScrollItem>
                </div>
              </DynamicScrollSection>

              {/* Social Media Marketing */}
              <DynamicScrollSection
                className=""
                animation="slideRight"
                threshold={0.3}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <DynamicScrollItem animation="slideLeft" customDelay={0.2}>
                    <div className="order-2 lg:order-1">
                      <div className="card p-8 bg-gradient-to-br from-navy-50 to-navy-100">
                        <h3 className="text-xl font-semibold text-navy-900 mb-4">Platform Coverage:</h3>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                          <div className="flex items-center">
                            <Facebook className="w-5 h-5 text-navy-600 mr-2" />
                            Facebook
                          </div>
                          <div className="flex items-center">
                            <Instagram className="w-5 h-5 text-navy-600 mr-2" />
                            Instagram
                          </div>
                          <div className="flex items-center">
                            <Twitter className="w-5 h-5 text-navy-600 mr-2" />
                            Twitter/X
                          </div>
                          <div className="flex items-center">
                            <Music className="w-5 h-5 text-navy-600 mr-2" />
                            TikTok
                          </div>
                          <div className="flex items-center">
                            <Linkedin className="w-5 h-5 text-navy-600 mr-2" />
                            LinkedIn
                          </div>
                          <div className="flex items-center">
                            <Bookmark className="w-5 h-5 text-navy-600 mr-2" />
                            Pinterest
                          </div>
                        </div>
                      </div>
                    </div>
                  </DynamicScrollItem>
                  <DynamicScrollItem animation="slideRight" customDelay={0.4}>
                    <div className="order-1 lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-navy-700 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                          <Smartphone className="w-8 h-8 text-gold-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy-900">
                          Social Media Marketing
                        </h2>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        Build your author brand and connect with readers across all major social platforms.
                        We create engaging content that showcases your personality and drives book sales.
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Custom content calendar and strategy
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Engaging post creation and scheduling
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Community management and engagement
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Author brand development
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold-500 mr-3 mt-1">✓</span>
                          Social media advertising campaigns
                        </li>
                      </ul>
                    </div>
                  </DynamicScrollItem>
                </div>
              </DynamicScrollSection>

              {/* Email Marketing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900">
                      Email Marketing for Reader Engagement
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Build a loyal readership with targeted email campaigns that keep your audience engaged 
                    and excited about your books. Email marketing delivers the highest ROI of any digital channel.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Newsletter design and automation setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Reader magnet creation and landing pages
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">��</span>
                      Launch sequences for new releases
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Segmentation and personalization
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Performance tracking and optimization
                    </li>
                  </ul>
                </div>
                <div className="card p-8 bg-gradient-to-br from-gold-50 to-gold-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Campaign Types:</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h4 className="font-semibold">Welcome Series</h4>
                      <p className="text-sm">Nurture new subscribers</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h4 className="font-semibold">Book Launch</h4>
                      <p className="text-sm">Generate excitement and sales</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h4 className="font-semibold">Promotional</h4>
                      <p className="text-sm">Drive special offers and deals</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h4 className="font-semibold">Engagement</h4>
                      <p className="text-sm">Keep readers connected</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Release & PR */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="card p-8 bg-gradient-to-br from-navy-50 to-navy-100">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Media Outlets We Work With:</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        National newspapers and magazines
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        Podcast networks and radio shows
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        Online publications and blogs
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        Author interview platforms
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        Book review websites
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-navy-600 mr-2" />
                        Industry publications
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-navy-700 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Megaphone className="w-8 h-8 text-gold-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900">
                      Press Release & PR Campaigns
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Get featured in major media outlets and publications to expand your reach and build credibility. 
                    Our PR team has relationships with journalists, bloggers, and influencers across all genres.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Professional press release writing
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Media list building and outreach
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Podcast and interview booking
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Review campaign management
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Crisis communication support
                    </li>
                  </ul>
                </div>
              </div>

              {/* SEO & Website Optimization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900">
                      SEO & Website Optimization
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Improve your online presence so readers can easily find you and your books. 
                    We optimize your author website and online profiles for maximum search visibility.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Author website audit and optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Keyword research for your genre
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Content optimization for search engines
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Local SEO for author events
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Online profile optimization
                    </li>
                  </ul>
                </div>
                <div className="card p-8 bg-gradient-to-br from-gold-50 to-gold-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">SEO Benefits:</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gold-500 rounded-full mr-3 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span>Increased organic website traffic</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gold-500 rounded-full mr-3 flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span>Better reader targeting</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gold-500 rounded-full mr-3 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span>Higher search rankings</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gold-500 rounded-full mr-3 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>Long-term cost-effective growth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paid Ad Campaigns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="card p-8 bg-gradient-to-br from-navy-50 to-navy-100">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Advertising Platforms:</h3>
                    <div className="grid grid-cols-1 gap-4 text-gray-700">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span>Google Ads</span>
                        <span className="text-navy-600 font-semibold">Search & Display</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span>Facebook Ads</span>
                        <span className="text-navy-600 font-semibold">Social Targeting</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span>BookBub Ads</span>
                        <span className="text-navy-600 font-semibold">Reader Network</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span>Instagram Ads</span>
                        <span className="text-navy-600 font-semibold">Visual Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-navy-700 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-gold-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900">
                      Paid Ad Campaigns
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Strategic advertising across Google, BookBub, Facebook, and other platforms for maximum ROI. 
                    We create compelling ad creatives and target the right readers for your genre.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Multi-platform advertising strategy
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Creative design and copywriting
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      Audience research and targeting
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      A/B testing and optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
                      ROI tracking and reporting
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <DynamicScrollSection
          className="gradient-bg text-white section-padding"
          animation="slideUp"
          threshold={0.3}
        >
          <div className="container-custom text-center">
            <DynamicScrollItem animation="slideUp" customDelay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Amplify Your Book's Reach?
              </h2>
            </DynamicScrollItem>

            <DynamicScrollItem animation="slideUp" customDelay={0.4}>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create a custom marketing strategy that fits your book, budget, and goals.
              </p>
            </DynamicScrollItem>

            <DynamicScrollItem animation="bounce" customDelay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                  Get Your Marketing Plan
                </Link>
                <Link to="/pricing" className="btn-outline text-lg px-12 py-4">
                  View Our Pricing
                </Link>
              </div>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>
      </div>
    </>
  );
};

export default Services;
