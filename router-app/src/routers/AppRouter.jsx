import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { PrivatesRoutes } from "./PrivatesRoutes";
import { HomeRoutes } from "../routes/HomeRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/auth/*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/login" element={ <Login /> } />
                        </Routes>
                    </PublicRoutes>
                 } />
                
                
                
                {/* Rutas Privadas */}
                <Route path="/*" element={ 
                    <PrivatesRoutes>
                        <HomeRoutes />
                    </PrivatesRoutes>
                 } />
                
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}
