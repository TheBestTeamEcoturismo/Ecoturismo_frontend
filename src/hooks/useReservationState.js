import { useContext } from 'react';
import { ReservationsContext } from '../providers/reservations/Reservations';

function useReservationState() {
  const { state, dispatch } = useContext(ReservationsContext);

  return { state, dispatch };
}

export default useReservationState;
