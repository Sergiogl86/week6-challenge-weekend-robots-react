import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editarRobotAction,
  limpiarRobotAction,
} from "../redux/actions/actionCreators";
import {
  borrarRobotThunk,
  crearRobotThunk,
  editarRobotThunk,
  mostrarRobotsThunk,
} from "./../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const currentRobot = useSelector((store) => store.currentRobot);
  const error = useSelector((store) => store.error);

  const dispatch = useDispatch();

  const mostrarRobots = useCallback(() => {
    dispatch(mostrarRobotsThunk());
  }, [dispatch]);

  const crearRobot = (robot) => {
    if (robot.id) {
      dispatch(editarRobotThunk(robot));
    } else {
      dispatch(crearRobotThunk(robot));
    }
  };

  const borrarRobot = (idRobot) => {
    dispatch(borrarRobotThunk(idRobot));
  };

  const mostrarRobotEditar = (robot) => {
    dispatch(editarRobotAction(robot));
  };

  const limpiarRobotEditar = () => {
    dispatch(limpiarRobotAction());
  };

  return {
    robots,
    error,
    currentRobot,
    mostrarRobots,
    crearRobot,
    borrarRobot,
    mostrarRobotEditar,
    limpiarRobotEditar,
  };
};

export default useRobots;
