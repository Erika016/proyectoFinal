import classes from "./Pesos.module.css";
import { useState } from "react";

//Mostrar los pesos con ese usuario e id del ejercicio
//Show the weights with that user and exercise id

export const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    weith: "",
    date: "",
  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Submit data
  // Enviar datos
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/exercises/addWeight", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className={classes.contenedor}>
      <div className={classes.datos}>
        <h1>Box Distrito9</h1>
        <h2>Pesos Registrados</h2>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.columna}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={classes.Name}
              type="text"
              name="name"
              value={formValues.name}
              placeholder="Name"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="description">Descripcion</label>
            <input
              id="description"
              className={classes.descripcion}
              type="text"
              name="descrption"
              value={formValues.description}
              placeholder="Descripcion"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="weith">Pesos</label>
            <input
              id="weith"
              className={classes.weith}
              type="int"
              name="weith"
              placeholder="weith"
              required
              onChange={handleInputChange}
              value={formValues.weith}
            />
            <label htmlFor="date">Fecha</label>
            <input
              id="date"
              className={classes.date}
              type="date"
              name="date"
              placeholder="date"
              onChange={handleInputChange}
              value={formValues.date}
            />
          </div>
          <div className={classes.button}>
            <button type="submit">Insertat</button>
          </div>
        </form>
      </div>
    </div>
  );
};
