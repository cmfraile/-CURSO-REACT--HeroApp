import { getHeroeById } from "../helpers/getHeroById"
import { heroe } from "../helpers/getHeroesByPublisher"
import './herodetail.sass'

export const HeroDetail = ({heroeid}:{heroeid:string}) => {

    const { id , superhero , publisher , alter_ego , first_appearance , characters } = getHeroeById(heroeid);

    const cardstyle = (publisher:string):React.CSSProperties => {
        return {
            backgroundColor:`${(publisher) == 'Marvel Comics' ? 'red' : 'blue'}`,
            border:`3px solid ${(publisher == 'Marvel Comics') ? 'red' : 'blue'}`
        }
    }

    return(
        <div className="root__heroDetail">
            <div className="tarjeta" style={cardstyle(publisher)}>
                <img src={`../assets/heroes/${id}.jpg`}/>
                <ul>
                    <li>Superheroe : { superhero }</li>
                    <li>Editora : { publisher }</li>
                    <li>Alter ego : { alter_ego }</li>
                    <li>Primera aparición: { first_appearance }</li>
                    <li>Personajes : { characters }</li>
                </ul>
            </div>
        </div>
    )
}