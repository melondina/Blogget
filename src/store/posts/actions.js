import {URL_API} from '../../api/const';
import axios from 'axios';


export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_CLEAR = 'POSTS_CLEAR';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';


export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsClear = () => ({
  type: POSTS_CLEAR,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});


export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) {
    return;
  }

  dispatch(postsRequestSuccess());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: {data: {children}}}) => {
      // const data = [children];
      dispatch(postsRequestSuccess(children));
      // console.log(postsRequestSuccess(children));
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsRequestError(err.toString()));
    });
};

