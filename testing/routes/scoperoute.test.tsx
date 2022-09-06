import React from 'react';
import { render , screen } from '@testing-library/react';

import { PublicRoute , PrivateRoute } from '../../src/auth/routes/scopeRoute';
import * as APF from '../../src/auth/context/authcontext';

const main = () => {
    
    test('debe de mostrar el children si no esta autenticado',() => {
        const cvalue = {logged:false}
        render(
            <APF.AuthContext.Provider value={cvalue}>
                <PublicRoute>
                    <h1>Esto chucha</h1>
                </PublicRoute>
            </APF.AuthContext.Provider>
        )
        screen.debug()
    });


};

describe('pruebas en las rutas publicas y privadas',main);