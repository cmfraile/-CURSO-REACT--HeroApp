import React from 'react';
import { render , screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Herolist, Search } from '../../../src/heroes/pages';
import * as APF from '../../../src/auth/context/authcontext';

const main = () => {
    const cvalue = {aname:'Torto'}
    test('snapsnot',() => {
        render(
            <APF.AuthContext.Provider value={cvalue} >
                <MemoryRouter>
                    <Herolist publisher='DC Comics'/>
                </MemoryRouter>
            </APF.AuthContext.Provider>
        );
        screen.debug()
    })
};

describe('pruebas del herolist',main)