import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { lessonsReducer } from './services/lessons';
import { authReducer } from './services/auth';
import { filterReducer } from './services/filter';

const rootReducer = combineReducers({
  lessonsReducer,
  authReducer,
  filterReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
