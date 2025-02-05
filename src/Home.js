

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from './AuthContext';


const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

const Home = () => {
  const { login } = useAuth();

  const responseGoogle = (response) => {
    login(response);
  };

  return (
    <div>
      <h1>Welcome to our App</h1>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Home;
