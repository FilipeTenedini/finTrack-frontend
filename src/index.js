import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import ThemeProv from './contexts/ThemeContext/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProv>
      <App />
    </ThemeProv>
  </React.StrictMode>,
);
