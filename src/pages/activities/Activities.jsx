import { useEffect } from 'react';

import useActivitiesState from '../../Hooks/useActivitiesState';
import ListingCards from '../../components/listingCards/ListingCards';
import { getActivities } from '../../Reducers/Activities/activities.action';

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
