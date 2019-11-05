import { combineReducers } from "redux";

import apartmentReducer from './apartmentReducer'
import sysErrorsReducer from "./sysErrorsReducer";


export default combineReducers(
    {
        apartmentReducer,
        sysErrorsReducer
    }
);