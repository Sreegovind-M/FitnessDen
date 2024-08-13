import React, { useEffect, useState } from "react";
import challenbg from "../../assets/Images/challenge.jpg";
import SimpleParallax from "simple-parallax-js";
import "../Challenge/Challenge.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/"
    }).then((res) => setChallenges(res.data));
    
  }, [])

  const navigate = useNavigate();

  const handleClick = (challenge) => {
    navigate("/challengeHome", { state: { challenge } });
  };

  return (
    <div>
      <div className="challenge-section">
        <div className="challenge-body">
          <div className="challenge-hero-section">
            <div className="challenge-header">
              <h1>It doesn't get easier.</h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "18%",
                  height: "7px",
                  backgroundColor: "black",
                }}
              />
              <h1>
                <span>You get better.</span>
              </h1>
              <a href="#challenges">
                <button>view all challenges</button>
              </a>
            </div>
            <div className="challenge-bg-img">
              <SimpleParallax orientation="down">
                <img src={challenbg} alt="no" />
              </SimpleParallax>
            </div>
          </div>
          <div className="challenges-box-section" id="challenges">
            <div className="challenges-box-body">
              <div className="challenges-box-header">
                <h1>Challenge Your Limits</h1>
                <span>
                  Engage in challenges that push you to achieve new fitness
                  milestones.
                </span>
              </div>
              <div className="challenges-boxes-container">
                {challenges.map((challenge, index) => (
                  <div className="challenge-card" key={index}>
                    <div className="challenge-card-content">
                      <img src={challenge.image} alt={challenge.title} />
                      <h2>{challenge.title}</h2>
                      <p>{challenge.description}</p>
                      <button onClick={() => handleClick(challenge)}>
                        {challenge.button}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
