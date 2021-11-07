import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  borrarRobotThunk,
  crearRobotThunk,
  mostrarRobotsThunk,
} from "./../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);

  const dispatch = useDispatch();

  const mostrarRobots = useCallback(() => {
    dispatch(mostrarRobotsThunk());
  }, [dispatch]);

  const crearRobot = (robot, token) => {
    dispatch(crearRobotThunk(robot, token));
  };

  const borrarRobot = (idRobot, token) => {
    dispatch(borrarRobotThunk(idRobot, token));
  };

  return { robots, mostrarRobots, crearRobot, borrarRobot };
};

export default useRobots;
