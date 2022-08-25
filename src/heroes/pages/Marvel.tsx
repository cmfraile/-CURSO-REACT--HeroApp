import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const Marvel = () => {
    
    return(
        <>
        <h2>Marvel</h2>
        <code>{JSON.stringify(getHeroesByPublisher('Marvel Comics'))}</code>
        </>
    )
}