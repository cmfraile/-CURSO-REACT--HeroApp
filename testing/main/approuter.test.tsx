import React from 'react';
import { MemoryRouter , Routes , Route } from 'react-router-dom';
import { render , screen } from '@testing-library/react';

import * as APF from '../../src/auth/context/authcontext';
import { AppRouter } from '../../src/approuter';

const main = () => {

    test('Debe de mostrar el Login si no esta autenticado',() => {
        const cvalue = { aname:undefined };
        render(
        <APF.AuthContext.Provider value={cvalue}>
            <MemoryRouter initialEntries={['']} >
                <AppRouter/>
            </MemoryRouter>
        </APF.AuthContext.Provider>
        );
        expect(screen.getAllByRole('button',{name:'Login'})).toBeTruthy();
    });

    test('Debe de mostrar el componente de Marvel si esta autenticado',() => {
        const cvalue = { aname:'Torto' };
        render(
        <APF.AuthContext.Provider value={cvalue}>
            <MemoryRouter initialEntries={['']} >
                <AppRouter/>
            </MemoryRouter>
        </APF.AuthContext.Provider>
        );
        expect(screen.getByLabelText('nombreuser')).toBeTruthy();
    });

    
}

describe('Pruebas en el <AppRouter>',main)