const initialState = {
  comment: 'Hello',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_COMMENTS = 'SET_COMMENTS';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const setCommentsAction = (comments) => ({
  type: 'SET_COMMENTS',
  comments,
});


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
