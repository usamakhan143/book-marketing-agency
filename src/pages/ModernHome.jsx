import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ModernHero from '../components/ModernHero';
import ModernSection, { SectionHeader, GridContainer, FeatureCard, StatCard } from '../components/ModernSection';
import DynamicScrollSection, { DynamicScrollItem, AlternatingScrollItem, SequentialReveal } from '../components/DynamicScrollSection';
import AnimatedDivider from '../components/AnimatedDivider';
import OptimizedImage from '../components/OptimizedImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { staggerItem, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

import {
  BookOpen,
  Target,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
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
  Send,
  Trophy,
  Mail,
  Smartphone,
  Megaphone,
  Search,
  MousePointer,
  Play
} from 'lucide-react';

// Lazy load heavy components for performance
const EnhancedCTA = lazy(() => import('../components/EnhancedCTA'));

const ModernHome = () => {
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

  return (
    <>
      <SEO
        title="Professional Book Marketing Services for Authors"
        description="Increase your book sales with Author Glide's proven marketing strategies. Amazon ads, social media marketing, PR campaigns, and more for independent authors."
        keywords="book marketing services for authors, promote my book online, amazon book advertising, affordable book marketing company, book promotion for self-published authors"
        canonical="/"
        schema={schema}
      />
      
      <div className="min-h-screen">
        
        {/* 1. Modern Interactive Hero Section */}
        <ModernHero />

        {/* Animated Divider */}
        <AnimatedDivider type="wave" color="gold" />

        {/* 2. About Highlight Section */}
        <DynamicScrollSection
          className="relative bg-white py-16 lg:py-24"
          animation="slideUp"
          threshold={0.3}
          triggerOnce={false}
          ariaLabel="Why choose Author Glide"
          stagger={true}
          staggerItemCount={3}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <DynamicScrollItem animation="slideDown" customDelay={0.2}>
              <SectionHeader
                badge="Why Choose Author Glide?"
                title="Your Publishing Success Partners"
                description="With 5+ years of experience and 500+ successful campaigns, we know what it takes to turn your book into a bestseller."
              />
            </DynamicScrollItem>

            <GridContainer columns={3}>
              {[
                {
                  icon: Shield,
                  title: "Proven Track Record",
                  description: "89% success rate with measurable results that speak for themselves.",
                  badge: "500+ Books Promoted",
                  features: ["Verified results", "Case studies available", "Money-back guarantee"]
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Industry veterans with deep knowledge of publishing and marketing.",
                  badge: "15+ Years Experience",
                  features: ["Certified marketers", "Author backgrounds", "Continuous training"]
                },
                {
                  icon: Heart,
                  title: "Author-First Approach",
                  description: "We understand authors because we are authors. Your success is our mission.",
                  badge: "95% Client Retention",
                  features: ["Personal support", "Tailored strategies", "Long-term partnerships"]
                }
              ].map((feature, index) => (
                <DynamicScrollItem key={index} animation="bounce" index={index}>
                  <FeatureCard {...feature} />
                </DynamicScrollItem>
              ))}
            </GridContainer>
          </div>
        </DynamicScrollSection>

        {/* Animated Divider */}
        <AnimatedDivider type="geometric" color="navy" />

        {/* 3. Services Overview */}
        <DynamicScrollSection
          className="relative bg-gray-50 py-16 lg:py-24"
          animation="slideLeft"
          threshold={0.25}
          triggerOnce={false}
          ariaLabel="Our marketing services"
          stagger={true}
          staggerItemCount={6}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <DynamicScrollItem animation="slideRight" customDelay={0.1}>
              <SectionHeader
                badge="Complete Marketing Solutions"
                title="Everything You Need to Succeed"
                description="From strategy to execution, we handle every aspect of your book marketing campaign"
              />
            </DynamicScrollItem>

            <GridContainer columns={3}>
              {[
                {
                  icon: Target,
                  title: "Amazon Optimization",
                  description: "Maximize visibility with targeted ads and optimized listings.",
                  features: ["Keyword Research", "A+ Content", "Sponsored Ads"],
                  iconBg: "bg-gradient-to-br from-gold-400 to-gold-600"
                },
                {
                  icon: Globe,
                  title: "Social Media Marketing",
                  description: "Build your author brand across all platforms.",
                  features: ["Content Strategy", "Community Building", "Paid Campaigns"],
                  iconBg: "bg-gradient-to-br from-blue-400 to-blue-600"
                },
                {
                  icon: BarChart3,
                  title: "Email Marketing",
                  description: "Connect directly with readers through email campaigns.",
                  features: ["List Building", "Automation", "Newsletter Design"],
                  iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600"
                },
                {
                  icon: MessageSquare,
                  title: "PR & Media Outreach",
                  description: "Get featured in publications and podcasts.",
                  features: ["Press Releases", "Media Lists", "Interview Booking"],
                  iconBg: "bg-gradient-to-br from-purple-400 to-purple-600"
                },
                {
                  icon: Zap,
                  title: "SEO & Web Presence",
                  description: "Improve discoverability across search engines.",
                  features: ["Website Optimization", "Google Ads", "Local SEO"],
                  iconBg: "bg-gradient-to-br from-orange-400 to-orange-600"
                },
                {
                  icon: MousePointer,
                  title: "Paid Advertising",
                  description: "Strategic campaigns across multiple platforms.",
                  features: ["Google Ads", "Facebook Ads", "BookBub Promotion"],
                  iconBg: "bg-gradient-to-br from-pink-400 to-pink-600"
                }
              ].map((service, index) => (
                <AlternatingScrollItem key={index} index={index}>
                  <FeatureCard {...service} />
                </AlternatingScrollItem>
              ))}
            </GridContainer>
          </div>
        </DynamicScrollSection>

        {/* Animated Divider */}
        <AnimatedDivider type="dots" color="gold" />

        {/* 4. Process - How It Works */}
        <DynamicScrollSection
          className="relative bg-white py-16 lg:py-24"
          animation="rotate"
          threshold={0.3}
          triggerOnce={false}
          ariaLabel="Our process"
          stagger={true}
          staggerItemCount={4}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <DynamicScrollItem animation="flip" customDelay={0.2}>
              <SectionHeader
                badge="Simple Process"
                title="How We Make Magic Happen"
                description="Our proven 4-step process ensures your book gets the attention it deserves"
              />
            </DynamicScrollItem>

            <GridContainer columns={4} className="relative z-10">
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
                  <DynamicScrollItem
                    key={index}
                    animation="rotate"
                    index={index}
                    className="text-center relative"
                    customDelay={index * 0.25}
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl mx-auto flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 relative z-20">
                        <Icon className="w-10 h-10 text-gold-500" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-30">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </DynamicScrollItem>
                );
              })}
            </GridContainer>
          </div>
        </DynamicScrollSection>

        {/* 5. Success Metrics */}
        <DynamicScrollSection
          className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white relative overflow-hidden py-16 lg:py-24"
          animation="slideUp"
          threshold={0.25}
          triggerOnce={false}
          ariaLabel="Our proven results"
          stagger={true}
          staggerItemCount={4}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage
              src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business analytics background"
              aspectRatio="aspect-auto"
              objectFit="object-cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/90" />
          </div>

          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <DynamicScrollItem animation="slideDown" customDelay={0.3}>
                <SectionHeader
                  badge="Proven Results"
                  title="Numbers That Speak for Themselves"
                  description="Real data from real campaigns that transformed authors' careers"
                  className="text-white [&>span]:bg-gold-500/20 [&>span]:text-gold-400 [&>h2]:text-white [&>p]:text-gray-300"
                />
              </DynamicScrollItem>

              <GridContainer columns={4}>
                {[
                  {
                    icon: BookOpen,
                    number: "500+",
                    label: "Books Promoted",
                    description: "Successful campaigns across all genres",
                    color: "text-gold-400",
                    bgColor: "bg-gold-500/20"
                  },
                  {
                    icon: Users,
                    number: "2.5M+",
                    label: "Readers Reached",
                    description: "Total audience engagement generated",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500/20"
                  },
                  {
                    icon: TrendingUp,
                    number: "342",
                    suffix: "%",
                    label: "Average Sales Increase",
                    description: "Typical improvement in first 6 months",
                    color: "text-emerald-400",
                    bgColor: "bg-emerald-500/20"
                  },
                  {
                    icon: Star,
                    number: "4.9",
                    suffix: "/5",
                    label: "Client Satisfaction",
                    description: "Based on 200+ reviews and testimonials",
                    color: "text-purple-400",
                    bgColor: "bg-purple-500/20"
                  }
                ].map((stat, index) => (
                  <DynamicScrollItem key={index} animation="bounce" index={index} customDelay={(index + 1) * 0.2}>
                    <StatCard
                      {...stat}
                      className="bg-white/5 backdrop-blur-lg border-white/10 text-white hover:bg-white/10"
                      labelClassName="text-white"
                      descriptionClassName="text-gray-300"
                    />
                  </DynamicScrollItem>
                ))}
              </GridContainer>
            </div>
          </div>
        </DynamicScrollSection>

        {/* 6. Author Success Stories */}
        <ModernSection
          background="bg-gray-50"
          ariaLabel="Author success stories"
          stagger={true}
          className="pt-24 lg:pt-32 overflow-visible"
        >
          <SectionHeader
            badge="Success Stories"
            title="Authors Who Transformed Their Careers"
            description="Real stories from real authors who achieved their publishing dreams with our help"
          />

          <GridContainer columns={3} className="mt-16 overflow-visible" style={{ position: 'relative', zIndex: 2 }}>
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
                className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-gold-200 transition-all duration-500 group"
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 1 }}
              >
                {/* Achievement Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap" style={{ zIndex: 50 }}>
                  {story.achievement}
                </div>

                <div className="pt-8">
                  <Quote className="w-8 h-8 text-gold-500 mb-4" />
                  
                  <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                    "{story.quote}"
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    <div className="bg-gold-50 px-3 py-2 rounded-lg text-center flex-1">
                      <div className="text-gold-600 font-bold text-lg">{story.result}</div>
                      <div className="text-gray-500 text-xs">Growth</div>
                    </div>
                    <div className="bg-blue-50 px-3 py-2 rounded-lg text-center flex-1">
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

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl" />
              </motion.div>
            ))}
          </GridContainer>
        </ModernSection>

        {/* 7. Testimonials */}
        <ModernSection
          background="bg-white"
          ariaLabel="Client testimonials"
          stagger={true}
        >
          <SectionHeader
            badge="Client Reviews"
            title="What Authors Say About Us"
          />
          
          <div className="flex items-center justify-center space-x-2 mb-12">
            <div className="flex text-gold-500" role="img" aria-label="5 star rating">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-semibold">4.9/5 from 200+ reviews</span>
          </div>

          <GridContainer columns={3}>
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex text-gold-500 mb-4" role="img" aria-label={`${testimonial.rating} star rating`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4 leading-relaxed">
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
          </GridContainer>
        </ModernSection>

        {/* 8. Pricing Teaser */}
        <ModernSection
          background="bg-gradient-to-br from-gold-50 to-gold-100"
          ariaLabel="Pricing options"
          stagger={true}
        >
          <SectionHeader
            badge="Investment Options"
            title="Flexible Plans for Every Author"
            description="Choose the perfect package to launch your book marketing campaign"
          />

          <GridContainer columns={3}>
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
                className={`relative rounded-2xl lg:rounded-3xl p-6 lg:p-8 border transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-2xl scale-105 border-gold-500' 
                    : 'bg-white text-navy-900 shadow-lg border-gray-200 hover:border-gold-200'
                } hover:shadow-xl`}
                variants={staggerItem}
                whileHover={{ y: -8, scale: plan.popular ? 1.05 : 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
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

                <motion.button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </GridContainer>

          <motion.div 
            className="text-center mt-12"
            variants={staggerItem}
          >
            <p className="text-gray-600 mb-4">Need a custom solution? We've got you covered.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Schedule Custom Consultation
            </Link>
          </motion.div>
        </ModernSection>

        {/* 9. FAQ Preview */}
        <ModernSection
          background="bg-white"
          ariaLabel="Frequently asked questions"
          stagger={true}
        >
          <SectionHeader
            badge="Common Questions"
            title="Everything You Need to Know"
            description="Quick answers to the most frequently asked questions about our services"
          />

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
                variants={staggerItem}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
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
            variants={staggerItem}
          >
            <Link 
              to="/faq" 
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-navy-900 font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-300"
            >
              View All FAQs
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </ModernSection>

        {/* 10. Contact Teaser */}
        <ModernSection
          background="bg-gradient-to-br from-navy-50 to-blue-50"
          stagger={true}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div variants={fadeInLeft}>
              <SectionHeader
                badge="Ready to Get Started?"
                title="Let's Discuss Your Book's Potential"
                description="Schedule a free 30-minute consultation to discuss your book, goals, and how we can help you achieve bestseller status."
                center={false}
              />

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
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-navy-900 font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Our Process
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Quick Contact</h3>
                  <p className="text-gray-600">Get in touch in under 60 seconds</p>
                </div>

                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-xl" />}>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        aria-label="First Name"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        aria-label="Last Name"
                      />
                    </div>
                    
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      aria-label="Email Address"
                    />
                    
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      aria-label="Book Genre"
                    >
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none transition-all duration-200"
                      aria-label="Message"
                    />

                    <motion.button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </motion.button>
                  </form>
                </Suspense>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Your information is secure and never shared
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </ModernSection>

        {/* 11. Trust Signals */}
        <ModernSection
          background="bg-white"
          ariaLabel="Trust and recognition"
          stagger={true}
        >
          <SectionHeader
            badge="Trusted by Industry"
            title="Recognized Excellence"
            description="Awards, certifications, and partnerships that demonstrate our commitment to excellence"
          />

          <GridContainer columns={4} gap="gap-4 lg:gap-6">
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
                  className="text-center group p-4"
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
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
          </GridContainer>
        </ModernSection>

        {/* 12. Final CTA */}
        <ModernSection
          background="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"
          className="text-white relative overflow-hidden"
          padding="py-20 lg:py-32"
        >
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

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div 
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

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Your Bestseller</span>
                <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">Journey Starts Now</span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Join 500+ successful authors who transformed their publishing dreams into reality.
                Don't let your book stay hidden. Let's make it shine.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center text-xl px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Sparkles className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    Start My Success Story
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center text-xl px-12 py-5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Schedule Consultation
                  </Link>
                </motion.div>
              </div>

              <GridContainer columns={3} className="max-w-3xl mx-auto">
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
              </GridContainer>
            </motion.div>
          </div>
        </ModernSection>

      </div>
    </>
  );
};

export default ModernHome;
