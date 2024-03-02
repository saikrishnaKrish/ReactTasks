import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import TasksComponent from "../components/CRUD TASKS";
import PageNotFound from "../components/PageNotFound";
import Home from "../components/Home";
import TodoApplication from "../components/CRUD TASKS/TodoApplication";
import NavBar from "./NavBar";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar/>
      <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route
          path="/todoList"
          element={
            <>
              <TasksComponent />
              <TodoApplication />
            </>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
