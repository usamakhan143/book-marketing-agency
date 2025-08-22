import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal, useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { 
  Home, 
  ChevronRight, 
  CheckCircle, 
  X,
  Star,
  MessageSquare,
  Target,
  Zap,
  Crown,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  Award
} from 'lucide-react';

const Pricing = () => {
  // Initialize scroll reveal for multiple elements
  useScrollRevealMultiple('.scroll-reveal');
  useScrollRevealMultiple('.scroll-reveal-left');
  useScrollRevealMultiple('.scroll-reveal-right');
  useScrollRevealMultiple('.scroll-reveal-scale');

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
        title="Book Marketing Pricing - Affordable Packages for Authors"
        description="Transparent pricing for professional book marketing services. Choose from Starter, Professional, or Elite packages designed for independent authors."
        keywords="book marketing pricing, affordable book marketing, author marketing packages, book promotion cost"
        canonical="/pricing"
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

          <div className="container-custom relative z-10 flex items-center justify-center min-h-[600px] md:min-h-[650px] lg:min-h-[750px]">
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
                  Investment That Pays for Itself
                </span>
              </motion.div>

              {/* Main Title with Gradient Text */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent leading-tight"
                style={{ lineHeight: '1.2' }}
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
                Pricing
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
                  Transparent, value-driven pricing designed to fit every author's budget and goals.
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Our clients typically see their investment returned within 60-90 days.
                </motion.p>
              </motion.div>

              {/* Interactive Statistics */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  { number: "3", label: "Pricing Tiers", icon: Target },
                  { number: "60-90", label: "Days to ROI", icon: Clock },
                  { number: "100%", label: "Transparent", icon: Shield }
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
                <span className="text-white font-semibold">Pricing</span>
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

        {/* Value Proposition */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16 scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6 animate-fade-in">
                Investment That Pays for Itself
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Our clients typically see their investment returned within 60-90 days.
                Every package is designed to deliver measurable results.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Shield,
                  title: "Money-Back Guarantee",
                  description: "If you don't see results within 90 days, we'll refund your investment."
                },
                {
                  icon: Clock,
                  title: "No Long-term Contracts",
                  description: "Choose the package that works for you. No hidden fees or ongoing commitments."
                },
                {
                  icon: Award,
                  title: "Proven ROI",
                  description: "Our average client sees a 3.5x return on their marketing investment."
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center scroll-reveal-scale"
                    variants={fadeInUp}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16 scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6 animate-fade-in">
                Choose Your Success Package
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Each package includes everything you need to succeed, with no hidden costs or surprises.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Starter Package */}
              <motion.div
                className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-gold-300 transition-all duration-300 shadow-lg hover:shadow-xl scroll-reveal-scale animation-delay-100"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Starter</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-navy-900">$997</span>
                    <span className="ml-2 text-gray-600">one-time</span>
                  </div>
                  <p className="text-gray-600">Perfect for first-time authors ready to launch professionally</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-navy-900 flex items-center">
                    <Target className="w-5 h-5 text-gold-500 mr-2" />
                    What's Included:
                  </h4>
                  {[
                    "Amazon listing optimization & keyword research",
                    "Basic Amazon PPC campaign setup & management",
                    "Professional book description rewrite",
                    "Social media audit & strategy document",
                    "Email marketing foundation setup",
                    "30-day campaign management",
                    "Weekly performance reports"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Perfect for:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• New authors launching their first book</li>
                    <li>• Authors with existing books needing optimization</li>
                    <li>• Budget-conscious writers seeking professional help</li>
                  </ul>
                </div>

                <Link to="/contact" className="w-full btn-secondary py-4 text-center">
                  Get Started
                </Link>
              </motion.div>

              {/* Professional Package - Most Popular */}
              <motion.div
                className="relative rounded-2xl p-8 bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-2xl scale-105 border-2 border-gold-500 scroll-reveal-scale animation-delay-200"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)"
                }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gold-400">$2,497</span>
                    <span className="ml-2 text-gray-300">one-time</span>
                  </div>
                  <p className="text-gray-300">Comprehensive marketing for serious authors</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-white flex items-center">
                    <Target className="w-5 h-5 text-gold-400 mr-2" />
                    Everything in Starter, plus:
                  </h4>
                  {[
                    "Multi-platform advertising (Amazon, Facebook, BookBub)",
                    "Professional PR campaign & media outreach",
                    "Advanced email marketing automation",
                    "Social media content creation & management",
                    "Book trailer or promotional video",
                    "Author website optimization",
                    "90-day comprehensive campaign",
                    "Dedicated account manager",
                    "Monthly strategy calls"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Perfect for:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Authors serious about building their career</li>
                    <li>• Writers with multiple books or series</li>
                    <li>• Authors targeting bestseller lists</li>
                  </ul>
                </div>

                <Link to="/contact" className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center">
                  Start Professional Campaign
                </Link>
              </motion.div>

              {/* Elite Package */}
              <motion.div
                className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-gold-300 transition-all duration-300 shadow-lg hover:shadow-xl scroll-reveal-scale animation-delay-300"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Elite</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-navy-900">$4,997</span>
                    <span className="ml-2 text-gray-600">one-time</span>
                  </div>
                  <p className="text-gray-600">Premium service for bestseller-focused authors</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-navy-900 flex items-center">
                    <Target className="w-5 h-5 text-gold-500 mr-2" />
                    Everything in Professional, plus:
                  </h4>
                  {[
                    "Celebrity endorsements & influencer outreach",
                    "Premium media placements & interviews",
                    "Advanced book launch strategy",
                    "Personal branding & thought leadership",
                    "Speaking engagement opportunities",
                    "Industry award submissions",
                    "6-month white-glove campaign",
                    "Weekly strategy sessions",
                    "Guaranteed results or money back"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Perfect for:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>��� Established authors targeting major success</li>
                    <li>• Authors with significant marketing budgets</li>
                    <li>• Writers seeking maximum industry exposure</li>
                  </ul>
                </div>

                <Link to="/contact" className="w-full btn-secondary py-4 text-center">
                  Discuss Elite Package
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16 scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6 animate-fade-in">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Enhance any package with these specialized services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Audiobook Marketing",
                  price: "$497",
                  description: "Specialized promotion for audiobook launches and platforms"
                },
                {
                  icon: Star,
                  title: "Award Submission Package",
                  price: "$297",
                  description: "Professional submissions to major literary awards and competitions"
                },
                {
                  icon: MessageSquare,
                  title: "Crisis Management",
                  price: "$197",
                  description: "Rapid response support for reputation and review management"
                },
                {
                  icon: Zap,
                  title: "Rush Campaign (7-day setup)",
                  price: "$497",
                  description: "Expedited campaign launch for time-sensitive promotions"
                },
                {
                  icon: BookOpen,
                  title: "Series Marketing Strategy",
                  price: "$697",
                  description: "Comprehensive multi-book launch and cross-promotion strategy"
                },
                {
                  icon: TrendingUp,
                  title: "Advanced Analytics Package",
                  price: "$197/month",
                  description: "Deep-dive reporting and performance optimization"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="card p-6 text-center scroll-reveal-scale"
                    variants={fadeInUp}
                    style={{ animationDelay: `${index * 100}ms` }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <Icon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-gold-600 mb-3">{service.price}</div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16 scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6 animate-fade-in">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How do I know which package is right for me?",
                  answer: "We offer a free 15-minute consultation to assess your goals, budget, and timeline. Our team will recommend the package that best fits your needs and explain exactly what results you can expect."
                },
                {
                  question: "What if I don't see results?",
                  answer: "We're confident in our strategies, which is why we offer a 90-day money-back guarantee. If you don't see measurable improvement in your book's performance, we'll refund your investment."
                },
                {
                  question: "Can I upgrade my package later?",
                  answer: "Absolutely! Many clients start with our Starter package and upgrade as they see results. We'll credit your original investment toward the higher package."
                },
                {
                  question: "Do you work with self-published and traditionally published authors?",
                  answer: "Yes, we work with authors at all stages of their career, whether self-published, traditionally published, or hybrid. Our strategies adapt to your publishing model."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="gradient-bg text-white section-padding"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Invest in Your Success?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss your goals and find the perfect package for your book.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-outline text-lg px-12 py-4">
                See Success Stories
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Pricing;
