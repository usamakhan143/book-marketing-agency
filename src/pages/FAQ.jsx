import SEO from '../components/SEO';

const FAQ = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions - Book Marketing Help"
        description="Get answers to common questions about book marketing services, pricing, timelines, and strategies for independent authors."
        keywords="book marketing FAQ, author marketing questions, book promotion help, marketing timeline"
        canonical="/faq"
      />
      
      <div className="min-h-screen">
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about working with Author Glide.
            </p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              FAQ Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              We're compiling the most common questions from authors to create a comprehensive FAQ section.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
