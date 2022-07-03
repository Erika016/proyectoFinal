import classes from "./ContactoLocalizacion.module.css"
import ubi from "../info/imagenInfo/ubi.png";

export function ContactoLocalizacion(){
    return(
        <div className={classes.container}>
        <p className={classes.titulo}>BOX DISTRITO9</p>
        <hr/>
        <h1>Contacto y Lozalización</h1>
        <p>Para más información pueden ponerse en concacto en el siguiente número de teléfono o visitando nuestras instalaciones.</p>
        <label>Teléfono</label>
        <p>661554273</p>
        <label>Dirección</label>
        <p>Calle Felipe Gonzalez Vallejo, 6, 29590 Málaga</p>
        <label>Nosotros</label>
        <p>Centro de entrenamiento en Campanillas.<br/> Ven y prueba algo diferente.<br/> Entrenamiento personalizado.<br/> Grupos reducidos.<br/> Clases adaptadas a cualquier nivel.<br/> Servicio nutrición deportiva.<br/>Boxeo.<br/> Fisioterapeuta en el propio centro.</p>
        <div>
        <img className={classes.imagen} alt="test" src={ubi} />
        </div>
        </div>
        
    )
}