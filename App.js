import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Grid, Button, Box } from '@mui/material'; // Grid and Button from Material-UI

import Counter from './Counter'; // Import the Counter component
import UserDataForm from './UserDataForm'; // Other components
import RichTextEditor from './RichTextEditor';

import { AuthProvider, useAuth } from './AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Wrap the app with OAuthProvider

import GoogleSignInButton from './GoogleSignInButton';
import privateroute from './privateroute';
import Dashboard from './Dashboard';


const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {/* Styled Navigation */}
        <Box display="flex" justifyContent="center" marginBottom="28px">
          <Button
            component={Link} 
            to="/counter"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              margin: '0 15px',
              '&:hover': {
                backgroundColor: '#f57c00', // Change hover color
              },
            }}
          >
            Counter
          </Button>
          <Button
            component={Link} 
            to="/user-form"
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              margin: '0 15px',
              '&:hover': {
                backgroundColor: '#d32f2f', // Change hover color
              },
            }}
          >
            User Form
          </Button>
          <Button
            component={Link} 
            to="/editor"
            variant="contained"
            color="success"
            size="large"
            sx={{
              margin: '0 15px',
              '&:hover': {
                backgroundColor: '#388e3c', // Change hover color
              },
            }}
          >
            Rich Text Editor
          </Button>
        </Box>

        {/* Routes */}
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<UserDataForm />} />
          <Route path="/editor" element={<RichTextEditor userData="Some user data here" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;  