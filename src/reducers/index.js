import elementReducer from "./element";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  element: elementReducer,
});

export default allReducers;
