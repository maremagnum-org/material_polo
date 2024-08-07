import { useContext } from 'react';

import { useState } from 'react';
import { type } from '../types/type';
import { TaskContext } from '../context/TaskContext';




function App() {

    
     const [taskName, setTaskName ] = useState('');

     const { state, dispatch, handleDone } = useContext(TaskContext);
    
  return (
    <div className='container pt-4'>
    <div className="row">
      <div className="col">
        <h1>TaskReducer</h1>
        <hr />
      </div>
    </div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
        <h3>Add Todo</h3>
          <input
            type="text"
            className='form-control'
            placeholder='Ingrese una tarea' 
            name="name"
            value={taskName}
            onChange={ ({ target }) => setTaskName(target.value)}
            onKeyUpCapture={ (e) => {
                if(e.code === 'Enter'){
                  // TODO: Colocar la lógica de añadir tarea en una función aparte
                  dispatch({
                    type: type.TASK_ADD,
                    payload:{
                      id: new Date().getTime(),
                      name: taskName,
                      done:false,
                    }
                  })
                }
            }}
          />
        </div>
        
        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {/* TodoItems  */}
            
            {
              (state.length === 0)
                ?
                (
                  <li className="alert alert-info text-center">No hay tareas</li>
                )
                :
                (
                  state.map((item) => (
                    <li key={item.id} className={`d-flex justify-content-between alert ${item.done ? 'alert-success' : 'alert-warning'}`}>
                      <span>{item.name}</span>
                      
                      <span>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleDone(item.id)}
                      >
                        {
                          (item.done)
                            ?
                            ("Completada ")
                            :
                            ("Completar")
                        }

                      </button>


                      <button
                        className='btn btn-sm mx-1 btn-danger'
                        onClick={() => {
                          dispatch({
                            type: type.TASK_DELETE,
                            payload: item.id
                          })
                        }}
                      >
                        Eliminar
                      </button>
                      </span>
                    </li>

                  ))
                )
            }
          </ul>

        </div>


      </div>
    </div>
  )
}

export default App
