import { apartment as types } from '../constants/types'
import { ApartmentService } from "../../services"


const getAllAction = (data) => {
  return {
    type: types.GET_APARTMENTS,
    payload: data
  }
};

const createAction = (data) => {
  return {
    type: types.ADD_APARTMENT,
    payload: data
  }
};

const updateAction = (data) => {
  return {
    type: types.EDIT_APARTMENT,
    payload: data
  }
};

const removeUserAction = (data) => {
  return {
    type: types.REMOVE_APARTMENT,
    payload: data
  }
};


const getAll = () => {
  return (dispatch) => {
    return ApartmentService.getAll(dispatch)
      .then((res) => {
        dispatch(getAllAction(res));
      })
      .catch((error) => {
        console.log(error)
      })
  }
};

const add = (city) => {
  return (dispatch) => {
    return ApartmentService.add(dispatch, city)
      .then((data) => {
          dispatch(createAction(data));
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }
};

const remove = (cityId) => {
  return (dispatch) => {
    return ApartmentService.remove(dispatch, cityId)
      .then((data) => {
          dispatch(removeUserAction(data));
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }
};

const update = (city) => {
  return (dispatch) => {
    return ApartmentService.edit(dispatch, city)
      .then((data) => {
          dispatch(updateAction(data));
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }
};

export default {
  getAll,
  add,
  remove,
  update,
};
