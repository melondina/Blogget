import React, { useEffect, useRef } from 'react';
import Post from './Post';
import style from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/action.js';
import { Outlet, useParams} from 'react-router-dom';
import { changePage } from '../../../store/posts/postsSlice.js';

export const List = () => {
  const { page } = useParams();
  // console.log('Current page:', page);

  const posts = useSelector(state => state.postsReducer.posts);
  const after = useSelector(state => state.postsReducer.after);
  const token = useSelector(state => state.tokenReducer.token);

  // console.log(posts);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(changePage(page));
    }
  }, [page]);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && after !== null && token) {
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
  }, [endList.current, posts]);
  return (
    <>
      <ul className={style.list}>
        {posts.map(({data}) => (<Post key={data.id} post={data} />))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet/>
    </>
  );
};
