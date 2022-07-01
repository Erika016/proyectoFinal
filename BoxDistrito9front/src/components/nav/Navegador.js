// NAVEGADOR CON LOGO Y DIFERENTES LINK QUE TE ENVIA A CADA SECCION
// BROWSER WITH LOGO AND DIFFERENT LINKS THAT SEND YOU TO EACH SECTION
import React from "react";
import logo from "../info/imagenInfo/logo.PNG"
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/fa";
// PARA INSERTAR ICONOS DE REACT SE INSTALA LA LIBRERIA DE ICONOS REACT
// npm install react-icons --save y luego se importan los iconos
// TO INSERT REACT ICONS, INSTALL THE REACT ICON LIBRARY
// npm install react-icons --save and then the icons are imported
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
function Navegador() {
  return (
    <div>

      <nav style={{ backgroundColor:"black", color:"white", marginBottom:"1em", padding:2 }}>
      <img style={{width:"20%"}}
          // className={classes.logo}
          alt="test"
          src={logo}
        />
        <h1>BOX DISTRITO 9</h1>

        <Link style={{margin:"1em", color:"white"}} to="/">Inicio</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Tarifa y Horarios</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Actividades</Link>
        <Link style={{margin:"1em", color:"white"}} to="/">Contacto</Link>
        <Link style={{margin:"1em", color:"white"}} to={"/login"}>Iniciar sesión</Link>
        <Link style={{margin:"1em", color:"white"}} to={"/register"}>Registrarse</Link>
        {/* Esta es solo de prueba despues va solo en dashboar */}
        <Link style={{margin:"1em", color:"white"}} to={"/exercises"}>Ejercicios</Link>

        <div>
        <ImFacebook2/>
        <ImInstagram/>
        <ImWhatsapp/>
        </div>
      </nav>
    </div>
  );
}
export default Navegador;