import { createAction } from '@reduxjs/toolkit';
import moduleName from './constants';

const setStyleFilter = createAction(`${moduleName},setStyleFilter`);
const setDifficultyFilter = createAction(`${moduleName},setDifficultyFilter`);

const filterActions = {
  setDifficultyFilter,
  setStyleFilter,
};

export default filterActions;
