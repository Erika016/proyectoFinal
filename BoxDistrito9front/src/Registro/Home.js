import { Fragment } from "react";
import Navegador from "../components/nav/Navegador";
import {Motivacion} from "../components/nav/Motivacion"
import {Footer} from "../components/nav/Footer"

function Home(){
    return(
        <Fragment>
            <Navegador/>
            <Motivacion/>
            <Footer/>
        </Fragment>
    )
}
export default Home;