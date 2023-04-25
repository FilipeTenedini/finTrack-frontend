import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '../../styles/resetCss';
import MyRoutes from '../../routes/MyRoutes';
import { Container } from './style';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <ResetCss />
        <MyRoutes />
      </Container>
    </ThemeProvider>

  );
}

export default App;
