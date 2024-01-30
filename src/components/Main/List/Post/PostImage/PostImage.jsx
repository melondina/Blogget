import React from 'react';
import style from './PostImage.module.css';
import PropTypes from 'prop-types';
// import notPhoto from '../img/notphoto.jpg';

export const PostImage = ({post}) =>
  // console.log(post);
  (
    <img className={style.img}
      src={post.thumbnail} alt={post.title}/>
  )
;

PostImage.propTypes = {
  title: PropTypes.string,
  post: PropTypes.object,
};

