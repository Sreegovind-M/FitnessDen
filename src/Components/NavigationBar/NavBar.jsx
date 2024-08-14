import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Images/logo.png";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import prof from "../../assets/Images/prof-2.png";
import prof1 from "../../assets/Images/prof.png";
import menu from "../../assets/Images/menu-bar.png";
import close from "../../assets/Images/close.png";

const NavBar = () => {
  const navi = useNavigate();
  const handleNavi = () => {
    navi("/profile");
  };
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  const toHome = () => {
    navi("/");
  };
  return (
    <div className="navbar-tot">
      <div className="navigation-section">
        <div className="navigation-body">
          <div className="navigation-head">
            <img src={logo} alt="no" onClick={toHome} />
          </div>
          <div className="navigation-elements">
            <nav>
              <ul>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/challenge"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Challenges
                </NavLink>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/shopsHome"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Shops
                </NavLink>
                <NavLink
                  to="/nutrition"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Nutrition
                </NavLink>
                <NavLink
                  to="/login"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Login
                </NavLink>
              </ul>
            </nav>
          </div>

          <div className="navigation-profile">
            <li>
              <img
                src={prof}
                alt=""
                onClick={handleNavi}
                height={40}
                width={40}
              />
            </li>
          </div>
          <div className="nav-menu-bar">
            <img src={menu} alt="" height={40} width={40} onClick={openNav} />
          </div>
        </div>
        <div
          className={
            isOpen
              ? "navigation-responsive-body"
              : "navigation-responsive-body-close"
          }
        >
          <div className="navigation-profile-res">
            <img
              src={prof1}
              alt=""
              onClick={handleNavi}
              height={40}
              width={40}
            />
            <img src={close} alt="" onClick={closeNav} height={30} width={30} />
          </div>
          <div className="navigation-elements-res">
            <nav>
              <ul>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/challenge"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Challenges
                </NavLink>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/shopsHome"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Shops
                </NavLink>
                <NavLink
                  to="/nutrition"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Nutrition
                </NavLink>
                <NavLink
                  to="/login"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "black",
                  })}
                >
                  Login
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
