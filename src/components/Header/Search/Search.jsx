/* eslint-disable max-len */
import React from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type='search'/>
    <button className={style.button}>
      <SearchIcon width={128} height={128}
        className={style.svg}
      />
    </button>
  </form>
);
