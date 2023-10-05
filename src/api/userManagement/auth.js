import axiosInstance from '../service';

const auth = {
  login: (username, password) => axiosInstance.post('user_management/token/', { username, password })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
};

export { auth };
