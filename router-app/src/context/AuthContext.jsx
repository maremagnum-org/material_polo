import { createContext, useReducer, useState} from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext(null)


export const AuthUser = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, { isLogged: false })

    return (
        <AuthContext.Provider value={ { 
            dispatch,
            state 
        } }>
            { children }
        </AuthContext.Provider>
    )
}