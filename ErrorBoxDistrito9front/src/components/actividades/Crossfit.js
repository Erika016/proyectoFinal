import { Fragment } from "react";
import classes from "./Crossfit.module.css";
import Rosa from "./components/imagen/Rosa"
function Crossfit(){
return(
    <Fragment>
        <div className={classes.container}>
        <h1>BOX DISTRITO 9 </h1>
        <h2 className={classes.titulo}>CROSSFIT</h2>
        <div>
            
            <h3>¿Que os ofrecemos en BOX DISTRITO9?</h3>
            <p>En Distrito9, os ofrecemos la posibilidad de entrenar en las mejores instalaciones que encontrareis en toda Málaga,
                con todos los ejercicios adaptados a todas las necesidades físicas de cada persona. No es necesario haber hecho ejercicios antes de empezar a entrenar, cualquier momento es bueno para empezar, y además en Box Distrito9 adaptamos todos los ejercicios y pesos a cada persona.
                En estos momentos tenemos de coach a Rosa Vazquez. Campeona de España en varias modalidades, como harterofilia, Powerlifting y máster -48Kg, consiguiendo record de España.
                 </p>
                 <img
          className={classes.imagen}
          alt="test"
          src={Rosa}
        />
        </div>
        <div>
          <h3>¿Que es el Crosstit?</h3>
          <p>
            El CrossFit es un sistema de acondicionamiento físico basado en
            ejercicios constantemente variados, con movimientos funcionales,
            ejecutados a alta intensidad.
          </p>
          </div>
          <div>
          <h3>¿Cuàles son los ejercicios de CrossFit para ponerte fuerte?</h3>
          Los ejercicios más útiles de CrossFit para ponerte fuerte
          
            <li>AIR SQUATS O SENTADILLAS. up.fitnessclub. ...</li>
            <li>FRONT SQUAT O SENTADILLA FRONTAL. courage1.0. ...</li>
            <li>DEADLIFT O PESO MUERTO. giada.gambino_ ...</li>
            <li>SHOULDER PRESS O EMPUJE HOMBROS. joaoerlacher. ...</li>
            <li>PUSH PRESS O EMPUJE DE PECHO. ...</li>
            <li>PUSH UPS O FLEXIONES. ...</li>
            <li>PULL UPS O DOMINADAS. ...</li>
            <li>BOX JUMPS.</li>
          
        </div>
        <div>
          <h3>Los 7 beneficios de hacer Crossfit</h3>
          
            <li> Ayuda a eliminar grasa. ...</li>
            <li>Hacer crossfit ayuda a implementar nuestra resistencia. ...</li>
            <li> Hacer crossfit aumenta tu musculatura. ...</li>
            <li> Hacer crossfit no es rutinario. ...</li>
            <li> Permite obtener resultados en poco tiempo. ...</li>
            <li> Contribuye a estilizar nuestra figura.</li>
        
        </div>
        <div>
          <h3>Mitos DESMENTIDOS</h3>
          
            <li>Las chicas que hacen CrossFit se vuelven grandes.</li>
            <li>El CrossFit es lesivo.</li>
            <li>
              El CrossFit no es la mejor opción si quieres ganar músculo o
              volumen.
            </li>
            <li>El CrossFit no es para todos.</li>
            <li>Necesito ponerme en forma para empezar en CrossFit.</li>
            <li>El CrossFit es demasiado caro.</li>
          
        </div>
        <div>
          <h3>Nota importante</h3>
          <p>
            Todos los ejercicios se adaptan a la persona, según su físico y sus
            necesidades-
          </p>
          <h2>No tienes más excusas!!!</h2>
        </div>
      </div>
    </Fragment>
)
}
export default Crossfit;