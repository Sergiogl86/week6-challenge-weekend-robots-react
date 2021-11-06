import renderWithProviders from "../test-utils";
import server from "../../mocks/server";
import ListaRobots from "./ListaRobots";
import { screen, within } from "@testing-library/react";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  renderWithProviders(<ListaRobots />);
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given a ListaRobots component", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should render a list of Robot component", async () => {
      const Mazinger = await screen.findByRole("listitem", {
        name: "Mazinger Z",
      });
      const nameMazinger = within(Mazinger).getByRole("heading", {
        name: "Nombre: Mazinger Z",
      });
      const valocidadMazinger = within(Mazinger).getByRole("heading", {
        name: "Velocidad: 3",
      });
      screen.debug();

      expect(nameMazinger).toBeInTheDocument();
      expect(valocidadMazinger).toBeInTheDocument();
    });
  });
});
