import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Cookie,
  Calendar,
  Settings,
  Eye,
  BarChart3,
  Target,
  Globe,
  Shield,
  Trash2,
  AlertTriangle,
  CheckCircle,
  X,
  Mail,
  Phone
} from 'lucide-react';

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy - Author Glide"
        description="Learn about how Author Glide uses cookies and similar technologies to improve your browsing experience and analyze website usage."
        keywords="cookie policy, cookies, website tracking, data collection, Author Glide"
        canonical="/cookie-policy"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital technology and web analytics"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>
          
          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Cookie className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Cookie Policy
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transparency about how we use cookies and similar technologies to enhance your experience.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Cookie Policy</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="section-padding-sm bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-gold-500" />
                    <span className="text-lg font-semibold text-navy-900">Last Updated: January 15, 2025</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Effective Date: January 15, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Cookie className="w-8 h-8 text-gold-500 mr-3" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit 
                  a website. They are widely used to make websites work more efficiently and provide information to website owners 
                  about how visitors use their sites.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies contain information that is transferred to your device's hard drive. They help us recognize your device 
                  and store some information about your preferences or past actions on our website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Cookie Policy explains how Author Glide uses cookies and similar technologies on our website at 
                  authorglide.com and gives you information about how to manage cookie preferences.
                </p>
              </div>

              {/* How We Use Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Settings className="w-8 h-8 text-gold-500 mr-3" />
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies for several important purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>Essential Website Functions:</strong> Enable core website features like navigation and secure areas</li>
                  <li><strong>Performance Analysis:</strong> Understand how visitors interact with our website</li>
                  <li><strong>User Experience:</strong> Remember your preferences and personalize your experience</li>
                  <li><strong>Marketing Effectiveness:</strong> Measure the success of our marketing campaigns</li>
                  <li><strong>Security:</strong> Protect against fraudulent activity and enhance website security</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We do not use cookies to store sensitive personal information like passwords or payment details. All data 
                  collected through cookies is handled in accordance with our Privacy Policy.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Essential Cookies */}
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-navy-900">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Website navigation and menu functionality</li>
                      <li>• Form submission and contact features</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Cookie consent preferences</li>
                    </ul>
                    <div className="mt-4 text-xs text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                      Always Active - Required for website operation
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-navy-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      Help us understand how visitors use our website so we can improve it.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Page views and visitor counts</li>
                      <li>• Time spent on pages</li>
                      <li>• Traffic sources and referrals</li>
                      <li>• Popular content and user paths</li>
                    </ul>
                    <div className="mt-4 text-xs text-blue-700 bg-blue-100 px-3 py-2 rounded-lg">
                      Optional - Can be disabled in settings
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-xl font-bold text-navy-900">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      Track visitors across websites to display relevant and engaging ads.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ad personalization and targeting</li>
                      <li>• Campaign effectiveness measurement</li>
                      <li>• Social media integration</li>
                      <li>• Retargeting and remarketing</li>
                    </ul>
                    <div className="mt-4 text-xs text-purple-700 bg-purple-100 px-3 py-2 rounded-lg">
                      Optional - Can be disabled in settings
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-navy-900">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      Enable enhanced functionality and personalization features.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Language and region preferences</li>
                      <li>• Personalized content recommendations</li>
                      <li>• Chat widget functionality</li>
                      <li>• Form auto-completion</li>
                    </ul>
                    <div className="mt-4 text-xs text-orange-700 bg-orange-100 px-3 py-2 rounded-lg">
                      Optional - Can be disabled in settings
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-gold-500 mr-3" />
                  Third-Party Cookies and Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some cookies on our website are set by third-party services that we use to enhance functionality 
                  and analyze performance. These services may collect information about your visits to our website 
                  and other websites.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Third-Party Services We Use:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Google Analytics</h4>
                      <p className="text-sm text-gray-600 mb-2">Website traffic and user behavior analysis</p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-gold-600 text-sm hover:text-gold-700">
                        View Google's Privacy Policy →
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Facebook Pixel</h4>
                      <p className="text-sm text-gray-600 mb-2">Social media advertising and retargeting</p>
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" 
                         className="text-gold-600 text-sm hover:text-gold-700">
                        View Facebook's Privacy Policy →
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Hotjar</h4>
                      <p className="text-sm text-gray-600 mb-2">User experience and heatmap analysis</p>
                      <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" 
                         className="text-gold-600 text-sm hover:text-gold-700">
                        View Hotjar's Privacy Policy →
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Mailchimp</h4>
                      <p className="text-sm text-gray-600 mb-2">Email marketing and newsletter management</p>
                      <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" 
                         className="text-gold-600 text-sm hover:text-gold-700">
                        View Mailchimp's Privacy Policy →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Trash2 className="w-8 h-8 text-gold-500 mr-3" />
                  Managing Your Cookie Preferences
                </h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies through your web browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or clear all cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies (though this may affect website functionality)</li>
                  <li>Set preferences for accepting cookies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Browser-Specific Instructions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Google Chrome</h4>
                    <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Mozilla Firefox</h4>
                    <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">Preferences → Privacy → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Microsoft Edge</h4>
                    <p className="text-sm text-gray-600">Settings → Cookies and Site Permissions</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Opt-Out Tools</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For advertising cookies, you can also use these industry opt-out tools:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">Digital Advertising Alliance Opt-Out Page</a></li>
                  <li><a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">Network Advertising Initiative Opt-Out Page</a></li>
                  <li><a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">Your Online Choices (EU)</a></li>
                </ul>
              </div>

              {/* Impact of Disabling */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-gold-500 mr-3" />
                  Impact of Disabling Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While you can disable cookies, doing so may affect your browsing experience on our website:
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                    Potential Issues When Cookies Are Disabled:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Forms may not function properly or remember your information</li>
                    <li>You may need to log in repeatedly during your session</li>
                    <li>Personalized content and recommendations won't be available</li>
                    <li>We won't be able to remember your communication preferences</li>
                    <li>Some interactive features may not work as expected</li>
                    <li>Analytics won't capture your usage patterns for improvements</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Cookie Retention Periods</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Different types of cookies are stored for different periods:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-navy-900">Cookie Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-navy-900">Retention Period</th>
                        <th className="px-4 py-3 text-left font-semibold text-navy-900">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Session Cookies</td>
                        <td className="px-4 py-3 text-gray-600">Until browser is closed</td>
                        <td className="px-4 py-3 text-gray-600">Essential website functions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Persistent Cookies</td>
                        <td className="px-4 py-3 text-gray-600">30 days to 2 years</td>
                        <td className="px-4 py-3 text-gray-600">User preferences and analytics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Analytics Cookies</td>
                        <td className="px-4 py-3 text-gray-600">1-2 years</td>
                        <td className="px-4 py-3 text-gray-600">Website improvement insights</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Marketing Cookies</td>
                        <td className="px-4 py-3 text-gray-600">30-90 days</td>
                        <td className="px-4 py-3 text-gray-600">Advertising and retargeting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Updates to This Cookie Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
                  or legal requirements. We will post the updated policy on this page and update the "Last Updated" 
                  date. We encourage you to review this policy periodically to stay informed about how we use cookies.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Questions About Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us using 
                  the information below. We're happy to help you understand how cookies work and how to manage your 
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                Need Help With Cookie Settings?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-3">Get help with cookie preferences</p>
                  <a href="mailto:support@authorglide.com" className="text-gold-600 font-medium hover:text-gold-700">
                    support@authorglide.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-3">Speak with our technical team</p>
                  <a href="tel:+15551234567" className="text-gold-600 font-medium hover:text-gold-700">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/contact" className="btn-primary">
                  Contact Our Support Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiePolicy;
