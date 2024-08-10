import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navi = useNavigate();
  const handleNavigation = (path) => {
    navi(path);
  };
  return (
    <div>
      <div className="footer-section">
        <div className="footer-body">
          <div className="footer-logo">
            <img src={logo} alt="no" />
            <h1>You are in control</h1>
          </div>
          <div className="footer-nav">
            <ul>
              <li onClick={() => handleNavigation("/challenge")}>Challenges</li>
                <li onClick={() => handleNavigation("/dashboard")}>Dashboard</li>
                <li onClick={() => handleNavigation("/shopsHome")}>Shops</li>
                <li onClick={() => handleNavigation("/nutrition")}>Nutrition</li>
                <li onClick={() => handleNavigation("/profile")}>Profile</li>
            </ul>
            <h1>Stronger Every Day</h1>
          </div>
          <div className="footer-soc-link">
            <ul>
              <a href="">
                <li>Instagram</li>
              </a>
              <a href="">
                <li>Twitter</li>
              </a>
              <a href="">
                <li>Facebook</li>
              </a>
            </ul>
            <h1>Push yourself no one else will</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
