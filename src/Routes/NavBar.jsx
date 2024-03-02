import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todoList">Tasks Component</NavLink>
        </li>
        <li>
          <NavLink to="/Todoapp">Todo App</NavLink>
        </li>
        <li>
          <NavLink to="/userDetails">User Details</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
