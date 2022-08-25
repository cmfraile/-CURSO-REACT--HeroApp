import { useNavigate } from "react-router-dom"

export const Login = () => {
    const nav = useNavigate()
    return(<button className="btn btn-primary" onClick={() => {nav('/hero',{replace:true})}} >Login</button>)
}