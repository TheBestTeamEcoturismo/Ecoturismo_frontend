import { useContext } from 'react';

import { ActivitiesContext } from '../providers/activities/ActivitiesProvider';

function useActivitiesState() {
  const { state, dispatch } = useContext(ActivitiesContext);
  return { state, dispatch };
}

export default useActivitiesState;
