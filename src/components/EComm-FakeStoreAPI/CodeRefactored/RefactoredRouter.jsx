
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Cart from "./pages/Cart";
import User from "./pages/User";
import PaginationProvider from "./contexts/usePaginationContext";
import { NavBar } from "./NavBar/NavBar";
 
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import ThemeProvider from "./contexts/useThemeContext";
import { ErrorBoundary } from "react-error-boundary";




const RefactoredRouter = () => {
  function fallbackRender({ error }) {
 
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }
  
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
    {/* <BrowserRouter> */}
    <PaginationProvider>
      <NavBar></NavBar>
      <Outlet/>
      </PaginationProvider>
    {/* </BrowserRouter> */}
    </ErrorBoundary>
  );
};

export default RefactoredRouter;
