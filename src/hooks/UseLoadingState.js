import { useContext } from 'react';
import { UsersContext } from '../providers/users/UsersProvider';
import { ActivitiesContext } from '../providers/activities/ActivitiesProvider';
import { AccommodationsContext } from '../providers/accommodations/AccommodationsProvider';
import { ReservationsContext } from '../providers/reservations/Reservations';

function useLoadingState() {
  const { state: userState } = useContext(UsersContext);
  const { state: activitiesState } = useContext(ActivitiesContext);
  const { state: accommodationsState } = useContext(AccommodationsContext);
  const { state: reservationsState } = useContext(ReservationsContext);

  const loading = userState.isLoading || activitiesState.isLoading || accommodationsState.isLoading || reservationsState.isLoading;

  return { loading };
}

export default useLoadingState;
