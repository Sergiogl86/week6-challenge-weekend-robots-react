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

  const dispatch = useDispatch();

  const mostrarRobots = useCallback(() => {
    dispatch(mostrarRobotsThunk());
  }, [dispatch]);

  const crearRobot = (robot, token) => {
    if (robot.id) {
      dispatch(editarRobotThunk(robot, token));
    } else {
      dispatch(crearRobotThunk(robot, token));
    }
  };

  const borrarRobot = (idRobot, token) => {
    dispatch(borrarRobotThunk(idRobot, token));
  };

  const mostrarRobotEditar = (robot) => {
    dispatch(editarRobotAction(robot));
  };

  const limpiarRobotEditar = () => {
    dispatch(limpiarRobotAction());
  };

  return {
    robots,
    currentRobot,
    mostrarRobots,
    crearRobot,
    borrarRobot,
    mostrarRobotEditar,
    limpiarRobotEditar,
  };
};

export default useRobots;
