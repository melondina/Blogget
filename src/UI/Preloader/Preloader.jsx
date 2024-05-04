import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import style from './Preloader.module.css';


export const Preloader = (props) => (
  <div className={style.container}>
    <ClipLoader color='#cc6633'
      size={30}/>
  </div>
);
