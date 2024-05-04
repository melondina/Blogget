import React from 'react';
import style from './Logo.module.css';
import { ReactComponent as LogoImg } from './img/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className={style.link}>
    <LogoImg className={style.logo}/>
  </Link>
);

