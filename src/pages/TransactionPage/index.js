import axios from 'axios';
import {
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { Container, Header } from './style';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Loader from '../../components/Loaders/Loader';

export default function TransactionPage() {
  const [loading, setLoading] = useState(false);
  const { tipo } = useParams();
  const { auth: { token }, setAuth } = useContext(AuthContext);
  const inputsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userToken'));
    if (!user && !token) return navigate('/');
    if (user) return setAuth({ name: user.name, token: user.token });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { desc: { value: desc }, value: { value } } = inputsRef;
    const newValue = Number(value).toFixed(2);

    if (!value || !desc || !tipo) return alert('Preencha os dados corretamente');

    setLoading(true);

    let opType;
    if (tipo === 'entrada') {
      opType = 'positive';
    } else if (tipo === 'saida') {
      opType = 'negative';
    }
    const body = {
      type: opType, opValue: Number(newValue), desc, data: new Date().toLocaleString(),
    };
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/account/new_transaction/${opType}`, body, config)
      .then(() => navigate('/home'))
      .catch((err) => console.log(err.response.data.message))
      .finally(() => setLoading(false));
  }

  function handleGoBack() {
    return navigate('/home');
  }

  return (
    <Container>
      <Header>
        <div>
          <h1>
            Nova {tipo}
          </h1>
          <AiOutlineRollback onClick={() => handleGoBack()} />
        </div>
      </Header>
      <Form>
        <input
          type="number"
          ref={(element) => inputsRef.value = element}
          placeholder="Valor"
        />
        <input
          type="text"
          ref={(element) => inputsRef.desc = element}
          placeholder="Descrição"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
        > {loading ? <Loader /> : 'Salvar'} {!loading && tipo}
        </button>
      </Form>
    </Container>
  );
}
