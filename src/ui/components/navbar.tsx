import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Asociaciones</Link>
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
                    <NavLink className={(ia) => {return `nav-item nav-link ${(ia) && 'active-link'}`}} to="/" >Logout</NavLink>
                </ul>
            </div>
        </nav>
    )
}