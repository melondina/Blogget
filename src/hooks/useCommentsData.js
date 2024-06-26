import { useEffect } from 'react';
// import {URL_API} from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/action.js';


export const useCommentsData = (id) => {
  const comments = useSelector(state => state.comments.comments);
  const post = useSelector(state => state.comments.post);
  const loading = useSelector(state => state.comments.loading);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);


  return [comments || [], loading, post];
};


