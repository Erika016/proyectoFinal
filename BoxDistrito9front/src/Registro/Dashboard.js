import { useContext } from "react";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { Link } from "react-router-dom";
import classes from "./Dashboard.module.css";

export const Dashboard = () => {
  const { token, setToken } = useContext(AuthContext);
  if (!token) return <Navigate to="/login" replace />;
  return (
    <Fragment>
      <nav>
        <ul className={classes.boton}>
          <li>
            <Link to={"/exercises"}>
              Ejercicios
            </Link>
          </li>
          <li>
            <Link to={"/addWeigth"}>
              Añadir Pesos
            </Link>
          </li>
          <li>
            <Link to={"/perfil"}>
              Mí perfil
            </Link>
          </li>
          <li>
            <Link to={"/deleteWeigth"}>
              Borrar pesos
            </Link>
          </li>
          <li>
            <button
               onClick={() => setToken(undefined)}
            >
              Cerrar Sesion
            </button>
          </li>
        </ul>
      </nav>
      <h1>
        Bienvenido al area de usuario
        <br />
        componente(Dashboard)
      </h1>

      <div>
      </div>
    </Fragment>
  );
};
