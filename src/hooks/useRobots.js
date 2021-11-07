import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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

  return { robots, mostrarRobots, crearRobot };
};

export default useRobots;
