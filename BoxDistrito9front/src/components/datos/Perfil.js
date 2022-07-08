import classes from "./Perfil.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/loginSlice";


export const Perfil = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data.info);
 
  
  const [formValues, setFormValues] = useState({

    id_User: user.id_User,
    name: user.name,
    last_name: user.last_name,
    birth_date: user.birth_date,
    phone: user.phone,
    email: user.email,
    sessions: user.sessions,
    rol: "basic",
    password: user.password,
    mi_perfil: [],
  });
 

const handleInputChange = (e) => {
    // console.log(e.target.selectedOptions);
    if (e.target.email === "mi_perfil") {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormValues((prev) => ({ ...prev, [e.target.name]: value }));
    } else {
      setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
 
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(updateUser(formValues)).then(() => {
        setFormValues({
  id_User: user.data.info[0].id_User,
    name: user.data.info[0].name,
    last_name: user.data.info[0].last_name,
    birth_date: user.data.info[0].birth_date,
    phone: user.data.info[0].phone,
    email: user.data.info[0].email,
    sessions: user.data.info[0].sessions,
    rol: "basic",
    password: user.data.info[0].password,
    mi_perfil: [],
      });
    });
  };
  if (!user) {
    return (
             console.log("Cargando")
        );
  }

return (
  <div className={classes.contenedor}>
    <div className={classes.datos}>
      <h1>BOX DISTRITO9</h1>
      <h2>Registrarse</h2>
      <form onSubmit={handleOnSubmit}>
        <div className={classes.columna}>
          <div className={classes.primero}>
            <label htmlFor="first_name">Name</label>
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
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              className={classes.lastName}
              type="text"
              name="last_name"
              value={formValues.last_name}
              placeholder="Last Name"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="birth_date">Birth Date</label>
            <input
              className={classes.birth}
              id="birth_date"
              type="date"
              name="birth_date"
              placeholder="Birth Date"
              required
              onChange={handleInputChange}
              value={formValues.birth_date}
            />
            <label htmlFor="phone">Phone</label>
            <input
              className={classes.phone}
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              value={formValues.phone}
            />
          </div>
          <div className={classes.segundo}>
            <label htmlFor="email">Email</label>
            <input
              className={classes.email}
              id="email"
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Email"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="sessions">sessions</label>
            <input
              className={classes.sessions}
              id="sessions"
              type="text"
              name="sessions"
              placeholder="sessions"
              required
              onChange={handleInputChange}
              value={formValues.sessions}
            />
            <label htmlFor="photo">Photo</label>
            <input
              className={classes.photo}
              id="photo"
              type="file"
              name="photo"
              placeholder="Photo"
              onChange={handleInputChange}
              value={formValues.photo}
            />
            <label htmlFor="password">Password</label>
            <input
              className={classes.password}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
              value={formValues.password}
            />
          </div>
        </div>
        <div>
          <button className={classes.button} type="submit">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  </div>
);

};