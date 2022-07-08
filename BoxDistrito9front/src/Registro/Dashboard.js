import classes from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "../components/spinner/Spinner";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  const user = useSelector((state) => state.login.login.data.info);
  const loading = useSelector((state) => state.login.login.loading);
  const logged = useSelector((state) => state.login.login.isLogged);


  return (
    <div className={classes.container}>
      {(!logged || !user) && <Navigate to="/login" replace={true} />}
      {loading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {!loading && user && (
        <div>
          <div>
            <div className={classes.name}>
              <h1>
                {user.name} {user.last_name}
              </h1>
            </div>
            <div className={classes.container}>
              <div className={classes.primero}>
                <div className={classes.phone}>
                  <p>{user.birth_date}</p>
                </div>
                <div className={classes.phone}>
                  <p>{user.phone}</p>
                </div>
              </div>
              <div className={classes.segundo}>
                <div className={classes.email}>
                  <p>{user.email}</p>
                </div>
                <div className={classes.sessions}>
                  <p>{user.sessions}</p>
                </div>
                <div className={classes.photo}>
                  <p>{user.photo}</p>
                </div>
                <div className={classes.rol}>
                  <p>{user.rol}</p>
                </div>
                <div className={classes.password}>
                  <p>{user.password}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <div className={classes.link}>
              <Link className={classes.link} to={"/perfil"}>
                Actualizar Perfil
              </Link>
            </div>
            {/* <div className={classes.link}>
              <Link className={classes.link} to={"/searchWeight"}>
                Pesos
              </Link>
            </div> */}
            <div className={classes.link}>
              <Link
                className={classes.link}
                // onClick={handleLogOut}
                to={"/exercises"}
              >
                Ejercicios
              </Link>
              <Link
                className={classes.link}
                // onClick={handleLogOut}
                to={"/login"}
              >
                Inicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// // A parti de aqui es para que se fea algo en login

// // import { useContext } from "react";
// import { Fragment } from "react";
// // import { Navigate } from "react-router-dom";
// // import { AuthContext } from "../components/AuthContext";
// import { Link } from "react-router-dom";
// import classes from "./Dashboard.module.css";

// export const Dashboard = () => {
//   // const { token, setToken } = useContext(AuthContext);
//   // if (!token) return <Navigate to="/login" replace />;
//   return (
//     <Fragment>
//       <nav className={classes.navegador}>
//         <ul>
//           <li>
//             <Link to={"/exercises"}>
//               Ejercicios
//             </Link>
//           </li>
//           <li>
//             <Link to={"/searchWeigth"}>
//               Añadir Pesos
//             </Link>
//           </li>
//           <li>
//             <Link to={"/perfil"}>
//               Mí perfil
//             </Link>
//           </li>
//           <li>
//             <Link to={"/deleteWeigth"}>
//               Borrar pesos
//             </Link>
//           </li>

//         </ul>
//       </nav>
//      {/* aqui empieza */}
//      <div className={classes.datos}>
//         <h1>BOX DISTRITO9</h1>
//         <h2>Mí perfil</h2>
//         <form>
//           <div className={classes.columna}>
//             <div className={classes.primero}>
//             <label htmlFor="first_name">Name</label>
//             <div className={classes.res}
//             />
//             <label htmlFor="last_name">Last Name</label>
//             <div className={classes.res}
//             />
//             <label htmlFor="birth_date">Birth Date</label>
//             <div className={classes.res}
//             />
//             <label htmlFor="phone">Phone</label>
//             <div className={classes.res}
//             />
//             </div >
//             <div className={classes.segundo}>
//             <label htmlFor="email">Email</label>
//             <div className={classes.res}
//             />

//             <label htmlFor="sessions">sessions</label>
//             <div
//               className={classes.res}

//             />
//             <label htmlFor="photo">Photo</label>
//             <div className={classes.res}

//             />
//             <label htmlFor="password">Password</label>
//             <div className={classes.res}

//             />
//             </div>
//           </div>
//           <div >
//             {/* <button className={classes.button} type="submit">Registrarse</button> */}

//             <button className={classes.button}
//               //  onClick={() => setToken(undefined)}
//             >
//               Cerrar Sesion
//             </button>

//           </div>
//         </form>
//       </div>
//      {/* aqui termina */}

//       <div>
//       </div>
//     </Fragment>
//   );
// };
