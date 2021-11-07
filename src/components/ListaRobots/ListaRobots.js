import "./listaRobots.css";
import Robot from "../Robot/Robot";
import useRobots from "./../../hooks/useRobots";
import { useEffect } from "react";

const ListaRobots = () => {
  const { robots, mostrarRobots } = useRobots();

  useEffect(() => {
    mostrarRobots();
  }, [mostrarRobots]);

  return (
    <>
      <div className="container">
        <ul className="listaRobots">
          {robots.map((robot) => (
            <Robot robot={robot} key={robot.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaRobots;
