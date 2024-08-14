import React from "react";
import "../PersonalTraining/PersonalTraining.css";
import ptBg from "../../../assets/Images/img-clip.svg";
import { useNavigate } from "react-router-dom";

const PersonalTraining = () => {

  const navi = useNavigate();
  const toPayment = () => {
    navi("/payment")
  }

  return (
    <div>
      <div className="pt-section">
        <div className="pt-body">
          <div className="pt-header">
            <h1>Membership</h1>
            <span>1 on 1 personal training</span>
          </div>
          <div className="pt-boxes-section">
            <div className="pt-box">
              <div className="pt-contents">
                <div className="pt-content-head">
                  <h3>[1]</h3>
                  <br />
                  <h2>middle</h2>
                </div>
                <div className="pt-content-descrip">
                  <ul>
                    <li>Gym without Trainer</li>
                    <li>Unlimited Access</li>
                    <li>Access to all clubs</li>
                  </ul>
                </div>
                <div className="pt-content-bottom">
                  <h1>
                    50$/ <span>month</span>
                  </h1>
                  <button onClick={toPayment}>buy[+]</button>
                </div>
              </div>
            </div>
            <div className="pt-box">
              <div className="pt-contents">
                <div className="pt-content-head">
                  <h3>[2]</h3>
                  <br />
                  <h2>super</h2>
                </div>
                <div className="pt-content-descrip">
                  <ul>
                    <li>Gym without Trainer</li>
                    <li>Unlimited Access</li>
                    <li>Access to all clubs</li>
                    <li>Training for some classes</li>
                  </ul>
                </div>
                <div className="pt-content-bottom">
                  <h1>
                    90$/ <span>month</span>
                  </h1>
                  <button onClick={toPayment}>buy[+]</button>
                </div>
              </div>
            </div>
            <div className="pt-box">
              <div className="pt-contents">
                <div className="pt-content-head">
                  <h3>[3]</h3>
                  <br />
                  <h2>high</h2>
                </div>
                <div className="pt-content-descrip">
                  <ul>
                    <li>Gym with Trainer</li>
                    <li>Unlimited Access</li>
                    <li>Access to all clubs</li>
                    <li>Training for all classes</li>
                  </ul>
                </div>
                <div className="pt-content-bottom">
                  <h1>
                    120$/ <span>month</span>
                  </h1>
                  <button onClick={toPayment}>buy[+]</button>
                </div>
              </div>
            </div>
            <div className="pt-box">
              <div className="pt-contents">
                <div className="pt-content-head">
                  <h3>[4]</h3>
                  <br />
                  <h2>exclusive</h2>
                </div>
                <div className="pt-content-descrip">
                  <ul>
                    <li>Gym with Trainer</li>
                    <li>Unlimited Access</li>
                    <li>Access to all clubs</li>
                    <li>Training for all classes</li>
                    <li>Exclusive studios</li>
                  </ul>
                </div>
                <div className="pt-content-bottom">
                  <h1>
                    150$/ <span>month</span>
                  </h1>
                  <button onClick={toPayment}>buy[+]</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTraining;
