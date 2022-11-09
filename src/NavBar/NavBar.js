import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/us">US</NavLink>
      <NavLink to="/world">World</NavLink>
      <NavLink to="/technology">Technology</NavLink>
      <NavLink to="/arts">Arts</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/food">Food</NavLink>
      <NavLink to="/health">Health</NavLink>
    </nav>
  );
};

export default NavBar;
