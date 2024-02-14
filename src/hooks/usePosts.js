import { useEffect, useState } from 'react';
// import {URL_API} from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/posts/actions.js';


export const usePosts = () => {
  // const loading = useSelector(state => state.postsReducer.loading);
  // const posts = useSelector(state => state.postsReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  const [posts] = useState([]);
  console.log(posts);


  useEffect(() => {
    dispatch(postsRequestAsync());
    // if (!token) {
    //   setPosts([]);
    //   return;
    // }
    // fetch(`${URL_API}/best`, {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then(({data}) => {
    //     setPosts(data.children);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     dispatch(setPosts([]));
    //   });
  }, [token]);

  return [posts, token];
};


