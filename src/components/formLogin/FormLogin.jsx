import './FormLogin.css';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import useTogglePassword from '../../hooks/useTogglePassword';
import { login } from '../../reducers/users/usersAction';

const FormLogin = ({ dispatch, navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(body) {
    await login({ dispatch, body, navigate });
  }

  const { showPassword, tooglePassword } = useTogglePassword();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'El email no tiene un formato válido'
            }
          })}
        />
        {errors.email && <p className="form__error">{errors.email.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="password">Contraseña</label>
        <input
          type={!showPassword ? 'password' : 'text'}
          id="password"
          name="password"
          autoComplete="current-password"
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
            }
          })}
        />
        <img className="view" src={!showPassword ? '/icons/ojo.webp' : '/icons/ojo-abierto.webp'} alt="Mostrar contraseña" width={100} height={100} onClick={() => tooglePassword(!showPassword)} />
        {errors.password && <p className="form__error">{errors.password.message}</p>}
      </div>
      <Button text="Iniciar Sesión" />
    </form>
  );
};

export default FormLogin;
