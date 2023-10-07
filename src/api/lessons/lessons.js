import axiosInstance from '../service';

const headers = {
  'Content-Type': 'application/json',
};

const lessons = {
  getAllLessons: () => axiosInstance.get('lessons/lessons/')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getOneLesson: (lessonId) => axiosInstance.get(`lessons/${lessonId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
  createNewLesson: (lessonData, authToken) => axiosInstance
    .post('lessons/create/', lessonData, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  editLesson: (lessonId, newData, authToken) => axiosInstance
    .patch(`lessons/${lessonId}/update/`, newData, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
  deleteLesson: (lessonId, authToken) => axiosInstance
    .delete(`lessons/${lessonId}/delete/`, { headers: { ...headers, Authorization: `Bearer ${authToken}` } })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
};

export { lessons };
