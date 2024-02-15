import React from 'react';
import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import PostDate from '../../Main/List/Post/PostDate';


export const Comments = ({comments}) =>
  // console.log(comments);
  (
    <ul className={style.list}>
      {comments.map((comment) => (
        <li key={comment?.data.id} className={style.item}>
          <Text As='h3' className={style.author}
            size={18}
            tsize={22}>
            {comment.data.author}
          </Text>
          <Text As='p' className={style.comment}
            size={14}
            tsize={18}>
            {comment.data.body}
          </Text>
          <PostDate date={comment.data.created} />
        </li>
      ))}
    </ul>
  )
;

Comments.propTypes = {
  comments: PropTypes.array,
};
