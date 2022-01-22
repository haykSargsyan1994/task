import {combineReducers} from "redux";
import {CategoryReducer} from "./CategoryReducer";
import {CatsReducer} from "./CatsReducer";


export const RootReducer=combineReducers({
     CategoryReducer,
     CatsReducer
});