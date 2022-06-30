import {useContext} from "react";
import { Fragment } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export const Dashboard = () => {
    const {token, setToken} = useContext(AuthContext);
    if (!token) return <Navigate to="/login" replace/>;
    return(
        <Fragment>
            <h1>
                Area de Usuario<br/>
                componente(Dashboard)
            </h1>
            <button onClick={()=>setToken(undefined)}>Cerrar Sesion</button>
        </Fragment>
    );
};