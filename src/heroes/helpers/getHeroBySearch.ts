import { heroes } from "../data/heroes";
import { heroe } from "./getHeroesByPublisher";

export const getHeroesBySearch = (search:string):heroe[] => {
    return heroes.filter(heroe => heroe.superhero.toUpperCase().includes(search.toUpperCase()))
}