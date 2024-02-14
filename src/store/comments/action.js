import {URL_API} from '../../api/const';
import axios from 'axios';


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_COMMENTS = 'SET_COMMENTS';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const setCommentsAction = (comments) => ({
  type: SET_COMMENTS,
  comments,
});


export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) {
    return;
  }

  dispatch(setCommentsAction());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ([
        {
          data: {
            children: [{ data: post }],
          },
        },
        {
          data: {
            children,
          },
        },
      ]) => {
        const comments = children.map(item => item.data);
        dispatch(setCommentsAction([post, comments]));
        console.log(setCommentsAction([post, comments]));
      },
    )
    .catch((err) => {
    //   console.error(err);
    });
};
