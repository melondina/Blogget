import { useEffect } from 'react';
// import {URL_API} from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/action.js';


export const useCommentsData = (id) => {
  const error = useSelector(state => state.commentReducer.error);
  const comments = useSelector(state => state.commentReducer.comments);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);


  return [comments || [], error];
};


