import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Registro/Home";
import { Login } from "./Registro/Login";
import { Dashboard } from "./Registro/Dashboard";
import { NotFound } from "./Registro/NotFound";
import { Register } from "./Registro/Register";
import { Users } from "./Registro/Users";
import {UserDetails} from "./Registro/UserDetails"
import {Exercises} from "./components/datos/Exercises"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path=":exercises" element={<Exercises />}></Route>

      <Route path="/users">
        <Route index element={<Users />} />
        <Route path=":id_User" element={<UserDetails />} />
      </Route>

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
}

export default App;
