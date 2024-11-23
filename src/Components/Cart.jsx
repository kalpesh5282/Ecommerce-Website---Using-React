// Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext"; // Your context file
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Getting cart items and remove function from context

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')), 0); // Total price calculation

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card"> {/* Ensure correct class for styling */}
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: <strong>₹{item.price}</strong></p>
                      </div>
                      <button 
                        className="btn btn-warning btn-sm" 
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Cart Summary</h4>
                <p className="card-text">Total Items: <strong>{cartItems.length}</strong></p>
                <p className="card-text">
                  Total Price: <strong>₹{totalPrice.toFixed(2)}</strong>
                </p>
                <button className="btn btn-success btn-block">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
