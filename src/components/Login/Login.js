import { useEffect, useState } from "react";
import "./login.css";
import useUser from "./../../hooks/useUser";

const Login = () => {
  const { user, comprobarToken } = useUser();
  const { loginUser, logoutUser } = useUser();
  const initialUser = { nombre: "", contraseña: "" };
  const [userLogin, setUserLogin] = useState(initialUser);

  useEffect(() => {
    comprobarToken();
  }, [comprobarToken]);

  const changeUser = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    loginUser(userLogin);
    setUserLogin(initialUser);
  };

  const onSubmitLogout = (event) => {
    event.preventDefault();
    logoutUser();
  };
  return (
    <>
      <div className="container login mb-3">
        {!user.autorizado && (
          <div className="list-group-item">
            <h2 className="list-group-item active">| Login |</h2>
            <form onSubmit={onSubmitLogin} autoComplete="off" noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  aria-describedby="emailHelp"
                  onChange={changeUser}
                  value={userLogin.nombre}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contraseña" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="contraseña"
                  onChange={changeUser}
                  value={userLogin.contraseña}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        )}

        {user.autorizado && (
          <div className="list-group-item">
            <h2 className="list-group-item active">{`Hola ${user.user.name}`}</h2>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onSubmitLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
