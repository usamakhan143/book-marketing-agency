import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Author Glide - Professional Book Marketing Team"
        description="Learn about Author Glide's mission to empower independent authors with professional marketing services. Meet our experienced team of book marketing specialists."
        keywords="about author glide, book marketing team, professional book marketing company, author marketing specialists"
        canonical="/about"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Empowering Authors to Reach Their Dreams
              </h1>
              <p className="text-xl text-gray-300">
                We believe every author deserves the chance to connect with their ideal readers. 
                That's why we've dedicated ourselves to making professional book marketing accessible and effective.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Author Glide was born from a simple observation: incredible books were getting lost in the noise. 
                  Talented writers were pouring their hearts into their work, only to struggle with the marketing side of publishing.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  Founded in 2020 by a team of publishing industry veterans and digital marketing experts, 
                  we set out to bridge that gap. We wanted to create a service that understood both the art of storytelling 
                  and the science of reaching readers.
                </p>
                <p className="text-gray-600 text-lg">
                  Today, we're proud to have helped over 500 authors transform their passion projects into successful businesses, 
                  reaching millions of readers worldwide.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/33505506/pexels-photo-33505506.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team collaboration in modern office setting"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">AG</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Since 2020</h3>
                  <p className="text-gray-200">Helping authors succeed in the digital age</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To democratize book marketing by providing independent authors with the same level of professional 
                  marketing support that traditional publishers offer their bestselling authors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy-700 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gold-500 text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  A world where every great story finds its audience, where talented authors can focus on writing 
                  while we handle the complexities of modern book marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from campaign strategy to client communication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center card p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We believe in honest communication, transparent pricing, and ethical marketing practices. 
                  Your success is our success, and we're committed to earning your trust every day.
                </p>
              </div>
              
              <div className="text-center card p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gold-500 text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no confusing jargon, no mysterious "black box" strategies. 
                  We explain what we're doing, why we're doing it, and how it's performing.
                </p>
              </div>
              
              <div className="text-center card p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Results-Driven</h3>
                <p className="text-gray-600">
                  We measure our success by your success. Every strategy we implement is designed to deliver 
                  measurable improvements in your book's visibility and sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A diverse group of marketing professionals, publishing experts, and book lovers dedicated to your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Founder & CEO",
                  bio: "Former publishing executive with 15+ years in book marketing. Published author and passionate advocate for independent writers.",
                  avatar: "AC"
                },
                {
                  name: "Marcus Rivera",
                  role: "Head of Digital Marketing",
                  bio: "Digital marketing strategist with expertise in Amazon advertising and social media campaigns. Helped 200+ authors reach bestseller status.",
                  avatar: "MR"
                },
                {
                  name: "Sarah Johnson",
                  role: "Content & PR Manager",
                  bio: "Award-winning journalist turned book marketing specialist. Expert in media relations and content strategy for authors.",
                  avatar: "SJ"
                },
                {
                  name: "David Park",
                  role: "Data Analytics Lead",
                  bio: "Data scientist who transforms marketing metrics into actionable insights. Ensures every campaign is optimized for maximum ROI.",
                  avatar: "DP"
                },
                {
                  name: "Emma Thompson",
                  role: "Client Success Manager",
                  bio: "Dedicated to ensuring every author has an exceptional experience. Your go-to person for support and campaign updates.",
                  avatar: "ET"
                },
                {
                  name: "Roberto Silva",
                  role: "Creative Director",
                  bio: "Visual storyteller who creates compelling ad creatives and book promotion materials that capture readers' attention.",
                  avatar: "RS"
                }
              ].map((member, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gold-500 font-bold text-lg">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you reach more readers and achieve your publishing goals.
            </p>
            <button className="btn-primary text-lg px-12 py-4">
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
