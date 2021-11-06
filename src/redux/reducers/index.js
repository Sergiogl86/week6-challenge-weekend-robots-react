import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export default rootReducer;
