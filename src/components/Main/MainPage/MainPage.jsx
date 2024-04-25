import React from 'react';
import style from './MainPage.module.css';

export const MainPage = (props) => {
  console.log(style);
  return (
    <div className={style.container}>
      <h2>Стартовая страница</h2>
      <h3>Добро пожаловать!!!</h3>
      <h4>Выберите категорию</h4>
    </div>
  );
};
