import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal, useScrollRevealMultiple } from '../hooks/useScrollReveal';
import { 
  Home, 
  ChevronRight, 
  HelpCircle,
  Clock,
  DollarSign,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

const FAQ = () => {
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

  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      questions: [
        {
          question: "How do I know if book marketing is right for me?",
          answer: "If you've written a book and want more people to read it, marketing can help. Whether you're a first-time author or have published multiple books, professional marketing can significantly increase your visibility and sales. During our free consultation, we'll assess your specific situation and goals."
        },
        {
          question: "What information do you need to get started?",
          answer: "We'll need basic information about your book (title, genre, publication status), your current marketing efforts, your budget, and your goals. If your book is already published, we'll also review your current Amazon listing, website, and any existing marketing materials."
        },
        {
          question: "How quickly can you start my campaign?",
          answer: "For our standard packages, we typically begin within 5-7 business days after contract signing. If you need expedited service, we offer rush setup for an additional fee, which can get your campaign launched within 48 hours."
        },
        {
          question: "Do you work with books in all genres?",
          answer: "Yes, we have experience across all genres including fiction (romance, thriller, fantasy, literary), non-fiction (business, self-help, memoir), children's books, and academic titles. Our strategies are customized for each genre's unique audience and market dynamics."
        }
      ]
    },
    {
      title: "Services & Process",
      icon: Target,
      questions: [
        {
          question: "What exactly is included in your marketing services?",
          answer: "Our services include Amazon optimization, paid advertising (Amazon, Facebook, BookBub), social media marketing, email campaign setup, PR outreach, content creation, and performance tracking. The specific mix depends on your chosen package and goals."
        },
        {
          question: "How do you determine the best marketing strategy for my book?",
          answer: "We start with a comprehensive analysis of your book, target audience, competition, and current market position. We then develop a custom strategy based on your genre, budget, timeline, and specific goals. Every campaign is tailored to your unique situation."
        },
        {
          question: "Will I have input on my marketing campaigns?",
          answer: "Absolutely. While we handle the technical execution, you'll be involved in all major decisions. We'll share our strategy recommendations and get your approval before launching any campaigns. You'll also receive regular updates and have opportunities to provide feedback."
        },
        {
          question: "How do you measure success?",
          answer: "We track multiple metrics including book sales, Amazon ranking improvements, website traffic, email list growth, social media engagement, and return on ad spend (ROAS). You'll receive detailed weekly reports showing exactly how your campaigns are performing."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: DollarSign,
      questions: [
        {
          question: "Why are your packages one-time payments instead of monthly?",
          answer: "We believe in transparent, upfront pricing without ongoing commitments. Our packages are designed as intensive campaigns that deliver results within a specific timeframe. This model allows us to focus entirely on your success without worrying about retention."
        },
        {
          question: "Are there any hidden fees or additional costs?",
          answer: "No hidden fees ever. Your package price includes everything specified. The only additional costs would be optional add-on services you choose, or if you decide to extend your campaign beyond the original timeframe."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer 3-month payment plans for our Professional and Elite packages. For the Professional package, you can pay $999 x 3 months. For Elite, it's $1,999 x 3 months. No interest or fees for payment plans."
        },
        {
          question: "What's your refund policy?",
          answer: "We offer a 90-day performance guarantee. If you don't see measurable improvement in your book's performance metrics within 90 days of campaign launch, we'll provide a full refund. We're confident in our results, so we stand behind our work."
        }
      ]
    },
    {
      title: "Timeline & Results",
      icon: Clock,
      questions: [
        {
          question: "How long before I see results?",
          answer: "Most clients start seeing initial results within 2-3 weeks, with significant improvements typically occurring within 4-8 weeks. However, book marketing is a marathon, not a sprint. The most substantial and lasting results usually develop over 3-6 months."
        },
        {
          question: "What kind of results can I expect?",
          answer: "Results vary based on many factors, but our average client sees a 250-400% increase in sales within the first 6 months. We've helped authors achieve Amazon bestseller status, significantly grow their email lists, and establish sustainable, long-term readership."
        },
        {
          question: "How long should I continue marketing my book?",
          answer: "Book marketing is most effective as an ongoing effort rather than a one-time push. After your initial campaign, many authors continue with maintenance marketing or periodic promotional pushes. We can help you develop a long-term strategy that fits your budget and goals."
        },
        {
          question: "What happens after my campaign ends?",
          answer: "We provide you with a comprehensive handover document including all campaign data, successful strategies, and recommendations for continued marketing. Many clients choose to work with us on subsequent books or ongoing maintenance campaigns."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: TrendingUp,
      questions: [
        {
          question: "Do I need to have my own website or social media accounts?",
          answer: "While helpful, it's not required. We can work with whatever online presence you currently have. If needed, we can help you set up professional author accounts on social media platforms and can recommend website solutions that fit your budget."
        },
        {
          question: "Will you need access to my Amazon account or other platforms?",
          answer: "For some services, yes. We'll need access to set up and manage advertising campaigns. We use secure, limited-access permissions and never have access to your payment information. You maintain full control and can revoke access at any time."
        },
        {
          question: "How do you handle data and privacy?",
          answer: "We take data security seriously. All client information is kept strictly confidential and is never shared with third parties. We use secure, encrypted systems for all data storage and communication. You can review our full privacy policy upon request."
        },
        {
          question: "What if I'm not tech-savvy?",
          answer: "No problem at all! Many of our most successful clients aren't tech-savvy. We handle all the technical aspects and explain everything in plain English. Our team is always available to answer questions and guide you through any processes."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions - Book Marketing Help"
        description="Get answers to common questions about book marketing services, pricing, timelines, and strategies for independent authors."
        keywords="book marketing FAQ, author marketing questions, book promotion help, marketing timeline"
        canonical="/faq"
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
                  Common Questions, Clear Answers
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
                FAQ
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
                  Everything you need to know about working with Author Glide to transform your book marketing.
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  We believe in transparency. Here are honest answers to the questions we hear most often from authors.
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
                  { number: "30+", label: "FAQs Answered", icon: HelpCircle },
                  { number: "24/7", label: "Support Available", icon: MessageSquare },
                  { number: "100%", label: "Transparency", icon: CheckCircle }
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
                <span className="text-white font-semibold">FAQ</span>
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

        {/* Quick Stats */}
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
                Common Questions, Clear Answers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                We believe in transparency. Here are honest answers to the questions we hear most often from authors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-2">500+</div>
                <div className="text-lg font-semibold text-gold-600 mb-1">Authors Helped</div>
                <div className="text-sm text-gray-600">Across all genres</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-2">24hrs</div>
                <div className="text-lg font-semibold text-gold-600 mb-1">Response Time</div>
                <div className="text-sm text-gray-600">To all inquiries</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-2">90-day</div>
                <div className="text-lg font-semibold text-gold-600 mb-1">Guarantee</div>
                <div className="text-sm text-gray-600">Results or refund</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={categoryIndex}>
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl mr-4 flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-navy-900">{category.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {category.questions.map((faq, index) => (
                        <div key={index} className="card p-6">
                          <div className="flex items-start mb-4">
                            <HelpCircle className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                            <h3 className="text-xl font-bold text-navy-900">{faq.question}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're here to help! Get in touch and we'll answer any questions about your specific situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">15-minute call to discuss your goals</p>
                  <Link to="/contact" className="text-gold-600 font-medium hover:text-gold-700">
                    Schedule Now →
                  </Link>
                </div>
                
                <div className="text-center">
                  <Mail className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Detailed answers within 24 hours</p>
                  <a href="mailto:hello@authorglide.com" className="text-gold-600 font-medium hover:text-gold-700">
                    hello@authorglide.com
                  </a>
                </div>
                
                <div className="text-center">
                  <Phone className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Speak directly with our team</p>
                  <a href="tel:+15551234567" className="text-gold-600 font-medium hover:text-gold-700">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                  Get Your Questions Answered
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/pricing" className="btn-secondary text-lg px-12 py-4">
                  View Pricing Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful authors who have transformed their book marketing with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-outline text-lg px-12 py-4">
                See Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
