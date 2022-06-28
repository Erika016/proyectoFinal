import "./Cajas.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Cajas(props) {
  return (
    <Fragment>
      <img alt="test" className="image" src={props.imagenUrl} />
      <div className="container-informacion">
        <h1>{props.titulo}</h1>
        {/* <button callsName="boton" onClick={open}>{props.textoBoton}</button> */}
        <Link className="boton" to={`/${props.seccion}`}>
          +Info
        </Link>
      </div>
    </Fragment>
  );
}

export default Cajas;
