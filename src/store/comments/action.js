import {URL_API} from '../../api/const';
import axios from 'axios';


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_COMMENTS = 'SET_COMMENTS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';


export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const setCommentsAction = (comments) => ({
  type: SET_COMMENTS,
  comments,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});


export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) {
    return;
  }
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const posts = data[0].data.children[0].data;
      const comments = data[1].data.children;
      dispatch(setCommentsAction([posts, comments]));
    },
    )
    .catch((err) => {
      console.error(err);
      dispatch(commentsRequestError(err.toString()));
    });
};
