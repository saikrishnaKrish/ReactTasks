import React from 'react';
import ApiCallHoc from './ApiCallHoc'; // Assuming ApiCallHoc file path is correct

const ProductsData = (props) => {
  // Your component logic goes here
  // Access data, isLoading, error, and fetchUpdatedUrl from props

  return (
    <div>
      {/* Render your component content here */}
      <h1>Products Data</h1>
      <p>Data: {props.data ? JSON.stringify(props.data) : 'Loading...'}</p>
      <p>Loading: {props.isLoading ? 'Yes' : 'No'}</p>
      <p>Error: {props.error ? props.error : 'None'}</p>
    </div>
  );
};

// Wrap ProductsData with ApiCallHoc to enhance it
const EnhancedProductsData = ApiCallHoc(ProductsData, 'https://fakestoreapi.com/products');

export default EnhancedProductsData;
    