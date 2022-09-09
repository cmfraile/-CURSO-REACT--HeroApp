import React from 'react';
import { render , screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Herolist, Search } from '../../../src/heroes/pages';

const main = () => {

    test('El herolist debe de buscar por publisher',() => {
        render(
            <MemoryRouter>
                <Herolist publisher='DC Comics'/>
            </MemoryRouter>
        );
    });

    test('El herolist debe de buscar por search',() => {
        render(
            <MemoryRouter>
                <Herolist search='Hawkeye'/>
            </MemoryRouter>
        );
    });

};

describe('pruebas del herolist',main)