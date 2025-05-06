import { useContext, useEffect } from 'react';
import ListingCards from '../../Components/ListingCards/ListingCards';
import { AccommodationsContext } from '../../providers/accommodations/AccommodationsProvider';
import { getAccommodations } from '../../reducers/accommodations/accommodations.action';

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
