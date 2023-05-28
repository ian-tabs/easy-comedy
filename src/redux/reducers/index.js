import jokeParams from "./jokeParams";
import mainScreen from "./mainScreen";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    jokeParams,
    mainScreen
})

export default allReducers;

