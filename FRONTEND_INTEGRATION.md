# Frontend-Backend Integration Guide

This document explains how the React frontend is integrated with the Flask backend authentication system.

## 🏗️ Architecture Overview

The integration consists of several key components:

### 1. Authentication Service (`src/lib/auth.ts`)
- Handles all API calls to the Flask backend
- Manages JWT tokens in localStorage
- Provides methods for login, signup, logout, and profile management

### 2. Authentication Context (`src/contexts/AuthContext.tsx`)
- Manages authentication state across the application
- Provides user information and authentication methods
- Handles automatic token validation on app load

### 3. Configuration (`src/lib/config.ts`)
- Centralized configuration management
- API base URL configuration
- Environment variable handling

## 🔧 Setup Instructions

### 1. Environment Variables
Create a `.env` file in the frontend root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 2. Backend Setup
Ensure the Flask backend is running:

```bash
cd flask-auth-backend
python app.py
```

### 3. Frontend Setup
Install dependencies and start the development server:

```bash
cd ai-agent-vista
npm install
npm run dev
```

## 📡 API Integration

### Authentication Flow

1. **Login Process:**
   ```typescript
   const { login } = useAuth();
   
   try {
     await login({ email, password });
     // User is automatically redirected and token is stored
   } catch (error) {
     // Error is handled by the context
   }
   ```

2. **Signup Process:**
   ```typescript
   const { signup } = useAuth();
   
   try {
     await signup({ email, password, username, firstName, lastName });
     // User is automatically logged in and redirected
   } catch (error) {
     // Error is handled by the context
   }
   ```

3. **Logout Process:**
   ```typescript
   const { logout } = useAuth();
   
   await logout();
   // Token is cleared and user is logged out
   ```

### Protected Routes
The authentication context automatically handles:
- Token validation on app load
- Automatic redirects for authenticated users
- Error handling and user feedback

## 🎨 UI Components

### Updated Components

1. **Login Page (`src/pages/Login.tsx`)**
   - Integrated with backend authentication
   - Loading states and error handling
   - Automatic redirects

2. **Signup Page (`src/pages/Signup.tsx`)**
   - Form validation
   - Backend integration
   - User feedback

3. **Navbar (`src/components/Navbar.tsx`)**
   - Dynamic authentication status
   - User profile dropdown
   - Logout functionality

## 🔒 Security Features

### JWT Token Management
- Tokens are automatically stored in localStorage
- Automatic token validation on app load
- Secure token transmission in API headers

### Error Handling
- Comprehensive error handling for all API calls
- User-friendly error messages via toast notifications
- Automatic error clearing

### Form Validation
- Client-side validation for all forms
- Real-time validation feedback
- Server-side error handling

## 🚀 Usage Examples

### Using Authentication in Components

```typescript
import { useAuth } from '@/contexts/AuthContext';

const MyComponent = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
```

### Making Authenticated API Calls

```typescript
import { authService } from '@/lib/auth';

const fetchUserProfile = async () => {
  try {
    const { user } = await authService.getProfile();
    return user;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  }
};
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure the Flask backend has CORS properly configured
   - Check that the API base URL is correct

2. **Authentication Not Persisting**
   - Check localStorage for the token
   - Verify the token is being sent in API headers

3. **API Connection Issues**
   - Ensure the Flask backend is running on the correct port
   - Check network connectivity

### Debug Mode
Enable debug logging by adding to your component:

```typescript
console.log('Auth state:', { user, isAuthenticated });
console.log('Token:', authService.getToken());
```

## 📱 Mobile Responsiveness

All authentication components are fully responsive and work on:
- Desktop browsers
- Tablet devices
- Mobile phones

## 🔄 State Management

The authentication state is managed using React Context and includes:
- User information
- Authentication status
- Loading states
- Error states

## 🎯 Next Steps

To extend the authentication system:

1. **Add Protected Routes**
   - Create route guards for authenticated users
   - Implement role-based access control

2. **Enhance User Profile**
   - Add profile editing functionality
   - Implement avatar upload

3. **Add Password Reset**
   - Implement forgot password flow
   - Add email verification

4. **Session Management**
   - Add remember me functionality
   - Implement session timeout

## 📚 Additional Resources

- [Flask Backend Documentation](../flask-auth-backend/README.md)
- [React Router Documentation](https://reactrouter.com/)
- [JWT Token Guide](https://jwt.io/) 