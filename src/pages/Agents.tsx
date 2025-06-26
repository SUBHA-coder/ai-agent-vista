
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { agents, categories } from '../data/agents';

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || agent.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-ai-light mb-4">
            AI Agent Gallery
          </h1>
          <p className="text-xl text-ai-slate max-w-2xl mx-auto">
            Discover intelligent agents designed to solve complex problems and automate your workflows
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-ai-slate/20 border border-ai-slate/30 text-ai-light placeholder-ai-slate focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-3 rounded-lg bg-ai-slate/20 border border-ai-slate/30 text-ai-light focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-ai-slate">
            Showing {filteredAgents.length} of {agents.length} agents
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent, index) => (
            <Link
              key={agent.id}
              to={`/agents/${agent.id}`}
              className="block animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-ai-slate/10 rounded-xl overflow-hidden hover:bg-ai-slate/20 transition-all duration-300 border border-ai-slate/20">
                <div className="aspect-video bg-gradient-to-br from-ai-teal/20 to-ai-slate/20 relative overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-ai-teal text-ai-dark text-xs font-semibold rounded-full">
                      {agent.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ai-light mb-2">{agent.name}</h3>
                  <p className="text-ai-slate text-sm mb-4 line-clamp-2">{agent.shortDescription}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-ai-slate/20 text-ai-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ai-teal font-medium text-sm">Learn More</span>
                    <svg className="w-4 h-4 text-ai-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-ai-slate/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-ai-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ai-light mb-2">No agents found</h3>
            <p className="text-ai-slate">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
