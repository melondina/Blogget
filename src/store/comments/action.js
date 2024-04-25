/* eslint-disable max-len */
import {URL_API} from '../../api/const';
import axios from 'axios';
// import { commentsSlice } from './commentsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_COMMENTS = 'SET_COMMENTS';
// export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
// export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
// export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';

// export const commentsRequest = () => ({
//   type: COMMENTS_REQUEST,
// });

// export const commentsRequestSuccess = (data) => ({
//   type: COMMENTS_REQUEST_SUCCESS,
//   post: data.post,
//   comments: data.comments,
// });

// export const commentsRequestError = (error) => ({
//   type: COMMENTS_REQUEST_ERROR,
//   error,
// });

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const setCommentsAction = (comments) => ({
  type: SET_COMMENTS,
  comments,
});

// export const commentsRequestAsync2 = (id) => (dispatch, getState) => {
//   const token = getState().tokenReducer.token;
//   if (!token) {
//     return;
//   }
//   dispatch(commentsSlice.actions.commentsRequest());

//   axios(`${URL_API}/comments/${id}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//   // .then(
//   //   ({
//   //     data: [
//   //       {
//   //         data: {
//   //           children: [{data: post}],
//   //         },
//   //       },
//   //       {
//   //         data: {children},
//   //       },
//   //     ],
//   //   }) => {
//   //     const comments = children.map((item) => item.data);
//   //     dispatch(commentsSlice.actions.commentsRequestSuccess({post, comments}));
//   //   }
//   // )
//     .then(({data}) => {
//       const posts = data[0].data.children[0].data;
//       const comments = data[1].data.children;
//       dispatch(commentsSlice.actions.commentsRequestSuccess({posts, comments}));
//     },
//     )
//     .catch((error) => {
//       dispatch(commentsSlice.actions.commentsRequestError({error: error.toString()}));
//     });
// };

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) {
      return;
    }
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    // .then(
    //   ({
    //     data: [
    //       {
    //         data: {
    //           children: [{data: post}],
    //         },
    //       },
    //       {
    //         data: {children},
    //       },
    //     ],
    //   }) => {
    //     const comments = children.map((item) => item.data);
    //     dispatch(commentsSlice.actions.commentsRequestSuccess({post, comments}));
    //   }
    // )
      .then(({data}) => {
        const posts = data[0].data.children[0].data;
        const comments = data[1].data.children;
        return { posts, comments };
      },
      )
      .catch((error) => ({error: error.toString()}));
  }
);
