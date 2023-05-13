import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import TransactionPage from '../pages/TransactionPage';
import EditPage from '../pages/EditPage';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nova-transacao/:type" element={<TransactionPage />} />
        <Route path="/editar-registro/:type" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
