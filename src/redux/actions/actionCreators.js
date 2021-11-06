import actionTypes from "./actionTypes";

export const leerRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});
