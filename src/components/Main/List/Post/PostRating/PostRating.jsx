import React, { useContext } from 'react';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import { postsContext } from '../../../../../context/postsContext';


export const PostRating = ({ups}) => {
  const {posts} = useContext(postsContext);

  console.log('posts', posts);
  if (!posts || !posts.data) {
    return null; // or handle the loading state
  }
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг'></button>
      <Text As='p'
        className={style.ups}
        size={12}
        tsize={14}>
        {posts.data.ups}
      </Text>
      <button className={style.down} aria-label='Понизить рейтинг'></button>
    </div>
  );
};

PostRating.propTypes = {
  ups: PropTypes.number,
};
