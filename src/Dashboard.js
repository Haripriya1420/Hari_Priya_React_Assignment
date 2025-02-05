import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <Redirect to="/login" />; // Redirect to login if not authenticated

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to your Dashboard, {user.name}</h1>
      <img src={user.avatar} alt="User Avatar" />
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
      <div>
        {/* Placeholder for data visualizations */}
        <h2>Dashboard Visualization</h2>
        <p>This is where you can show various data visualizations.</p>
      </div>
    </div>
  );
};

export default Dashboard;
