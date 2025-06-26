
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-ai-dark flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-ai-light rounded-2xl shadow-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-ai-teal to-ai-slate rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-ai-dark font-bold text-xl">AI</span>
            </div>
            <h2 className="text-3xl font-bold text-ai-dark">Join AgentHub</h2>
            <p className="text-ai-slate mt-2">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-ai-dark mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-ai-dark mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ai-dark mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                placeholder="john@example.com"
              />
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
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ai-dark mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-ai-dark mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-ai-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-teal focus:border-transparent bg-white text-ai-dark"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-ai-dark text-ai-light py-3 px-4 rounded-lg font-semibold hover:bg-ai-slate transition-colors focus:outline-none focus:ring-2 focus:ring-ai-teal focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-ai-slate">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-ai-teal hover:text-ai-slate transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
