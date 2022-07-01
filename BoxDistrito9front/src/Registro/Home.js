import { Fragment } from "react";
import {Motivacion} from "../components/nav/Motivacion"
import { Cards } from "../components/Cards/Cards";
import Crossfit from "../components/info/imagenInfo/Crossfit.jpg"
import guantes1 from "../components/info/imagenInfo/guantes1.jpg"
import fisio from "../components/info/imagenInfo/fisio.jpg"
import classes from "./Home.module.css";



function Home(){
    return(
        <Fragment>
            <Motivacion/>
            <div className={classes.containerHome}>
                <div className={classes.cards}>
                <Cards
                imagenUrl={Crossfit}
                titulo="Crossfit"
                seccion="SeccionCrossfit"
                />
                </div>
                <div>
                <Cards
                imagenUrl={guantes1}
                titulo="Boxeo"
                seccion="SeccionBoxeo"
                />
                </div>
                <div>
                <Cards
                imagenUrl={fisio}
                titulo="Fisio"
                seccion="SeccionFisio"
                />
                </div>

            </div>
        </Fragment>
    )
}
export default Home;