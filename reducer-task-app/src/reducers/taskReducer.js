import { type } from "../types/type";


export const taskReducer = (state, action) => {

    switch(action.type){

        case type.TASK_ADD:
            return [...state, action.payload];

        case type.TASK_DELETE:
            return state.filter( task => task.id !== action.payload);

        case type.TASK_DONE:
            return state.map((item) => {
                if (item.id === action.payload) {
                  return {
                    ...item,
                    done: !item.done
                  }
                } else {
                  return item;
                }})
        case type.TASK_UPDATE:
                return state.map(task => {

                  if(task.id == action.payload.id){
                    task = {
                      ...task,
                      ...action.payload
                    }
                    return task;
                  }

                  return task;
                })
        default:
            return state;
    }


}