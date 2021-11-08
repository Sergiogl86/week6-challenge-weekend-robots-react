import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import currentRobot from "./currentRobot";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobot,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;
