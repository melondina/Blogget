// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
// import { commentsReducer } from './comments/commentsReducer.js';
import { authReducer } from './auth/authReducer';
// import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
// import { thunk } from 'redux-thunk';
import { comReducer } from './comment/comReducer.js';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import {searchReducer} from './search/searchReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    comments: commentsReducer,
    comReducer,
    authReducer,
    postsReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

// const rootReducer = combineReducers({
//   tokenReducer,
//   commentsReducer,
//   comReducer,
//   authReducer,
//   postsReducer,
// });

// export const store = createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
