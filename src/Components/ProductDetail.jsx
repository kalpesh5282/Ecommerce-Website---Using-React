import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { CartContext } from "../Components/CartContext";
import products from "./Data"; // Importing the products data

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Use Cart context
  const navigate = useNavigate(); // To navigate to the cart page

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to handle adding the product to the cart and navigating to cart
  const handleAddToCart = () => {
    addToCart(product); // Adds the current product to the cart
    alert(`${product.name} added to cart!`); // Confirmation
    navigate("/cart"); // Navigate to the Cart component
  };

  return (
    <div className="product-detail">
      <div className="first">
        <div className="img-container">
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
          />
        </div>

        <div className="p-name">
          <h3>{product.name}</h3>
          <span>3.1</span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <hr />
          <div className="deal">Limited time deal</div>
          <div className="price">
            <span className="disc">-{product.discount}%</span>
            <span className="price">
              <sup> ₹</sup>{product.price}
            </span>
            <div className="btn-container">
              <button onClick={handleAddToCart}>Add to Cart</button> {/* Add to Cart */}
              <button>Buy Now</button>
            </div>
            <hr />
            <div className="description">
              <h5>About this item</h5>
              <li>{product.l1}</li>
              <li>{product.l2}</li>
              <li>{product.l3}</li>
            </div>
          </div>
        </div>
        <div className="adds"><img src={product.add} alt="" /></div>
      </div>
      <hr />
      <div className="last-description">
         <h4>Description:-</h4>
         <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
