import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import ThemedComponent from './ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context API - Theme Toggle</h1>
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
