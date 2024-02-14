import { SET_COMMENTS, UPDATE_COMMENT } from './action';

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

    default:
      return state;
  }
};
