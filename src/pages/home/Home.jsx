import { useEffect } from 'react';

import useActivitiesState from '../../Hooks/useActivitiesState';
import './Home.css';
import { getRandomActivities } from '../../Reducers/Activities/activities.action';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import { getRandomAccommodations } from '../../Reducers/Accommodations/accommodations.action';
import RandomBookings from '../../components/randomBookings/RandomBookings';
import Hero from '../../components/hero/Hero';

const Home = () => {
  const { state: activitiesState, dispatch } = useActivitiesState();
  const { state: accommodationsState, dispatch: accommodationsDispatch } = useAccommodationState();
  useEffect(() => {
    async function randomActivities() {
      await getRandomActivities({ dispatch });
    }
    async function randomAccomodations() {
      await getRandomAccommodations({ dispatch: accommodationsDispatch });
    }

    randomActivities();
    randomAccomodations();
  }, []);

  return (
    <main>
      <Hero />
      <RandomBookings type="activities" items={activitiesState.activities} title="Actividades Ecólogicas" btnTetx="Ver Actividad" />
      <RandomBookings type="accommodations" items={accommodationsState.accommodations} title="Alojamientos Ecoturísticos" btnTetx="Ver Alojamiento" />
    </main>
  );
};

export default Home;
