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
      <nav className={classes.navegador}>
        <ul>
          <li>
            <Link to={"/exercises"}>
              Ejercicios
            </Link>
          </li>
          <li>
            <Link to={"/searchWeigth"}>
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

        </ul>
      </nav>
     {/* aqui empieza */}
     <div className={classes.datos}>
        <h1>BOX DISTRITO9</h1>
        <h2>Mí perfil</h2>
        <form>
          <div className={classes.columna}>
            <div className={classes.primero}>
            <label htmlFor="first_name">Name</label>
            <input
              id="name"
              className={classes.Name}
              type="text"
              name="name"
              placeholder="Name"
              required
              // value={formValues.name}
              // onChange={handleInputChange}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              className={classes.lastName}
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              // onChange={handleInputChange}
              // value={formValues.last_name}
            />
            <label htmlFor="birth_date">Birth Date</label>
            <input
              className={classes.birth}
              id="birth_date"
              type="date"
              name="birth_date"
              placeholder="Birth Date"
              required
              // onChange={handleInputChange}
              // value={formValues.birth_date}
            />
            <label htmlFor="phone">Phone</label>
            <input
              className={classes.phone}
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone"
            //   onChange={handleInputChange}
            //   value={formValues.phone}
            />
            </div>
            <div className={classes.segundo}>
            <label htmlFor="email">Email</label>
            <input
              className={classes.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              // value={formValues.email}
              // onChange={handleInputChange}
            />

            <label htmlFor="sessions">sessions</label>
            <input
              className={classes.sessions}
              id="sessions"
              type="text"
              name="sessions"
              placeholder="sessions"
              required
              // onChange={handleInputChange}
              // value={formValues.sessions}
            />
            <label htmlFor="photo">Photo</label>
            <input
              className={classes.photo}
              id="photo"
              type="file"
              name="photo"
              placeholder="Photo"
              // onChange={handleInputChange}
              // value={formValues.photo}
            />
            <label htmlFor="password">Password</label>
            <input
              className={classes.password}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              // onChange={handleInputChange}
              // value={formValues.password}
              
            />
            </div>
          </div>
          <div >
            {/* <button className={classes.button} type="submit">Registrarse</button> */}
           
            <button className={classes.button}
               onClick={() => setToken(undefined)}
            >
              Cerrar Sesion
            </button>
              
          </div>
        </form>
      </div>
     {/* aqui termina */}

      <div>
      </div>
    </Fragment>
  );
};
