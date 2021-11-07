import axios from "axios";
import {
  crearRobotAction,
  leerRobotsAction,
  borrarRobotAction,
  actualizarRobotAction,
  actualizarErrorAction,
  noErrorAction,
} from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const mostrarRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(leerRobotsAction(robots));
  };
};

export const crearRobotThunk = (createrobot, token) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}create?token=${token}`;
    try {
      const { data: robot } = await axios.post(crearUrl, createrobot);
      debugger;
      if (robot.error) {
        dispatch(actualizarErrorAction(robot));
      } else {
        dispatch(crearRobotAction(robot));
        dispatch(noErrorAction());
      }
    } catch (error) {
      debugger;
      dispatch(
        actualizarErrorAction({
          error: "Datos erroneos!",
        })
      );
    }
  };
};

export const borrarRobotThunk = (idRobot, token) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}delete/${idRobot}?token=${token}`;
    const { data } = await axios.delete(crearUrl);
    debugger;
    if (data.error) {
      dispatch(actualizarErrorAction(data));
    } else {
      dispatch(borrarRobotAction(data.id));
      dispatch(noErrorAction());
    }
  };
};

export const editarRobotThunk = (editarRobot, token) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}update?token=${token}`;
    try {
      const { data: robotActualizado } = await axios.put(crearUrl, editarRobot);
      debugger;
      if (robotActualizado.error) {
        dispatch(actualizarErrorAction(robotActualizado));
      } else {
        dispatch(actualizarRobotAction(robotActualizado));
        dispatch(noErrorAction());
      }
    } catch (error) {
      debugger;
      dispatch(
        actualizarErrorAction({
          error: "Datos erroneos!",
        })
      );
    }
  };
};
