// NAVEGADOR CON LOGO Y DIFERENTES LINK QUE TE ENVIA A CADA SECCION
// BROWSER WITH LOGO AND DIFFERENT LINKS THAT SEND YOU TO EACH SECTION
import React from "react";
import logo from "../info/imagenInfo/logo.PNG"
import classes from "./Header.module.css"
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/fa";
// PARA INSERTAR ICONOS DE REACT SE INSTALA LA LIBRERIA DE ICONOS REACT
// npm install react-icons --save y luego se importan los iconos
// TO INSERT REACT ICONS, INSTALL THE REACT ICON LIBRARY
// npm install react-icons --save and then the icons are imported
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
function Header() {
  return (
    <header>

      <img className={classes.logo}
          // className={classes.logo}
          alt="test"
          src={logo}
        />
      <nav>
      <ul>
        <li>
        <Link  to="/">Inicio</Link>

        </li>
        <li>
        <Link  to="/">Tarifa y Horarios</Link>

        </li>
        <li>
        <Link  to="/">Actividades</Link>

        </li>
        <li>
        <Link  to="/">Contacto</Link>

        </li>
        <li>
        <Link  to={"/login"}>Iniciar sesión</Link>
        <Link  to={"/register"}>Registrarse</Link>

        </li>
    </ul>
        {/* Esta es solo de prueba despues va solo en dashboar */}
        {/* <Link  to={"/exercises"}>Ejercicios</Link> */}
      </nav>

        <div className={classes.redes}>
        <ImFacebook2/>
        <ImInstagram/>
        <ImWhatsapp/>
        </div>
    </header>
  );
}
export default Header;