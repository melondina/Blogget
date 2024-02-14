import { POSTS_CLEAR, POSTS_REQUEST,
  POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS }
  from './actions';


const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case POSTS_CLEAR:
      return {
        ...state,
        data: [],
      };


    default: return state;
  }
};

