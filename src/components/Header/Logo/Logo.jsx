import React from 'react';
import style from './Logo.module.css';
import {ReactComponent as LogoImg} from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <LogoImg className={style.logo}/>
  </a>
);
