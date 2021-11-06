import "./listaRobots.css";
import Robot from "./../Robot/Robot";
const ListaRobots = () => {
  const robots = [
    {
      caracteristicas: {
        velocidad: 5,
        resistencia: 7,
        FechaCeCreacion: "12-05-2018",
      },
      _id: "61858347666bcb02723c195d",
      nombre: "WALL·E 2",
      imagenUrl:
        "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
    },
    {
      caracteristicas: {
        velocidad: 6,
        resistencia: 7,
        FechaCeCreacion: "12-05-2018",
      },
      _id: "61858354666bcb02723c195e",
      nombre: "WALL·E 3",
      imagenUrl:
        "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
    },
    {
      caracteristicas: {
        velocidad: 6,
        resistencia: 7,
        FechaCeCreacion: "12-05-2018",
      },
      _id: "6185835d666bcb02723c195f",
      nombre: "WALL·E 4",
      imagenUrl:
        "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
    },
    {
      caracteristicas: {
        velocidad: 6,
        resistencia: 7,
        FechaCeCreacion: "12-05-2018",
      },
      _id: "61858ad1488689859e900c05",
      nombre: "WALL·E 10",
      imagenUrl:
        "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
      __v: 0,
    },
    {
      caracteristicas: {
        velocidad: 5,
        resistencia: 7,
        FechaCeCreacion: "12-05-2018",
      },
      _id: "618595881da5fc7cbc76b8d9",
      nombre: "WALL·E 5000",
      imagenUrl:
        "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
      __v: 0,
    },
  ];

  return (
    <>
      <div className="container">
        <ul className="listaRobots">
          {robots.map((robot) => (
            <Robot robot={robot} key={robot._id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaRobots;
