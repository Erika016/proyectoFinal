import classes from "./ContactoLocalizacion.module.css"
import ubi from "../info/imagenInfo/ubi.png";

export function ContactoLocalizacion(){
    return(
        <div className={classes.container}>
        <h1>BOX DISTRITO9</h1>
        <hr/>
        <h2>Contacto y Lozalización</h2>
        <p>Para más información pueden ponerse en concacto en el siguiente número de teléfono o visitando nuestras instalaciones.</p>
        <label>Teléfono</label>
        <p>661554273</p>
        <label>Dirección</label>
        <p>Calle Felipe Gonzalez Vallejo, 6, 29590 Málaga</p>
        <label>Descripción</label>
        <p>Nuevo centro de entrenamiento en Campanillas Ven y prueba algo diferente. Entrenamiento personalizado. Grupos reducidos. Clases adaptadas a cualquier nivel. Servicio nutrición deportiva. Fisioterapeuta en el propio centro.</p>
        <div>
        <img className={classes.imagen} alt="test" src={ubi} />
        </div>
        </div>
        
    )
}