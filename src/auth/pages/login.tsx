import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authcontext";

export const Login = () => {
    const nav = useNavigate();
    const { onLogin } = useContext(AuthContext);
    return(<button className="btn btn-primary" onClick={() => {
        onLogin();
        nav('/hero',{replace:true})
    }} >Login</button>)
}