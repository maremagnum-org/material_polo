import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const { authState } = useContext(AuthContext);

    const location = useLocation()

    useEffect(() => {
        localStorage.setItem('lastPath', location.pathname)
    }, [location])
   
    return (authState.logged)
            ? children
            : <Navigate to={'/auth/login'} />
}
