import actionTypes from "../actions/actionTypes";

const robotsReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    case actionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot.id !== action.id);
      break;
    case actionTypes.actualizarRobot:
      newRobots = robots.map((robot) => {
        if (robot.id === action.robot.id) {
          return action.robot;
        } else {
          return robot;
        }
      });
      break;

    default:
      newRobots = robots;
  }

  return newRobots;
};

export default robotsReducer;
