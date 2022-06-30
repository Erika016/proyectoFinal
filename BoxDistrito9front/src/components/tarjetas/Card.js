import classes from "./Card.module.css";
import {Link } from "react-router-dom";

import { Fragment } from "react";
function Card (props) {
  return (
    <Fragment>
      <img alt="test" className={classes.image} src={props.imagenUrl} />
      <div className={classes.containerInformacion}>
        <h1>{props.titulo}</h1>
        {/* <button callsName="boton" onClick={open}>{props.textoBoton}</button> */}
        <Link className={classes.boton} to={`/${props.seccion}`}>
          +Info
        </Link>
      </div>
    
    </Fragment>
  );
}
export default Card;
