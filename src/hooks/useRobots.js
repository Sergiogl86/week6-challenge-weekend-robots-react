import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostrarRobotsThunk } from "./../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);

  const dispatch = useDispatch();

  const mostrarRobots = useCallback(() => {
    dispatch(mostrarRobotsThunk());
  }, [dispatch]);

  return { robots, mostrarRobots };
};

export default useRobots;
