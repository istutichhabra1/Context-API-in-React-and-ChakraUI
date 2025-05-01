import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  const style = {
    padding: '20px',
    marginTop: '20px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    borderRadius: '5px',
  };

  return (
    <div style={style}>
      <h2>The current theme is: {theme}</h2>
      <p>This component changes its background color according to the theme.</p>
    </div>
  );
};

export default ThemedComponent;
