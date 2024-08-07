import { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";
import { AuthContext } from "../context/AuthProvider";
import { types } from "../types/types";


export const ChatSideBar = () => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { authState } = useContext(AuthContext);

  return (
    <>
    <div className="col-md-4 mb-2">
          <div className="card">
            <div className="card-header">
              Usuarios Conectados
            </div>
            <ul className="list-group list-group-flush">
              {
                chatState.usuarios
                .filter(user => user.uid !== authState.user.uid)
                .map((user) => (
                  <li key={user.uid}
                    className="list-group-item"
                    style={{cursor: 'pointer'}}
                    onClick={() => dispatch({
                        type: types.CHAT_ACTIVO,
                        payload: user.uid
                    })}
                  >
                    <span
                      className={`badge text-bg-${user.online ? 'success' : 'danger'}`}
                    > &nbsp;
                    </span>
                    &nbsp; {user.username} &nbsp; { chatState.chatActivo === user.uid ? '(Activo)' : '' }
                  </li>
                ))}
            </ul>
          </div>
        </div>
    </>
  )
}
