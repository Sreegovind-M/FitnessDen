import React, { useEffect } from "react";
import "./Feedback.css";
import "boxicons";

const Feedback = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".feedback-input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("feedback-focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("feedback-focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <div>
      <div className="feedback-container">
        <div className="feedback-header">
          <h1>Post Feedbacks</h1>
        </div>
        <span className="feedback-big-circle"></span>
        <div className="feedback-form">
          <div className="feedback-contact-info">
            <h3 className="feedback-title">Let's get in touch</h3>
            <p className="feedback-text">
              We’d love to hear from you! Share your thoughts and help us make
              your experience even better.
            </p>

            <div className="feedback-info">
              <div className="feedback-information">
                <i
                  className="bx bxs-map bx-flashing"
                  style={{ color: "#fb5607", marginRight: "10px" }}
                ></i>
                <p>
                  10 Crescent Park St, Parthasarathy Puram, Thiyagaraya Nagar,
                  Chennai, Tamil Nadu
                </p>
              </div>
              <div className="feedback-information">
                <i
                  className="bx bxs-envelope bx-flashing"
                  style={{ color: "#fb5607", marginRight: "10px" }}
                ></i>
                <p>Johndoe@gmail.com</p>
              </div>
              <div className="feedback-information">
                <i
                  className="bx bxs-phone bx-tada"
                  style={{ color: "#fb5607", marginRight: "10px" }}
                ></i>
                <p>+91 9108659422</p>
              </div>
            </div>

            <div className="feedback-social-media">
              <p>Connect with us :</p>
              <div className="feedback-social-icons">
                <a href="#">
                  <i
                    className="bx bxl-facebook-square"
                    style={{ color: "#1877f2" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bx bxl-twitter"
                    style={{ color: "#1DA1F2" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bx bxl-instagram"
                    style={{ color: "#E4405F" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bx bxl-linkedin"
                    style={{ color: "#0A66C2" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div className="feedback-contact-form">
            <span className="feedback-circle one"></span>
            <span className="feedback-circle two"></span>

            <form action="index.html" autoComplete="off" className="feedback-form-section">
              <h3 className="feedback-title">Contact us</h3>
              <div className="feedback-input-container">
                <input type="text" name="name" className="feedback-input" />
                <label>Username</label>
                <span>Username</span>
              </div>
              <div className="feedback-input-container">
                <input type="email" name="email" className="feedback-input" />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="feedback-input-container">
                <input type="tel" name="phone" className="feedback-input" />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="feedback-input-container feedback-textarea">
                <textarea name="message" className="feedback-input"></textarea>
                <label>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="feedback-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
