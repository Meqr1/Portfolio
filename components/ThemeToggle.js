import { useState, useEffect } from 'react';
import themes from '../styles/theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.style.setProperty('--colors-primary', themes[newTheme].colors.primary);
    document.documentElement.style.setProperty('--colors-secondary', themes[newTheme].colors.secondary);
    document.documentElement.style.setProperty('--colors-background', themes[newTheme].colors.background);
    document.documentElement.style.setProperty('--colors-text', themes[newTheme].colors.text);
    setTheme(newTheme);
  };

  useEffect(() => {
    toggleTheme()
  }, []);

  return (
    <button onClick={toggleTheme} className="text">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
