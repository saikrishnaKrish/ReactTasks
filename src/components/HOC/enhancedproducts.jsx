import React, { useState, useEffect } from 'react';
import ApiCallHoc from './ApiCallHoc';
import ProductCard from './ProductCard';

const ProductsData = (props) => {
  const { data: initialProducts, fetchUpdatedUrl } = props;
  const [products, setProducts] = useState(initialProducts);
  const [newUrl, setNewUrl] = useState(''); // State to store the new URL

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const handleUrlChange = (e) => {
    setNewUrl(e.target.value);
  };

  const updateUrl = () => {
    if (newUrl.trim() !== '') {
      fetchUpdatedUrl(newUrl);
    }
  };

  return (
    <div>
      {/* Input for updating the URL */}
      <div>
        <input
          type="text"
          placeholder="Enter new URL"
          value={newUrl}
          onChange={handleUrlChange}
        />
        <button onClick={updateUrl}>Update URL</button>
      </div>

      {/* Your loading/error messages can be added here */}
      {products.length > 0 && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Wrap ProductsData with ApiCallHoc to enhance it
const EnhancedProductsData = ApiCallHoc(ProductsData, 'https://fakestoreapi.com/products');

export default EnhancedProductsData;
