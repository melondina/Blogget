import React from 'react';
import Post from './Post';
import style from './List.module.css';
import { usePosts } from '../../../hooks/usePosts.js';
import ListLoader from './ListLoader';


export const List = () => {
  const [posts, loading] = usePosts();
  return (
    <ul className={style.list}>
      {loading ? <ListLoader /> :
      posts.map(post => <Post key={post.data.id} post={post.data} />)}
    </ul>
  );
};
