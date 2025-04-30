import './Auth.css';
import FormAuth from '../../components/formAuth/FormAuth';
import Alert from '../../components/alert/Alert';
import useUserState from '../../hooks/useUserState';

const Auth = () => {
  const { state } = useUserState();

  return (
    <main>
      {state.error && <Alert message={state.error} />}
      <section className="content">{<FormAuth />}</section>
    </main>
  );
};

export default Auth;
