import React from 'react';
import { useAuth } from './AuthContext';

const Main = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome back, User!' : 'Please log in to continue.'}</h2>
    </div>
  );
};

export default Main;
