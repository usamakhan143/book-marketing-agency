import SEO from '../components/SEO';

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
        <section className="gradient-bg text-white section-padding relative overflow-hidden">
          {/* Background Books Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Stack of books representing success stories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-700/80"></div>
          </div>

          <div className="container-custom text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Author Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real authors who trusted Author Glide with their book marketing.
            </p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              We're putting together detailed case studies showcasing our most successful campaigns.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
