import { combineReducers } from "redux";
import userReducer from "./shoe-info";
import selected from './shoe-selected'


const allReducers = combineReducers({
    shoesArray: userReducer,
    selectedShoe: selected
});

export default allReducers;