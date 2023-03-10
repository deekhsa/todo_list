import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>to_do</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New List</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;