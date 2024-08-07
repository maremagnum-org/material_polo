import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./AuthProvider";
import { ChatContext } from "./ChatProvider";
import { types } from "../types/types";



export const SocketContext = createContext()



// TODO Desarrollar el Provider

export const SocketProvider = ({ children }) => {

    // Obtener información del Contexto de autenticación del usaurio
    const { authState } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext)
    // Va a exponer alguna fuente de información o funciones
    const {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    } = useSocket('http://localhost:5000');

    // Efectos secundarios para cuando se conecta o desconecta el socket
    useEffect(() => {
     
        if(authState.logged){
            conectarSocket()
        }
    }, [authState.logged, conectarSocket])

    useEffect(() => {
     
        if(!authState.logged){
            desconectarSocket()
        }
    }, [authState.logged, desconectarSocket])


    useEffect(() => {
        socket?.on('list-users', listaUsuarios => {
            // TODO: Cargar la lista de usuario
            dispatch({
                type: types.LISTAR_USUARIOS,
                payload: listaUsuarios
            })
        })
    }, [socket])


    return (
        <SocketContext.Provider value={{
            socket, online
        }}>
            {children}
        </SocketContext.Provider>
    )
}
