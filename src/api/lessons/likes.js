import axiosInstance from '../service';

const likesAxios = {
  toggleLikeRequest: (lessonId, authToken) => axiosInstance
    .post(`lessons/${lessonId}/like/`, null, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
};

export { likesAxios };
