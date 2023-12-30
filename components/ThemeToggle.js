import { useState, useEffect } from 'react';
import themes from '../styles/theme';
import { LuSunMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.style.setProperty('--colors-primary', themes[newTheme].colors.primary);
    document.documentElement.style.setProperty('--colors-secondary', themes[newTheme].colors.secondary);
    document.documentElement.style.setProperty('--colors-background', themes[newTheme].colors.background);
    document.documentElement.style.setProperty('--colors-text', themes[newTheme].colors.text);
    document.documentElement.style.setProperty('--accent-color', themes[newTheme].colors.accent);
    setTheme(newTheme);
  };

  useEffect(() => {
    toggleTheme()
  }, []);

  return (
    <button onClick={toggleTheme} className="text text-3xl">
      <LuSunMoon />
    </button>
  );
};

export default ThemeToggle;
