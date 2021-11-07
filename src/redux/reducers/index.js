import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import currentRobot from "./currentRobot";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobot,
  error: errorReducer,
});

export default rootReducer;
