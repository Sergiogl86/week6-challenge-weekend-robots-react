import useRobots from "../../hooks/useRobots";
import "./consola.css";

const Consola = () => {
  const { error } = useRobots();
  return (
    <>
      <div className="container mb-5  consola">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark">
            \\ Consola //
          </li>
          <li className="list-group-item list-group-item-warning">
            {`#${error.error}`}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Consola;
