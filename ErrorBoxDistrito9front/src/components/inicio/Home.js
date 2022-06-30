import { Navegador } from "../nav/Navegador";
import { Motivacion } from "../nav/Motivacion";
// import {Cajas} from "./components/tarjetas/Cajas"
// import { SectionBoxeo } from "./components/tarjetas/Card";
// import { SectionCrosstif } from "./components/tarjetas/SectionCrossfit";
// import { SectionFisio } from "./components/tarjetas/SectionFisio";

function Home() {
  return (
    <div className="contenedorPrincipal">
      <div>
        <Navegador />
      </div>
      <div className="imagem">
        {" "}
        <Motivacion imagenMotivacion="https://www.locuradefrases.com/wp-content/uploads/2020/09/frases-de-motivacion-gym-600x364.jpg"></Motivacion>
      </div>
      {/* <div className="wrapper">
        <Cajas
          imagenUrl="https://feelcrossfit.com/wp-content/uploads/2014/11/Crossfit.jpg"
          titulo="Crossfit"
          textoBoton="+Info"
          seccion="<SectionBoxeo/>"
        />
        <Cajas
          imagenUrl="https://feelcrossfit.com/wp-content/uploads/2014/11/Crossfit.jpg"
          titulo="Boxeo"
          textoBoton="+Info"
          seccion="SectionCrossfit"
        />
        <Cajas
          imagenUrl="https://feelcrossfit.com/wp-content/uploads/2014/11/Crossfit.jpg"
          titulo="Fisioterapeuta"
          textoBoton="+Info"
          seccion="SectionFisio"
        />
      </div> */}
    </div>
  );
}
export default Home;
