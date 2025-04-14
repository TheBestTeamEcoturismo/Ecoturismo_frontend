import { useContext } from 'react';
import { UsersContext } from '../providers/users/UsersProvider';

function useUserState() {
  const { state, dispatch } = useContext(UsersContext);

  return { state, dispatch };
}

export default useUserState;
