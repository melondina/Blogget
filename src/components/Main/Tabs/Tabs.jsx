import React from 'react';
import style from './Tabs.module.css';

export const Tabs = props => {
  console.log(style);
  return (
    <ul className={style.list}>
      <li><a href="#"></a>Главная</li>
      <li><a href="#"></a>Просмотренные</li>
      <li><a href="#"></a>Сохраненные</li>
      <li><a href="#"></a>Мои посты</li>
    </ul>
  );
};
