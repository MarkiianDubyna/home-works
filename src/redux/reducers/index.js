import {combineReducers} from "redux";
import counter1Reducer from "../reducers/counter1Reducer";
import counter2Reducer from "./counter2Reducer";

export const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
});
