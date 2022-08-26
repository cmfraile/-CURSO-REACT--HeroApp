import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Link } from "react-router-dom";
import './herolist.sass';

export const Herolist = (publisher:'Marvel Comics'|'DC Comics') => {

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

    const iconsrc = () => {
        switch(publisher){
            case 'Marvel Comics' : return `../assets/heroes/MARVEL.png`;
            case 'DC Comics' : return `../assets/heroes/DC.png`;
            default: throw new Error('error en herolist');
        }
    }

    const heroes = getHeroesByPublisher(publisher);
    //El div debes de encerrarlo en el <Link>
    return(
        <ul className="cards__herolist">
            {
                heroes.map((x) => {
                    return (
                        <div    className="mycard fondodefault"
                                style={cardstyle(x.id,publisher)}
                                key={x.id}>
                            <p>{x.superhero}</p>
                            <img src={iconsrc()}/>
                        </div>
                    )
                })
            }
        </ul>
    )
}

