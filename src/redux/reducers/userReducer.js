import userActionTypes from "../actions/userActionTypes";

const userReducer = (
  user = {
    autorizado: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case userActionTypes.loginUser:
      newUser = {
        autorizado: true,
        user: action.user,
      };
      break;
    case userActionTypes.logoutUser:
      newUser = {
        autorizado: false,
        user: {},
      };
      break;

    default:
      newUser = user;
  }

  return newUser;
};
export default userReducer;
