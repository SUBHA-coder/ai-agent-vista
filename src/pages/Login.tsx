
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-ai-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-ai-light rounded-2xl shadow-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-ai-teal to-ai-slate rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-ai-dark font-bold text-xl">AI</span>
            </div>
            <h2 className="text-3xl font-bold text-ai-dark">Welcome Back</h2>
            <p className="text-ai-slate mt-2">Sign in to your AgentHub account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your email"
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
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-ai-teal focus:ring-ai-teal border-ai-slate/30 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-ai-slate">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-ai-teal hover:text-ai-slate transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-ai-dark text-ai-light py-3 px-4 rounded-lg font-semibold hover:bg-ai-slate transition-colors focus:outline-none focus:ring-2 focus:ring-ai-teal focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-ai-slate">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-ai-teal hover:text-ai-slate transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
