import { createAction } from '@reduxjs/toolkit';
import { moduleName } from '../lessons/constants';

const logout = createAction(`${moduleName}/logout`);
const setState = createAction(`${moduleName}/setState`, (payload) => ({
  payload,
}));
const actions = {
  logout,
  setState,
};

export default actions;
