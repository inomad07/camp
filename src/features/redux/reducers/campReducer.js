import { camp as types } from "../constants/types";

const initialData = [];

const campReducer = (state = initialData, action) => {
    const { payload, type } = action;
    switch (type) {
        case types.GET_CAMPS: {
            return [...payload || []];
        }
        case types.GET_SEVERAL_CAMPS: {
            console.log(payload);
            return [...payload || []];
        }

        default:
            return state
    }
};

export default campReducer;
