import fondo from "../info/imagenInfo/fondo.png";
import classes from "./ImagenPrincipal.module.css"
export function ImagenPrincipal (){
return(
    <div>
                  <img className={classes.imagen} alt="test" src={fondo} />

    </div>
)
}