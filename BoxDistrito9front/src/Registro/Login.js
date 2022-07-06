//import components, tools and css
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
// import { AuthContext } from "../components/AuthContext";
import {useState } from "react";
import classes from "./Login.module.css";
import {Spinner} from "../components/spinner/Spinner";

export const Login = () => {
  //navigate, usecontext and form tools
  const navigate = useNavigate();
  // const { token, setToken } = useContext(AuthContext);
  // const [idUser, setIdUser] =useState([]);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //submit data
  // enviar datos

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setIdUser(data.id_user);
        console.log('estos son los datos que nos da el login', data.id_user)
        // setToken(data.token);
        console.log(data.token);
        navigate("/dashboard", { replace: true });
      });
      // if (!idUser) {
      //   return (
      //     <div>
      //       <Spinner/>
      //     </div>
      //   );
      // }
  };
  //If you have Token ok and if you don't have it, it returns you to the control panel
  // Si tienes Token ok y si no tienes te devuelve al panel de control

  // if (token) return <Navigate to="/dashboard/" replace />;
  return (
    <div >
      <div className={classes.container}>
        <div className={classes.titulo}>
        <h1>BOX DISTRITO9</h1>
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email" >
            Email
          </label>
          <input
            className={classes.formulario}
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={handleInputChange}
          />
          <label htmlFor="password" >
            Password
          </label>
          <input
            className={classes.formulario}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={formValues.password}
          />
          
          <div className={classes.registro}>
            {/* <p>¿No estás registrado?</p> */}
            <Link to="/register">¿No estás registrado?</Link>
          </div>
          <div>
            <button type="submit" className={classes.button}>
              Acceder
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};
