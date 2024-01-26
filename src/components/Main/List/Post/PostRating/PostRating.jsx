import React from 'react';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';


export const PostRating = ({post}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'></button>
    <Text As='p'
      className={style.ups}
      size={12}
      tsize={14}>
      {post.ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг'></button>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
  post: PropTypes.object,
};
