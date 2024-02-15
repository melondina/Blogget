/* eslint-disable max-len */
import React, { useState } from 'react';
import style from './Auth.module.css';
// import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import { useAuth } from '../../../hooks/useAuth';
import PreLoader from '../../../UI/Preloader';


export const Auth = () => {
  const [auth, loading, clearAuth] = useAuth();
  const [isVisibleLogoutButton, setVisibleLogoutButton] = useState(false);

  const handleClick = () => {
    setVisibleLogoutButton(!isVisibleLogoutButton);
  };

  const logOut = () => {
    clearAuth();
  };

  // console.log('auth', auth);


  return (
    <div className={style.container}>
      {loading ? (<PreLoader/>) : auth.name ? (
        <>
          <button onClick={handleClick}
            className={style.btn}>
            <img className={style.img} src={auth.img}
              title={auth.name} alt={`Avatar: ${auth.name}`}/>
          </button>
          {isVisibleLogoutButton && (
            <button onClick={logOut} className={style.logout}>
              Выйти
            </button>
          )}
        </>
      ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon className={style.svg}/>
      </Text>
      )}
    </div>
  );
};


// Auth.propTypes = {
//   token: PropTypes.string,
//   delToken: PropTypes.func,
// };
