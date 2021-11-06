import axios from "axios";
import { leerRobotsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const mostrarRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);

    dispatch(leerRobotsAction(robots));
  };
};
