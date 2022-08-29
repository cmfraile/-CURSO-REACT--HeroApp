import { useParams } from "react-router-dom"
import { Herolist } from "./HeroList"

export const Search = () => {
    const { sc } = useParams();
    return (sc) ? (
        <>
        <h2>Criterio de búsqueda</h2>
        <Herolist search={sc}/>
        </>
    ) : (<></>)
}