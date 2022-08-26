import { Herolist } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const Marvel = () => {
    
    return(
        <>
        {Herolist('Marvel Comics')}
        </>
    )
}