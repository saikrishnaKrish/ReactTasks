import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "./Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList({ productList }) {
  
    const dispatch=useDispatch();

    const handleAddProduct=(product)=>{
        dispatch(addToCart(product))
    }
    const handleDeleteProduct=(product)=>{
        dispatch(deleteFromCart(product))
    }

    const {cartProducts} =useSelector(store=>store.cartReducer)
    return (
        <>
            {productList == null ? <h3> Loading...</h3> :
               productList?.length > 0 && productList?.map((product) => {
                    return (
                    <div key={product.id} className = "product">
                        <Link  to={`/ecomm/product/${product.id}`}>
                        <img src = {product.image} alt = ""
                            className = 'product_image' />
                        <div className = "product_meta">
                            <p className = "product_title">{product.title}</p>
                            <p className = 'Price'>$ {product.price}</p>
                        </div>
                        </Link>
                        <div className="add_To_cart_container">
                            <AddBox onClick={()=>handleAddProduct(product)}></AddBox>
                                <div className="currentCartCount">
                                <div className = "currentCartCount">{<PrintCount cartProducts = {cartProducts} id = {product.id}></PrintCount>}</div>
                                </div>
                            <IndeterminateCheckBox onClick={()=>handleDeleteProduct(product)}></IndeterminateCheckBox>
                        </div>

                    </div>
                    )
                })}
        </>
    )
}

function PrintCount({ cartProducts, id }) {
  
    let quanitity = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == id) {
            quanitity = cartProducts[i].indQuantity
        }
    }
    return (<>
        {quanitity}
    </>)

}

export default ProductList