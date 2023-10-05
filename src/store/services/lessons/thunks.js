import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessons } from '../../../api/lessons/lessons';
import { moduleName } from './constants';

const fetchLessonsThunk = createAsyncThunk(`${moduleName}/fetchLessons`, async () => {
  const response = await lessons.getAllLessons();
  return response;
});

const thunks = {
  fetchLessonsThunk,
};

export default thunks;
