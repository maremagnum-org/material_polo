import { createContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";


export const ChatContext = createContext();


export const ChatProvider = ({ children }) => {

    const initialState = {
        uid: '',
        chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
        usuarios: [], // Todos los usuarios de la base de datos
        mensajes: [], // El chat seleccionado
    };

    const [ chatState, dispatch ] = useReducer(chatReducer, initialState)


    return (
        <ChatContext.Provider value={{ 
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )


};