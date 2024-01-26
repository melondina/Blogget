import {URL_API} from '../api/const';
import { useState, useEffect, useContext } from 'react';
import { tokenContext } from '../context/tokenContext.js';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

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
        setAuth({});
        delToken();// вот так?
      });
  }, [token]);

  const clearAuth = () => {
    setAuth({});
  };

  return [auth, clearAuth];
};
