import { AuthUser } from "./context/AuthContext"
import { AppRouter } from "./routers/AppRouter"

function App() {

  return (
    <AuthUser>
     <AppRouter />
    </AuthUser>
  )
}

export default App
