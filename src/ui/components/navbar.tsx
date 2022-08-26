import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../main.sass'

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <p className='navbar-brand my-0 mr-5'>Asociaciones</p>
            
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={({isActive}) => {return `nav-item nav-link ${(isActive) && 'active'}`}} to="marvel">Marvel</NavLink>
                    <NavLink className={({isActive}) => {return `nav-item nav-link ${(isActive) && 'active'}`}} to="dc">DC</NavLink>
                </div>
                <form className="form-inline">
                    <input 
                    className="form-control"
                    type="search"
                    placeholder="Búsqueda de heroes"
                    aria-label="Search"/>
                </form>
            </div>
            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button className='btn btn-danger' onClick={() => {navigate('/',{replace:true})}}>Logout</button>
                </ul>
            </div>
        
        </nav>
    )
}