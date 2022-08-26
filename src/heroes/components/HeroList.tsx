import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import './herolist.sass';

export const Herolist = (publisher:'Marvel Comics'|'DC Comics') => {

    const bgstyle = (heroid:string):React.CSSProperties => {
        return {backgroundImage:`url(../assets/heroes/${heroid}.jpg)`}
    }

    const iconsrc = (heroid:string) => {
        switch(publisher){
            case 'Marvel Comics' : return `../assets/heroes/MARVEL.png`;
            case 'DC Comics' : return `../assets/heroes/DC.png`;
            default: throw new Error('error en herolist');
        }
    }

    const heroes = getHeroesByPublisher(publisher);
    return(
        <ul className="cards__herolist">
            {
                heroes.map((x) => {
                    return (
                        <div    className="mycard fondodefault"
                                style={bgstyle(x.id)}
                                key={x.id}>
                            <p>{x.superhero}</p>
                            <img src={iconsrc(x.id)}/>
                        </div>
                    )
                })
            }
        </ul>
    )
}

