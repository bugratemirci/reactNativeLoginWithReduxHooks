import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    counterReducer,
    userReducer
})

export default reducers;