import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessons } from '../../../api/lessons/lessons';
import { likesAxios } from '../../../api/lessons/likes';
import { moduleName } from './constants';

const fetchLessonsThunk = createAsyncThunk(`${moduleName}/fetchLessons`, async () => {
  const response = await lessons.getAllLessons();
  return response;
});

const addLesson = createAsyncThunk(`${moduleName}/createLesson`, async (data) => {
  const { authToken, lessonData } = data;
  const response = await lessons.createNewLesson(lessonData, authToken);
  return response;
});

const deleteLesson = createAsyncThunk(`${moduleName}/deleteLesson`, async (data) => {
  const { lessonId: id, authToken } = data;
  await lessons.deleteLesson(id, authToken);
  return id;
});

const toggleLessonLike = createAsyncThunk(`${moduleName}/toggleLike`, async (data) => {
  const { lessonId, authToken, userId } = data;
  const response = await likesAxios.toggleLikeRequest(lessonId, authToken);
  return { lessonId, userId, response };
});

const thunks = {
  fetchLessonsThunk,
  addLesson,
  toggleLessonLike,
  deleteLesson,
};

export default thunks;
