import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../components/registro/Login";

export const Login = () => {
  const navigate = useNavigate();
  const { referral } = useContext(AuthContext);
  const { token, setToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        navigate(referral ? referral : "/", { replace: true });
      });
  };

  if (token) return <Navigate to="/" replace />;

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={formValues.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          values={formValues.password}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};