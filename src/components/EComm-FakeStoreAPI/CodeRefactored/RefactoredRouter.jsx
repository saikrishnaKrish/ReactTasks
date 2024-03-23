
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Cart from "./pages/Cart";
import User from "./pages/User";
import PaginationProvider from "./contexts/usePaginationContext";
import { NavBar } from "./NavBar/NavBar";
 
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import ThemeProvider from "./contexts/useThemeContext";




const RefactoredRouter = () => {

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
