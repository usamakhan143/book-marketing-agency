import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  FileText,
  Calendar,
  Scale,
  CreditCard,
  RefreshCw,
  AlertCircle,
  UserCheck,
  Shield,
  Gavel,
  Mail,
  Phone
} from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions - Author Glide"
        description="Read the terms and conditions for using Author Glide's book marketing services and website."
        keywords="terms and conditions, terms of service, Author Glide, book marketing"
        canonical="/terms-and-conditions"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Legal documents and contract signing"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/90"></div>
          </div>
          
          <div className="container-custom relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
                Terms & Conditions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Understanding our mutual responsibilities and the terms governing our book marketing services.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center justify-center space-x-2 text-gray-300">
                <Home className="w-5 h-5" />
                <span className="text-base font-medium">Home</span>
                <ChevronRight className="w-5 h-5" />
                <span className="text-base text-white font-semibold">Terms & Conditions</span>
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

        {/* Terms Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <UserCheck className="w-8 h-8 text-gold-500 mr-3" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") 
                  and Author Glide LLC ("Author Glide," "we," "us," or "our") regarding your use of our website and book marketing services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By accessing our website at authorglide.com, engaging our services, or executing a service agreement with us, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to 
                  these Terms, you must not use our services or website.
                </p>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-gold-500 mr-3" />
                  Description of Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Author Glide provides professional book marketing services designed to increase book visibility, readership, 
                  and sales. Our services may include, but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Amazon listing optimization and advertising management</li>
                  <li>Social media marketing and content creation</li>
                  <li>Email marketing campaign development and execution</li>
                  <li>Public relations and media outreach</li>
                  <li>Website optimization and search engine marketing</li>
                  <li>Strategic marketing consultation and planning</li>
                  <li>Performance analytics and reporting</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Specific services will be outlined in individual service agreements or proposals. We reserve the right to 
                  modify our service offerings at our discretion, though existing client agreements will remain unchanged 
                  unless mutually agreed upon.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-gold-500 mr-3" />
                  Client Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To ensure the success of your marketing campaign, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Provide accurate, complete, and current information about your book and marketing goals</li>
                  <li>Supply necessary materials, including book files, images, and marketing copy, in a timely manner</li>
                  <li>Grant necessary permissions and access to relevant accounts and platforms</li>
                  <li>Respond to requests for information or approval within reasonable timeframes</li>
                  <li>Maintain professional communication and conduct throughout our working relationship</li>
                  <li>Comply with all applicable laws and platform policies</li>
                  <li>Make required payments according to agreed payment terms</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Failure to fulfill these responsibilities may impact campaign effectiveness and could result in delays 
                  or termination of services.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <CreditCard className="w-8 h-8 text-gold-500 mr-3" />
                  Payment Terms and Conditions
                </h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Payment Schedule</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unless otherwise specified in your service agreement:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Full payment is due upon signing of service agreement for packages under $3,000</li>
                  <li>Payment plans are available for packages over $3,000, typically split into 2-3 installments</li>
                  <li>First payment and signed agreement are required before work begins</li>
                  <li>Subsequent payments are due according to the agreed schedule</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Late Payments</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Payments more than 15 days overdue may result in suspension of services until payment is received. 
                  A 1.5% monthly service charge may be applied to overdue balances. We reserve the right to terminate 
                  services for accounts more than 30 days overdue.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Advertising Budgets</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our service fees are separate from advertising spend. Any advertising budgets (e.g., Amazon ads, 
                  Facebook ads) are managed by us but billed directly to your accounts or reimbursed separately. 
                  You maintain control over advertising budgets and can adjust them at any time.
                </p>
              </div>

              {/* Refund Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <RefreshCw className="w-8 h-8 text-gold-500 mr-3" />
                  Refund and Cancellation Policy
                </h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Performance Guarantee</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We offer a 90-day performance guarantee on our services. If you do not see measurable improvement 
                  in key performance indicators (as defined in your service agreement) within 90 days of campaign 
                  launch, you may request a full refund. Refund requests must be submitted in writing with supporting 
                  documentation.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Cancellation Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may cancel services under the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Within 72 hours of signing the agreement for a full refund (cooling-off period)</li>
                  <li>After 30 days of service with 30 days written notice (pro-rated refund for unused services)</li>
                  <li>For breach of contract by Author Glide (full refund of unused services)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Non-Refundable Items</h3>
                <p className="text-gray-700 leading-relaxed">
                  Certain services and expenses are non-refundable, including advertising spend, third-party platform 
                  fees, custom creative work already delivered, and PR placements already secured.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Intellectual Property Rights</h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Your Content</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You retain all rights to your book content, author brand, and any materials you provide to us. 
                  By engaging our services, you grant us a limited, non-exclusive license to use your content solely 
                  for the purpose of providing marketing services during the term of our agreement.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Our Materials</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Any marketing materials, strategies, or creative work we develop specifically for your campaign 
                  becomes your property upon full payment. However, our general methodologies, processes, and 
                  proprietary tools remain our intellectual property.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Third-Party Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for ensuring you have proper rights to any third-party content (images, quotes, 
                  endorsements) you ask us to use in your marketing materials. You agree to indemnify us against any 
                  claims arising from the use of such content.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Scale className="w-8 h-8 text-gold-500 mr-3" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to deliver exceptional results, book marketing involves many variables beyond our 
                  control. Therefore:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>We cannot guarantee specific sales numbers, rankings, or revenue increases</li>
                  <li>Our liability is limited to the amount you paid for services in the preceding 12 months</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for third-party platform changes or policy violations</li>
                  <li>Force majeure events (natural disasters, platform outages, etc.) may affect service delivery</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our goal is always to exceed expectations while managing realistic outcomes based on market conditions, 
                  competition, and industry best practices.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Confidentiality and Non-Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We understand the sensitive nature of your business information and agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Keep all client information strictly confidential</li>
                  <li>Use information only for the purpose of providing agreed services</li>
                  <li>Not disclose your information to unauthorized third parties</li>
                  <li>Implement reasonable security measures to protect your data</li>
                  <li>Return or destroy confidential information upon request after contract termination</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This confidentiality obligation survives termination of our agreement and continues indefinitely 
                  unless you provide written consent for disclosure.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Termination of Services</h2>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Termination by Client</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You may terminate services with 30 days written notice. Upon termination, you will be responsible 
                  for payment of all services provided through the termination date, plus any committed advertising 
                  spend or third-party costs.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Termination by Author Glide</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may terminate services immediately for breach of contract, non-payment, violation of platform 
                  policies, or conduct that damages our reputation or relationships with platform partners.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Post-Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, we will provide a final report, transfer relevant account access, and cease all 
                  marketing activities on your behalf. Any ongoing advertising campaigns will be transferred to your 
                  control or paused according to your instructions.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                  <Gavel className="w-8 h-8 text-gold-500 mr-3" />
                  Dispute Resolution
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the event of any dispute arising from our services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>We encourage direct communication to resolve issues quickly and amicably</li>
                  <li>Formal complaints should be submitted in writing to our management team</li>
                  <li>If direct negotiation fails, disputes will be resolved through binding arbitration</li>
                  <li>Arbitration will be conducted in New York under American Arbitration Association rules</li>
                  <li>Each party bears their own legal costs unless otherwise determined by the arbitrator</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This dispute resolution process applies to all claims and disputes between the parties, 
                  excluding intellectual property claims which may be pursued in court.
                </p>
              </div>

              {/* Modifications */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Modifications to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated 
                  to existing clients at least 30 days in advance. Continued use of our services after changes 
                  take effect constitutes acceptance of the modified Terms. Your individual service agreement 
                  will remain unchanged unless both parties agree to modifications in writing.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of the State of New York, without regard to conflict of law 
                  principles. Any legal action or proceeding must be brought in the courts of New York County, New York, 
                  and you consent to the jurisdiction of such courts.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Severability and Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will 
                  continue in full force and effect. These Terms, together with your individual service agreement, 
                  constitute the entire agreement between the parties and supersede all prior negotiations, 
                  representations, or agreements relating to the subject matter.
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
                Questions About These Terms?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Email Our Legal Team</h3>
                  <p className="text-gray-600 mb-3">For terms and contract questions</p>
                  <a href="mailto:legal@authorglide.com" className="text-gold-600 font-medium hover:text-gold-700">
                    legal@authorglide.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Speak With Management</h3>
                  <p className="text-gray-600 mb-3">Discuss contract terms directly</p>
                  <a href="tel:+15551234567" className="text-gold-600 font-medium hover:text-gold-700">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/contact" className="btn-primary">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
