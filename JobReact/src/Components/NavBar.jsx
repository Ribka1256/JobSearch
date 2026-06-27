import {Link} from "react-router-dom"
import "../css/Navbar.css"
function NavBar(){

     return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">JobSearch</Link>

        </div>
        <div className="navbar-links">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/favorite" className='nav-link'>Favorite</Link>
            <Link to="/upload" className='nav-link'>Resume Upload</Link>
            <Link to="/detail" className='nav-link'>Job Details</Link>

        </div>
    </nav>
}

export default NavBar
