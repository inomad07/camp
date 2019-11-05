import { apartment as types } from "../constants/types";

const initialData = [];

const apartmentReducer = (state = initialData, action) => {
    const { payload, type } = action;

    switch (type) {
        case types.GET_APARTMENTS: {
            return [...payload || []];
        }
        case types.ADD_APARTMENT: {
            return [
                ...state,
                Object.assign({}, payload)
            ]
        }
        case types.EDIT_APARTMENT: {
            const apartments = state.map((apartment) => {
                if (apartment.id === payload.id) {
                    return {
                        ...apartment,
                        ...payload
                    }
                }
                return apartment;
            });
            return apartments
        }
        case types.REMOVE_APARTMENT: {
            return state.filter((apartment) => apartment.id !== payload.id);
        }
        default:
            return state
    }
};

export default apartmentReducer;
