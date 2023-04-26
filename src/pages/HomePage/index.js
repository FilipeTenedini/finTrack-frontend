import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BiExit } from 'react-icons/bi';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import {
  Container,
  Header,
  TransactionsContainer,
  ButtonsContainer,
} from './style';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { API_URL } from '../../API/URL';
import TransactionsList from './TransactionsList';

export default function HomePage() {
  const [movements, setMovements] = useState([]);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();
  const { auth: { name, token } } = useContext(AuthContext);

  useEffect(() => {
    if (!token) return navigate('/');
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${API_URL}/account/movements`, config)
      .then((res) => {
        const accBalance = res.data.reduce((acc, value) => {
          if (value.type === 'positive') {
            acc += value.opValue;
          } else if (value.type === 'negative') {
            acc -= value.opValue;
          }
          return acc;
        }, 0);
        console.log(res.data);
        const sortedMovements = res.data.sort((a, b) => Date.parse(a.data) - Date.parse(b.data))
          .reverse();
        setMovements(sortedMovements);
        setBalance(parseFloat(accBalance));
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <h1>
            Olá, {name}
          </h1>
          <BiExit />
        </div>
      </Header>
      <TransactionsContainer>
        {movements.length > 0
          ? <TransactionsList balance={balance} movements={movements} />
          : <p>Não há registros de entrada ou saída</p>}
      </TransactionsContainer>

      <ButtonsContainer>
        <button>
          <Link to="/nova-transacao/entrada">
            <AiOutlinePlusCircle />
            <p>Nova <br /> entrada</p>
          </Link>
        </button>
        <button>
          <Link to="/nova-transacao/saida">
            <AiOutlineMinusCircle />
            <p>Nova <br />saída</p>
          </Link>
        </button>
      </ButtonsContainer>

    </Container>
  );
}
