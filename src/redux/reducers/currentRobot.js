import actionTypes from "../actions/actionTypes";

const currentRobot = (
  robot = {
    caracteristicas: {
      velocidad: "",
      resistencia: "",
      FechaCeCreacion: "",
    },
    nombre: "Iren",
    imagenUrl:
      "https://cloud.educaplay.com/recursos/131/4221007/imagen_1_1546953112.jpg",
    __v: "",
    id: "",
  },
  action
) => {
  let newRobot;

  switch (action.type) {
    case actionTypes.seleccionarRobot:
      newRobot = { ...action.robot };
      break;
    case actionTypes.limpiarRobot:
      newRobot = {
        caracteristicas: {
          velocidad: "",
          resistencia: "",
          FechaCeCreacion: "",
        },
        nombre: "Iren",
        imagenUrl:
          "https://cloud.educaplay.com/recursos/131/4221007/imagen_1_1546953112.jpg",
        __v: "",
        id: "",
      };
      break;

    default:
      newRobot = robot;
  }

  return newRobot;
};
export default currentRobot;
