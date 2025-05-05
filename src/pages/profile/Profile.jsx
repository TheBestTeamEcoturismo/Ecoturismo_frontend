import { useContext, useEffect } from 'react';
import './Profile.css';
import useUserState from '../../hooks/useUserState';
import { ReservationsContext } from '../../providers/reservations/Reservations';
import { getUser } from '../../reducers/users/usersAction';
import UserProfileCard from '../../components/userProfileCard/UserProfileCard';
import UserBookingCard from '../../components/userBookingCard/UserbookingCard';
import Alert from '../../components/alert/Alert';

const Profile = () => {
  const { state, dispatch, dispatch: userDispatch } = useUserState();
  const { state: reservationState, dispatch: reservationDispatch } = useContext(ReservationsContext);
  console.log(reservationState);

  useEffect(() => {
    async function user() {
      getUser({ dispatch, id: state.user._id });
    }
    user();
  }, []);

  return (
    <main>
      {state.message && <Alert message={state.message} dispatch={userDispatch} />}
      {state.error && <Alert message={state.error} dispatch={userDispatch} />}
      {reservationState.message && <Alert message={reservationState.message} dispatch={reservationDispatch} />}
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
