import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav style={{display:'flex', alignItems:'center', gap:'1rem',}}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contacts">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/users">User</NavLink>
            <NavLink to = "/post">Post</NavLink>  
        </nav>
    );
};

export default Header;