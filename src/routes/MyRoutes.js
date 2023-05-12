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
        <Route path="/register" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new-transaction/:type" element={<TransactionPage />} />
        <Route path="/edit-transaction/:type" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
