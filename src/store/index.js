// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
// import { commentReducer } from './comments/commentReducer';
import commentsReducer from './comments/commentsSlice';
import { authReducer } from './auth/authReducer';
import postsReducer from './posts/postsSlice';

// import { postsReducer } from './posts/postsReducer';

import { configureStore } from '@reduxjs/toolkit';

// import { thunk } from 'redux-thunk';


export const store = configureStore({
  reducer: {
    tokenReducer,
    commentsReducer,
    // commentReducer,
    authReducer,
    postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});


// const rootReducer = combineReducers({
//   tokenReducer,
//   commentReducer,
//   authReducer,
//   postsReducer,
// });

// export const store = createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
