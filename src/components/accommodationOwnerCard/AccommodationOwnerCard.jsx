import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import './AccommodationOwnerCard.css';
import Alert from '../alert/Alert';
import EditableItemCard from '../editableItemCard/EditableItemCard';
import useAccommodationState from '../../hooks/useAccommodationsState';

const AccommodationOwnerCard = () => {
  const { state, dispatch } = useAccommodationState();
  const { accommodations } = state;
  const navigate = useNavigate();

  function navigateRegisterAccommodation() {
    navigate('/registerAccommodation');
  }
  return (
    <div className="accommodationOwnerCard">
      {state.error && <Alert message={state.error} dispatch={dispatch} />}
      {state.message && <Alert message={state.message} dispatch={dispatch} />}
      <div className="accommodationOwnerCard__heading">
        <img src="/icons/casa-ecologica.webp" alt="icono" />
        <h3>Alojamientos</h3>
      </div>
      <p>{`Gestiona tus alojamientos sostenibles`}</p>
      {accommodations.length <= 0 && <p>No tienes alojamientos disponibles</p>}
      {accommodations.map((accommodation, index) => (
        <EditableItemCard key={index} item={accommodation} navigate={navigate} type="Accommodation" dispatch={dispatch} />
      ))}

      <Button fnc={() => navigateRegisterAccommodation()} text="Crear Alojamiento" />
    </div>
  );
};

export default AccommodationOwnerCard;
