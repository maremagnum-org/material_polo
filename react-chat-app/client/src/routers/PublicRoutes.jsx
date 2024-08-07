import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {

    const { authState } = useContext(AuthContext);


    return (authState.logged)
            ? <Navigate to={'/'} />
            : children 


}
