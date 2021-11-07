import "./App.css";
import ListaRobots from "./components/ListaRobots/ListaRobots";
import FormularioRobots from "./components/FormularioRobots/FormularioRobots";

function App() {
  return (
    <>
      <header className="container mb-5">
        <h1>Week 6 - Challenge WeekEnd - Robots - REACT</h1>
      </header>

      <FormularioRobots />
      <ListaRobots />
    </>
  );
}

export default App;
