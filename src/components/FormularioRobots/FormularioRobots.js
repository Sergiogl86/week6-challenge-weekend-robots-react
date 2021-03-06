import "./formularioRobots.css";
import { useEffect, useState } from "react";
import useRobots from "./../../hooks/useRobots";

const FormularioRobots = () => {
  const { crearRobot, currentRobot, limpiarRobotEditar } = useRobots();

  const robotVacio = {
    caracteristicas: {
      velocidad: "",
      resistencia: "",
      FechaCeCreacion: "",
    },
    nombre: "",
    imagenUrl:
      "https://cloud.educaplay.com/recursos/131/4221007/imagen_1_1546953112.jpg",
  };

  const [robotsFormulario, setRobotsFormulario] = useState(robotVacio);

  useEffect(() => {
    if (currentRobot.id !== "") {
      setRobotsFormulario(currentRobot);
    }
  }, [currentRobot]);

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

  const onSubmitRobot = (event) => {
    event.preventDefault();
    crearRobot(robotsFormulario);
    setRobotsFormulario(robotVacio);
    limpiarRobotEditar();
  };

  const limpiarOnClick = (event) => {
    event.preventDefault();
    setRobotsFormulario(robotVacio);
    limpiarRobotEditar();
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
                  data-testid="nombre"
                  type="text"
                  value={robotsFormulario.nombre}
                  id="nombre"
                  className="form-control"
                  placeholder="nombre..."
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
                      data-testid="velocidad"
                      className="form-control"
                      placeholder="velocidad...0-10"
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
                      data-testid="resistencia"
                      className="form-control"
                      placeholder="resistecia...0-10"
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
                      data-testid="FechaCeCreacion"
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
                    className="rounded-end robotImagen"
                    src={robotsFormulario.imagenUrl}
                    alt={`Imagen de ${robotsFormulario.nombre}`}
                  />
                  <input
                    type="text"
                    value={robotsFormulario.imagenUrl}
                    id="imagenUrl"
                    data-testid="imagenUrl"
                    className="form-control"
                    placeholder={robotsFormulario.imagenUrl}
                    autoComplete="off"
                    onChange={changeRobot}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item mt-3">
              <div className="row align-items-center">
                <div className="col-5">
                  <button
                    type="submit"
                    data-testid="submit"
                    className={
                      robotsFormulario.id ? "btn btn-info" : "btn btn-success"
                    }
                  >
                    {robotsFormulario.id
                      ? "| Editar Robot |"
                      : "| Crear Robots |"}
                  </button>
                </div>
              </div>
            </div>
            <div className="list-group-item mt-3">
              <button className="btn btn-primary" onClick={limpiarOnClick}>
                | Limpiar |
              </button>
            </div>
          </li>
        </form>
      </div>
    </>
  );
};

export default FormularioRobots;
