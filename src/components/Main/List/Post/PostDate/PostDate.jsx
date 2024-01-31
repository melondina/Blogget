import React from 'react';
import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate.js';
import PropTypes from 'prop-types';


export const PostDate = ({date}) =>
  // console.log('date', date);
  (
    <time className={style.date} dateTime={date}>
      {formatDate(date)}
    </time>
  )

;

PostDate.propTypes = {
  date: PropTypes.number,
};

