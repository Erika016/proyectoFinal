import classes from "./Register.module.css";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Register = () => {
  // const navigate = useNavigate();
  const [registerStatus, setRegisterStatus] = useState({
    isLoading: false,
    isRegistered: false
  })
  const [formValues, setFormValues] = useState({
    name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    email: "",
    sessions: "",
    photo: "",
    rol: "basic",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Submit data
  // Enviar datos
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setRegisterStatus({
      isLoading: true,
      isRegistered: false
    })
    fetch("http://localhost:8000/users/insertUser", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.data.affectedRows>0){
          setRegisterStatus({
            isLoading: false,
            isRegistered: true
          })
        }
      });
  };
  useEffect(()=>{

  },[registerStatus])
  return (
    <div className={classes.contenedor}>
      {registerStatus.isLoading && console.log("Loading")}
      {registerStatus.isRegistered && console.log("Registered")}
      <div className={classes.datos}>
        <h1>Box Distrito9</h1>
        <h2>Registrarse</h2>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.columna}>
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
          <div className={classes.button}>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};
