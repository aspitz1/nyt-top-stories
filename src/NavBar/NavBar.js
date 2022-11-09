import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const active = {
    background: "#7b7b7b",
  };

  return (
    <nav>
      <NavLink style={({ isActive }) => (isActive ? active : undefined)} to="/">
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/us"
      >
        US
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/world"
      >
        World
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/technology"
      >
        Technology
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/arts"
      >
        Arts
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/books"
      >
        Books
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/food"
      >
        Food
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : undefined)}
        to="/health"
      >
        Health
      </NavLink>
    </nav>
  );
};

export default NavBar;
