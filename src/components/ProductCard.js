import React from 'react';
import '../Styles/ProductCard.css'; // Import your CSS file for styling

const ProductCard = ({ product }) => {
  //const { name, price, image } = product;

  const addToCart = () => {
    // Add logic to add product to cart
    //console.log(`Added ${name} to cart`);
  };

  return (
    <div className="product-card">
      <img src="images/download.jpeg" alt="" className="product-image" />
      <div className="product-details">
        <h3 className="product-name">Name of product</h3>
        <p className="product-price">$200</p>
        <p className="product-price">$200</p>
      </div>
      <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
