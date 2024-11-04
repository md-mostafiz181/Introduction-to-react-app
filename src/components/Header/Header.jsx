import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h1>This is our header component</h1>

      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
