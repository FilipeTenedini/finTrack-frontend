import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { API_URL } from '../../API/URL';
import { Container, Header } from './style';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

export default function EditPage() {
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
    const body = { ...state.item, newValue: itemToEdit.value, newDesc: itemToEdit.desc };
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    console.log(body);
    axios
      .put(`${API_URL}/account/update_transaction`, body, config)
      .then(() => navigate('/home'))
      .catch(() => alert('Edição não realizada, tente novamente'));
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
        <button type="submit" onClick={handleEditItem}> Atualizar {tipo} </button>
      </Form>
    </Container>
  );
}
