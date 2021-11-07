import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives a Robot", () => {
    test("Then it should render a detail sheet", () => {
      const robot = {
        caracteristicas: {
          velocidad: 6,
          resistencia: 7,
          FechaCeCreacion: "12-05-2018",
        },
        _id: "61858354666bcb02723c195e",
        nombre: "WALL·E 3",
        imagenUrl:
          "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
      };

      render(<Robot robot={robot} borrar={() => {}} />);

      screen.debug();

      const nombre = screen.getByRole("heading", {
        name: `Nombre: ${robot.nombre}`,
      });
      const velocidad = screen.getByRole("heading", {
        name: `Velocidad: ${robot.caracteristicas.velocidad}`,
      });
      const resistencia = screen.getByRole("heading", {
        name: `Resistencia: ${robot.caracteristicas.resistencia}`,
      });
      const FechaCeCreacion = screen.getByRole("heading", {
        name: `Fecha de Creacion: ${robot.caracteristicas.FechaCeCreacion}`,
      });

      expect(nombre).toBeInTheDocument();
      expect(velocidad).toBeInTheDocument();
      expect(resistencia).toBeInTheDocument();
      expect(FechaCeCreacion).toBeInTheDocument();
    });
  });
});
