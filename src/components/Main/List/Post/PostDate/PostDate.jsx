import React from 'react';
import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate.js';
import PropTypes from 'prop-types';


export const PostDate = ({post}) =>
  // console.log('date');
  (
    <time className={style.date} dateTime={post.created}>
      {formatDate(post.created)}
    </time>
  )
;

PostDate.propTypes = {
  date: PropTypes.string,
  post: PropTypes.object,
};

