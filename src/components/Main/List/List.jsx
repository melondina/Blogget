import React, { useEffect, useRef } from 'react';
import Post from './Post';
import style from './List.module.css';
// import Preloader from '../../../UI/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/actions.js';
import { Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const { page } = useParams();
  console.log('Current page:', page);

  const posts = useSelector(state => state.postsReducer.posts);
  console.log(posts);
  // const loading = useSelector(state => state.postsReducer.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();

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
