import "./App.css";
// import{SectionBoxeo, SectionCrosstif, SectionFisio} from "./sectionBoxeo/SectionCrosstif/SectionFisio"
import { Routes, Route, MemoryRouter, } from "react-router-dom";
import SectionCrossfit from "./components/tarjetas/SectionCrossfit";
import SectionBoxeo from "./components/tarjetas/SectionBoxeo";
import SectionFisio from "./components/tarjetas/SectionFisio";
import Home from "./components/inicio/Home";
import { Fragment } from "react";
// import Card from "./components/tarjetas/Card";

function App() {
  return (
    <Fragment>
       <Routes>
        {/*  Ruta de App con las card anidadas de las secciones */}
        <MemoryRouter path="/" component={Home} />
        <Route path="/sectionCrossfit" element={SectionCrossfit} />
        <Route path="/sectionBoxeo" element={SectionBoxeo} />
        <Route path="/sectionFisio" element={SectionFisio} />
        {/* <Route path="/card" element={Card} /> */}

       </Routes>
    </Fragment>
  );
}
export default App();
