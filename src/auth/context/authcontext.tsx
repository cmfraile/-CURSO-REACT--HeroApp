import { createContext, useReducer } from "react";
import { random , shuffle } from "underscore";

enum types {
    login = '[AUTH] Login',
    logout = '[AUTH] Logout'
}

interface user {id:string,name:string}
interface state {logged:boolean,user?:user};
interface action {type:string,payload?:user}
export const AuthReducer = (state:state,action:action) => {
    if(!action){return state};
    const { type , payload } = action ; const { login , logout } = types;
    switch(type){
        case login  : return {logged:true,user:payload};
        case logout : return {logged:false};
    }
    return state;
}

export const AuthContext = createContext<any>({});
export const AuthProvider = ({children}:any) => {
    const [ StateAuth , DispatchAuth ] = useReducer(AuthReducer,{logged:false});
    const onLogin = () => {
        DispatchAuth(
            {
                type:types.login,
                payload:{
                id:`${random(0,9)}${random(0,9)}${random(0,9)}`,
                name: shuffle(['Carlos','Dani','Antonio','Juan','Paco']).pop() || ""
                }
            }
        )
    }
    const onLogout = () => { DispatchAuth( {type:types.logout} ) };
    return(<AuthContext.Provider value={{aname:StateAuth.user?.name,onLogin,onLogout}}>{children}</AuthContext.Provider>)
}