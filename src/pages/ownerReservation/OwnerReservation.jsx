import { useContext, useEffect, useState } from 'react';
import './OwnerReservation.css';
import { getReservations } from '../../reducers/reservations/reservations.action';
import ReservationSwitcher from '../../components/reservationsSwitcher/ReservationsSwitcher';
import useUserState from '../../hooks/useUserState';
import BookingCalendar from '../../components/bookingCalendar/BookingCalendar';
import { ReservationsContext } from '../../providers/reservations/Reservations';

const OwnerReservations = () => {
  const [step, setStep] = useState('Alojamientos');
  const { state, dispatch } = useContext(ReservationsContext);
  const { state: userState } = useUserState();
  const [reservations, setReservations] = useState([]);

  async function getReservationsOwner() {
    await getReservations({ dispatch, id: userState.user._id });
  }

  useEffect(() => {
    getReservationsOwner();
  }, []);

  useEffect(() => {
    if (step === 'Alojamientos') {
      setReservations(state.reservations?.filter((r) => r.accommodationId) || []);
    } else if (step === 'Actividades') {
      setReservations(state.reservations?.filter((r) => r.activityId) || []);
    }
  }, [step, state.reservations]);

  return (
    <main>
      <div className="content ownerReservation">
        <h2 className="h2">Gestión de reservas</h2>
        <div>
          <ReservationSwitcher step={step} setStep={setStep} reservations={reservations} />
          <BookingCalendar reservations={reservations} />
        </div>
      </div>
    </main>
  );
};

export default OwnerReservations;
