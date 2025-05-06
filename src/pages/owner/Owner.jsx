import './Owner.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityOwnerCard from '../../components/activityOwnerCard/ActivityOwnerCard';
import AccommodationOwnerCard from '../../components/accommodationOwnerCard/AccommodationOwnerCard';
import useUserState from '../../hooks/useUserState';
import useAccommodationState from '../../hooks/useAccommodationsState';
import useActivitiesState from '../../hooks/useActivitiesState';
import Button from '../../components/button/Button';
import { getActivitiesByAuthor } from '../../reducers/activities/activities.action';
import { getAccommodationsByAuthor } from '../../reducers/accommodations/accommodations.action';

const Owner = () => {
  const { dispatch: activitiesDispatch } = useActivitiesState();
  const { dispatch: accommodationsDispatch } = useAccommodationState();
  const { state } = useUserState();
  const { user } = state;
  const navigate = useNavigate();

  async function getActivities() {
    await getActivitiesByAuthor({ dispatch: activitiesDispatch, id: user._id });
  }

  async function getAccommodations() {
    await getAccommodationsByAuthor({ dispatch: accommodationsDispatch, id: user._id });
  }

  useEffect(() => {
    getActivities();
    getAccommodations();
  }, []);

  return (
    <main>
      <h2 className="owner__heading">Panel de Control</h2>
      <section className="owner__section">
        <ActivityOwnerCard />
        <AccommodationOwnerCard />
        <Button fnc={() => navigate('/ownerReservations')} text="Gestiona tus reservas" />
      </section>
    </main>
  );
};

export default Owner;
