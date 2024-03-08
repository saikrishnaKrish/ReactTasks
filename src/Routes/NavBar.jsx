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
          <NavLink to="/userDetails">User Details</NavLink>
        </li>
        <li>
          <NavLink to="/todoApplication">Todo Application-Task</NavLink>
        </li>
        <li>
          <NavLink to="/hocExample">Hoc example</NavLink>
        </li>
        <li>
          <NavLink to="/counterContext">Counter Context example</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
