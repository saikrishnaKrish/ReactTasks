import React, { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";

import Categories from "./Categories";
import useFetchData from "./Utility/useFetchData";
import basicOps from "./Utility/basixOps";
import { usePaginationContext } from "./contexts/usePaginationContext";
import "./Home.css";
import PaginationComponent from "./components/PaginationComponent";
import SearchBarComponent from "./components/SearchBarComponent";
import { useThemeContext } from "./contexts/useThemeContext";

const Home = () => {
   const FETCH_PRODUCTS_URL="https://fakestoreapi.com/products"
   const FETCH_CATEGORIES_URL="https://fakestoreapi.com/products/categories"
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
  } = useFetchData(FETCH_PRODUCTS_URL);
  console.log(pData);
 
  
  /**************getting all the categories ********************/
  
  const {
    data: cData,
    isLoading: cLoad,
    error: cError,
  } = useFetchData(FETCH_CATEGORIES_URL, []);
  console.log(cData);

  if (pData == null) {
    return;
  }

  // page num and page size
  // const [pageSize, setPageSize] = useState(4);
  // const [pageNum, setPageNum] = useState(1);
  //  using paginationContext to maintain state across the components
  // const { setPageSize,
  //   pageSize,setPageNum} =usePaginationContext();

  const { pageSize, pageNum, setPageNum, setPageSize } = usePaginationContext();

  const object = basicOps(
    pData,
    searchTerm,
    sortDir,
    currCategory,
    pageNum,
    pageSize
  );

  //with memoization
  // const memoizedOps = useMemo(()=>basicOps(pData,searchTerm,sortDir,currCategory,pageNum,pageSize),
  // [pData,searchTerm,sortDir,currCategory,pageNum,pageSize ])

  const totalPages = object?.totalPages;
  const filteredSortedgroupByArr = object?.filteredSortedGroupByArr;

  // console.log("filteredSortedgroupByArr", filteredSortedgroupByArr);

  // const totalPages=object.totalPages


    // //optimizing searchTerm
    // const handleSearchTermChange = useCallback((newSearchTerm)=>{
    //   setSearchTerm(newSearchTerm);
    // // setPageNum(1); // Reset page number when search term change
    // },[setSearchTerm,setPageNum])

const {toggleTheme,theme} = useThemeContext();
console.log(theme)
  return (
    <>
      <header className="nav_wrapper" 
        style={theme=="dark"?
        {backgroundColor:'#cb993e'}:{backgroundColor:"#18184e"}}>
        <div className="search_sortWrapper">
          <SearchBarComponent
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setsortDir={setsortDir}
          />
          <button onClick={toggleTheme}>Toggle</button>
        </div>

          <div className="categories_wrapper">
            {cData?.length > 0 && (
              <Categories
                categories={cData}
                setCurrCategory={setCurrCategory}
              />
            )}
          </div>
        {/* )} */}
      </header>

      {/* main area */}
      <main className="product_wrapper" style={theme=="dark"?
        {backgroundColor:'#f2f2f2'}:{backgroundColor:"#f2dea8"}}>
 
          <>
            {/* <p>Data fetched successfully!</p> */}
            {/* products will be there */}
            <>
              {/* Only render when pData and cData are available */}
              {pData.length > 0 && cData.length > 0  && (
                <ProductList productList={filteredSortedgroupByArr} />
              )}
            </>
          </>
        {/* )} */}
      </main>

      {/* pagination */}
      {totalPages && filteredSortedgroupByArr && (
        <PaginationComponent
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPages={totalPages}
        />
      )}
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

{
  /* .center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height to the viewport height */
}

// .element {
//   display: flex;
//   align-items: center;
//   width: 15rem;
//   justify-content: space-between;
//   /* Additional styling for the element */
// } */}
