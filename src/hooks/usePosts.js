import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/posts/actions.js';


export const usePosts = () => {
  const loading = useSelector(state => state.postsReducer.loading);
  const posts = useSelector(state => state.postsReducer.posts);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();
  // console.log(posts);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts || [], loading];
};


