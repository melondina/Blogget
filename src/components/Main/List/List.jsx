import React, { useContext } from 'react';
import Post from './Post';
import style from './List.module.css';
// import { usePosts } from '../../../hooks/usePosts.js';
import { postsContext } from '../../../context/postsContext.js';


export const List = () => {
  const {posts} = useContext(postsContext);
  // console.log('postsInList', posts);
  return (
    <ul className={style.list}>
      {/* {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postData}/>
        ))} */}
      {
        posts.map((post) => (
          <Post key={post.data.id} post={post.data}/>
        ))}
    </ul>
  );
};
