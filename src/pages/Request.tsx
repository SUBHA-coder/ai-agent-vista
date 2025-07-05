import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { agents } from '../data/agents';
import { authService } from '../lib/auth';
import { useAuth } from '../contexts/AuthContext';

const Request = () => {
  const [searchParams] = useSearchParams();
  const preselectedAgent = searchParams.get('agent');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    agentName: preselectedAgent || '',
    requirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isAuthenticated) {
      setError('You must be logged in to submit a request.');
      return;
    }
    setIsLoading(true);
    try {
      await authService.requestAgent({
        full_name: formData.fullName,
        email: formData.email,
        company: formData.company,
        agent: formData.agentName,
        requirements: formData.requirements,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError((err as Error).message || 'Failed to submit request.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-ai-dark flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center animate-fade-in">
          <div className="bg-ai-light rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 bg-ai-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-ai-dark mb-4">Request Submitted!</h2>
            <p className="text-ai-slate mb-6">
              Thank you for your interest! Our team will review your requirements and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary w-full"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-ai-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-ai-light mb-4">
            Request an AI Agent
          </h1>
          <p className="text-xl text-ai-slate max-w-2xl mx-auto">
            Tell us about your requirements and we'll help you implement the perfect AI solution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-ai-light rounded-2xl shadow-2xl p-8 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-ai-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ai-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ai-dark mb-2">
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Agent Selection */}
                <div>
                  <label htmlFor="agentName" className="block text-sm font-medium text-ai-dark mb-2">
                    Choose Agent *
                  </label>
                  <select
                    id="agentName"
                    name="agentName"
                    required
                    value={formData.agentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                  >
                    <option value="">Select an agent...</option>
                    {agents.map(agent => (
                      <option key={agent.id} value={agent.name}>
                        {agent.name} - {agent.category}
                      </option>
                    ))}
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                </div>

                {/* Requirements */}
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-ai-dark mb-2">
                    Describe Your Requirements *
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={6}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark resize-none"
                    placeholder="Please describe your specific use case, technical requirements, integration needs, expected volume, timeline, and any other relevant details..."
                  />
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-ai-dark text-ai-light py-4 px-6 rounded-lg font-semibold hover:bg-ai-slate transition-colors focus:outline-none focus:ring-2 focus:ring-ai-teal focus:ring-offset-2 text-lg disabled:opacity-50"
                >
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-ai-slate/10 rounded-xl p-6 border border-ai-slate/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-ai-light mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-ai-teal rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-ai-light font-medium">Email</p>
                    <p className="text-ai-slate text-sm">support@agenthub.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-ai-teal rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-ai-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-ai-light font-medium">Response Time</p>
                    <p className="text-ai-slate text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div className="bg-ai-slate/10 rounded-xl p-6 border border-ai-slate/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold text-ai-light mb-4">What to Include</h3>
              <ul className="space-y-2 text-ai-slate text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-ai-teal">•</span>
                  <span>Specific use case and objectives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ai-teal">•</span>
                  <span>Expected data volume and format</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ai-teal">•</span>
                  <span>Integration requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ai-teal">•</span>
                  <span>Timeline and budget constraints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ai-teal">•</span>
                  <span>Performance expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
