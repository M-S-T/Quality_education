import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers, {
    subject_code : "",
}, applyMiddleware(thunk));