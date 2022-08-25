import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher:'Marvel Comics'|'DC Comics' ) => {
    switch(publisher){
        case 'Marvel Comics': ;break;
        case 'DC Comics': ;break;
        default: throw new Error('El publisher proveido no es correcto');
    }
    return heroes.filter(heroe => heroe.publisher == publisher);
}