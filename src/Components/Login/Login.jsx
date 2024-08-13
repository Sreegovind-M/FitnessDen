import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navi = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = axios.get("http://localhost:3001/login");
      const signData = (await response).data;

      const checkValidation = signData.find(
        (checkValidation) =>
          checkValidation.email === email &&
          checkValidation.password === password
      );

      if (checkValidation) {
        alert("signed in");
        navi("/profile");
      } else {
        alert("failed login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toSign = () => {
    navi("/signup");
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="container">
          <div className="top-header">
            <span>Don't have an account?</span>
            <header>Login</header>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="email"
                className="input"
                placeholder="Username (Email)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="icon" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-field">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="input-field">
              <input type="submit" className="submit" value="Login" />
            </div>
            <div className="bottom">
              <div className="left">
                <a onClick={toSign}>Sign Up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
