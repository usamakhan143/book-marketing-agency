import SEO from '../components/SEO';

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
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that fits your needs and budget. All plans include dedicated support and proven strategies.
            </p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              Pricing Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              We're finalizing our pricing structure to offer the best value for authors.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
