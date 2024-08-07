import { AuthContext } from "../context/AuthProvider";
import { fetchWithOutAuth } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../hooks/useForm"

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const { values, handleInputChange, reset } = useForm({
    email: '',
    username: '',
    password: '123456',
    passwordConfirm: '123456',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const resp = await fetchWithOutAuth('api/auth/signup', 'POST', values);
    if(resp.ok){      
      
      reset();      
      // Se obtiene la última ruta visitada
      return navigate('/auth/login');
    } else {
      alert('Algo salió mal')
      console.log(resp)
    }

  }

  const { username, password } = values;

  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1>Crear Cuenta</h1>
          <form
            onSubmit={handleSubmit}
            action="">
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese usuario'
              onChange={handleInputChange}
              value={username}
              name="username"
            />
            
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese email'
              onChange={handleInputChange}
              value={email}
              name="email"
            />

            <input
              type="password"
              className='form-control mb-3'
              placeholder='Ingrese contraseña'
              onChange={handleInputChange}
              value={password}
              name="password"
            />
            
            <input
              type="password"
              className='form-control mb-3'
              placeholder='Confirmar contraseña'
              onChange={handleInputChange}
              value={passwordConfirm}
              name="passwordConfirm"
            />

            <button 
              type="submit" 
              className='btn btn-primary'>
                Registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
