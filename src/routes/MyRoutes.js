import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Transaction from '../pages/Transaction';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/cadastro" element={<Signup />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nova-transacao/:tipo" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}
