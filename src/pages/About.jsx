import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Target, Rocket, Gem, Search, TrendingUp, Home, ChevronRight, Users, Star } from 'lucide-react';
import DynamicScrollSection, { DynamicScrollItem, AlternatingScrollItem, SequentialReveal } from '../components/DynamicScrollSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <SEO
        title="About Author Glide - Professional Book Marketing Team"
        description="Learn about Author Glide's mission to empower independent authors with professional marketing services. Meet our experienced team of book marketing specialists."
        keywords="about author glide, book marketing team, professional book marketing company, author marketing specialists"
        canonical="/about"
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
                  Meet the Team Behind Your Success
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
                About Us
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
                  We believe every author deserves the chance to connect with their ideal readers.
                </p>
                <motion.p
                  className="text-base md:text-lg lg:[font-size:1.1rem] text-gold-200 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  That's why we've dedicated ourselves to making professional book marketing accessible and effective.
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
                  { number: "500+", label: "Authors Helped", icon: Users },
                  { number: "387%", label: "Avg Sales Increase", icon: TrendingUp },
                  { number: "3.2M", label: "Readers Reached", icon: Star }
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
                <span className="text-white font-semibold">About Us</span>
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

        {/* Our Story */}
        <DynamicScrollSection
          className="section-padding"
          animation="slideLeft"
          threshold={0.3}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <DynamicScrollItem animation="slideLeft" customDelay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Author Glide was born from a simple observation: incredible books were getting lost in the noise.
                    Talented writers were pouring their hearts into their work, only to struggle with the marketing side of publishing.
                  </p>
                  <p className="text-gray-600 mb-6 text-lg">
                    Founded in 2020 by a team of publishing industry veterans and digital marketing experts,
                    we set out to bridge that gap. We wanted to create a service that understood both the art of storytelling
                    and the science of reaching readers.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Today, we're proud to have helped over 500 authors transform their passion projects into successful businesses,
                    reaching millions of readers worldwide.
                  </p>
                </div>
              </DynamicScrollItem>

              <DynamicScrollItem animation="slideRight" customDelay={0.4}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/33505506/pexels-photo-33505506.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional team collaboration in modern office setting"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">AG</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Since 2020</h3>
                    <p className="text-gray-200">Helping authors succeed in the digital age</p>
                  </div>
                </div>
              </DynamicScrollItem>
            </div>
          </div>
        </DynamicScrollSection>

        {/* Mission & Vision */}
        <DynamicScrollSection
          className="section-padding bg-gray-50"
          animation="slideUp"
          threshold={0.3}
          stagger={true}
          staggerItemCount={2}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <DynamicScrollItem animation="bounce" customDelay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg">
                    To democratize book marketing by providing independent authors with the same level of professional
                    marketing support that traditional publishers offer their bestselling authors.
                  </p>
                </div>
              </DynamicScrollItem>

              <DynamicScrollItem animation="bounce" customDelay={0.5}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-700 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Rocket className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg">
                    A world where every great story finds its audience, where talented authors can focus on writing
                    while we handle the complexities of modern book marketing.
                  </p>
                </div>
              </DynamicScrollItem>
            </div>
          </div>
        </DynamicScrollSection>

        {/* Core Values */}
        <DynamicScrollSection
          className="section-padding"
          animation="slideDown"
          threshold={0.3}
          stagger={true}
          staggerItemCount={3}
        >
          <div className="container-custom">
            <DynamicScrollItem animation="slideDown" customDelay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These principles guide everything we do, from campaign strategy to client communication.
                </p>
              </div>
            </DynamicScrollItem>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DynamicScrollItem animation="rotate" customDelay={0.4}>
                <div className="text-center card p-8 hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <Gem className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Integrity</h3>
                  <p className="text-gray-600">
                    We believe in honest communication, transparent pricing, and ethical marketing practices.
                    Your success is our success, and we're committed to earning your trust every day.
                  </p>
                </div>
              </DynamicScrollItem>

              <DynamicScrollItem animation="bounce" customDelay={0.6}>
                <div className="text-center card p-8 hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <Search className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Transparency</h3>
                  <p className="text-gray-600">
                    No hidden fees, no confusing jargon, no mysterious "black box" strategies.
                    We explain what we're doing, why we're doing it, and how it's performing.
                  </p>
                </div>
              </DynamicScrollItem>

              <DynamicScrollItem animation="flip" customDelay={0.8}>
                <div className="text-center card p-8 hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Results-Driven</h3>
                  <p className="text-gray-600">
                    We measure our success by your success. Every strategy we implement is designed to deliver
                    measurable improvements in your book's visibility and sales.
                  </p>
                </div>
              </DynamicScrollItem>
            </div>
          </div>
        </DynamicScrollSection>

        {/* Team Section */}
        <DynamicScrollSection
          className="section-padding bg-gray-50"
          animation="slideUp"
          threshold={0.3}
          stagger={true}
          staggerItemCount={6}
        >
          <div className="container-custom">
            <DynamicScrollItem animation="slideUp" customDelay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A diverse group of marketing professionals, publishing experts, and book lovers dedicated to your success.
                </p>
              </div>
            </DynamicScrollItem>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Founder & CEO",
                  bio: "Former publishing executive with 15+ years in book marketing. Published author and passionate advocate for independent writers.",
                  avatar: "AC"
                },
                {
                  name: "Marcus Rivera",
                  role: "Head of Digital Marketing",
                  bio: "Digital marketing strategist with expertise in Amazon advertising and social media campaigns. Helped 200+ authors reach bestseller status.",
                  avatar: "MR"
                },
                {
                  name: "Sarah Johnson",
                  role: "Content & PR Manager",
                  bio: "Award-winning journalist turned book marketing specialist. Expert in media relations and content strategy for authors.",
                  avatar: "SJ"
                },
                {
                  name: "David Park",
                  role: "Data Analytics Lead",
                  bio: "Data scientist who transforms marketing metrics into actionable insights. Ensures every campaign is optimized for maximum ROI.",
                  avatar: "DP"
                },
                {
                  name: "Emma Thompson",
                  role: "Client Success Manager",
                  bio: "Dedicated to ensuring every author has an exceptional experience. Your go-to person for support and campaign updates.",
                  avatar: "ET"
                },
                {
                  name: "Roberto Silva",
                  role: "Creative Director",
                  bio: "Visual storyteller who creates compelling ad creatives and book promotion materials that capture readers' attention.",
                  avatar: "RS"
                }
              ].map((member, index) => (
                <AlternatingScrollItem key={index} index={index}>
                  <div className="card p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gold-500 font-bold text-lg">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </AlternatingScrollItem>
              ))}
            </div>
          </div>
        </DynamicScrollSection>

        {/* CTA Section */}
        <DynamicScrollSection
          className="gradient-bg text-white section-padding"
          animation="bounce"
          threshold={0.3}
        >
          <div className="container-custom text-center">
            <DynamicScrollItem animation="slideUp" customDelay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Work With Us?
              </h2>
            </DynamicScrollItem>

            <DynamicScrollItem animation="slideUp" customDelay={0.4}>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you reach more readers and achieve your publishing goals.
              </p>
            </DynamicScrollItem>

            <DynamicScrollItem animation="bounce" customDelay={0.6}>
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Schedule a Free Consultation
              </Link>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>
      </div>
    </>
  );
};

export default About;
