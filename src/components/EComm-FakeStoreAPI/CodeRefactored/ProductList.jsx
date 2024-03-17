
function ProductList(props) {
    const { productList } = props;
    return (
        <>
            {productList == null ? <h3> Loading...</h3> :
               productList.length > 0 && productList?.map((product) => {
                    return (<div key={product.id} className = "product">
                        <img src = {product.image} alt = ""
                            className = 'product_image' />
                        <div className = "product_meta">
                            <p className = "product_title">{product.title}</p>
                            <p className = 'Price'>$ {product.price}</p>
                        </div>
                    </div>
                    )
                })}
        </>
    )
}

export default ProductList