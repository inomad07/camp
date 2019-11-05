import { errors as types } from "../constants/types";

const initialData = [];

const sysErrorsReducer = (state = initialData, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.ADD_ERROR: {
      let found = state.filter(error => error === payload).length;
      if (found)
        return state;

      return [
        ...state,
        {...payload},
      ]
    }
    case types.ADD_ERRORS: {
      return [
        ...state,
        ...payload,
      ]
    }
    case types.FLUSH_ERRORS: {
      return [];
    }
    default:
      return state
  }
};

export default sysErrorsReducer;
