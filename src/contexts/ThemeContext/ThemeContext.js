import {
  createContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import themes from '../../styles/themes';

export const ThemeContext = createContext();

export default function ThemeProv({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const userTheme = JSON.parse(localStorage.getItem('userTheme'));
    if (!userTheme) return setTheme('dark');
    return setTheme(userTheme.theme);
  }, []);

  const currentTheme = useMemo(() => {
    const currTheme = themes[theme];
    return currTheme;
  }, [theme]);

  function handleToggleTheme() {
    const actualColor = theme === 'light' ? 'dark' : 'light';
    setTheme(actualColor);
    localStorage.setItem('userTheme', JSON.stringify({ theme: actualColor }));
  }

  const value = useMemo(() => ({ theme, handleToggleTheme, currentTheme }));

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
