/* eslint-disable max-len */
import React, { useState } from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import { useDispatch } from 'react-redux';
import { searchRequest } from '../../../store/search/searchAction.js';

export const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input className={style.search} type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button} type='submit'>
        <SearchIcon width={128} height={128}
          className={style.svg}
        />
      </button>
    </form>
  );
};
