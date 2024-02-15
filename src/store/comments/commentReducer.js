import { COMMENTS_REQUEST_ERROR, SET_COMMENTS, UPDATE_COMMENT } from './action';

const initialState = {
  comment: 'Hello',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };


    default:
      return state;
  }
};
