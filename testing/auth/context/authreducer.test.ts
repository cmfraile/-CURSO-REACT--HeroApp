/*
Pruebas de authreducer:
    -   Debe de retornar el estado por defecto.
    -   Debe de llamar el login, autenticar, y establecer el user.
    -   Debe de hacer logout, borrar el nombre y poner el logged en false ( nombre en undefined tambien messirve ).
*/

import { AuthReducer , types } from '../../../src/auth/context/authcontext';

const main = () => {

    const user = {id:'123456',name:'Rodrigo'};
    
    test('Debe de retornar el estado por defecto',() => {
        const authState = AuthReducer({logged:false},undefined);
        expect(authState).toStrictEqual({logged:false});
    });

    test('Debe de llamar el login, autenticar, y establecer el user.',() => {
        const authState = AuthReducer({logged:false},undefined);
        const login = AuthReducer(authState,{type:types.login,payload:user});
        expect(login).toStrictEqual({logged:true,user});
    });

    test('Debe de hacer logout, borrar el nombre y poner el logged en false',() => {
        const authState = AuthReducer({logged:true,user},undefined);
        const logout = AuthReducer(authState,{type:types.logout});
        expect(logout).toStrictEqual({logged:false});
    });

    test('prueba de los tipos del reducer',() => {
        //Types del 6-09-2022:
        const actualtypes:string[] = ['login','logout'];
        const lexcheck = (ts:string):void => {
            if(!actualtypes.includes(ts)){throw new Error(`El tipo ${ts} no esta en los tipos actuales`)};
            const stringcast = `[AUTH] ${ts.substring(0,1).toUpperCase()}${ts.substring(1)}`;
            if(types[ts] !== stringcast){throw new Error(`ERROR: ${stringcast} no esta bien confeccionado`)};
        }
        Object.keys(types).map(lexcheck);
    });

}

describe('Pruebas de authreducer',main)