import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


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

const RoutingExample2 = () => {
  function About() {
    return <h2>About Page</h2>;
  }

  function Listing() {
    return <h3>I am Listing Page</h3>;
  }

  function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState(null);
    useEffect(() => {
      (async function () {
        const resp = await fetch(`https://fakestoreapi.com/products`);
        const productData = await resp.json();
        setProducts(productData);
      })();
    }, []);

    let filteredArr = products;

    if (searchTerm !== "") {
      filteredArr = filteredArr.filter((product) => {
        return product.title
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
    }

    return (
      <>
        {/* <header className="nav_wrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </header> */}

<header className = "nav_wrapper">
                <div className = "search_sortWrapper">
                    <input
                        className = 'search_input'
                        type = "text"
                        value = {searchTerm}
                        onChange = {(e) => { setSearchTerm(e.target.value) }} />
                    <div className = "icons_container">
                        <ArrowCircleUpIcon
                            style = {{ color: "white" }}
                            fontSize = "large"
                            onClick = {() => { setsortDir(1) }}
                        ></ArrowCircleUpIcon>
                        <ArrowCircleDownIcon
                            fontSize = "large"
                            style = {{ color: "white" }}
                            onClick = {() => { setsortDir(-1) }}
                        ></ArrowCircleDownIcon>
                    </div>
                </div>

</header>

        <main className="product_wrapper">
          {filteredArr == null ? (
            <h3> Loading...</h3>
          ) : (
            filteredArr?.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.image} alt="" className="product_image" />
                  <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="Price">$ {product.price}</p>
                  </div>
                </div>
              );
            })
          )}
        </main>
      </>
    );
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

export default RoutingExample2;
