import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import { type } from '../types/type'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const TaskEdit = () => {


    const navigate = useNavigate()
    const { id } = useParams()

    const { state, dispatch } = useContext(TaskContext)

    const [taskToEdit, settaskToEdit] = useState({})
    const [checked, setChecked] = useState()

    useEffect(() => {

        state.find(task => {
            if (task.id == id) {
                console.log(task)
                settaskToEdit(task)
                setChecked(task.done)
            }
        })
    }, [])

    const handleInputChange = ({ target }) => {
        settaskToEdit({
            ...taskToEdit,
            [target.name]: target.value,
        })
    }


    const guardarTarea = () => {

        dispatch({
            type: type.TASK_UPDATE,
            payload: {
                ...taskToEdit,
                done:checked
            }
        })

        navigate('/')
    }

    return (
        <div>
            <h1>
                TaskEdit {id}
            </h1>

            <form

                onSubmit={guardarTarea}
            >
                <div className="mb-3">
                    <input
                        type="text"
                        value={taskToEdit.desc}
                        name='desc'
                        className='form-control'
                        onChange={handleInputChange}
                    />

                </div>

                <div className="mb-3">
                    <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                        name='done'
                        checked={checked}
                        
                    />
                    <label htmlFor="">
                        {
                            (checked)
                            ? 'Completada'
                            : 'Completar'
                        }
                    </label>

                </div>

                <button
                    type='submit'
                    className='btn btn-sm btn-success'
                >
                    Guardar
                </button>
            </form>


        </div>
    )
}
