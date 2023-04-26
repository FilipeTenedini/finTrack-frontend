import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Logo } from './style';
import Form from '../../components/Form';

export default function SignupPage() {
  const inputRef = useRef({});
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const name = inputRef.name.value;
    const email = inputRef.email.value;
    const password = inputRef.pass.value;
    const confirmPassword = inputRef.confirmPass.value;

    if (!name || !email || !password || !confirmPassword) return alert('Preencha todos os campos');

    if (password !== confirmPassword) return alert('As senhas não são iguais');

    const body = {
      name, email, password, confirmPassword,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/signup`, body)
      .then(() => navigate('/'))
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
        <input type="text" placeholder="Nome" ref={(element) => inputRef.name = element} />
        <input type="email" placeholder="E-mail" ref={(element) => inputRef.email = element} />
        <input type="password" placeholder="Senha" ref={(element) => inputRef.pass = element} />
        <input type="password" placeholder="Confirme a senha" ref={(element) => inputRef.confirmPass = element} />
        <button type="submit" onClick={(e) => handleLogin(e)}> Cadastrar </button>
      </Form>
      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </Container>
  );
}
