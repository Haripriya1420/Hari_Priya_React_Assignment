import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const privateroute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default privateroute;
