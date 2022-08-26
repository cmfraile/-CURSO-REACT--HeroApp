import { Navigate } from "react-router-dom";
import { heroes } from "../data/heroes";
import { heroe } from "./getHeroesByPublisher";

export const getHeroeById = (id:any):any => {
    const heroe = heroes.filter(heroe => heroe.id == id)[0];
    if(!heroe){return <Navigate to='-2' />}
    return heroe;
};