import React, { useEffect, useRef } from 'react';
import Post from './Post';
import style from './List.module.css';
// import Preloader from '../../../UI/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/action.js';
import {useParams, Outlet} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postsReducer.posts);
  // const loading = useSelector(state => state.postsReducer.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();

  const { page } = useParams();
  console.log('Current page:', page);

  useEffect(() => {
    if (page) {
      dispatch(postsRequestAsync(page));
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        {
          posts.map(({data}) => (<Post key={data.id} post={data} />))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet/>
    </>

  );
};
