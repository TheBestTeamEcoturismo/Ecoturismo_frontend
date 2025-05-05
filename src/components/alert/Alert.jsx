import { useEffect, useState } from 'react';
import Button from '../button/Button';
import './Alert.css';
import { useNavigate } from 'react-router-dom';
import useUserState from '../../hooks/useUserState';
import { logout } from '../../reducers/users/usersAction';

const Alert = ({ message, dispatch }) => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();
  const { dispatch: userDispatch } = useUserState();
  async function logOut() {
    await logout({ userDispatch });
  }

  useEffect(() => {
    setShowAlert(true);
  }, [message]);

  function handleClose() {
    setShowAlert(false);
    dispatch?.({ type: 'CLEAR_MESSAGE' });
    switch (message) {
      case 'Usuario eliminado correctamente':
        navigate('/');
        break;
      case 'Alojamiento creado correctamente':
        navigate('/owner');
        break;
      case 'Alojamiento actualizado correctamente':
        navigate('/owner');
        break;
      case 'Actividad creada correctamente':
        navigate('/owner');
        break;
      case 'Actividad actualizada correctamente':
        navigate('/owner');
        break;
      case 'Parece que tu sesión ha caducado. Vuelve a iniciar sesión para continuar.':
        logOut();
        navigate('/');
        break;
      case 'Reserva eliminada correctamente, te hemos enviado un mensaje con la reserva cancleada':
        navigate('/');

      default:
        break;
    }
  }

  if (!showAlert) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{message}</p>
        <Button fnc={handleClose} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
