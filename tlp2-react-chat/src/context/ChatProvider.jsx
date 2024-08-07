import { createContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    // Reducer para manejar estados del chat
    const [ chatState, dispatch ] = useReducer(chatReducer, {})



  return (
    <ChatContext.Provider value={{
        chatState, dispatch
    }}>
        { children }
    </ChatContext.Provider>
  )
}
