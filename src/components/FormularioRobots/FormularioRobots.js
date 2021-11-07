import "./formularioRobots.css";
import { useState } from "react";
import useRobots from "./../../hooks/useRobots";

const FormularioRobots = () => {
  const { crearRobot } = useRobots();

  const robotVacio = {
    caracteristicas: {
      velocidad: "velocidad...",
      resistencia: "resistecia...",
      FechaCeCreacion: "",
    },
    nombre: "nombre...",
    imagenUrl:
      "https://cloud.educaplay.com/recursos/131/4221007/imagen_1_1546953112.jpg",
  };

  const [robotsFormulario, setRobotsFormulario] = useState(robotVacio);
  const [robotsToken, setRobotsToken] = useState("Token...");

  const changeRobot = (event) => {
    if (event.target.id === "nombre" || event.target.id === "imagenUrl") {
      setRobotsFormulario({
        ...robotsFormulario,
        [event.target.id]: event.target.value,
      });
    } else {
      setRobotsFormulario({
        ...robotsFormulario,
        caracteristicas: {
          ...robotsFormulario.caracteristicas,
          [event.target.id]: event.target.value,
        },
      });
    }
  };

  const changeToken = (event) => {
    setRobotsToken(event.target.value);
  };

  const onSubmitRobot = (event) => {
    event.preventDefault();
    crearRobot(robotsFormulario, robotsToken);
    setRobotsFormulario(robotVacio);
    setRobotsToken("Token...");
  };

  return (
    <>
      <div className="container mb-5">
        <form onSubmit={onSubmitRobot} autoComplete="off" noValidate>
          <li
            className="robotFormulario container list-group-item"
            title="formularioRobots"
          >
            <div className="row align-items-center ">
              <h2 className="col-12 list-group-item active fs-4">
                <input
                  type="text"
                  value={robotsFormulario.nombre}
                  id="nombre"
                  className="form-control"
                  placeholder={robotsFormulario.nombre}
                  autoComplete="off"
                  onChange={changeRobot}
                  required
                />
              </h2>
              <div className="row align-items-center">
                <div className="col-7">
                  <h3 className="fs-6">Caracteristicas:</h3>
                  <h4 className="fs-6">
                    <input
                      type="number"
                      value={robotsFormulario.caracteristicas.velocidad}
                      id="velocidad"
                      className="form-control"
                      placeholder={robotsFormulario.caracteristicas.velocidad}
                      autoComplete="off"
                      onChange={changeRobot}
                      min="0"
                      max="10"
                      required
                    />
                  </h4>
                  <h4 className="fs-6">
                    <input
                      type="number"
                      value={robotsFormulario.caracteristicas.resistencia}
                      id="resistencia"
                      className="form-control"
                      placeholder={robotsFormulario.caracteristicas.resistencia}
                      autoComplete="off"
                      onChange={changeRobot}
                      min="0"
                      max="10"
                      required
                    />
                  </h4>
                  <h4 className="fs-6">
                    <input
                      type="date"
                      value={robotsFormulario.caracteristicas.FechaCeCreacion}
                      id="FechaCeCreacion"
                      className="form-control"
                      placeholder={
                        robotsFormulario.caracteristicas.FechaCeCreacion
                      }
                      autoComplete="off"
                      onChange={changeRobot}
                      required
                    />
                  </h4>
                </div>
                <div className="col-5 align-self-center">
                  <img
                    className="rounded-end"
                    src={robotsFormulario.imagenUrl}
                    alt={`Imagen de ${robotsFormulario.nombre}`}
                    height="150"
                  />
                  <input
                    type="text"
                    value={robotsFormulario.imagenUrl}
                    id="imagenUrl"
                    className="form-control"
                    placeholder={robotsFormulario.imagenUrl}
                    autoComplete="off"
                    onChange={changeRobot}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <button type="submit" className="btn btn-primary">
                    | Crear Robots |
                  </button>
                </div>
                <div className="col-7">
                  <h4 className="fs-6 m-0">
                    <input
                      type="text"
                      value={robotsToken}
                      id="token"
                      className="form-control"
                      placeholder={robotsToken}
                      autoComplete="off"
                      onChange={changeToken}
                      required
                    />
                  </h4>
                </div>
              </div>
            </div>
          </li>
        </form>
      </div>
    </>
  );
};

export default FormularioRobots;