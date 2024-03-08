import  { useEffect, useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


function Home2() {
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


    const [sortDir, setsortDir] = useState(0);
    
    function incComparator(product1,product2){
            if(product1.price > product2.price){
                return 1
            }
            return -1
    }

    function decComparator(product1,product2){
        if(product1.price < product2.price){
            return 1
        }
        return -1
    }

    let filteredSortedArr = filteredArr;
    if(sortDir!=0){
        if(sortDir==1){
                filteredSortedArr = filteredSortedArr.sort(incComparator)
        }else{
            filteredSortedArr =filteredSortedArr.sort(decComparator)
        }
    }



  // Adding Category buttons

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products/categories`)
            const categoriesData = await resp.json();
            setCategories(categoriesData);
        })()
    }, [])

    const [currCategory, setCurrCategory] = useState("All categories");
    
    let filteredSortedgroupByArr = filteredSortedArr;
    if (currCategory != "All categories") {
        filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product) => {
            return product.category == currCategory
        })
    }

    return (<>
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


          {/* <div className = "categories_wrapper">
          <button className = "category_option">All categories</button>
          {categories.map((category) => {
              return <button key={category.id} className = "category_option">{category}</button>
          })}
          </div> */}
        <div className = "categories_wrapper">
        
        <button className = "category_option" onClick = {() => {setCurrCategory("All categories")}}>All categories</button>
        {categories.map((category) => {
            return <button key={category.id} className = "category_option" onClick = {() => {
                    setCurrCategory(category)
                }}>{category}</ button>
        })}
        </div>


        <main className="product_wrapper">
          {filteredArr == null ? (
            <h3> Loading...</h3>
          ) : (
            filteredSortedgroupByArr?.map((product) => {
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


  export default Home2