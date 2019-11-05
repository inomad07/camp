import { camp as types } from '../constants/types'
import { CampService } from "../../services"


const getAllAction = (data) => {
  return {
    type: types.GET_CAMPS,
    payload: data
  }
};

const getSeveralActions = (data) => {
  return {
    type: types.GET_SEVERAL_CAMPS,
    payload: data
  }
};



const getAll = () => {
  return (dispatch) => {
    return CampService.getAll(dispatch)
      .then((res) => {
        dispatch(getAllAction(res.data.results));
      })
      .catch((error) => {
        console.log(error)
      })
  }
};

const getSeveralCamps = (number) => {
  return (dispatch) => {
    return CampService.getSeveralCamps(dispatch, number)
      .then((res) => {
        dispatch(getSeveralActions(res.data.results));
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }
};

export default {
  getAll,
  getSeveralCamps,
};
