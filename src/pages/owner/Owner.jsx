import './Owner.css';
import { useEffect } from 'react';
import { getAccommodationsByAuthor } from '../../Reducers/Accommodations/accommodations.action';
import { getActivitiesByAuthor } from '../../Reducers/Activities/activities.action';
import { useNavigate } from 'react-router-dom';
import ActivityOwnerCard from '../../Components/ActivityOwnerCard/ActivityOwnerCard';
import AccommodationOwnerCard from '../../components/accommodationOwnerCard/AccommodationOwnerCard';
import Button from '../../Components/Button/Button';
import useActivitiesState from '../../hooks/useActivitiesState';
import useAccommodationState from '../../hooks/useAccommodationsState';
import useUserState from '../../hooks/useUserState';

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
