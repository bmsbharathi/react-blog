import { Link } from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="title">
                <h1>Blog</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/addPost">New Post</Link>
                <Link to="/about">About</Link>
            </div>
            
        </div>
      );
}
 
export default Navbar;