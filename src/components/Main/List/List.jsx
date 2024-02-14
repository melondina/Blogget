import React from 'react';
import Post from './Post';
import style from './List.module.css';
// import { postsContext } from '../../../context/postsContext.js';
import { usePosts } from '../../../hooks/usePosts.js';


export const List = () => {
  const [posts] = usePosts();
  // const {posts} = useContext(postsContext);
  console.log(posts);
  // console.log('postsInList', posts);
  return (
    <ul className={style.list}>
      {
        posts.map((post) => (
          <Post key={post.data.id} post={post.data}/>
        ))}
    </ul>
  );
};
