import elementReducer from "./element";
import groupReducer from "./group";
import outcomeReducer from "./outcome";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  outcome: outcomeReducer,
  group: groupReducer,
  element: elementReducer,
});

export default allReducers;
