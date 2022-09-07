import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authcontext';
import { useForma } from '../../heroes/hooks/useForma';
import '../../main.sass'

export const Navbar = () => {

    const navigate = useNavigate();
    const { aname , onLogout } = useContext( AuthContext )
    const { search , onInputChange , onResetForm } = useForma({search:''});

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <p className='navbar-brand my-0 mr-5'>Asociaciones</p>
            
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={({isActive}) => {return `nav-item nav-link ${(isActive) && 'active'}`}} to="/hero/marvel">Marvel</NavLink>
                    <NavLink className={({isActive}) => {return `nav-item nav-link ${(isActive) && 'active'}`}} to="/hero/dc">DC</NavLink>
                </div>
                <form       className="form-inline"
                            onSubmit={e => {
                                e.preventDefault();
                                if(search == ''){return}
                                navigate(`/search/${search}`)
                                onResetForm()
                            }}
                >
                    <input
                        key='search'
                        type='search'
                        className="form-control"
                        placeholder='búsqueda'
                        name='search'
                        value={search}
                        onChange={onInputChange}
                        autoComplete='false'
                    />
                </form>
            </div>
            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {(aname) && (<p className='nombreuser' aria-label='nombreuser'>{aname}</p>)}
                    <button className='btn btn-danger' onClick={() => {
                        onLogout();
                        navigate('/',{replace:true})
                    }}>Logout</button>
                </ul>
            </div>
        
        </nav>
    )
}