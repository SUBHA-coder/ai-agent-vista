// Authentication service for Flask backend integration
import { config } from './config';

const API_BASE_URL = config.api.baseUrl;

export interface User {
  id: string;
  email: string;
  username: string;
  created_at?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  username: string;
  firstName?: string;
  lastName?: string;
  company?: string;
}

export interface AuthResponse {
  message: string;
  user: User;
  access_token: string;
}

export interface ApiError {
  error: string;
}

export interface AgentRequestData {
  full_name: string;
  email: string;
  company?: string;
  agent: string;
  requirements: string;
}

class AuthService {
  private token: string | null = localStorage.getItem('token');

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    if (this.token) {
      config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${this.token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error');
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await this.makeRequest<AuthResponse>('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    this.setToken(response.access_token);
    return response;
  }

  async signup(signupData: SignupData): Promise<AuthResponse> {
    // Convert frontend signup data to backend format
    const backendData = {
      email: signupData.email,
      password: signupData.password,
      username: signupData.username || `${signupData.firstName}${signupData.lastName}`.toLowerCase(),
    };

    const response = await this.makeRequest<AuthResponse>('/signup', {
      method: 'POST',
      body: JSON.stringify(backendData),
    });

    this.setToken(response.access_token);
    return response;
  }

  async getProfile(): Promise<{ user: User }> {
    return this.makeRequest<{ user: User }>('/profile');
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<{ message: string }> {
    return this.makeRequest<{ message: string }>('/change-password', {
      method: 'PUT',
      body: JSON.stringify({
        current_password: currentPassword,
        new_password: newPassword,
      }),
    });
  }

  async logout(): Promise<{ message: string }> {
    try {
      await this.makeRequest<{ message: string }>('/logout', {
        method: 'POST',
      });
    } catch (error) {
      // Continue with logout even if API call fails
      console.warn('Logout API call failed:', error);
    } finally {
      this.clearToken();
    }
    
    return { message: 'Logged out successfully' };
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  async requestAgent(data: AgentRequestData): Promise<{ message: string; request_id: string }> {
    return this.makeRequest<{ message: string; request_id: string }>('/agent-request', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const authService = new AuthService(); 