import { useDispatch, useSelector } from "react-redux";
import {
  loginUserAction,
  logOutUserAction,
} from "../redux/actions/userActionCreators";
import { loginUserThunk } from "../redux/thunks/userThunks";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const logoutUser = () => {
    dispatch(logOutUserAction());
    localStorage.removeItem("userToken");
  };

  const comprobarToken = useCallback(() => {
    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      const userData = jwtDecode(token);
      dispatch(loginUserAction(userData));
    }
  }, [dispatch]);

  return {
    user,
    loginUser,
    logoutUser,
    comprobarToken,
  };
};

export default useUser;
