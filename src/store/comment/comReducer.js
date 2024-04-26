import { UPDATE_COMMENT } from './action';

const initialState = {
  comment: 'Hello',
};

export const comReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};
