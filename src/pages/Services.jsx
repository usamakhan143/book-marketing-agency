import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
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
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Successful business team celebrating achievements with financial growth charts"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>

          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                From Amazon optimization to social media campaigns, we provide everything you need
                to get your book discovered by the right readers.
              </p>

              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Services</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              
              {/* Amazon Ads & Optimization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
              </div>

              {/* Social Media Marketing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-navy-700 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Smartphone className="w-8 h-8 text-gold-500" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
              </div>

              {/* Email Marketing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
                      <span className="text-gold-500 mr-3 mt-1">✓</span>
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
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
                    <h2 className="text-3xl font-serif font-bold text-navy-900">
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
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Amplify Your Book's Reach?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a custom marketing strategy that fits your book, budget, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Get Your Marketing Plan
              </Link>
              <Link to="/pricing" className="btn-outline text-lg px-12 py-4">
                View Our Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
