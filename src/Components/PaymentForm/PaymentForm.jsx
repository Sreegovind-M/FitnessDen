import React from "react";
import "./PaymentForm.css"; 
import paypal from "../../assets/Images/paypal.jpg";
import discover from "../../assets/Images/discover.jpg";
import visa from "../../assets/Images/visa.jpg";
import mastercard from "../../assets/Images/mastercard.jpg";
import { useNavigate } from "react-router-dom";




const PaymentForm = () => {
    const navi = useNavigate();
    const handleClick = () => {
        alert("Payment Successful");
        navi("/shopsHome");
    }
  return (
    <div className="payment-container">
      <form className="payment-form">
        <div className="form-section billing-address">
          <h2>Billing Address</h2>
          <label>Full Name:</label>
          <input type="text" name="fullname" placeholder="Enter your Name" />

          <label>Email:</label>
          <input type="email" name="email" placeholder="hello@example.com" />

          <label>Address:</label>
          <input type="text" name="address" placeholder="Type your Address" />

          <label>City:</label>
          <input type="text" name="city" placeholder="" />

          <div className="payment-payment-row">
            <div className="payment-payment-column">
              <label>State:</label>
              <input type="text" name="state" placeholder="" />
            </div>
            <div className="payment-payment-column">
              <label>Zip Code:</label>
              <input type="text" name="zipcode" placeholder="123 456" />
            </div>
          </div>
        </div>

        <div className="form-section payment-details">
          <h2>Payment</h2>
          <label>Cards Accepted:</label>
          <div className="payment-card-icons">
            <img src={paypal} alt="PayPal" />
            <img src={mastercard} alt="MasterCard" />
            <img src={visa} alt="Visa" />
            <img src={discover} alt="Discover" />
          </div>

          <label>Name on Card:</label>
          <input type="text" name="cardname" placeholder="Enter your name as on card" />

          <label>Credit Card Number:</label>
          <input
            type="number"
            name="cardnumber"
            placeholder="1111 2222 3333 4444"
          />

          <label>Exp. Month:</label>
          <input type="text" name="expmonth" placeholder="August" />

          <div className="payment-row">
            <div className="payment-column">
              <label>Exp. Year:</label>
              <input type="text" name="expyear" placeholder="2025" />
            </div>
            <div className="payment-column">
              <label>CVV:</label>
              <input type="text" name="cvv" placeholder="123" />
            </div>
          </div>
        </div>

        <div className="payment-submit-container">
          <button type="payment-submit" className="payment-submit-button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;