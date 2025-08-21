import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
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
  return (
    <>
      <SEO
        title="Book Marketing Success Stories - Case Studies"
        description="See how Author Glide helped authors increase book sales by 300%+ with proven marketing strategies. Real results from real authors."
        keywords="book marketing case studies, author success stories, book sales increase, marketing results"
        canonical="/case-studies"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Business professionals discussing data charts and graphs in modern office setting"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>
          
          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Case Studies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Real results from real authors who transformed their writing careers with our proven marketing strategies.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Case Studies</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Success Stats Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                Proven Results That Speak for Themselves
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Over the past three years, we've helped authors across all genres achieve remarkable success
              </p>
            </div>
            
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
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
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Targeted Amazon Ads</h5>
                        <p className="text-sm text-gray-600">Focused on romance keywords and competitor targeting with sophisticated keyword research and bid optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Reader Magnet Campaign</h5>
                        <p className="text-sm text-gray-600">Free novella strategy to build email list rapidly and create a sustainable reader funnel for future releases</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Review Strategy</h5>
                        <p className="text-sm text-gray-600">Coordinated launch with beta readers and ARC team to generate authentic early reviews and social proof</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BookOpen className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <h5 className="font-semibold text-navy-900">Genre Positioning</h5>
                        <p className="text-sm text-gray-600">Strategic category selection and romance sub-genre targeting to maximize visibility and discoverability</p>
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
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-gold-500 mr-3" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Month 1-2</span>
                            <span className="text-sm text-gray-600">Foundation</span>
                          </div>
                          <div className="text-sm text-gray-600">Website optimization, Amazon setup, and comprehensive market analysis</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="w-5 h-5 text-gold-500 mr-3" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Month 3-4</span>
                            <span className="text-sm text-gray-600">Launch</span>
                          </div>
                          <div className="text-sm text-gray-600">Multi-platform ad campaigns, targeted PR outreach, and influencer partnerships</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-gold-500 mr-3" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Month 5-6</span>
                            <span className="text-sm text-gray-600">Scale</span>
                          </div>
                          <div className="text-sm text-gray-600">Bestseller status achieved and sustainable marketing momentum established</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-gold-500 mr-3" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Month 7+</span>
                            <span className="text-sm text-gray-600">Growth</span>
                          </div>
                          <div className="text-sm text-gray-600">Continued optimization and preparation for sequel marketing campaigns</div>
                        </div>
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

                  <div className="space-y-3">
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
                      <p className="text-sm text-gray-600">Multiple income streams including audiobooks, merchandise, and premium reader experiences</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
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
