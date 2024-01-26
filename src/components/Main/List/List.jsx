import React, { useContext } from 'react';
import Post from './Post';
import style from './List.module.css';
// import { usePosts } from '../../../hooks/usePosts.js';
import { postsContext } from '../../../context/postsContext.js';


export const List = () => {
  const {posts} = useContext(postsContext);
  console.log('postsInList', posts);
  // const posts = usePosts();
  // console.log('posts', posts);
  // console.log('id', posts[0].data.id);
  // console.log(posts[0].data.author);
  // console.log('posts0', posts[0].data.author);

  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 24,
  //     date: '2024-01-12T09:45:00.000Z',
  //     id: '728',

  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 24,
  //     date: '2024-01-12T09:45:00.000Z',
  //     id: '738',
  //   }
  // ];

  // const example = [
  //   {title: 'Name',
  //     data: {
  //       author: 'Dina',
  //       surname: 'Mig',
  //     },
  //   },
  //   {title: 'Name2',
  //     data: {
  //       author: 'Dina2',
  //       surname: 'Mig2',
  //     },
  //   },
  // ];
  // console.log('example.data:', example[0].data);


  return (
    <ul className={style.list}>
      {/* {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postData}/>
        ))} */}
      {
        posts.map((posts) => (
          <Post key={posts.data.id}/>
        ))}
    </ul>
  );
};
