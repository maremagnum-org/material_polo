import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from './AuthProvider';
import { ChatContext } from './ChatProvider';
import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { authState, login } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    const {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    } = useSocket('http://localhost:5000');
    
    // Si el usuario se loguea, se conecta al socket
    useEffect(() => {
        if (authState.logged) {
            console.log(authState.logged)
            conectarSocket();
        }
    }, [authState.logged, conectarSocket])
    
    useEffect(() => {
        if (!authState.logged) {
            desconectarSocket();
        }
    }, [authState.logged, desconectarSocket])

    // Escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('list-users', users => {
            dispatch({
                type: types.LISTAR_USUARIOS,
                payload: users
            })
        })
    }, [socket])



    return (
        <SocketContext.Provider value={{
            socket,
            online,
        }}>
            {children}
        </SocketContext.Provider>
    )
}