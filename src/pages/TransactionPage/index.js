import axios from 'axios';
import { useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Header } from './style';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { API_URL } from '../../API/URL';

export default function TransactionPage() {
  const { tipo } = useParams();
  const { auth: { token } } = useContext(AuthContext);
  const inputsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/');
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { desc: { value: desc }, value: { value } } = inputsRef;
    const newValue = Number(value).toFixed(2);

    if (!value || !desc || !tipo) return alert('Preencha os dados corretamente');

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
      .post(`${API_URL}/account/new_transaction/${opType}`, body, config)
      .then(() => navigate('/home'))
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <Container>
      <Header>
        <div>
          <h1>
            Nova {tipo}
          </h1>
        </div>
      </Header>
      <Form>
        <input type="number" ref={(element) => inputsRef.value = element} />
        <input type="text" ref={(element) => inputsRef.desc = element} />
        <button type="submit" onClick={(e) => handleSubmit(e)}> Salvar {tipo} </button>
      </Form>
    </Container>
  );
}