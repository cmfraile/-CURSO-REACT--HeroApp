import { heroes } from "../data/heroes";
import { heroe } from "./getHeroesByPublisher";
export const getHeroeById = (id:any):heroe => {return heroes.filter(heroe => heroe.id == id)[0]};