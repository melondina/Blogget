// import { COMMENTS_REQUEST, COMMENTS_REQUEST_ERROR, COMMENTS_REQUEST_SUCCESS,
// } from './action';

// const initialState = {
//   loading: false,
//   comments: [],
//   error: '',
// };

// export const commentsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case COMMENTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: '',
//       };

//     case COMMENTS_REQUEST_SUCCESS:
//       return {
//         ...state,
//         comments: action.comments,
//         loading: false,
//         error: '',
//       };

//     case COMMENTS_REQUEST_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };
