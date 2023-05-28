import categories from "./categories";
import flags from "./flags";
import type from "./type";

import { combineReducers } from "redux";

const jokeParams = combineReducers({
    categories,
    flags,
    type,
})

export default jokeParams;

