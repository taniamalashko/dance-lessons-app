import axiosInstance from '../service';

const lessons = {
  get: () => axiosInstance.get('/lessons')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axiosInstance.post('/lessons', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (lessonId, updatedLesson) => axiosInstance.put(`/lessons/${lessonId}`, updatedLesson)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { lessons };
