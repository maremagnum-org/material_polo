
import { 
    BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom';

import { Tasks } from '../pages/Tasks';
import { TaskEdit } from '../pages/TaskEdit';
import { TaskAdd } from '../pages/TaskAdd';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

        
        <Route path='/' element={ <Tasks /> } />
        <Route path='/login' element={ <Login /> } />

        <Route path='/task/edit/:id' element={ <TaskEdit /> } />
        <Route path='/task/add' element={ <TaskAdd /> } />
    
    
        </Routes>
    </BrowserRouter>
  )
}
