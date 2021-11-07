import { screen } from "@testing-library/react";
import renderWithProviders from "../test-utils";
import FormularioRobots from "./FormularioRobots";

describe("Given a FormularioRobots component", () => {
  describe("When it is render", () => {
    test("Then it should have a Caracteristicas and sudmit button", async () => {
      renderWithProviders(<FormularioRobots />);
      screen.debug();

      const caracteristicas = screen.getByRole("heading", {
        name: "Caracteristicas:",
      });
      const sudmitButton = screen.getByRole("button", {
        name: "| Crear Robots |",
      });

      expect(caracteristicas).toBeInTheDocument();
      expect(sudmitButton).toBeInTheDocument();
    });
  });
});
