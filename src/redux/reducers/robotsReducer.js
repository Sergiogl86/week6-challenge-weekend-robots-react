import actionTypes from "../actions/actionTypes";

const RobotsReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    default:
      newRobots = robots;
  }

  return newRobots;
};

export default RobotsReducer;
