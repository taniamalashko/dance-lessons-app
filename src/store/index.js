import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { lessonsReducer } from './services/lessons';
import { authReducer } from './services/auth';

const rootReducer = combineReducers({
  lessonsReducer,
  authReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
