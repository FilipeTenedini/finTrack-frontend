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
import TransactionsList from './TransactionsList';

export default function HomePage() {
  const [movements, setMovements] = useState([]);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();
  const { auth: { name, token }, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userToken'));
    if (!user && !token) return navigate('/');
    if (user) return setAuth({ name: user.name, token: user.token });
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/account/movements`, config)
      .then((res) => {
        const accBalance = res.data.reduce((acc, value) => {
          if (value.type === 'positive') {
            acc += value.opValue;
          } else if (value.type === 'negative') {
            acc -= value.opValue;
          }
          return acc;
        }, 0);
        const sortedMovements = res.data.sort((a, b) => Date.parse(a.data) - Date.parse(b.data))
          .reverse();
        setMovements(sortedMovements);
        setBalance(parseFloat(accBalance));
      })
      .catch((err) => console.log(err.response.data.message));
  }, [token]);

  function handleLogout() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <Container>
      <Header>
        <div>
          <h1>
            Olá, {name}
          </h1>
          <BiExit onClick={() => handleLogout()} />
        </div>
      </Header>
      <TransactionsContainer>
        {movements.length > 0
          ? <TransactionsList balance={balance} movements={movements} setMovements={setMovements} />
          : <p>Não há registros de entrada ou saída</p>}
      </TransactionsContainer>

      <ButtonsContainer>
        <Link to="/nova-transacao/entrada">
          <button>
            <AiOutlinePlusCircle />
            <p>Nova <br /> entrada</p>
          </button>
        </Link>
        <Link to="/nova-transacao/saida">
          <button>
            <AiOutlineMinusCircle />
            <p>Nova <br />saída</p>
          </button>
        </Link>
      </ButtonsContainer>

    </Container>
  );
}
