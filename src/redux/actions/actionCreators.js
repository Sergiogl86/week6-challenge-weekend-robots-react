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

export const editarRobotAction = (robot) => ({
  type: actionTypes.seleccionarRobot,
  robot,
});

export const limpiarRobotAction = () => ({
  type: actionTypes.limpiarRobot,
});

export const actualizarRobotAction = (robot) => ({
  type: actionTypes.actualizarRobot,
  robot,
});

export const actualizarErrorAction = (error) => ({
  type: actionTypes.actualizarError,
  error,
});

export const noErrorAction = () => ({
  type: actionTypes.todoCorrectoError,
});
