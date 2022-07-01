import { Fragment } from "react";
import Header from "../components/nav/Header";
import {Motivacion} from "../components/nav/Motivacion"
import {Footer} from "../components/nav/Footer"

function Home(){
    return(
        <Fragment>
            <Header/>
            <Motivacion/>
            <Footer/>
        </Fragment>
    )
}
export default Home;