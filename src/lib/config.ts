// Configuration for the application

export const config = {
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  },
  
  // App Configuration
  app: {
    name: 'AgentHub',
    version: '1.0.0',
  },
  
  // Feature flags
  features: {
    enableAuth: true,
    enableNotifications: true,
  },
} as const;

export default config; 