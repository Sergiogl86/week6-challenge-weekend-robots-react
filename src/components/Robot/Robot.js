import "./robot.css";

const Robot = ({ robot }) => {
  return (
    <>
      <li className="robot container list-group-item">
        <div className="row align-items-center ">
          <h2 className="col-12 list-group-item active fs-4">{`Nombre: ${robot.nombre}`}</h2>
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
                height="150"
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Robot;
