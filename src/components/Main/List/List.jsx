import React from 'react';
import Post from './Post';
import style from './List.module.css';

export const List = (props) => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2024-01-12T09:45:00.000Z',
      id: '768',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 24,
      date: '2024-01-12T09:45:00.000Z',
      id: '728',

    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2024-01-12T09:45:00.000Z',
      id: '738',
    }
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postData}/>
        ))}
    </ul>
  );
};
