import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";
import { SocketContext } from "../context/SocketProvider";
import { AuthContext } from "../context/AuthProvider";

export const ChatForm = () => {
    const { chatState } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);
    const { authState } = useContext(AuthContext);

    const [newMessage, setNewMessage] = useState('');


    const sendMessage = (message) => {
        
        // Enviar el mensaje al backend por medio de un WebSocket
        const payload = {
            from: authState.user.uid,
            to: chatState.chatActivo,
            message: newMessage
        }

        socket?.emit('mensaje-personal', payload)
    };

    // Esta función maneja el envío de mensajes
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== '') {
            sendMessage(newMessage);
            setNewMessage('');
        }
    };
    return (
        <>
            <div className="card-footer">
                <form
                    onSubmit={handleSendMessage}
                >
                    <input
                        type="text"
                        className="form-control"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Escribe un mensaje..."
                        disabled={(chatState.chatActivo ? false : true)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary mt-2"
                        disabled={(chatState.chatActivo ? false : true)}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}
