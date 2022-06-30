import "./App.css";
// import{SectionBoxeo, SectionCrosstif, SectionFisio} from "./sectionBoxeo/SectionCrosstif/SectionFisio"
import { Routes, Route } from "react-router-dom";
import Crossfit from "./components/actividades/Crossfit";
import Boxeo from "./components/actividades/Boxeo"
import Fisio from "./components/actividades/Fisio"
import Home from "./components/inicio/Home";
import { Fragment } from "react";
import { Navegador } from "./components/nav/Navegador";
// import Card from "./components/tarjetas/Card";

function App() {
  return (
    <Fragment>
      <Navegador></Navegador>
       <Routes>
        {/*  Ruta de App con las card anidadas de las secciones */}
        <Route index  element={Home} />
        <Route path="/Crossfit" element={Crossfit} />
        <Route path="/Boxeo" element={Boxeo} />
        <Route path="/Fisio" element={Fisio} />
        {/* <Route path="/card" element={Card} /> */}

       </Routes>
    </Fragment>
  );
}
export default App();
