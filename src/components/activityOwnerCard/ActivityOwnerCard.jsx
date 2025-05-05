import { useNavigate } from 'react-router-dom';
import './ActivityOwnerCard.css';
import useActivitiesState from '../../hooks/useActivitiesState';
import Alert from '../alert/Alert';
import Button from '../button/Button';
import EditableItemCard from '../editableItemCard/EditableItemCard';

const ActivityOwnerCard = () => {
  const { state, dispatch } = useActivitiesState();
  const { activities } = state;
  const navigate = useNavigate();

  function navigateRegisterActivity() {
    navigate('/registerActivity');
  }

  return (
    <div className="activityOwnerCard">
      {state.error && <Alert message={state.error} dispatch={dispatch} />}
      {state.message && <Alert message={state.message} dispatch={dispatch} />}
      <div className="activityOwnerCard__heading">
        <img src="/icons/activismo-ecologico.webp" alt="icono" />
        <h3>Actividades</h3>
      </div>
      <p>{`Gestiona tus actividades sostenibles`}</p>
      {activities.length <= 0 && <p>No tienes actividades disponibles</p>}
      {activities.map((activity, index) => (
        <EditableItemCard key={index} item={activity} navigate={navigate} dispatch={dispatch} type="Activity" />
      ))}

      <Button fnc={() => navigateRegisterActivity()} text="Crear Actividad" />
    </div>
  );
};

export default ActivityOwnerCard;
