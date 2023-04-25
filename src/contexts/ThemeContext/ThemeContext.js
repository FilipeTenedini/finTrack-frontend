import { createContext, useMemo, useState } from 'react';
import themes from '../../styles/themes';

export const ThemeContext = createContext();

export default function ThemeProv({ children }) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    const currTheme = themes[theme];
    return currTheme;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const value = useMemo(() => ({ theme, handleToggleTheme, currentTheme }));

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
