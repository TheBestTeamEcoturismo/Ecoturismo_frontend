import { useEffect } from 'react';

import ListingCards from '../../components/listingCards/ListingCards';
import { getActivities } from '../../Reducers/Activities/activities.action';
import useActivitiesState from '../../hooks/useActivitiesState';

const Activities = () => {
  const { state, dispatch } = useActivitiesState();

  useEffect(() => {
    async function activities() {
      getActivities({ dispatch });
    }
    activities();
  }, []);

  return (
    <main>
      <section className="content">
        <ListingCards btnText="Ver Actividad" type="activities" cards={state.activities} title="Actividades Ecológicas" />
      </section>
    </main>
  );
};

export default Activities;
