
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Cart from "./pages/Cart";
import User from "./pages/User";
import PaginationProvider from "./contexts/usePaginationContext";
import { NavBar } from "./NavBar/NavBar";
 
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import ThemeProvider from "./contexts/useThemeContext";


//Adding Category buttons
// const NavBar = () => {
//   return (
//     <>
//       <li>
//         <Link to="/home">Home</Link>
//       </li>

//       <li>
//         <Link to="/listing">Listing</Link>
//       </li>

//       <li>
//         <Link to="/about">About</Link>
//       </li>
//     </>
//   );
// };

const RefactoredRouter = () => {


//   const navigate = useNavigate();
// console.log("pathname",navigate)
  // // navigate to sibling route path
  // <Link to={`${pathname}/../${RELATED_ID}`}>
  //   Go to Nested Route {RELATED_ID}
  // </Link>
  return (
    // <BrowserRouter>
    <PaginationProvider>
      <NavBar></NavBar>
      <Outlet/>
      </PaginationProvider>
    // </BrowserRouter>
  );
};

export default RefactoredRouter;
