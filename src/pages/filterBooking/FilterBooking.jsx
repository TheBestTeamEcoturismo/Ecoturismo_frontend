import { useLocation } from 'react-router-dom';
import './FilterBooking.css';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import useActivitiesState from '../../Hooks/useActivitiesState';
import ListingCards from '../../Components/ListingCards/ListingCards';

const FilterBooking = () => {
  const location = useLocation();
  const path = location.pathname;
  const { state: actState } = useActivitiesState();
  const { state: accState } = useAccommodationState();

  return (
    <main className="content">
      <section className="filterBookins">
        {path === '/filterActivities' ? <ListingCards title="Actividades" cards={actState.activities} type="activities" btnText="Ver Actividad" /> : <ListingCards title="Alojamientos Ecoturísticos" cards={accState.accommodations} type="accommodations" btnText="Ver Alojamiento" />}
      </section>
    </main>
  );
};

export default FilterBooking;
