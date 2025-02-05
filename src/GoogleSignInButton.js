import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from './AuthContext';

const GoogleSignInButton = () => {
  const { login } = useAuth();

  const onSuccess = (response) => {
    // Mock login - Get the user data (for simplicity, using response credential)
    const userData = {
      name: response?.profileObj?.name,
      email: response?.profileObj?.email,
      avatar: response?.profileObj?.imageUrl,
    };
    login(userData);
  };

  const onFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onFailure}
      useOneTap
    />
  );
};

export default GoogleSignInButton;
