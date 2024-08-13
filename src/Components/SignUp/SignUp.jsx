import React, { useState } from "react";
import axios from "axios"; 
import "./SignUp.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navi = useNavigate();

  const toLogin = () => {
    navi("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const minLength = 8;

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    }
    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      return "Password must contain upper, lower case letters and a number";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let emailError = "";
    let passwordError = validatePassword(password);
    let confirmPasswordError = "";
  
    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Email address is invalid";
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError = "Passwords do not match";
    }
  
    if (emailError || passwordError || confirmPasswordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      setErrors({ email: "", password: "", confirmPassword: "" });
      try {
        const response = await axios.post("http://localhost:3001/login", {
          email: email,
          password: password,
        });
        
        if (response.status === 201) {
          console.log("Signup successful");
          navi("/login");
        } else {
          console.error("Signup failed with status code:", response.status);
        }
      } catch (error) {
        console.error("Signup failed", error.response ? error.response.data : error.message);
      }
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-container-inner">
          <div className="signup-top-header">
            <span>Don't have an account?</span>
            <header>Sign Up</header>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-input-field">
              <input
                type="email"
                className="signup-input"
                placeholder="Username (Email)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="signup-icon" />
              {errors.email && (
                <span className="signup-error">{errors.email}</span>
              )}
            </div>
            <div className="signup-input-field">
              <input
                type={showPassword ? "text" : "password"}
                className="signup-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="signup-icon" />
              <button
                type="button"
                className="signup-toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <span className="signup-error">{errors.password}</span>
              )}
              <div className="password-strength">
                {password && (
                  <span
                    className={`strength-indicator ${
                      validatePassword(password) ? "weak" : "strong"
                    }`}
                  >
                    {validatePassword(password) ? "Weak" : "Strong"}
                  </span>
                )}
              </div>
            </div>
            <div className="signup-input-field">
              <input
                type={showPassword ? "text" : "password"}
                className="signup-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <FaLock className="signup-icon" />
              {errors.confirmPassword && (
                <span className="signup-error">{errors.confirmPassword}</span>
              )}
            </div>
            <div className="signup-input-field">
              <input type="submit" className="signup-submit" value="Sign Up" />
            </div>
            <div className="signup-bottom">
              <div className="signup-left">
                <label>
                  <a onClick={toLogin}>Already have an account? Log In</a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
