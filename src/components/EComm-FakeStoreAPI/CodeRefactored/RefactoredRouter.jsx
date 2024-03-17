
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./Home";

//Adding Category buttons
const NavBar = () => {
  return (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      <li>
        <Link to="/listing">Listing</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );
};

const RefactoredRouter = () => {
  function About() {
    return <h2>About Page</h2>;
  }

  function Listing() {
    return <h3>I am Listing Page</h3>;
  }



  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
        {/* <Route path = "/product" element = {<Product></Product>}></Route> */}
        <Route path="/Listing" element={<Listing />}></Route>
        {/* <Route path = "/product/:id" element = {<ProductDetails></ProductDetails>}> </Route> */}
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        {/* <Route path = "*" element = {<PageNotFound></PageNotFound>}> </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RefactoredRouter;
