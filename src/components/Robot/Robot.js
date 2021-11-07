import { useState } from "react";
import "./robot.css";

const Robot = ({ robot, borrar, mostrar }) => {
  const [robotsToken, setRobotsToken] = useState("Token...");

  const changeToken = (event) => {
    setRobotsToken(event.target.value);
  };

  const onclickBorrar = () => {
    borrar(robot.id, robotsToken);
    /* window.scrollTo(0, 0); */
  };

  const onclickEditar = () => {
    mostrar(robot);
    /*  window.scrollTo(0, 0); */
  };

  return (
    <>
      <li className="robot container list-group-item mb-4" title={robot.nombre}>
        <div className="row align-items-center ">
          <h2 className="col-12 list-group-item active fs-4">{`Nombre: ${robot.nombre}`}</h2>
          <div className="list-group-item">
            <div className="row align-items-center justify-content-between">
              <div className="col-5">
                <h3 className="fs-6">{`#${robot.id}`}</h3>
              </div>
              <div className="col-4 ms-auto">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={onclickEditar}
                >
                  |Actualizar|
                </button>
              </div>
            </div>
          </div>
          <div className="list-group-item mt-3">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="fs-6">Caracteristicas:</h3>
                <h4 className="fs-6">{`Velocidad: ${robot.caracteristicas.velocidad}`}</h4>
                <h4 className="fs-6">{`Resistencia: ${robot.caracteristicas.resistencia}`}</h4>
                <h4 className="fs-6">{`Fecha de Creacion: ${robot.caracteristicas.FechaCeCreacion}`}</h4>
              </div>
              <div className="col-4 align-self-center">
                <img
                  className="rounded-end"
                  src={robot.imagenUrl}
                  alt={`Imagen de ${robot.nombre}`}
                  height="140"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item mt-3">
          <div className="row align-items-center">
            <div className="col-4 ">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onclickBorrar}
              >
                | Borrar |
              </button>
            </div>
            <div className="col-8">
              <h4 className="fs-6 m-0 ms-4">
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
    </>
  );
};

export default Robot;
