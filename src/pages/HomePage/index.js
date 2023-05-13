import {
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BiExit } from 'react-icons/bi';
import { SiWolframmathematica } from 'react-icons/si';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import {
  Container,
  Header,
  TransactionsContainer,
  ButtonsContainer,
} from './style';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import TransactionsList from './TransactionsList';
import Loader from '../../components/Loaders/Loader';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

export default function HomePage() {
  const [movements, setMovements] = useState([]);
  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { handleToggleTheme } = useContext(ThemeContext);
  const { auth: { name, token }, setAuth } = useContext(AuthContext);

  const firstRender = useRef(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userToken'));
    if (!user && !token) return navigate('/');
    if (user) return setAuth({ name: user.name, token: user.token });
  }, []);

  useEffect(() => {
    const config = { headers: { authorization: `Bearer ${token}` } };
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/account/movements`, config);
        const sortedMovements = res.data.sort((a, b) => Date.parse(a.data) - Date.parse(b.data))
          .reverse();
        setMovements(sortedMovements);
      } catch (err) {
        console.log(err.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const accBalance = movements.reduce((acc, value) => {
      if (value.type === 'positive') {
        acc += value.opValue;
      } else if (value.type === 'negative') {
        acc -= value.opValue;
      }
      return acc;
    }, 0);
    setBalance(parseFloat(accBalance));
  }, [movements]);

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
          <SiWolframmathematica onClick={handleToggleTheme} />
          <BiExit onClick={() => handleLogout()} />
        </div>
      </Header>
      <TransactionsContainer
        movLength={movements.length > 0 ? '' : 'center'}
      >
        {loading
          ? <Loader color={`${({ theme }) => theme.btnBgColor}`} />
          : movements.length > 0 && !loading
            ? <TransactionsList balance={balance} movements={movements} setMovements={setMovements} />
            : <p>Não há registros de entrada ou saída</p> }

      </TransactionsContainer>

      <ButtonsContainer>
        <Link to="/nova-transacao/deposit">
          <button>
            <AiOutlinePlusCircle />
            <p>Nova <br /> entrada</p>
          </button>
        </Link>
        <Link to="/nova-transacao/withdraw">
          <button>
            <AiOutlineMinusCircle />
            <p>Nova <br />saída</p>
          </button>
        </Link>
      </ButtonsContainer>

    </Container>
  );
}
