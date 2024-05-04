import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteToken } from '../store/tokenReducer';
import { authLogout, authRequestAsync } from '../store/auth/action';
import { postsClear } from '../store/posts/postsSlice.js';
// import { postsClear } from '../store/posts/actions.js';


export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  // console.log(auth);

  const clearAuth = () => {
    dispatch(deleteToken());// вот так?
    dispatch(authLogout());// вот так?
    dispatch(postsClear());
  };

  return [auth, loading, clearAuth];
};
