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
const token = localStorage.getItem("userToken");

export const mostrarRobotsThunk = () => {
  return async (dispatch) => {
    try {
      const { data: robots } = await axios.get(urlApi, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(leerRobotsAction(robots));
      dispatch(noErrorAction());
    } catch (error) {
      dispatch(actualizarErrorAction({ error: error.response.data.error }));
    }
  };
};

export const crearRobotThunk = (createrobot) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}create`;
    try {
      const { data: robot } = await axios.post(crearUrl, createrobot);
      if (robot.error) {
        dispatch(actualizarErrorAction(robot));
      } else {
        dispatch(crearRobotAction(robot));
        dispatch(noErrorAction());
      }
    } catch (error) {
      dispatch(actualizarErrorAction({ error: error.response.data.error }));
    }
  };
};

export const borrarRobotThunk = (idRobot) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}delete/${idRobot}`;
    const { data } = await axios.delete(crearUrl);

    if (data.error) {
      dispatch(actualizarErrorAction(data));
    } else {
      dispatch(borrarRobotAction(data.id));
      dispatch(noErrorAction());
    }
  };
};

export const editarRobotThunk = (editarRobot) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}update`;
    try {
      const { data: robotActualizado } = await axios.put(crearUrl, editarRobot);

      if (robotActualizado.error) {
        dispatch(actualizarErrorAction(robotActualizado));
      } else {
        dispatch(actualizarRobotAction(robotActualizado));
        dispatch(noErrorAction());
      }
    } catch (error) {
      dispatch(actualizarErrorAction({ error: error.response.data.error }));
    }
  };
};
