import { createContext, useReducer } from "react";

export enum types {
    login = '[AUTH] Login',
    logout = '[AUTH] Logout'
}

interface state {logged:boolean,name?:string};
interface action {type:string,payload:{name:string}}
export const AuthReducer = (state:state,action:action) => {
    if(!action){return state};
    const { type , payload } = action ; const { login , logout } = types;
    switch(type){
        case login  : ({...state,logged:true,name:payload.name}) ;break;
        case logout : ({logged:false}) ;break;
    }
    return state;
}

export const AuthContext = createContext<any>({});
export const AuthProvider = ({children}:any) => {
    const [ sauth , dauth ] = useReducer(AuthReducer,{logged:false})
    return(<AuthContext.Provider value={{sauth,dauth}}>{children}</AuthContext.Provider>)
}