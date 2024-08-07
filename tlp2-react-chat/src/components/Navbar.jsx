import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider"

export const Navbar = () => {

  const { logout, authState } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{ authState?.user.username || 'No hay usuario' }</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/home'} className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link" href="#">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={'/chat'} className="nav-link" href="#">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            onClick={() => {
              localStorage.removeItem('user');
              localStorage.removeItem('token');
              logout();
            }}
          className="nav-link" href="#">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
