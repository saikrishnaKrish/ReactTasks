import  { useEffect, useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


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

        <main className="product_wrapper">
          {filteredArr == null ? (
            <h3> Loading...</h3>
          ) : (
            filteredSortedArr?.map((product) => {
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


  export default Home