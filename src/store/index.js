import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './comments/commentReducer';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';

import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postsReducer,
});


export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
