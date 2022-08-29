import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { getHeroesBySearch } from "../helpers/getHeroBySearch";
import './herolist.sass';
import { Navigate, useNavigate } from "react-router-dom";

interface hlprop {publisher?:'Marvel Comics'|'DC Comics',search?:string}

export const Herolist = ({publisher,search}:hlprop) => {

    let heroes:any[] = [];
    const nav = useNavigate();

    const cardstyle = (heroid:string,publisher:string):React.CSSProperties => {
        return {
            backgroundImage:`url(../assets/heroes/${heroid}.jpg)`,
            border:`3px solid ${
                (publisher == 'Marvel Comics')
                ? 'red'
                : 'blue'
            }`
        }
    }

    const iconsrc = (publisher:string) => {
        switch(publisher){
            case 'Marvel Comics' : return `../assets/heroes/MARVEL.png`;
            case 'DC Comics' : return `../assets/heroes/DC.png`;
            default: throw new Error('error en herolist');
        }
    }

    if(publisher){ heroes = getHeroesByPublisher(publisher) };
    if(search){ heroes = getHeroesBySearch(search) };   
    
    //El div debes de encerrarlo en el <Link>
    return(
        <ul className="cards__herolist">
            {(heroes.length == 0) && (
                <div className="alert alert-warning" role="alert">
                No se ha encontrado nada segun el criterio de búsqueda.
                </div>
            )}
            {
                heroes.map((x) => {
                    return (
                        <div    className="mycard fondodefault"
                                style={cardstyle(x.id,x.publisher)}
                                onClick={() => {nav(`/detail/${x.id}`)}}
                                key={x.id}>
                            <p>{x.superhero}</p>
                            <img src={iconsrc(x.publisher)}/>
                        </div>
                    )
                })
            }
        </ul>
    )
}

