import { combineReducers } from "redux";
import LangsReducer from "./langRedux/reducer";

export const rootReducer = combineReducers({
    lang:LangsReducer
})