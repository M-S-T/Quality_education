import { combineReducers } from "redux";
import subjectReducer from "./subjectReducers";

const reducers = combineReducers({
    // reducers
    subject_code : subjectReducer,
})

export default reducers;