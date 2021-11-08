import axios from "axios";
import { loginUserAction } from "../actions/userActionCreators";
import { actualizarErrorAction } from "./../actions/actionCreators";

import jwtDecode from "jwt-decode";

const urlApi = process.env.REACT_APP_API_URL_USER;

export const loginUserThunk = (userLogin) => {
  return async (dispatch) => {
    const loginUrl = `${urlApi}login`;
    try {
      const { data: user } = await axios.post(loginUrl, userLogin);
      if (user.error) {
        dispatch(actualizarErrorAction(user));
      } else {
        localStorage.setItem("userToken", user.user);
        const userData = jwtDecode(user.user);

        dispatch(loginUserAction(userData));
        dispatch(
          actualizarErrorAction({ error: `Se ha conectado ${userData.name}` })
        );
      }
    } catch (error) {
      dispatch(actualizarErrorAction({ error: error.response.data.error }));
    }
  };
};
