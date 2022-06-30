import { Fragment } from "react";
import classes from "./Footer.module.css";
import logo from "../info/imagenInfo/logo.PNG";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

export function Footer() {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div>
        <p>Box Distrito9</p>
        <label>Teléfono</label>
        <p>661554273</p>
        <label>Dirección</label>
        <p>
          Calle Felipe Gonzalez Vallejo, 6, <br></br> 29591 Campanillas, Málaga,España
        </p>
        </div>
      <div>
        <img
          style={{ width: "20%" }}
          // className={classes.logo}
          alt="test"
          src={logo}
        />
        <div>
        <ImFacebook2/>
        <ImInstagram/>
        <ImWhatsapp/>
        </div>
      </div>
      </div>
    </Fragment>
  );
}

