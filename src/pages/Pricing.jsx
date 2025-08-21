import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
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
  return (
    <>
      <SEO
        title="Book Marketing Pricing - Affordable Packages for Authors"
        description="Transparent pricing for professional book marketing services. Choose from Starter, Professional, or Elite packages designed for independent authors."
        keywords="book marketing pricing, affordable book marketing, author marketing packages, book promotion cost"
        canonical="/pricing"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/7876656/pexels-photo-7876656.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Professional business financial analysis and planning"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>
          
          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Pricing
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transparent, value-driven pricing designed to fit every author's budget and goals.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Pricing</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                Investment That Pays for Itself
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our clients typically see their investment returned within 60-90 days. 
                Every package is designed to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                Choose Your Success Package
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each package includes everything you need to succeed, with no hidden costs or surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-gold-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Starter</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-navy-900">$1,497</span>
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
              </div>

              {/* Professional Package - Most Popular */}
              <div className="relative rounded-2xl p-8 bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-2xl scale-105 border-2 border-gold-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gold-400">$2,997</span>
                    <span className="ml-2 text-gray-300">one-time</span>
                  </div>
                  <p className="text-gray-300">Comprehensive marketing for serious authors</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold flex items-center">
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
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Authors serious about building their career</li>
                    <li>• Writers with multiple books or series</li>
                    <li>• Authors targeting bestseller lists</li>
                  </ul>
                </div>

                <Link to="/contact" className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center">
                  Start Professional Campaign
                </Link>
              </div>

              {/* Elite Package */}
              <div className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-gold-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Elite</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-navy-900">$5,997</span>
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
                    <li>• Established authors targeting major success</li>
                    <li>• Authors with significant marketing budgets</li>
                    <li>• Writers seeking maximum industry exposure</li>
                  </ul>
                </div>

                <Link to="/contact" className="w-full btn-secondary py-4 text-center">
                  Discuss Elite Package
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance any package with these specialized services
              </p>
            </div>

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
                  <div key={index} className="card p-6 text-center">
                    <Icon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-gold-600 mb-3">{service.price}</div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

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
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Invest in Your Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your goals and find the perfect package for your book.
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

export default Pricing;
