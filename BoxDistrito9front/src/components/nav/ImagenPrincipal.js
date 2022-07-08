import fondo from "../info/imagenInfo/entrada.jpg";
import classes from "./ImagenPrincipal.module.css"
export function ImagenPrincipal (){
return(
    <div>
                  <img className={classes.imagen} alt="test" src={fondo} />

    </div>
)
}