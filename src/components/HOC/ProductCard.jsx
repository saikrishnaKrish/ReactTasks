import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    console.log("procut cartr",product)
  const { id, title, price, category, description, image } = product;
    
  return (
    <div className="product-card" key={id}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className="product-category">{category}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
