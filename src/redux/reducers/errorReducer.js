import actionTypes from "../actions/actionTypes";

const errorReducer = (Error = { error: "Todo correcto!" }, action) => {
  let newError;

  switch (action.type) {
    case actionTypes.actualizarError:
      newError = { ...action.error };
      break;
    case actionTypes.todoCorrectoError:
      newError = { error: "Todo correcto!" };
      break;

    default:
      newError = Error;
  }

  return newError;
};
export default errorReducer;
