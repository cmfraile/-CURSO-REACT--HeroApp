import { fireEvent, render , screen } from "@testing-library/react";
import { MemoryRouter , useNavigate } from 'react-router-dom';
import React from "react" ;

import * as APF from '../../../../src/auth/context/authcontext';
import { Navbar } from "../../../../src/ui/components/navbar";

//1 - El Navbar debe de mostrar el nombre de usuario
//2 - y el logout | debe de hacer sus dos funciones:


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



const main = () => {

    const cvalue = {aname:'Torto',onLogout:jest.fn()}
    beforeEach(() => jest.clearAllMocks());
    
    test('El Navbar debe de mostrar el nombre de usuario',() => {
        render(
        <APF.AuthContext.Provider value={cvalue} >
            <MemoryRouter initialEntries={['/hero/marvel']} >
                <Navbar/>
            </MemoryRouter>
        </APF.AuthContext.Provider>
        );
        expect(screen.getByLabelText('nombreuser').innerHTML).toBe('Torto');
    });
    
    test('Debe de hacer el Logout',() => {
        render(
            <APF.AuthContext.Provider value={cvalue} >
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </APF.AuthContext.Provider>
        );
        const logoutbtn = screen.getByLabelText('lobtn');
        fireEvent.click(logoutbtn);
        expect(cvalue.onLogout).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/',{replace:true})
    });
}

describe('Pruebas en el <Navbar>',main);