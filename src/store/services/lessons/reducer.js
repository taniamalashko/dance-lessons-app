/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  lessons: [],
  filter: {
    danceStyle: '',
    difficulty: '',
  },
  isInitialized: false,
  error: '',
};

const lessonsReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchLessonsThunk.fulfilled, (state, { payload }) => {
      state.lessons = payload;
      state.isInitialized = true;
    });
    builder.addCase(thunks.fetchLessonsThunk.rejected, (state, { error }) => {
      state.error = error.message;
    });
    builder.addCase(thunks.addLesson.fulfilled, (state, { payload }) => {
      state.lessons = [...state.lessons, payload];
    });
    builder.addCase(thunks.addLesson.rejected, (state, { error }) => {
      state.error = error.message;
      throw new Error(error);
    });
    builder.addCase(thunks.toggleLessonLike.rejected, (state, { error }) => {
      state.error = error.message;
      throw new Error(error);
    });
    builder.addCase(thunks.toggleLessonLike.fulfilled, (state, { payload }) => {
      const { lessonId, userId } = payload;
      state.lessons.forEach((lesson) => {
        if (lesson.id === lessonId) {
          lesson.likes = lesson.likes.includes(userId)
            ? lesson.likes.filter((id) => id !== userId)
            : [...lesson.likes, userId];
        }
      });
    });
    builder.addCase(thunks.deleteLesson.fulfilled, (state, { payload }) => {
      state.lessons = state.lessons.filter((lesson) => lesson.id !== payload);
    });
    builder.addCase(thunks.deleteLesson.rejected, (state, { error }) => {
      state.error = error.message;
      throw new Error(error);
    });
  },
});

export default lessonsReducer.reducer;
