import { useContext, useEffect } from 'react';
import './Profile.css';
import useUserState from '../../hooks/useUserState';
import { ReservationsContext } from '../../providers/reservations/Reservations';
import Alert from '../../Components/alert/Alert';
import { getUser } from '../../reducers/users/usersAction';
import UserProfileCard from '../../components/userProfileCard/UserProfileCard';
import UserBookingCard from '../../components/userBookingCard/UserbookingCard';

const Profile = () => {
  const { state, dispatch } = useUserState();
  const { state: reservationState } = useContext(ReservationsContext);

  useEffect(() => {
    async function user() {
      getUser({ dispatch, id: state.user._id });
    }
    user();
  }, []);

  return (
    <main>
      {state.message && <Alert message={state.message} />}
      {state.error && <Alert message={state.error} />}
      {reservationState.message && <Alert message={reservationState.message} />}
      <section className="profile">
        <h2>Mi Perfil</h2>
        <div>
          <UserProfileCard user={state.user} dispatch={dispatch} />
          <UserBookingCard user={state.user} />
        </div>
      </section>
    </main>
  );
};

export default Profile;
