import "./App.css";
import Robot from "./components/Robot/Robot";

function App() {
  const robot = {
    caracteristicas: {
      velocidad: 6,
      resistencia: 7,
      FechaCeCreacion: "12-05-2018",
    },
    _id: "61858354666bcb02723c195e",
    nombre: "WALL·E 3",
    imagenUrl: "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
  };

  return (
    <>
      <h1>Week 6 - Challenge WeekEnd - Robots - REACT</h1>
      <Robot robot={robot} />
    </>
  );
}

export default App;
