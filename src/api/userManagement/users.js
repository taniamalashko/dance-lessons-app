import axiosInstance from '../service';

const headers = {
  'Content-Type': 'application/json',
};

const userAxios = {
  registerUser: (userData) => axiosInstance.post('user_management/register/', userData)
    .then(({ data }) => data)
    .catch((error) => {
      const errorInfo = error.response.data;
      return errorInfo;
    }),
  getUserById: (id, authToken) => axiosInstance
    .get(`user_management/${id}/`, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
  updateUser: (id, updatedUserData, authToken) => axiosInstance
    // eslint-disable-next-line max-len
    .patch(`user_management/${id}/update/`, updatedUserData, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
  getCurrentUser: (authToken) => axiosInstance
    .get('user_management/current-user/', { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
};

export { userAxios };
