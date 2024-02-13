import { useDispatch, useSelector } from 'react-redux';
import {URL_API} from '../api/const';
import { useState, useEffect } from 'react';
import { deleteToken } from '../store/tokenReducer';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!token) {
      // setAuth({});
      return;
    }

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        dispatch(setAuth({}));
        dispatch(deleteToken());// вот так?
      });
  }, [token]);

  const clearAuth = () => {
    setAuth({});
  };

  return [auth, clearAuth];
};
