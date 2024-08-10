import { motion } from "framer-motion";
import React from "react";
import "../Features/Features.css";
import feat1 from "../../../assets/Images/challenge-bg.jpg";
import feat2 from "../../../assets/Images/shops.jpeg";
import feat3 from "../../../assets/Images/challenge.jpg";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navi = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    scrollToTop();
    navi(path);
  };

  return (
    <div>
      <div className="features-section">
        <div className="features-body">
          <div className="features-header">
            <h1>Features</h1>
            <span>Try out our features</span>
          </div>
          <div className="features-boxes-section">
            <div
              className="feature-box"
              onClick={() => handleNavigation("/challenge")}
            >
              <div className="feature-img-box">
                <h1>Challenge</h1>
                <img src={feat1} alt="Challenge" />
              </div>
            </div>
            <div
              className="feature-box"
              onClick={() => handleNavigation("/shopsHome")}
            >
              <div className="feature-img-box">
                <h1>Shops</h1>
                <img src={feat2} alt="Shops" />
              </div>
            </div>
            <div
              className="feature-box"
              onClick={() => handleNavigation("/dashboard")}
            >
              <div className="feature-img-box">
                <h1>Dashboard</h1>
                <img src={feat3} alt="Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
