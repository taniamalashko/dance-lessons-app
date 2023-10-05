/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  lessons: [],
  isInitialized: false,
  error: '',
};

const lessonsReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchLessonsThunk.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.lessons = payload;
      state.isInitialized = true;
    });
    builder.addCase(thunks.fetchLessonsThunk.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

export default lessonsReducer.reducer;
