import "./Card.css";
import {Link } from "react-router-dom";
import { Fragment } from "react";
export function Card (props){
    return(
        <Fragment>
             <img
      alt="test"
      className="image"
      src={props.imagenUrl}
    />
        <div className="container-informacion">
        <h1>{props.titulo}</h1>
        {/* <button callsName="boton" onClick={open}>{props.textoBoton}</button> */}
        <Link className="boton" to={`/${props.seccion}`}>+Info</Link>
        </div>
        </Fragment>
    )
}

    