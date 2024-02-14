import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteToken } from '../store/tokenReducer';
import { authLogout, authRequestAsync } from '../store/auth/action';


export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => {
    dispatch(deleteToken());// вот так?
    dispatch(authLogout());// вот так?
  };

  return [auth, loading, clearAuth];
};
