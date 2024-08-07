import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contexto } from './context/TaskContext.jsx'
import { AppRouter } from './routers/AppRouter.jsx'
import { Tasks } from './pages/Tasks.jsx'
import { AuthContext } from './context/AuthContext.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider value={{
      username:'alesan',
      isLogged:true
    }}>

    <Contexto>
      <AppRouter>
        <Tasks />
      </AppRouter>
    </Contexto>
    </AuthContext.Provider>
  </React.StrictMode>,
)
