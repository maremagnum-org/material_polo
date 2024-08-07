import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '../routers/PublicRoutes';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoutes } from '../routers/PrivateRoutes';
import { MainRoutes } from '../routers/MainRoutes';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const AppRouter = () => {

  const { login, logout, authState } = useContext(AuthContext);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    if(user && token){
      login({user, token})
      return;
    } else {
      logout()
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return;
    }
  }, [authState.logged]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth/*' element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            <MainRoutes />
          </PrivateRoutes>
        } />

        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
