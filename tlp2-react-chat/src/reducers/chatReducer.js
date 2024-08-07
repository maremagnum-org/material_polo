import { types } from "../types/types";


export const chatReducer = (state, action) => {

    switch (action.type) {
        case types.LISTAR_USUARIOS:
            return {
                ...state,
                usuarios: [...action.payload]
            }
        case types.CHAT_ACTIVO:
            return {
                ...state,
                chatActivo: action.payload
            }
        case types.NUEVO_MENSAJE:
            if(state.chatActivo === action.payload.from || state.chatActivo === action.payload.to){
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            } else {
                return state;
            }
        case types.CARGAR_MENSAJES:
            return {
                ...state,
                mensajes: action.payload
            }
        default:
            return state;
    }


}
