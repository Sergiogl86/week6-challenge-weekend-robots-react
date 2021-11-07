import actionTypes from "./actionTypes";

export const leerRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const crearRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const borrarRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});
