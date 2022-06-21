// Logo
// Actividades
// Tarifas
// Contacto
// Inicio sesion
// registro
// Icono Redes sociales
import { oulet, Link } from "react-router-dom";
import React from "react";

export function Navegador() {
  return (
    <React.Fragment>
      <nav style={{ backgroundColor:"black", color:"white", marginBottom:"1em", padding:2 }}>
        <h1>BOX DISTRITO 9</h1>

        <Link style={{margin:"1em", color:"white"}} to="/">Tarifa y Horarios</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Actividades</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Contacto</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Iniciar sesión</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Registrarse</Link>
      </nav>
    </React.Fragment>
  );
}
