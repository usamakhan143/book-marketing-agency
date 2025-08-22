import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal, useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { 
  Home, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Star, 
  Quote,
  Award,
  Calendar,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const CaseStudies = () => {
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
        title="Book Marketing Success Stories - Case Studies"
        description="See how Author Glide helped authors increase book sales by 300%+ with proven marketing strategies. Real results from real authors."
        keywords="book marketing case studies, author success stories, book sales increase, marketing results"
        canonical="/case-studies"
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
                  Real Results From Real Authors
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
                Case Studies
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
                  Real results from real authors who transformed their writing careers with our proven marketing strategies.
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  See how we've helped authors achieve remarkable success across all genres and markets.
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
                  { number: "523", label: "Books Promoted", icon: BookOpen },
                  { number: "387%", label: "Avg Sales Increase", icon: TrendingUp },
                  { number: "89%", label: "Success Rate", icon: Award }
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
                <span className="text-white font-semibold">Case Studies</span>
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

        {/* Success Stats Overview */}
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
                Proven Results That Speak for Themselves
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Over the past three years, we've helped authors across all genres achieve remarkable success
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, number: "523", label: "Books Promoted", description: "Across all genres" },
                { icon: TrendingUp, number: "387%", label: "Average Sales Increase", description: "Within 6 months" },
                { icon: Users, number: "3.2M", label: "Readers Reached", description: "Total audience engagement" },
                { icon: Award, number: "89%", label: "Success Rate", description: "Authors seeing results" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-navy-900 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gold-600 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Author Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real authors, real results, real transformation
              </p>
            </div>

            <div className="space-y-16">
              {/* Case Study 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      SM
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">Sarah Mitchell</h3>
                      <p className="text-gold-600 font-medium">Romance Author • "Hearts Entwined"</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-gold-500 mb-4" />
                    <p className="text-gray-600 text-lg italic leading-relaxed">
                      "I was selling maybe 15 copies a month and felt invisible in the romance market.
                      Author Glide not only tripled my sales but helped me understand my readers.
                      The Amazon ads strategy they developed was a game-changer. The team's expertise
                      in romance marketing and their personalized approach made all the difference in
                      transforming my author career."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">450%</div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">4 months</div>
                      <div className="text-sm text-gray-600">To Results</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Amazon Bestseller #1 in Contemporary Romance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Built email list from 50 to 2,800 subscribers</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Featured on 12 romance book blogs and podcasts</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Secured recurring monthly revenue stream</span>
                    </div>
                  </div>
                </div>

                <div className="card p-8 bg-gradient-to-br from-pink-50 to-red-50 h-full">
                  <h4 className="text-xl font-bold text-navy-900 mb-6">Campaign Strategy</h4>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Targeted Amazon Ads</h5>
                        <p className="text-sm text-gray-600 mb-2">Focused on romance keywords and competitor targeting with sophisticated keyword research and bid optimization</p>
                        <p className="text-xs text-gray-500">Campaign spent $2,400 with 4.2x ROAS over 4 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Reader Magnet Campaign</h5>
                        <p className="text-sm text-gray-600 mb-2">Free novella strategy to build email list rapidly and create a sustainable reader funnel for future releases</p>
                        <p className="text-xs text-gray-500">Generated 2,750 new subscribers with 23% conversion rate</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Review Strategy</h5>
                        <p className="text-sm text-gray-600 mb-2">Coordinated launch with beta readers and ARC team to generate authentic early reviews and social proof</p>
                        <p className="text-xs text-gray-500">Secured 47 verified reviews averaging 4.6 stars within first month</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BookOpen className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Genre Positioning</h5>
                        <p className="text-sm text-gray-600 mb-2">Strategic category selection and romance sub-genre targeting to maximize visibility and discoverability</p>
                        <p className="text-xs text-gray-500">Achieved #1 ranking in Contemporary Romance within 6 weeks</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/70 rounded-lg">
                      <h6 className="font-semibold text-navy-900 text-sm mb-2">Campaign Investment vs. Returns</h6>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-gray-500">Total Investment:</span>
                          <div className="font-semibold text-navy-900">$4,200</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Revenue Generated:</span>
                          <div className="font-semibold text-green-600">$18,900</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1 h-full">
                  <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 h-full">
                    <h4 className="text-xl font-bold text-navy-900 mb-6">Timeline & Results</h4>
                    <div className="space-y-5">
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Month 1-2</span>
                            <span className="text-sm text-gray-600">Foundation</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Website optimization, Amazon setup, and comprehensive market analysis</div>
                          <div className="text-xs text-gray-500 bg-white/60 p-2 rounded">
                            <strong>Key Metrics:</strong> Completed competitor analysis of 47 thriller titles, optimized 12 marketing touchpoints
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Month 3-4</span>
                            <span className="text-sm text-gray-600">Launch</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Multi-platform ad campaigns, targeted PR outreach, and influencer partnerships</div>
                          <div className="text-xs text-gray-500 bg-white/60 p-2 rounded">
                            <strong>Breakthrough:</strong> Amazon ads generated 4.3x ROAS, social media reach increased by 890%
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Month 5-6</span>
                            <span className="text-sm text-gray-600">Scale</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Bestseller status achieved and sustainable marketing momentum established</div>
                          <div className="text-xs text-gray-500 bg-white/60 p-2 rounded">
                            <strong>Milestone:</strong> Reached #3 on Amazon Thriller charts, maintained top 10 for 3 consecutive weeks
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Month 7+</span>
                            <span className="text-sm text-gray-600">Growth</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Continued optimization and preparation for sequel marketing campaigns</div>
                          <div className="text-xs text-gray-500 bg-white/60 p-2 rounded">
                            <strong>Ongoing Success:</strong> Book 2 pre-orders opened with 1,200+ copies in first week
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                      <h6 className="font-semibold text-navy-900 text-sm mb-2">Investment vs. Returns</h6>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-gray-500">Marketing Investment:</span>
                          <div className="font-semibold text-navy-900">$3,800</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Revenue Generated:</span>
                          <div className="font-semibold text-green-600">$24,200</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <strong>ROI:</strong> 537% return on marketing investment over 6 months
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      MT
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">Marcus Thompson</h3>
                      <p className="text-gold-600 font-medium">Thriller Author • "Silent Witness"</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-gold-500 mb-4" />
                    <p className="text-gray-600 text-lg italic leading-relaxed">
                      "After years of struggling to get noticed in the thriller market, Author Glide helped me find my readers.
                      Their approach to Amazon advertising and social media was methodical and incredibly effective. The data-driven
                      strategies they implemented not only increased my visibility but also helped me understand my audience better
                      than I ever thought possible."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">2.1M</div>
                      <div className="text-sm text-gray-600">Total Reach</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">6 months</div>
                      <div className="text-sm text-gray-600">Campaign Length</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Featured in 8 major book blogs and podcasts</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">BookBub Featured Deal with 45,000 downloads</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Secured agent representation for next book</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Established author platform with 5,000+ followers</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-navy-900 text-sm mb-3">What Marcus Says Now:</h6>
                    <p className="text-sm text-gray-600 italic mb-3">
                      "The thriller market felt impossible to crack until Author Glide showed me the data. They didn't just run ads—they helped me understand my readers' behavior, when they're most active, and what makes them click 'buy.'"
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Current Status:</strong> Working on book 3 in the series with pre-orders already at 1,200+ copies
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      ER
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">Elena Rodriguez</h3>
                      <p className="text-gold-600 font-medium">Fantasy Author • "The Crystal Wars Trilogy"</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-gold-500 mb-4" />
                    <p className="text-gray-600 text-lg italic leading-relaxed">
                      "I went from having a hobby to running a full-time author business. The comprehensive approach
                      Author Glide took wasn't just about marketing one book—they helped me build a sustainable career.
                      Their long-term vision and strategic planning gave me the confidence to leave my day job and pursue
                      writing full-time. The results speak for themselves."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">$85K</div>
                      <div className="text-sm text-gray-600">Annual Revenue</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-navy-900">18 months</div>
                      <div className="text-sm text-gray-600">To Full-time</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Built audience of 15,000 engaged fantasy readers</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Successful trilogy launch with consistent sales</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Left day job to write full-time</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Developed passive income streams from backlist</span>
                    </div>
                  </div>
                </div>

                <div className="card p-8 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
                  <h4 className="text-xl font-bold text-navy-900 mb-6">Long-term Strategy</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h5 className="font-semibold text-navy-900">Series Marketing</h5>
                      <p className="text-sm text-gray-600">Coordinated launch strategy across three books with cross-promotion and reader funnel optimization</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h5 className="font-semibold text-navy-900">Community Building</h5>
                      <p className="text-sm text-gray-600">Facebook group grew to 3,000+ active fantasy fans with regular engagement and book clubs</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h5 className="font-semibold text-navy-900">Brand Development</h5>
                      <p className="text-sm text-gray-600">Professional author website and consistent branding across all platforms and marketing materials</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h5 className="font-semibold text-navy-900">Revenue Diversification</h5>
                      <p className="text-sm text-gray-600 mb-2">Multiple income streams including audiobooks, merchandise, and premium reader experiences</p>
                      <p className="text-xs text-gray-500">Audiobook sales now represent 35% of total revenue</p>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <h5 className="font-semibold text-navy-900">International Expansion</h5>
                      <p className="text-sm text-gray-600 mb-2">Expanded to UK, Australian, and Canadian markets with localized marketing approaches</p>
                      <p className="text-xs text-gray-500">International sales now account for 28% of total revenue</p>
                    </div>
                    <div className="mt-4 p-3 bg-white/70 rounded-lg">
                      <h6 className="font-semibold text-navy-900 text-xs mb-2">18-Month Journey Snapshot</h6>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="font-bold text-purple-600">Month 1</div>
                          <div className="text-gray-600">$380/month</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-purple-600">Month 12</div>
                          <div className="text-gray-600">$4,200/month</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-purple-600">Month 18</div>
                          <div className="text-gray-600">$7,100/month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of authors who have transformed their writing careers with our proven marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Start Your Campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/pricing" className="btn-outline text-lg px-12 py-4">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
