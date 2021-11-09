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
    try {
      const token = localStorage.getItem("userToken");
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
      const token = localStorage.getItem("userToken");

      const { data: robot } = await axios.post(crearUrl, createrobot, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
    const token = localStorage.getItem("userToken");

    const crearUrl = `${urlApi}delete/${idRobot}`;
    const { data } = await axios.delete(crearUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

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
      const token = localStorage.getItem("userToken");

      const { data: robotActualizado } = await axios.put(
        crearUrl,
        editarRobot,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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
