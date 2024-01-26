import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
// import PostImage from './PostImage';
import PostContent from './PostContent';
// import PostRating from './PostRating';
// import PostDate from './PostDate';
import {ReactComponent as DeleteButtonImg} from './img/delete.svg';

export const Post = ({post}) => {
  // const {title, author} = post;
  (
    <li className={style.post}>
      {/* <PostImage /> */}
      <PostContent post={post}/>
      {/* <PostRating /> */}
      {/* <PostDate date={date}/> */}
      <button className={style.delete}>
        <DeleteButtonImg width={15} height={15}/>
      </button>
    </li>
  );
}
;

Post.propTypes = {
  post: PropTypes.object,
};
