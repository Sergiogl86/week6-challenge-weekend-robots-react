import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../redux/actions/userActionCreators";
import { loginUserThunk } from "../redux/thunks/userThunks";

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

  return {
    user,
    loginUser,
    logoutUser,
  };
};

export default useUser;
