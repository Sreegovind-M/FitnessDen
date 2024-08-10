import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Email address is invalid";
    }

    if (!password) {
      passwordError = "Password is required";
    } else if (password.length < 8) {
      passwordError = "Password must be at least 8 characters long";
    } else if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      passwordError =
        "Password must contain upper, lower case letters and a number";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      // Handle login logic here
      try {
        // Example: await login(email, password);
        console.log("Login successful");
      } catch (error) {
        console.error("Login failed", error);
        // Handle error (e.g., show a message to the user)
      }
    }
    navi("/");
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="container">
          <div className="top-header">
            <span>Have an account?</span>
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
                <input type="checkbox" id="check" />
                <label htmlFor="check"> Remember Me</label>
              </div>
              <div className="right">
                <label>
                  <a href="#">Forgot password?</a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
