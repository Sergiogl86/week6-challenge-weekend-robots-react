import "./listaRobots.css";
import Robot from "../Robot/Robot";
import useRobots from "./../../hooks/useRobots";
import { useEffect } from "react";

const ListaRobots = () => {
  const { robots, mostrarRobots, borrarRobot, mostrarRobotEditar } =
    useRobots();

  useEffect(() => {
    mostrarRobots();
  }, [mostrarRobots]);

  return (
    <>
      <div className="container">
        <ul className="listaRobots">
          {robots.map((robot) => (
            <Robot
              robot={robot}
              borrar={borrarRobot}
              mostrar={mostrarRobotEditar}
              key={robot.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaRobots;
