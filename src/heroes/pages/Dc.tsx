import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { Marvel } from "./Marvel"

export const Dc = () => {

    return(
        <>
        <h2>Detective Comics</h2>
        <code>{JSON.stringify(getHeroesByPublisher('DC Comics'))}</code>
        </>
    )
}