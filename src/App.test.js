import server from "./mocks/server";
import renderWithProviders from "./components/test-utils";
import App from "./App";
import {
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
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
      const nombre = screen.getByTestId("nombre");
      const velocidad = screen.getByTestId("velocidad");
      const resistecia = screen.getByTestId("resistencia");
      const token = screen.getByTestId("token");

      const submit = screen.getByTestId("submit");

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
  describe("When the user deletes a robot", () => {
    test("Then it shouldn't show the robot deleted", async () => {
      const Robot = await screen.findAllByRole("listitem", {
        name: "PruebaDelete",
      });
      const nombre = within(Robot[0]).getByRole("heading", {
        name: "Nombre: PruebaDelete",
      });
      const token = within(Robot[0]).getByPlaceholderText("Token...");
      const borrarRobot = within(Robot[0]).getByRole("button", {
        name: "| Borrar |",
      });

      userEvent.type(token, "h29D8b23Llm45");

      userEvent.click(borrarRobot);

      await waitForElementToBeRemoved(() =>
        screen.getByText(nombre.textContent)
      );

      expect(Robot[0]).not.toBeInTheDocument();
    });
  });
  describe("When the user update a robot", () => {
    test("Then it should show the robot update", async () => {
      const Robot = await screen.findAllByRole("listitem", {
        name: "PruebaDelete",
      });
      const actualizarRobot = within(Robot[0]).getByRole("button", {
        name: "|Actualizar|",
      });

      userEvent.click(actualizarRobot);

      const nombre = screen.getByTestId("nombre");
      const velocidad = screen.getByTestId("velocidad");
      const resistecia = screen.getByTestId("resistencia");
      const token = screen.getByTestId("token");

      const submit = screen.getByTestId("submit");

      userEvent.type(nombre, "PruebaUpdate");
      userEvent.type(velocidad, "8");
      userEvent.type(resistecia, "8");
      userEvent.type(token, "h29D8b23Llm45");

      userEvent.click(submit);

      const nuevoRobot = await screen.findByRole("heading", {
        name: "Nombre: PruebaUpdate",
      });

      await screen.debug();

      expect(nuevoRobot).toBeInTheDocument();
    });
  });
});
