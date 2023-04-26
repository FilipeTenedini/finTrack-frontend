import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Logo } from './style';
import { API_URL } from '../../API/URL';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

export default function LoginPage() {
  const inputRef = useRef({});
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    const { email: { value: email }, pass: { value: password } } = inputRef;

    if (!email || !password) return alert('Preencha todos os campos');

    const body = { email, password };
    return axios
      .post(`${API_URL}/user/signin`, body)
      .then((res) => {
        const { name } = res.data;
        const { token } = res.data;
        setAuth({ name, token });
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
