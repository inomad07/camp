import { errors as types } from '../constants/types'

const addSysError = (data) => {
  return {
    type: types.ADD_ERROR,
    payload: data
  }
};

const addSysErrors = (data) => {
  return {
    type: types.ADD_ERRORS,
    payload: data
  }
};

const flushSysErrors = (data) => {
  return {
    type: types.FLUSH_ERRORS,
    payload: data
  }
};

export default {
  addSysError,
  addSysErrors,
  flushSysErrors,
};
