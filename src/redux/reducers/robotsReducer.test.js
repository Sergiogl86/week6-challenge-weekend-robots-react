import robotsReducer from "./robotsReducer";
import {
  crearRobotAction,
  leerRobotsAction,
} from "./../actions/actionCreators";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load Robots actios with two robots", () => {
    test("Then it should return a new challenge list with the three challenges received", () => {
      const initialRobots = [];
      const robotsList = [
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
      const action = leerRobotsAction(robotsList);

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toEqual(robotsList);
    });
  });
  describe("When it receives an list of robots and a create Robot actio with a robot", () => {
    test("Then it should return a new challenge list with a robot included", () => {
      const initialRobots = [
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
      ];
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

      const expectedList = [
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

      const action = crearRobotAction(robot);

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toEqual(expectedList);
    });
  });
});
