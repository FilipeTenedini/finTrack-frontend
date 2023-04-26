import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import TransactionPage from '../pages/TransactionPage';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<SignupPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/nova-transacao/:tipo" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
