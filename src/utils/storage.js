const LOCAL_STORAGE_KEY = 'userData';

export const saveUserDataToLocalStorage = (userData) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
};

export const getUserDataFromLocalStorage = () => {
  const userDataString = localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(userDataString);
};

export const clearUserDataFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
