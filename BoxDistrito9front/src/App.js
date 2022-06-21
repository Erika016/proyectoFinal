import "./App.css";
// import{SectionBoxeo, SectionCrosstif, SectionFisio} from "./sectionBoxeo/SectionCrosstif/SectionFisio"
import { Routes, Route, Link } from "react-router-dom";
import SectionCrossfit from "./components/tarjetas/SectionCrossfit";
import SectionBoxeo from "./components/tarjetas/SectionBoxeo";
import SectionFisio from "./components/tarjetas/SectionFisio";
import Home from "./components/inicio/Home";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        {/* /* Ruta de App con las card anidadas de las secciones */}

        <Route path="/" element={<Home />} />
        <Route path="/sectionCrossfit" element={<SectionCrossfit />} />
        <Route path="/sectionBoxeo" element={<SectionBoxeo />} />
        <Route path="/sectionFisio" element={<SectionFisio />} />
      </Routes>
    </Fragment>
  );
}
export default App();
