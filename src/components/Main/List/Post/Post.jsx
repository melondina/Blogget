import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostDate from './PostDate';
import {ReactComponent as DeleteButtonImg} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <PostImage title={title}/>
      <PostContent title={title} author={author}/>
      <PostRating ups={ups}/>
      <PostDate date={date}/>
      <button className={style.delete}>
        <DeleteButtonImg width={15} height={15}/>
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
