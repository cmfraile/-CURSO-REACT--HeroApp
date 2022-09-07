import React from 'react';
import { render , screen } from '@testing-library/react';
import { MemoryRouter , Routes , Route } from 'react-router-dom';

import { PublicRoute , PrivateRoute } from '../../src/auth/routes/scopeRoute';
import * as APF from '../../src/auth/context/authcontext';

const main = () => {
    
    test('Public muestra children si no hay autenticación',() => {
        const cvalue = {aname:undefined}
        render(
            <APF.AuthContext.Provider value={cvalue}>
                <PublicRoute>
                    <h1>Hijo</h1>
                </PublicRoute>
            </APF.AuthContext.Provider>
        )
        expect(screen.getByRole('heading',{name:'Hijo'})).toBeTruthy();
    });

    test('Public rebota a la ruta wildcard del render debido a que hay una auntenticación:',() => {
        const cvalue = {aname:'Torto'};
        render(
            <APF.AuthContext.Provider value={cvalue}>
                <MemoryRouter initialEntries={['']}>

                    <Routes>
                        <Route path='' element={<PublicRoute><h1>Ruta pública</h1></PublicRoute>}/>
                        <Route path='/hero/*' element={<h1>Marvel - Ruta privada</h1>} />
                    </Routes>

                </MemoryRouter>
            </APF.AuthContext.Provider>
        );
        expect(screen.getByRole('heading',{name:'Marvel - Ruta privada'})).toBeTruthy();
    });

    test('private muestra children si hay autenticación',() => {

        //Storage.propotype.setItem = jest.fn() ; Forma de "mockear" una función.
        //expect(localStorage.setItem).tohavebeencalled();

        const cvalue = {aname:'Torto'}
        render(
            <APF.AuthContext.Provider value={cvalue}>
                <PrivateRoute>
                    <h1>Hijo</h1>
                </PrivateRoute>
            </APF.AuthContext.Provider>
        )
        expect(screen.getByRole('heading',{name:'Hijo'})).toBeTruthy();
    });



};

describe('pruebas en las rutas publicas y privadas',main);