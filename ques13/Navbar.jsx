import React from 'react';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <nav>
      <h1>My App</h1>
      <button onClick={toggleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;
