import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">useContext</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className={({isActive})=>{
                            return `nav-link${isActive ? ' active': ''}`;
                        }}
                        to="/"
                        end
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({isActive})=>{
                            return `nav-link${isActive ? ' active': ''}`;
                        }}
                        to='/about' 
                    >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({isActive})=>{
                            return `nav-link${isActive ? ' active': ''}`;
                        }}
                        to='/login' 
                    >Login</NavLink>
                </li>
            </ul>
        </div>
    </div>
    </nav>

  )
}
