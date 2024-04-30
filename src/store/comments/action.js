/* eslint-disable max-len */
import {URL_API} from '../../api/const';
import axios from 'axios';
// import { commentsSlice } from './commentsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
// export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
// export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';

// export const commentsRequestError = (error) => ({
//   type: COMMENTS_REQUEST_ERROR,
//   error,
// });

// export const commentsRequest = () => ({
//   type: COMMENTS_REQUEST,
// });

// export const commentsRequestSuccess = (comments) => ({
//   type: COMMENTS_REQUEST_SUCCESS,
//   comments,
// });

// export const commentsRequestAsync = (id) => (dispatch, getState) => {
//   const loading = getState().commentsReducer.loading;
//   const token = getState().tokenReducer.token;
//   if (!token || loading) {
//     return;
//   }
//   // dispatch(commentsRequest());
//   dispatch(commentsSlice.actions.commentsRequest());

//   axios(`${URL_API}/comments/${id}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(({data}) => {
//       const post = data[0].data.children[0].data;
//       console.log(post);
//       const comments = data[1].data.children;
//       dispatch(commentsSlice.actions.commentsRequestSuccess([post, comments]));
//     },
//     )
//     .catch((error) => {
//       dispatch(commentsSlice.actions.commentsRequestError(error.toString()));
//     });
// };

export const commentsRequestAsync = createAsyncThunk('comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    // const loading = getState().commentsReducer.loading;
    if (!token) {
      return;
    }
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        const post = data[0].data.children[0].data;
        const comments = data[1].data.children;
        // console.log(comments);
        return {post, comments};
      },
      )
      .catch((error) => (error.toString()));
  },
);
