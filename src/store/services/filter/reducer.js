/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import filterActions from './actions';

const initialState = {
  style: '',
  difficulty: '',
};

const filterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterActions.setStyleFilter, (state, action) => {
      state.style = action.payload;
    })
    .addCase(filterActions.setDifficultyFilter, (state, action) => {
      state.difficulty = action.payload;
    });
});

export default filterReducer;
