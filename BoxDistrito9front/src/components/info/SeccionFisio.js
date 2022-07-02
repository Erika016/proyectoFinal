import fisio1 from "../info/imagenInfo/fisio1.jpg";
import classes from "./SeccionFisio.module.css";
import { Link } from "react-router-dom";


function SeccionFisio() {
  return (
      <div>
        <div>
          <h1>FisioTerapia MMuñoz</h1>
          <p>
            En nuestras instalaciones, también disponemos de consulta de
            fisioterapia deportiva. Con nuesta gran profesional María Muñoz.
            Especializada en:
            <li>Punsión seca</li>
            <li>Fisioterapia Deportiva</li>
            <li>Electrólisis ecoguiada en lesiones tendinosas</li>
            <li>Y muchas mas...</li>
          </p>
          <img className={classes.imagen} alt="test" src={fisio1} />
          <div>
            <h3>
              Importante no hay que ir al fisioterapeuta solo por las lessiones,
              también tenemos que ir para prevenirlas.
            </h3>
            <p>
              La fisioterapia deportiva es una rama de la fisioterapia, que va
              dirigida a toda persona que practique deporte habitualmente, tanto
              si es un deporte de base, amateur, de salud, de élite o alto
              rendimiento. La fisioterapia deportiva consiste en hacer un
              trabajo <b>preventivo</b> y otro de recuperación de lesiones.
            </p>
          </div>
          <Link to="/">Inicio</Link>
        </div>
      </div>
  );
}
export default SeccionFisio;
