import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '../../styles/resetCss';
import MyRoutes from '../../routes/MyRoutes';
import { Container } from './style';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import AuthProvider from '../../contexts/AuthContext/AuthContext';

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <AuthProvider>
        <Container>
          <ResetCss />
          <MyRoutes />
        </Container>
      </AuthProvider>
    </ThemeProvider>

  );
}

export default App;
