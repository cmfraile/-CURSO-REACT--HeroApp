import { Navigate, useParams , useNavigate } from "react-router-dom"
import { Navbar } from "../../ui/components/navbar"
import { getHeroeById } from "../helpers/getHeroById"
import { heroe } from "../helpers/getHeroesByPublisher"
import './herodetail.sass'

export const HeroDetail = () => {

    const { hid } = useParams();
    if(!getHeroeById(hid)){return <Navigate to='/hero/marvel'/>}
    const nav = useNavigate();
    const { id , superhero , publisher , alter_ego , first_appearance , characters } = getHeroeById(hid);

    const cardstyle = (publisher:string):React.CSSProperties => {
        return {
            backgroundColor:`${(publisher) == 'Marvel Comics' ? 'red' : 'blue'}`,
            border:`3px solid ${(publisher == 'Marvel Comics') ? 'red' : 'blue'}`
        }
    }

    return(
        <>
        <Navbar/>
        <div className="root__heroDetail">
            <div className="tarjeta" style={cardstyle(publisher)}>
                <img src={`/assets/heroes/${id}.jpg`}/>
                <ul>
                    <li>Superheroe : { superhero }</li>
                    <li>Editora : { publisher }</li>
                    <li>Alter ego : { alter_ego }</li>
                    <li>Primera aparición: { first_appearance }</li>
                    {(alter_ego !== characters) && (<li>Personajes : { characters }</li>)}
                </ul>
                <button className="btn btn-danger" onClick={() => {nav(-1)}} > Atras </button>
            </div>
        </div>
        </>
    )
}