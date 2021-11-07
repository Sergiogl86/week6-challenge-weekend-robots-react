import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import currentRobot from "./currentRobot";

const rootReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobot,
});

export default rootReducer;
