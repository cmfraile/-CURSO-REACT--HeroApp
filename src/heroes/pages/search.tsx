import { useNavigate, useParams } from "react-router-dom"
import { Herolist } from "./HeroList"
import { Navbar } from "../../ui/components/navbar";

export const Search = () => {
    const { sc } = useParams();
    return ( sc ) ? (
        <>
        <Navbar/>
        <h2>Criterio de búsqueda</h2>
        <Herolist search={sc}/>
        </>
    ) : (<></>)
}