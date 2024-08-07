import { useReducer } from "react";
import { createContext } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { type } from "../types/type";

export const TaskContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('todoList')) || [];
}

export const Contexto = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, [], init)

    const handleDone = (id) => {
        dispatch({
            type: type.TASK_DONE,
            payload: id
        })
    }

    return (
        <TaskContext.Provider value={{
            dispatch,
            state,
            handleDone
        }}>
            {children}
        </TaskContext.Provider>
    )


}