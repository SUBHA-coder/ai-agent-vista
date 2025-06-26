
import { useParams, Link } from 'react-router-dom';
import { agents } from '../data/agents';

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === parseInt(id || '0'));

  if (!agent) {
    return (
      <div className="pt-16 min-h-screen bg-ai-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ai-light mb-4">Agent Not Found</h1>
          <Link to="/agents" className="btn-primary">
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-ai-slate">
            <Link to="/agents" className="hover:text-ai-teal transition-colors">Agents</Link>
            <span>/</span>
            <span className="text-ai-light">{agent.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Visual */}
          <div className="animate-fade-in">
            <div className="aspect-video bg-gradient-to-br from-ai-teal/20 to-ai-slate/20 rounded-xl overflow-hidden mb-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tech Stack */}
            <div className="bg-ai-slate/10 rounded-xl p-6 border border-ai-slate/20">
              <h3 className="text-lg font-semibold text-ai-light mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {agent.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-ai-teal/20 text-ai-light text-sm rounded-full border border-ai-teal/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-ai-teal text-ai-dark text-sm font-semibold rounded-full">
                  {agent.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-ai-slate/20 text-ai-light text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-ai-light mb-4">{agent.name}</h1>
              <p className="text-xl text-ai-slate mb-6">{agent.shortDescription}</p>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-ai-light mb-4">Overview</h2>
              <p className="text-ai-slate leading-relaxed">{agent.fullDescription}</p>
            </div>

            {/* Use Cases */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-ai-light mb-4">Use Cases</h2>
              <ul className="space-y-2">
                {agent.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ai-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-ai-slate">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link
                to={`/request?agent=${encodeURIComponent(agent.name)}`}
                className="w-full btn-primary text-center text-lg py-4 block hover:scale-105 transition-transform"
              >
                Request This Agent
              </Link>
              <Link
                to="/agents"
                className="w-full btn-secondary text-center text-lg py-4 block hover:scale-105 transition-transform"
              >
                Explore More Agents
              </Link>
            </div>
          </div>
        </div>

        {/* Related Agents */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-ai-light mb-8">Related Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents
              .filter(a => a.id !== agent.id && a.category === agent.category)
              .slice(0, 3)
              .map((relatedAgent, index) => (
                <Link
                  key={relatedAgent.id}
                  to={`/agents/${relatedAgent.id}`}
                  className="block animate-fade-in card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-ai-slate/10 rounded-xl overflow-hidden hover:bg-ai-slate/20 transition-all duration-300 border border-ai-slate/20">
                    <div className="aspect-video bg-gradient-to-br from-ai-teal/20 to-ai-slate/20 relative overflow-hidden">
                      <img
                        src={relatedAgent.image}
                        alt={relatedAgent.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-ai-light mb-2">{relatedAgent.name}</h3>
                      <p className="text-ai-slate text-sm">{relatedAgent.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
