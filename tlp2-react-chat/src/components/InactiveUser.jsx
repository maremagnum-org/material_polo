import useInactivityTime from "../hooks/useInactivityTime";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export const InactiveUser = () => {
    const inactive = useInactivityTime(300000); // 60 seconds
    const { logout } = useContext(AuthContext);

    if (inactive) {

        (
            () => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                logout();
                console.log('Sesión expirada, por favor vuelva a iniciar sesión')
            }
        )();

    }

    return null;
}