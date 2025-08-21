import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Author Glide - Get Your Free Marketing Consultation"
        description="Ready to boost your book sales? Contact Author Glide for a free consultation. We respond within 24 hours to help you get started."
        keywords="contact author glide, book marketing consultation, get started book marketing, author marketing help"
        canonical="/contact"
      />
      
      <div className="min-h-screen">
        <section className="gradient-bg text-white section-padding relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business professionals discussing growth strategies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-700/80"></div>
          </div>

          <div className="container-custom text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's Grow Your Readership Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your book marketing to the next level? Get in touch for a free consultation.
            </p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              Contact Form Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're building a comprehensive contact form with React Hook Form integration.
            </p>
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-2">📧 hello@authorglide.com</p>
              <p className="text-gray-600 mb-2">📞 +1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
