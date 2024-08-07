import { useState, useEffect, useContext } from 'react';// Asegúrate de importar los estilos de Bootstrap
import { ChatContext } from '../context/ChatProvider';


export const ChatPage = () => {

  const [newMessage, setNewMessage] = useState('');
  const { chatState } = useContext(ChatContext);


  // Esta función podría ser modificada para enviar el mensaje a tu backend o WebSocket
  const sendMessage = (message) => {
    // Aquí iría el código para enviar el mensaje
    console.log("Mensaje enviado: ", message);
  };

  // Esta función maneja el envío de mensajes
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };


  useEffect(() => {
    // Código para manejar mensajes entrantes...
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {/* Lista de Usuarios */}
        <div className="col-5">
          <ul className='list-unstyled'>
            {

              chatState.usuarios.map( user => (
                <li key={user.uid}>
                    <span className={`badge text-bg-${user.online ? 'success' : 'danger'}`}> o &nbsp;</span> &nbsp; { user.username }
                </li>
              ))

            }
          </ul>

        </div>


        {/* Lista de Mensajes */}
        <div className="col-7"></div>



      </div>
    </div>

  );
};
