import elementReducer from "./element";
import groupReducer from "./group";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  group: groupReducer,
  element: elementReducer,
});

export default allReducers;
