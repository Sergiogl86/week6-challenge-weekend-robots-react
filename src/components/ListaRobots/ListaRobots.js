import "./listaRobots.css";
import Robot from "../Robot/Robot";
import useRobots from "./../../hooks/useRobots";
import { useEffect } from "react";

const ListaRobots = () => {
  const { robots, mostrarRobots, borrarRobot } = useRobots();

  useEffect(() => {
    mostrarRobots();
  }, [mostrarRobots]);

  return (
    <>
      <div className="container">
        <ul className="listaRobots">
          {robots.map((robot) => (
            <Robot robot={robot} borrar={borrarRobot} key={robot.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaRobots;
