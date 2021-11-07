import server from "./mocks/server";
import renderWithProviders from "./components/test-utils";
import App from "./App";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  renderWithProviders(<App />);
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given an App component", () => {
  describe("When the user creates a robot", () => {
    test("Then it should show the new robot", async () => {
      const nombre = screen.getByPlaceholderText("nombre...");
      const velocidad = screen.getByPlaceholderText("velocidad...");
      const resistecia = screen.getByPlaceholderText("resistecia...");
      const token = screen.getByPlaceholderText("Token...");

      const submit = screen.getByRole("button", {
        name: "| Crear Robots |",
      });

      userEvent.type(nombre, "Prueba");
      userEvent.type(velocidad, "2");
      userEvent.type(resistecia, "2");
      userEvent.type(token, "h29D8b23Llm45");

      userEvent.click(submit);

      const nuevoRobot = await screen.findByRole("heading", {
        name: "Nombre: Prueba",
      });

      await screen.debug();

      expect(nuevoRobot).toBeInTheDocument();
    });
  });
});
