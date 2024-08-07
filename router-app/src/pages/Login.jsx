import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/AuthContext'
import { type } from '../types/type'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();

  const { form: datos, handleInputChange, reset } = useForm({
    username: '',
    password: ''
  })

  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    }



    const resp = await fetch('http://localhost:4000/api/new-login', options);
    const data = await resp.json();

    if (!resp.ok) {
      alert(data.msg)
    } else {
      console.log(data);

      dispatch({
        type: type.LOGIN,
        payload: {
          data
        }
      })
      reset()

      // Se redirecciona al usuario a la ruta /home
      // navigate('/home')
      location.href = '/home'
      
    }
    
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h2 className='text-center'>Login</h2>
            <form
              onSubmit={handleSubmit}
              action="">
              <input
                type="text"
                className='form-control mb-3'
                name='username'
                value={datos.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className='form-control mb-3'
                name='password'
                value={datos.password}
                onChange={handleInputChange}
              />

              <button
                type='submit'
                className='btn btn-sm btn-primary'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
