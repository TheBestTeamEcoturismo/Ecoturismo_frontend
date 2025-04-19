import { useContext } from 'react';
import './ReservationUserCard.css';
import { ReservationsContext } from '../../providers/reservations/Reservations';
import { removeReservation } from '../../reducers/reservations/reservations.action';
import Alert from '../alert/Alert';

const ReservationUserCard = ({ isActivity, item }) => {
  const { dispatch } = useContext(ReservationsContext);
  async function deleteRservation({ id }) {
    await removeReservation({ dispatch, id });
  }

  return (
    <div className="reservationCard">
      <div>
        <div>
          <h4>{isActivity ? item.activityId?.name : item.accommodationId?.name}</h4>
          <p>- {item.typeReservation}</p>
          <p>- {isActivity ? `Hora: ${item.hour}` : `Alojamiento reservado: Del ${item.entryDate} al ${item.exitDate}`}</p>
          <p>{isActivity && `- Día: ${item.entryDate}`}</p>
        </div>
        <div className="reservationCard__button">
          <button onClick={() => deleteRservation({ id: item._id })}>
            <img src="/icons/borrar.webp" alt="icono papelera" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationUserCard;
