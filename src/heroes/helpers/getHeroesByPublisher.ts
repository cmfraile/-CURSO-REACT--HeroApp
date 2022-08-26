import { heroes } from "../data/heroes";

interface heroe {id:string,superhero:string,publisher:string,alter_ego:string,first_appearance:string,characters:string};

export const getHeroesByPublisher = ( publisher:'Marvel Comics'|'DC Comics' ):heroe[] => {
    switch(publisher){
        case 'Marvel Comics': ;break;
        case 'DC Comics': ;break;
        default: throw new Error('El publisher proveido no es correcto');
    }
    return heroes.filter(heroe => heroe.publisher == publisher);
}