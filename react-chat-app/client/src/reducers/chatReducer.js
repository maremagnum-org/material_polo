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
            return {
                ...state,
                mensajes: [...state.mensajes, action.payload]
            }
        case types.CARGAR_MENSAJES:
            return {
                ...state,
                mensajes: [...state.mensajes, ...action.payload]
            }
        default:
            return state;
    }


}
