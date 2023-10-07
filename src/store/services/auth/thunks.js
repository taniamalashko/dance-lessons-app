import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../api/userManagement/auth';
import { userAxios } from '../../../api/userManagement/users';
import { moduleName } from '../lessons/constants';

const logInThunk = createAsyncThunk(`${moduleName}/logIn`, async ({ username, password }) => {
  const response = await auth.login(username, password);

  if (response.access) {
    const currentUser = await userAxios.getCurrentUser(response.access);
    if (currentUser.id) {
      const data = await userAxios.getUserById(currentUser.id, response.access);
      const responsesInfo = { ...response, userData: data };

      return responsesInfo;
    }
  }
});

const thunks = {
  logInThunk,
};

export default thunks;
