import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatProvider";
import { AuthContext } from "../context/AuthProvider";
import { ChatForm } from "./ChatForm";
import { types } from "../types/types";
import { SocketContext } from "../context/SocketProvider";

export const ChatListMessage = () => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { authState } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);


    // Esta función podría ser modificada para enviar el mensaje a tu backend o WebSocket
    useEffect(() => {
        fetch('http://localhost:5000/api/mensaje')
        .then( resp => resp.json())
        .then( data => {
            dispatch({
                type: types.CARGAR_MENSAJES,
                payload: data.mensajes
            })
        })
    }, [])


    useEffect(() => {
        socket?.on('mensaje-personal', mensaje => {
            dispatch({
                type: types.NUEVO_MENSAJE,
                payload: mensaje
            })
        })
    }, [socket])

    return (
        <>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h5>
                        { chatState.chatActivo && chatState.usuarios.find(user => user.uid === chatState.chatActivo).username}
                        </h5>
                    </div>
                    <div
                        className="card-body chat-messages"
                        style={{ height: '300px', overflowY: 'auto' }}
                    >
                        {
                            (!chatState.chatActivo)
                                ? (
                                    <div className='mb-2 alert alert-info text-center'>
                                        Seleccione una conversación
                                    </div>
                                )
                                : (
                                    chatState.mensajes
                                    .filter( msg => 
                                            msg.from === authState.user.uid && 
                                            msg.to === chatState.chatActivo ||
                                            msg.from === chatState.chatActivo &&
                                            msg.to === authState.uid)
                                    .map(({ from, to, message }, index) => (
                                            (from === authState.user.uid)
                                            ? (
                                            <div key={index} 
                                                className="mb-2 alert alert-success">
                                                { message }
                                            </div>
                                            )
                                            : (
                                            <div key={index} className="mb-2 alert alert-secondary">
                                                   { message } 
                                            </div>
                                            )
                                    ))
                                )
                        }
                    </div>
                    <ChatForm />
                </div>
            </div>
        </>
    )
}
