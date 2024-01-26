import React, { useContext } from 'react';
import style from './PostImage.module.css';
// import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import { postsContext } from '../../../../../context/postsContext.js';

export const PostImage = ({title}) => {
  const {posts} = useContext(postsContext);
  return (
    <img className={style.img}
      src={posts.data.thumbnail} alt={posts.data.title}/>
  );
};

PostImage.propTypes = {
  title: PropTypes.string,
};
