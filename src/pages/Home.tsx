
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-ai-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-ai-light mb-6">
              Discover the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ai-teal to-ai-slate">
                AI Agents
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-ai-slate mb-8 max-w-3xl mx-auto">
              Explore our curated collection of intelligent AI agents designed to transform 
              your business processes and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/agents"
                className="btn-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform"
              >
                Explore Agents
              </Link>
              <Link
                to="/categories"
                className="btn-secondary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-ai-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ai-slate/10 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ai-slate/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ai-light mb-4">Why Choose Our AI Agents?</h2>
            <p className="text-xl text-ai-slate max-w-2xl mx-auto">
              Our carefully curated AI agents are designed to solve real-world problems 
              with cutting-edge technology and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-ai-slate/10 hover:bg-ai-slate/20 transition-colors card-hover">
              <div className="w-16 h-16 bg-ai-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ai-light mb-4">Proven Quality</h3>
              <p className="text-ai-slate">
                All agents are thoroughly tested and validated in real-world scenarios 
                to ensure optimal performance and reliability.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-ai-slate/10 hover:bg-ai-slate/20 transition-colors card-hover">
              <div className="w-16 h-16 bg-ai-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ai-light mb-4">Expert Support</h3>
              <p className="text-ai-slate">
                Get dedicated support from our AI specialists to help you implement 
                and customize agents for your specific needs.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-ai-slate/10 hover:bg-ai-slate/20 transition-colors card-hover">
              <div className="w-16 h-16 bg-ai-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ai-light mb-4">Easy Integration</h3>
              <p className="text-ai-slate">
                Seamlessly integrate our agents into your existing systems with 
                comprehensive documentation and API support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ai-light mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-ai-slate mb-8">
            Join thousands of companies already leveraging AI agents to automate processes, 
            increase efficiency, and drive innovation.
          </p>
          <Link
            to="/agents"
            className="btn-primary text-lg px-10 py-4 inline-block hover:scale-105 transition-transform"
          >
            Start Exploring Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
