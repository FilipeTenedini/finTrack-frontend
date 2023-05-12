import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { Container, Header } from './style';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Loader from '../../components/Loaders/Loader';

export default function EditPage() {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const [itemToEdit, setItemToEdit] = useState({
    value: state.item.opValue, desc: state.item.desc,
  });
  const { tipo } = useParams();
  const { auth: { token }, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userToken'));
    if (!user && !token) return navigate('/');
    if (user) return setAuth({ name: user.name, token: user.token });
  }, []);

  function handleGoBack() {
    return navigate('/home');
  }

  function handleEditItem() {
    setLoading(true);
    const body = { ...state.item, newValue: itemToEdit.value, newDesc: itemToEdit.desc };
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .put(`${process.env.REACT_APP_API_URL}/account/update_transaction`, body, config)
      .then(() => navigate('/home'))
      .catch(() => alert('Edição não realizada, tente novamente'))
      .finally(() => setLoading(false));
  }
  return (
    <Container>
      <Header>
        <div>
          <h1>
            Editar {tipo}
          </h1>
          <AiOutlineRollback onClick={() => handleGoBack()} />
        </div>
      </Header>
      <Form>
        <input type="number" value={itemToEdit.value} onChange={(e) => setItemToEdit({ ...itemToEdit, value: e.target.value })} />
        <input type="text" value={itemToEdit.desc} onChange={(e) => setItemToEdit({ ...itemToEdit, desc: e.target.value })} />
        <button
          type="submit"
          onClick={handleEditItem}
          disabled={loading}
        > {loading ? <Loader /> : 'Atualizar'} {!loading && tipo}
        </button>
      </Form>
    </Container>
  );
}
