import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { useScrollReveal, useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { 
  Home, 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Users,
  BookOpen,
  Calendar,
  Coffee,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <>
      <SEO
        title="Contact Author Glide - Get Your Free Marketing Consultation"
        description="Ready to boost your book sales? Contact Author Glide for a free consultation. We respond within 24 hours to help you get started."
        keywords="contact author glide, book marketing consultation, get started book marketing, author marketing help"
        canonical="/contact"
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
                  Every Bestseller Started with a Conversation
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
                Contact Us
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
                  Ready to transform your book marketing and connect with thousands of new readers?
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Get your free consultation and discover how we can help you reach your ideal readers.
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
                  { number: "24h", label: "Response Time", icon: Clock },
                  { number: "Free", label: "Consultation", icon: Coffee },
                  { number: "3", label: "Contact Methods", icon: MessageSquare }
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
                <span className="text-white font-semibold">Contact</span>
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

        {/* Contact Methods Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12 scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6 animate-fade-in">
                Three Ways to Get Started
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Whether you prefer a quick call, detailed email, or in-person meeting,
                we make it easy to begin your book marketing journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Free 15-Minute Call</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Quick chat to understand your goals and see if we're a good fit. 
                  No pressure, just honest advice about your book's potential.
                </p>
                <a href="tel:+15551234567" className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                  (555) 123-4567
                </a>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Detailed Email Discussion</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Send us your questions, book details, and marketing goals. 
                  We'll respond within 24 hours with a personalized strategy outline.
                </p>
                <a href="mailto:hello@authorglide.com" className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                  hello@authorglide.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">30-Minute Strategy Session</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Deep-dive consultation where we analyze your book, market, and competition. 
                  Walk away with actionable insights, even if we don't work together.
                </p>
                <span className="text-gold-600 font-semibold">
                  Schedule via form below
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    Tell Us About Your Book
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The more we know about your book and goals, the better we can help. 
                    This form takes about 3 minutes to complete, and we'll have everything 
                    we need for a productive conversation.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for reaching out. We'll review your information and get back to you 
                      within 24 hours with our initial thoughts and next steps.
                    </p>
                    <div className="text-sm text-green-600">
                      <strong>What happens next:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>We'll review your book and marketing goals</li>
                        <li>Research your genre and competition</li>
                        <li>Prepare personalized recommendations</li>
                        <li>Schedule a call to discuss your options</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-navy-900 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName', { required: 'First name is required' })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-navy-900 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName', { required: 'Last name is required' })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Book Information */}
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-navy-900 mb-4">About Your Book</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="bookTitle" className="block text-sm font-semibold text-navy-900 mb-2">
                            Book Title *
                          </label>
                          <input
                            type="text"
                            id="bookTitle"
                            {...register('bookTitle', { required: 'Book title is required' })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                            placeholder="The title of your book"
                          />
                          {errors.bookTitle && (
                            <p className="mt-1 text-sm text-red-600">{errors.bookTitle.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="genre" className="block text-sm font-semibold text-navy-900 mb-2">
                            Genre *
                          </label>
                          <select
                            id="genre"
                            {...register('genre', { required: 'Please select a genre' })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select your book's genre</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller/Mystery</option>
                            <option value="fantasy">Fantasy/Sci-Fi</option>
                            <option value="business">Business</option>
                            <option value="self-help">Self-Help</option>
                            <option value="memoir">Memoir/Biography</option>
                            <option value="children">Children's</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.genre && (
                            <p className="mt-1 text-sm text-red-600">{errors.genre.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label htmlFor="publishStatus" className="block text-sm font-semibold text-navy-900 mb-2">
                            Publishing Status *
                          </label>
                          <select
                            id="publishStatus"
                            {...register('publishStatus', { required: 'Please select publishing status' })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select status</option>
                            <option value="published">Already Published</option>
                            <option value="launching-soon">Launching in 1-3 months</option>
                            <option value="writing">Still Writing/Editing</option>
                            <option value="series">Part of a Series</option>
                          </select>
                          {errors.publishStatus && (
                            <p className="mt-1 text-sm text-red-600">{errors.publishStatus.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-semibold text-navy-900 mb-2">
                            Marketing Budget Range
                          </label>
                          <select
                            id="budget"
                            {...register('budget')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-1000">Under $1,000</option>
                            <option value="1000-2500">$1,000 - $2,500</option>
                            <option value="2500-5000">$2,500 - $5,000</option>
                            <option value="5000-plus">$5,000+</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Goals and Message */}
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-navy-900 mb-4">Your Goals & Questions</h3>
                      
                      <div>
                        <label htmlFor="goals" className="block text-sm font-semibold text-navy-900 mb-2">
                          What are your main goals? *
                        </label>
                        <div className="space-y-2 mb-4">
                          {[
                            'Increase book sales and revenue',
                            'Build a larger reader audience',
                            'Get more book reviews',
                            'Improve Amazon ranking',
                            'Launch a new book successfully',
                            'Build author platform/brand'
                          ].map((goal) => (
                            <label key={goal} className="flex items-center">
                              <input
                                type="checkbox"
                                value={goal}
                                {...register('goals')}
                                className="rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                              />
                              <span className="ml-2 text-gray-700">{goal}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                          Tell us more about your book and goals *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          {...register('message', { required: 'Please tell us about your book and goals' })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Share your book's story, what marketing you've tried before, your biggest challenges, and what success looks like to you. The more detail, the better we can help!"
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="pt-6 border-t border-gray-200">
                      <label htmlFor="contactMethod" className="block text-sm font-semibold text-navy-900 mb-2">
                        How would you prefer we follow up?
                      </label>
                      <select
                        id="contactMethod"
                        {...register('contactMethod')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="email">Email first, then schedule a call</option>
                        <option value="phone">Call me directly</option>
                        <option value="email-only">Email only for now</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Your Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send My Information
                          </>
                        )}
                      </button>
                      <p className="text-sm text-gray-500 mt-3 text-center">
                        We'll respond within 24 hours with our initial analysis and recommendations.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Information & Why Choose Us */}
              <div className="space-y-8">
                
                {/* Contact Info */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch Directly</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Call or Text</h4>
                        <p className="text-gray-600 mb-2">We answer calls during business hours and respond to texts within 4 hours.</p>
                        <a href="tel:+15551234567" className="text-gold-600 font-medium hover:text-gold-700">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Email Us</h4>
                        <p className="text-gray-600 mb-2">Send detailed questions, book information, or files for review.</p>
                        <a href="mailto:hello@authorglide.com" className="text-gold-600 font-medium hover:text-gold-700">
                          hello@authorglide.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday: 10:00 AM - 2:00 PM EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Office Location</h4>
                        <p className="text-gray-600">
                          123 Publishing Avenue<br />
                          Suite 400<br />
                          New York, NY 10001
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          <em>Virtual meetings available worldwide</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Authors Choose Us</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy-900">Proven Track Record</h4>
                        <p className="text-gray-600 text-sm">500+ successful campaigns with an average 387% sales increase</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy-900">Author-First Approach</h4>
                        <p className="text-gray-600 text-sm">We understand authors because we are authors. Your success is our mission.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy-900">Data-Driven Results</h4>
                        <p className="text-gray-600 text-sm">Every strategy is backed by market research and performance analytics</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy-900">90-Day Guarantee</h4>
                        <p className="text-gray-600 text-sm">We're so confident in our results, we offer a money-back guarantee</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 text-white">This Month's Results</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-400">47</div>
                      <div className="text-sm text-gray-300">Books Promoted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-400">312%</div>
                      <div className="text-sm text-gray-300">Avg. Sales Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-400">89K</div>
                      <div className="text-sm text-gray-300">New Readers Reached</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-400">24hrs</div>
                      <div className="text-sm text-gray-300">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Before You Reach Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to questions we hear most often from new authors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-3">Do you work with unpublished books?</h3>
                <p className="text-gray-600">
                  Absolutely! We help authors at every stage, from pre-launch strategy to post-publication growth. 
                  In fact, starting marketing before publication often leads to stronger launch results.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-3">What if I have a small budget?</h3>
                <p className="text-gray-600">
                  We offer packages starting at $997 and payment plans for larger investments. 
                  During our consultation, we'll recommend the approach that fits your budget and goals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-3">How quickly can you start?</h3>
                <p className="text-gray-600">
                  Most campaigns begin within 5-7 business days of signing an agreement. 
                  If you need expedited service, we can often start within 48 hours for an additional fee.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-3">Do you guarantee specific results?</h3>
                <p className="text-gray-600">
                  While we can't guarantee exact sales numbers (too many variables), we do offer a 90-day 
                  performance guarantee. If you don't see measurable improvement, we'll refund your investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
