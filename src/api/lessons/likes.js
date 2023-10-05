import axiosInstance from '../service';

const headers = {
  'Content-Type': 'application/json',
};

const likesAxios = {
  toggleLikeRequest: (lessonId, authToken) => axiosInstance
    .post(`lessons/${lessonId}/like/`, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
};

export { likesAxios };
