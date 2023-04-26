import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { Register } from './style';
import { API_URL } from '../../../API/URL';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

export default function Movement({ item, setMovements }) {
  const { auth: { token }, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userToken'));
    if (!user && !token) return navigate('/');
    if (user) return setAuth({ name: user.name, token: user.token });
  }, []);

  function handleDeleteMovement() {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: item,
    };
    axios
      .delete(`${API_URL}/account/delete_transaction`, config)
      .then(() => {
        setMovements((prevState) => prevState.filter((i) => i !== item));
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <Register opColor={item.type}>
      <div>{item.data.slice(0, 5)}</div>
      <div>
        <Link to={`/editar-registro/${item.type === 'negative' ? 'saida' : 'entrada'}`} state={{ item }}>
          {item.desc}
        </Link>
      </div>
      <div> {item.opValue}</div>
      <div>
        <AiOutlineClose onClick={() => handleDeleteMovement()} />
      </div>
    </Register>
  );
}
