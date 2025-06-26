
import { Link } from 'react-router-dom';
import { categories, agents } from '../data/agents';

const Categories = () => {
  const getCategoryCount = (category: string) => {
    return agents.filter(agent => agent.category === category).length;
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'NLP': '💬',
      'Computer Vision': '👁️',
      'Code Generation': '💻',
      'Data Analysis': '📊',
      'Automation': '⚙️',
      'Summarization': '📝',
      'Translation': '🌐',
      'Recommendation': '🎯',
    };
    return icons[category] || '🤖';
  };

  return (
    <div className="pt-16 min-h-screen bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-ai-light mb-4">
            AI Agent Categories
          </h1>
          <p className="text-xl text-ai-slate max-w-2xl mx-auto">
            Browse agents organized by their specialized capabilities and use cases
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link
              key={category}
              to={`/agents?category=${encodeURIComponent(category)}`}
              className="block animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-ai-slate/10 rounded-xl p-8 hover:bg-ai-slate/20 transition-all duration-300 border border-ai-slate/20 text-center">
                <div className="text-4xl mb-4">{getCategoryIcon(category)}</div>
                <h3 className="text-xl font-semibold text-ai-light mb-2">{category}</h3>
                <p className="text-ai-slate text-sm mb-4">
                  {getCategoryCount(category)} agent{getCategoryCount(category) !== 1 ? 's' : ''} available
                </p>
                <div className="flex items-center justify-center text-ai-teal font-medium text-sm">
                  Explore
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ai-light mb-8 text-center">Popular Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* NLP Category Highlight */}
            <div className="bg-gradient-to-br from-ai-teal/20 to-ai-slate/20 rounded-2xl p-8 border border-ai-teal/30">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h3 className="text-2xl font-bold text-ai-light">Natural Language Processing</h3>
                  <p className="text-ai-slate">Advanced text understanding and generation</p>
                </div>
              </div>
              <p className="text-ai-slate mb-6">
                Discover agents that can understand, process, and generate human language with 
                remarkable accuracy. Perfect for content creation, customer service, and document analysis.
              </p>
              <Link
                to="/agents?category=NLP"
                className="btn-primary inline-block"
              >
                View NLP Agents
              </Link>
            </div>

            {/* Computer Vision Category Highlight */}
            <div className="bg-gradient-to-br from-ai-slate/20 to-ai-teal/20 rounded-2xl p-8 border border-ai-slate/30">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">👁️</div>
                <div>
                  <h3 className="text-2xl font-bold text-ai-light">Computer Vision</h3>
                  <p className="text-ai-slate">Visual recognition and image analysis</p>
                </div>
              </div>
              <p className="text-ai-slate mb-6">
                Explore agents that can see and understand visual content. From object detection 
                to quality control, these agents bring AI vision to your applications.
              </p>
              <Link
                to="/agents?category=Computer Vision"
                className="btn-secondary inline-block"
              >
                View Vision Agents
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-ai-slate/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-ai-light mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-ai-slate mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect AI agent for your specific needs or 
            develop a custom solution tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-4">
              Request Custom Agent
            </Link>
            <Link to="/agents" className="btn-secondary text-lg px-8 py-4">
              Browse All Agents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
