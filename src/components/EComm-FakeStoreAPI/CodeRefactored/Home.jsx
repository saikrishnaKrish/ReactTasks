import React, { useState } from "react";
import ProductList from "./ProductList";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Categories from "./Categories";

import useFetchData from "./Utility/useFetchData";
import basicOps from "./Utility/basixOps";

// import { usePaginationContext } from './contexts/PaginationContext';

const Home = () => {
  /***single source of truth for all the products***/
  const [products, setProducts] = useState([]);
  /************ all the categories -> a product**********/
  const [categories, setCategories] = useState([]);
  /**********Action***********/
  /*********************** state ->term with which you want to filter the product list*****************************/
  const [searchTerm, setSearchTerm] = useState("");
  /**************************sort : 0: unsorted, 1: increasing order, -1: decreasing order ************************************/
  const [sortDir, setsortDir] = useState(0);
  /**************************** currcategory: category group you result **********************************/
  const [currCategory, setCurrCategory] = useState("All categories");

  /****************get all the products*********************/
  const {
    data: pData,
    isLoading: pLoad,
    error: pError,
  } = useFetchData(`https://fakestoreapi.com/products`);
  console.log(pData);

  /**************getting all the categories ********************/
  const {
    data: cData,
    isLoading: cLoad,
    error: cError,
  } = useFetchData(`https://fakestoreapi.com/products/categories`, []);
  console.log(cData);

  const object = basicOps(pData, searchTerm, sortDir, currCategory);
  const filteredSortedgroupByArr = object.filteredSortedgroupByArr;
  // const totalPages=object.totalPages

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icons_container">
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setsortDir(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={() => {
                setsortDir(-1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>



        <div className="categories_wrapper">
          <Categories categories={categories} setCurrCategory={setCurrCategory}/>
        </div>
      </header>

      {/* main area */}
      <main className="product_wrapper">
       
        {pLoad ? (
          <p>Loading...</p>
        ) : cError ? (
          <p>Error: {pError.message}</p>
        ) : (
          <div>
            {/* <p>Data fetched successfully!</p> */}
        {/* products will be there */}
        <ProductList productList = {filteredSortedgroupByArr} />
          </div>
        )}
       
      </main>
    </>
  );
};

export default Home;





/***
 * 1. Steps/ 
 *  - INtial Data 
 *  a. Searching
 *  b. Sorting
 *  c. Categorization
 *  d. Pagination
 *  e. Render the Results
 * 
 * 2. Data 
 *      1. Products
 *      2. Categories
 * 
 * 
 * **/