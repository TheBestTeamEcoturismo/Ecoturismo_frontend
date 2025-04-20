import { useContext } from 'react';
import { AccommodationsContext } from '../providers/accommodations/AccommodationsProvider';

function useAccommodationState() {
  const { state, dispatch } = useContext(AccommodationsContext);
  return { state, dispatch };
}

export default useAccommodationState;
