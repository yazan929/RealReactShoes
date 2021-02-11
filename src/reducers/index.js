import { combineReducers } from "redux";
import userReducer from "./shoe-info";

const allReducers = combineReducers({
    shoesArray: userReducer,
});

export default allReducers;