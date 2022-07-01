import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Registro/Home";
import { Login } from "./Registro/Login";
import { Dashboard } from "./Registro/Dashboard";
import { NotFound } from "./Registro/NotFound";
import { Register } from "./Registro/Register";
import { Users } from "./Registro/Users";
import { UserDetails } from "./Registro/UserDetails";
import { Exercises } from "./components/datos/Exercises";
import { SeccionCrossfit } from "./components/info/SeccionCrossfit.js";
import { Fragment } from "react";
import Header from "./components/nav/Header";
import { Footer } from "./components/nav/Footer";
import { SeccionBoxeo } from "./components/info/SeccionBoxeo";
import SeccionFisio from "./components/info/SeccionFisio";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/seccionCrossfit" element={<SeccionCrossfit />} />
        <Route path="/seccionBoxeo" element={<SeccionBoxeo/>} />
        <Route path="/seccionFisio" element={<SeccionFisio/>} />

        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id_User" element={<UserDetails />} />
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
