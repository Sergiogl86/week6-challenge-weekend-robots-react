import "./App.css";
import ListaRobots from "./components/ListaRobots/ListaRobots";
import FormularioRobots from "./components/FormularioRobots/FormularioRobots";
import Consola from "./components/Consola/Consola";

function App() {
  return (
    <>
      <header className="container mb-5">
        <h1>Week 6 - Challenge WeekEnd - Robots - REACT</h1>
      </header>

      <FormularioRobots />
      <Consola />
      <ListaRobots />
    </>
  );
}

export default App;
