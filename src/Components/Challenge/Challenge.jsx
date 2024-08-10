import React from "react";
import challenbg from "../../assets/Images/challenge.jpg";
import abs from "../../assets/Images/abs.webp";
import athletic from "../../assets/Images/athletic.jpg";
import yoga from "../../assets/Images/yoga.webp";
import running from "../../assets/Images/running.webp";
import strength from "../../assets/Images/strength.jpeg";
import cardio from "../../assets/Images/cardio.webp";
import hiit from "../../assets/Images/hiit.webp";
import pilates from "../../assets/Images/pilates.jpeg";
import toning from "../../assets/Images/toning.webp";
import balance from "../../assets/Images/balance.webp";
import SimpleParallax from "simple-parallax-js";
import "../Challenge/Challenge.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Challenge = () => {
  const challenges = [
    {
      title: "30-Day Abs Challenge",
      img: abs,
      descrip: "Strengthen your core with our intensive 30-day abs challenge.",
      button: "Go to Challenge",
    },
    {
      title: "Athletic Challenge",
      img: athletic,
      descrip:
        "Improve your overall athletic performance with this dynamic challenge.",
      button: "Go to Challenge",
    },
    {
      title: "5K Running Challenge",
      img: running,
      descrip: "Train to complete a 5K run with this progressive challenge.",
      button: "Go to Challenge",
    },
    {
      title: "HIIT Fat Burn Challenge",
      img: hiit,
      descrip: "Burn fat fast with high-intensity interval training workouts.",
      button: "Go to Challenge",
    },
    {
      title: "Cardio Endurance Challenge",
      img: cardio,
      descrip:
        "Boost your cardiovascular fitness with our endurance challenge.",
      button: "Go to Challenge",
    },
    {
      title: "Strength Building Challenge",
      img: strength,
      descrip: "Increase your muscle mass and strength with targeted workouts.",
      button: "Go to Challenge",
    },
    {
      title: "Yoga Flexibility Challenge",
      img: yoga,
      descrip:
        "Enhance your flexibility and mindfulness with our yoga challenge.",
      button: "Go to Challenge",
    },
    {
      title: "Mind and Body Balance Challenge",
      img: balance,
      descrip: "Achieve a harmonious balance between mind and body.",
      button: "Go to Challenge",
    },
    {
      title: "Pilates Core Challenge",
      img: pilates,
      descrip:
        "Strengthen your core and improve posture with Pilates exercises.",
      button: "Go to Challenge",
    },
    {
      title: "Full Body Toning Challenge",
      img: toning,
      descrip:
        "Tone your entire body with this comprehensive workout challenge.",
      button: "Go to Challenge",
    },
  ];

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
                      <img src={challenge.img} alt={challenge.title} />
                      <h2>{challenge.title}</h2>
                      <p>{challenge.descrip}</p>
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
