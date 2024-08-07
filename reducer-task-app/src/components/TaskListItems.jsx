import { useNavigate } from "react-router-dom"

export const TaskListItems = ({ task, eliminarTarea }) => {

    const navigate = useNavigate()

    return (
        <>
            
                <tr key={task.id}>
                    <td> {task.id} </td>
                    <td> {task.desc} </td>
                    <td> {(task.done) ? 'Completada' : 'Completar'} </td>
                    <td>
                        <button
                            className='btn btn-sm btn-warning'
                            onClick={() => navigate('/task/edit/' + task.id)}
                        >
                            Editar
                        </button>

                        <button
                            className='btn btn-sm btn-danger'
                            onClick={() => eliminarTarea(task.id)}
                        >
                            Eliminar
                        </button>

                    </td>
                </tr>
        </>
    )
}
