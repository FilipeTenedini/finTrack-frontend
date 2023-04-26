import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '../../styles/resetCss';
import { GlobalStyle } from '../../styles/GlobalStyle';
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
          <GlobalStyle />
          <MyRoutes />
        </Container>
      </AuthProvider>
    </ThemeProvider>

  );
}

export default App;
