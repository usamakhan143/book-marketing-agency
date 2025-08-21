import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Lock,
  Eye,
  Database,
  Settings,
  AlertTriangle
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Author Glide"
        description="Learn how Author Glide protects your personal information and data privacy in our comprehensive privacy policy."
        keywords="privacy policy, data protection, personal information, Author Glide"
        canonical="/privacy-policy"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital security and data protection concept"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>
          
          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Privacy Policy
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your privacy and data security are fundamental to everything we do at Author Glide.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Privacy Policy</span>
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

        {/* Privacy Policy Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-gold-500 mr-3" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Author Glide ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website at authorglide.com and use our book marketing services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be 
                  bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access 
                  our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 text-gold-500 mr-3" />
                  Information We Collect
                </h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Business information and professional details</li>
                  <li>Book titles, genres, and publishing information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences and marketing interests</li>
                  <li>Feedback, reviews, and testimonials</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device and usage patterns:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>IP address and geographic location</li>
                  <li>Browser type, version, and operating system</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Referring website and search terms used</li>
                  <li>Device information and screen resolution</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies, web beacons, and similar technologies to enhance your browsing experience, analyze website 
                  traffic, and personalize content. You can control cookie settings through your browser preferences, though 
                  disabling cookies may affect website functionality.
                </p>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Settings className="w-8 h-8 text-gold-500 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for legitimate business purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Providing and improving our book marketing services</li>
                  <li>Processing payments and managing client accounts</li>
                  <li>Communicating about services, updates, and promotional offers</li>
                  <li>Customizing website content and user experience</li>
                  <li>Analyzing usage patterns to improve our services</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                  <li>Detecting and preventing fraud or unauthorized access</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 text-gold-500 mr-3" />
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information 
                  only in the following circumstances:
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Service Providers</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may share information with trusted third-party service providers who assist us in operating our business, 
                  such as payment processors, email marketing platforms, analytics providers, and advertising networks. These 
                  providers are contractually bound to protect your information and use it only for specified purposes.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may disclose your information if required by law, court order, or government regulation, or if we believe 
                  such disclosure is necessary to protect our rights, property, or safety, or that of our users or the public.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner, 
                  subject to the same privacy protections outlined in this policy.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Lock className="w-8 h-8 text-gold-500 mr-3" />
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases with access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Incident response procedures for potential breaches</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to protect your information, no internet transmission or electronic storage is completely secure. 
                  We cannot guarantee absolute security but will notify you of any material breaches as required by law.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-gold-500 mr-3" />
                  Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to certain types of processing, including marketing communications</li>
                  <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us using the information provided below. We will respond to your 
                  request within 30 days and may require verification of your identity.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. Client information is typically 
                  retained for seven years after the conclusion of services for business and legal purposes.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Third-Party Websites</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to review the privacy policies of any third-party sites 
                  you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If we become aware that we have collected information from a child, we will take 
                  steps to delete such information promptly.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such 
                  transfers comply with applicable data protection laws and implement appropriate safeguards to protect your 
                  information.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of material changes by posting the updated policy on our website and updating the 
                  "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the 
                  updated policy.
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
                Questions About This Privacy Policy?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">For privacy-related questions</p>
                  <a href="mailto:privacy@authorglide.com" className="text-gold-600 font-medium hover:text-gold-700">
                    privacy@authorglide.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-3">Speak with our privacy team</p>
                  <a href="tel:+15551234567" className="text-gold-600 font-medium hover:text-gold-700">
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Write to Us</h3>
                  <p className="text-gray-600 mb-3">Send formal privacy requests</p>
                  <p className="text-gray-700 text-sm">
                    Author Glide Privacy Team<br />
                    123 Publishing Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/contact" className="btn-primary">
                  Contact Our Privacy Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
