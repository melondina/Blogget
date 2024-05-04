import React from 'react';
import style from './PostImage.module.css';
import PropTypes from 'prop-types';

export const PostImage = ({ post }) => {
  const handleImageError = (event) => {
    event.target.style.display = 'none'; // Скрываем недоступное изображение
  };

  return (
    <img
      className={style.img}
      src={post.thumbnail}
      alt={post.title}
      onError={handleImageError}
    />
  );
};

PostImage.propTypes = {
  title: PropTypes.string,
  post: PropTypes.object,
};

