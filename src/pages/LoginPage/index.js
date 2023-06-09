import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Logo } from './style';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Loader from '../../components/Loaders/Loader';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef({});
  const checkboxRef = useRef();
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  function handleCheck() {
    const { current: { checked } } = checkboxRef;
    if (checked) return true;
  }

  function handleLogin(e) {
    e.preventDefault();
    const { email: { value: email }, pass: { value: password } } = inputRef;

    if (!email || !password) return alert('Preencha todos os campos');

    const body = { email, password };

    setLoading(true);

    return axios
      .post(`${process.env.REACT_APP_API_URL}/user/signin`, body)
      .then((res) => {
        const { name } = res.data;
        const { token } = res.data;
        setAuth({ name, token });
        if (handleCheck()) {
          localStorage.setItem('userToken', JSON.stringify({ token, name }));
        }
        navigate('/Home');
      })
      .catch(() => alert('Dados de login inválidos.'))
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <Logo>FinTrack</Logo>
      <Form>
        <input type="email" placeholder="E-mail" ref={(element) => inputRef.email = element} />
        <input type="password" placeholder="Senha" ref={(element) => inputRef.pass = element} />
        <div>Mantenha-me conectado <input type="checkbox" onChange={handleCheck} ref={checkboxRef} /></div>
        <button
          type="submit"
          onClick={(e) => handleLogin(e)}
          disabled={loading}
        > {loading ? <Loader /> : 'Entrar'}
        </button>
      </Form>
      <Link to="/register">
        Primeira vez? Cadastre-se!
      </Link>
    </Container>
  );
}
