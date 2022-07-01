import {useContext} from "react";
import { Fragment } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const {token, setToken} = useContext(AuthContext);
    if (!token) return <Navigate to="/login" replace/>;
    return(
        <Fragment>
            <h1>
                Area de Usuario<br/>
                componente(Dashboard)
            </h1>
            <div>
            <Link style={{margin:"1em", color:"white"}} to={"/exercises"}>Ejercicios</Link>

            </div>

            <button onClick={()=>setToken(undefined)}>Cerrar Sesion</button>
        </Fragment>
    );
};