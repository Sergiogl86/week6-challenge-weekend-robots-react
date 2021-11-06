import actionTypes from "./actionTypes";
import { leerRobotsAction } from "./actionCreators";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a leerRobotsAction with the robots received", () => {
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
      ];
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const actionResult = leerRobotsAction(robots);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
