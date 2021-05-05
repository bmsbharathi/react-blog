import { Link } from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create">New Post</Link>
            <Link to="/about">About</Link>
        </div>
      );
}
 
export default Navbar;