import "./App.css";
import ListaRobots from "./components/ListaRobots/ListaRobots";
import FormularioRobots from "./components/FormularioRobots/FormularioRobots";
import Consola from "./components/Consola/Consola";
import Login from "./components/Login/Login";
import useUser from "./hooks/useUser";

function App() {
  const { user } = useUser();
  return (
    <>
      <header className="container mb-5">
        <h1>Week 6 - Challenge WeekEnd - Robots - REACT</h1>
      </header>
      <Login />
      {user.autorizado && <FormularioRobots />}

      <Consola />
      {user.autorizado && <ListaRobots />}
    </>
  );
}

export default App;
