import { useContext, useEffect } from 'react';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import ListingCards from '../../Components/ListingCards/ListingCards';
import { getAccommodations } from '../../Reducers/Accommodations/accommodations.action';

const Accommodations = () => {
  const { state, dispatch } = useContext(AccommodationsContext);

  useEffect(() => {
    async function accommodations() {
      getAccommodations({ dispatch });
    }
    accommodations();
  }, []);

  return (
    <main>
      <section className="content">
        <ListingCards btnText="Ver Alojamiento" type="acommodations" cards={state.accommodations} title="Alojamientos Ecoturísticos" />
      </section>
    </main>
  );
};

export default Accommodations;
