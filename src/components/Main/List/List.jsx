import React from 'react';
import Post from './Post';
import style from './List.module.css';

export const List = (props) => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2024-01-12T09:45:00.000Z'
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};
