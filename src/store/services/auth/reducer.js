/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from '../lessons/constants';
import thunks from './thunks';

const initialState = {
  isAuthorized: false,
  userData: {},
  token: '',
  error: null,
};

const authReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthorized = false;
      state.userData = {};
      state.token = '';
      state.error = null;
    },
    setState: (state, { payload }) => {
      const { isAuthorized, userData, token } = payload;
      state.isAuthorized = isAuthorized;
      state.token = token;
      state.userData = userData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.logInThunk.rejected, (state, { error }) => {
      state.error = error.message;
    });
    builder.addCase(thunks.logInThunk.pending, (state) => {
      state.isAuthorized = false;
      state.token = '';
    });
    builder.addCase(thunks.logInThunk.fulfilled, (state, { payload }) => {
      const { access, userData } = payload;
      if (access) {
        state.isAuthorized = true;
        state.token = payload.access;
        state.userData = userData;
      }
    });
  },
});

export default authReducer.reducer;
