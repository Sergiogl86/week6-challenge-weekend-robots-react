import axios from "axios";
import {
  crearRobotAction,
  leerRobotsAction,
  borrarRobotAction,
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
    const { data: robot } = await axios.post(crearUrl, createrobot);

    dispatch(crearRobotAction(robot));
  };
};

export const borrarRobotThunk = (idRobot, token) => {
  return async (dispatch) => {
    const crearUrl = `${urlApi}delete/${idRobot}?token=${token}`;
    const {
      data: { id },
    } = await axios.delete(crearUrl);
    dispatch(borrarRobotAction(id));
  };
};
