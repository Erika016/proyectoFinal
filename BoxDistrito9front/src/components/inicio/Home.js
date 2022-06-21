import { Navegador } from "../nav/Navegador";
import { Motivacion } from "../nav/motivacion";
import { Card } from "../tarjetas/Card";
import { SectionBoxeo } from "../tarjetas/SectionBoxeo";
import { SectionCrosstif } from "../tarjetas/SectionCrossfit";
import { SectionFisio } from "../tarjetas/SectionFisio";

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
      <div className="wrapper">
        <Card
          imagenUrl="https://feelcrossfit.com/wp-content/uploads/2014/11/Crossfit.jpg"
          titulo="Crossfit"
          textoBoton="+Info"
          seccion="SectionBoxeo"
        />
        <Card
          imagenUrl="data:image/jpeg;base64,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"
          titulo="Boxeo"
          textoBoton="+Info"
          seccion="SectionCrossfit"
        />
        <Card
          imagenUrl="data:image/jpeg;base64,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"
          titulo="Fisioterapeuta"
          textoBoton="+Info"
          seccion="SectionFisio"
        />
      </div>
    </div>
  );
}
export default Home();
