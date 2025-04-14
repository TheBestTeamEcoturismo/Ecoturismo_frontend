import './FormAuth.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import FormLogin from '../formLogin/FormLogin';
import { login } from '../../reducers/users/usersAction';
import { UsersContext } from '../../providers/users/UsersProvider';
import FormRegister from '../formRegister/FormRegister';
import Alert from '../alert/Alert';

const FormAuth = () => {
  const { dispatch } = useContext(UsersContext);
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const navigate = useNavigate();

  return (
    <div className="form__auth">
      <h2>Bienvenido a Ecoturismo</h2>
      <p>Inicia sesión o registrate para continuar</p>
      <div className="form__auth--links">
        <NavLink className="form__auth--link" to="/login" type="button">
          Iniciar Sesión
        </NavLink>
        <NavLink className="form__auth--link" to="/register" type="button">
          Registrarse
        </NavLink>
      </div>
      {isLogin ? <FormLogin navigate={navigate} dispatch={dispatch} /> : <FormRegister navigate={navigate} dispatch={dispatch} />}
      <p>
        Al registrarte, aceptas nuestros <span>Términos y Condiciones</span> y nuestra <span>Política de Privacidad</span>
      </p>
    </div>
  );
};

export default FormAuth;
