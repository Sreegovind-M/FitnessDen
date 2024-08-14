import React from "react";
import "../AllProducts/AllProducts.css";
import { useNavigate } from "react-router-dom";


const CartOverlay = ({ cartItems, onRemove, onClose }) => (
  <div className="cart-overlay">
    <div className="cart-content">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default CartOverlay;
