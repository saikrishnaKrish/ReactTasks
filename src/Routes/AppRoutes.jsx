import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import TasksComponent from "../components/CRUD TASKS";
import PageNotFound from "../components/PageNotFound";
import HomeComponent from "../components/EComm-FakeStoreAPI/CodeRefactored/Home";
import TodoApplication from "../components/CRUD TASKS/TodoApplication";
import NavBar from "./NavBar";
import EnhancedProductsData from "../components/HOC/Products";
import CounterComponent from "../components/ContextApi/CounterComponent";
import { CounterProvider } from "../components/ContextApi/CounterContex/CounterProvider";
import TodoListComponent from "../components/ToDoList/TodoListComponent";
import RefactoredRouter from "../components/EComm-FakeStoreAPI/CodeRefactored/RefactoredRouter";
import ThemeProvider from "../components/EComm-FakeStoreAPI/CodeRefactored/contexts/useThemeContext";
import ProductDetailsComponent from "../components/EComm-FakeStoreAPI/CodeRefactored/components/ProductDetailsComponent";
import User from "../components/EComm-FakeStoreAPI/CodeRefactored/pages/User";
import Cart from "../components/EComm-FakeStoreAPI/CodeRefactored/pages/Cart";
import Home from '../components/Home'
import ReduxWithThunkExample from "../components/Statemanagement/Redux";
import ToolkitExample from "../components/Statemanagement/ReduxToolkit";
 
// import ProductDetailsComponent from "./components/ProductDetailsComponent";
// import ThemeProvider from "./contexts/useThemeContext";

const AppRoutes = () => {


  function About() {
    return <h2>About Page</h2>;
  }

  function Listing() {
    return <h3>I am Listing Page</h3>;
  }

  const PageNotFound=()=>{
    return <p>Page not fount </p>
  }

  return (
    <Router>
      <div className="app-container">
      <div className="menu">
      <NavBar />
      </div>
      {/* <hr /> */}
        <div className="content">

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
        <Route path="/todoListNew" element={<TodoListComponent/>}/>
        <Route path="/ecomm" element={<RefactoredRouter/>}>
      
                <Route path="home" element={<ThemeProvider><HomeComponent /></ThemeProvider>}/>

                <Route  path="about" element={<About />}/>

                {/* <Route path = "product" element = {<Product></Product>}></Route> */}
                <Route path="Listing" element={<Listing />} />
                <Route path="cart" element={<Cart/>}/>
                <Route path="user" element={<User/>}/>
                {/* <Route path="/hooks" element={<HooksExample/>}/> */}
                <Route path="product/:id" element={<ProductDetailsComponent/>}/>
                {/* <Route path = "/product/:id" element = {<ProductDetails></ProductDetails>}> </Route> */}
                 {/* <ReduxWithThunkExample/> */}
                {/* <ToolkitExample/> */}
           
                <Route path = "*" element = {<PageNotFound></PageNotFound>}> </Route>
      

        </Route>
        <Route path="ReduxWithThunkExample" element={<ReduxWithThunkExample/>}/>
        <Route path="ToolkitExample" element={<ToolkitExample/>}/>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
        </div>

      </div>
    </Router>
  );
};

export default AppRoutes;
