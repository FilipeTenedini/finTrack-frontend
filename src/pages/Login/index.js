import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Logo } from './style';
import { API_URL } from '../../API/URL';
import Form from '../../components/Form';

export default function Login() {
  const inputRef = useRef({});
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const email = inputRef.email.value;
    const password = inputRef.pass.value;

    if (!email || !password) return alert('Preencha todos os campos');

    const body = { email, password };
    axios
      .post(`${API_URL}/user/signin`, body)
      .then((res) => {
        const { name } = res.data;
        const { token } = res.data;
        console.log(name, token);
        navigate('/Home');
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
        <input type="email" placeholder="E-mail" ref={(element) => inputRef.email = element} />
        <input type="password" placeholder="Senha" ref={(element) => inputRef.pass = element} />
        <button type="submit" onClick={(e) => handleLogin(e)}> Entrar </button>
      </Form>
      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </Container>
  );
}
