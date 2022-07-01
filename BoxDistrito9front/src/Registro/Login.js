//import components, tools and css
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext, useState } from "react";
import classes from "./Login.module.css";

export const Login = () => {
  //navigate, usecontext and form tools
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
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
        setToken(data.token);
        console.log(data.token);
        navigate("/dashboard", { replace: true });
      });
  };
  //If you have Token ok and if you don't have it, it returns you to the control panel
  // Si tienes Token ok y si no tienes te devuelve al panel de control

  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <div >
      <div className={classes.container}>
        <h1>Box Distrito9</h1>
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email" className={classes.titulo}>
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
          <label className={classes.titulo} htmlFor="password" >
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
            <p>¿Are you not registered?</p>
            <Link className={classes.click} to="/register">Click here</Link>
          </div>
          <div>
            <button type="submit" className={classes.button}>
              Acceder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
