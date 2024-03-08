import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import TasksComponent from "../components/CRUD TASKS";
import PageNotFound from "../components/PageNotFound";
import Home from "../components/Home";
import TodoApplication from "../components/CRUD TASKS/TodoApplication";
import NavBar from "./NavBar";
import EnhancedProductsData from "../components/HOC/Products";
import CounterComponent from "../components/ContextApi/CounterComponent";
import { CounterProvider } from "../components/ContextApi/CounterContex/CounterProvider";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route
          path="/todoList"
          element={
            <>
              <TasksComponent />
            </>
          }
        />
        <Route path="/todoApplication" element={<TodoApplication />} />
        <Route path="/hocExample" element={<EnhancedProductsData />} />
        <Route
          path="/counterContext"
          element={
            <>
              <CounterProvider>
                <CounterComponent />
              </CounterProvider>
            </>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
