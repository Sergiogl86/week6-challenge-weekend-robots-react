import userActionTypes from "./userActionTypes";

export const loginUserAction = (user) => ({
  type: userActionTypes.loginUser,
  user,
});

export const logOutUserAction = () => ({
  type: userActionTypes.logoutUser,
});
