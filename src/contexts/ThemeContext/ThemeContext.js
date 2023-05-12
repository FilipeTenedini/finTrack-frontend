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
    return setTheme(userTheme);
  }, []);

  const currentTheme = useMemo(() => {
    const currTheme = themes[theme];
    return currTheme;
  }, [theme]);

  function handleToggleTheme() {
    console.log('temoai');
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('userTheme', JSON.stringify({ theme }));
  }

  const value = useMemo(() => ({ theme, handleToggleTheme, currentTheme }));

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
