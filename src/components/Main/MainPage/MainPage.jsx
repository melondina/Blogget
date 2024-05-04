import React from 'react';
import style from './MainPage.module.css';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  const token = useSelector(state => state.tokenReducer.token);
  return (
    <div className={style.container}>
      {!token ? (
      <h2>Авторизуйтесь</h2>
    ) : (
      <>
        <h2>Стартовая страница</h2>
        <h3>Добро пожаловать!!!</h3>
        <h4>Выберите категорию</h4>
      </>
    )}
    </div>
  );
};
