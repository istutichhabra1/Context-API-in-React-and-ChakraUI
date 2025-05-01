import React from 'react';
import { useAuth } from './AuthContext';

const Footer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <footer>
      <p>{isLoggedIn ? 'Welcome, User' : 'Please log in'}</p>
    </footer>
  );
};

export default Footer;
